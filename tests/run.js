import puppeteer from 'puppeteer';

const BASE_URL = 'http://localhost:3000';

const results = { passed: 0, failed: 0, errors: [] };

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test(name, fn) {
  try {
    await fn();
    results.passed++;
    console.log(`✅ ${name}`);
  } catch (error) {
    results.failed++;
    results.errors.push({ name, error: error.message });
    console.log(`❌ ${name}: ${error.message}`);
  }
}

async function expectText(selector, expected) {
  await page.waitForSelector(selector);
  const el = await page.$(selector);
  const text = await el.evaluate(e => e.textContent);
  if (!text || !text.includes(expected)) {
    throw new Error(`Expected "${expected}" in "${text}"`);
  }
}

async function expectVisible(selector) {
  const el = await page.$(selector);
  if (!el) throw new Error(`Element ${selector} not found`);
}

async function clickAndNavigate(selector, expectedUrl) {
  await page.click(selector);
  await page.waitForFunction(
    (url) => window.location.href.includes(url),
    {},
    expectedUrl
  );
}

let browser, page;

async function run() {
  console.log('🚀 Starting Autitude App Tests...\n');

  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  page = await browser.newPage();

  const start = Date.now();

  // Core Tests
  await test('Homepage loads', async () => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await expectVisible('.navbar');
  });

  await test('Navigation renders correctly', async () => {
    const links = await page.$$('.nav-links a');
    if (links.length < 5) throw new Error(`Expected 5+ nav links, found ${links.length}`);
  });

  await test('Footer renders', async () => {
    await expectVisible('.footer');
  });

  await test('Year is dynamic', async () => {
    const year = new Date().getFullYear().toString();
    const content = await page.content();
    if (!content.includes(year)) throw new Error(`Year ${year} not found`);
  });

  await test('Route: /sobre', async () => {
    await page.goto(`${BASE_URL}/sobre`, { waitUntil: 'networkidle0' });
    await expectText('h2', 'Sobre a Autitude');
  });

  await test('Route: /servicos', async () => {
    await page.goto(`${BASE_URL}/servicos`, { waitUntil: 'networkidle0' });
    await expectText('h2', 'Nossos Serviços');
  });

  await test('Route: /equipe', async () => {
    await page.goto(`${BASE_URL}/equipe`, { waitUntil: 'networkidle0' });
    await expectText('h2', 'Nossa Equipe');
  });

  await test('Route: /agendar', async () => {
    await page.goto(`${BASE_URL}/agendar`, { waitUntil: 'networkidle0' });
    await expectText('h2', 'Agende sua Consulta');
  });

  await test('Route: /contato', async () => {
    await page.goto(`${BASE_URL}/contato`, { waitUntil: 'networkidle0' });
    await expectText('h2', 'Fale Conosco');
  });

  await test('Route: 404 page', async () => {
    await page.goto(`${BASE_URL}/invalid-xyz`, { waitUntil: 'networkidle0' });
    await expectText('h1', '404');
  });

  await test('Navigation works', async () => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await page.click('.nav-links a[href="/sobre"]');
    await delay(500);
    const url = page.url();
    if (!url.includes('/sobre')) throw new Error('Navigation to /sobre failed');
  });

  await test('Logo links to home', async () => {
    await page.goto(`${BASE_URL}/sobre`, { waitUntil: 'networkidle0' });
    await page.click('.logo');
    await delay(500);
    const url = page.url();
    if (!url.includes('/') || url.includes('/sobre')) throw new Error('Logo link failed');
  });

  await test('Schedule form has required fields', async () => {
    await page.goto(`${BASE_URL}/agendar`, { waitUntil: 'networkidle0' });
    const fields = await page.$$('.form-input, .form-select');
    if (fields.length < 5) throw new Error(`Expected 5+ fields, found ${fields.length}`);
  });

  await test('Services has cards', async () => {
    await page.goto(`${BASE_URL}/servicos`, { waitUntil: 'networkidle0' });
    const cards = await page.$$('.service-card');
    if (cards.length < 3) throw new Error(`Expected 3+ service cards, found ${cards.length}`);
  });

  await test('Team has members', async () => {
    await page.goto(`${BASE_URL}/equipe`, { waitUntil: 'networkidle0' });
    const members = await page.$$('.team-member');
    if (members.length < 2) throw new Error(`Expected 2+ members, found ${members.length}`);
  });

  await test('All pages have navbar', async () => {
    for (const route of ['/', '/sobre', '/servicos', '/equipe', '/agendar', '/contato']) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });
      const navbar = await page.$('.navbar');
      if (!navbar) throw new Error(`Navbar missing on ${route}`);
    }
  });

  await test('All pages have footer', async () => {
    for (const route of ['/', '/sobre', '/servicos', '/equipe', '/agendar', '/contato']) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });
      const footer = await page.$('.footer');
      if (!footer) throw new Error(`Footer missing on ${route}`);
    }
  });

  await test('WhatsApp link present', async () => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    const wa = await page.$('.whatsapp-link');
    if (!wa) throw new Error('WhatsApp link not found');
  });

  await test('Page title set', async () => {
    const title = await page.title();
    if (!title.includes('Autitude')) throw new Error('Title not set');
  });

  await test('No console errors', async () => {
    let hasErrors = false;
    page.on('console', msg => {
      if (msg.type() === 'error') hasErrors = true;
    });
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await delay(500);
    await page.goto(`${BASE_URL}/sobre`, { waitUntil: 'networkidle0' });
    await delay(300);
    if (hasErrors) throw new Error('Console errors detected');
  });

  const duration = Date.now() - start;

  await browser.close();

  console.log('\n' + '='.repeat(50));
  console.log(`📊 Results: ${results.passed}/${results.passed + results.failed} passed in ${duration}ms`);
  console.log('='.repeat(50));

  if (results.failed > 0) {
    console.log('\n❌ Failed tests:');
    results.errors.forEach(e => console.log(`  - ${e.name}: ${e.error}`));
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed!');
    process.exit(0);
  }
}

run().catch(err => {
  console.error('Test runner error:', err);
  if (browser) browser.close();
  process.exit(1);
});