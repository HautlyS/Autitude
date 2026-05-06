import puppeteer from 'puppeteer';

const BASE_URL = 'http://localhost:3000';

let browser;
let page;

const testResults = {
  passed: 0,
  failed: 0,
  tests: []
};

async function test(name, fn) {
  try {
    await fn();
    testResults.passed++;
    testResults.tests.push({ name, status: 'PASS' });
    console.log(`✅ ${name}`);
  } catch (error) {
    testResults.failed++;
    testResults.tests.push({ name, status: 'FAIL', error: error.message });
    console.log(`❌ ${name}: ${error.message}`);
  }
}

async function expectText(selector, expected) {
  const text = await page.textContent(selector);
  if (!text.includes(expected)) {
    throw new Error(`Expected "${expected}" but got "${text}"`);
  }
}

async function expectVisible(selector) {
  const el = await page.$(selector);
  if (!el) throw new Error(`Element ${selector} not found`);
}

async function clickAndNavigate(selector, url) {
  await page.click(selector);
  await page.waitForURL(url);
}

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
  console.log('\n' + '='.repeat(50));
  console.log(`Results: ${testResults.passed} passed, ${testResults.failed} failed`);
  console.log('='.repeat(50));
  if (testResults.failed > 0) {
    process.exit(1);
  }
});

describe('Autitude Vue App Tests', () => {
  test('Homepage loads correctly', async () => {
    await page.goto(BASE_URL);
    await page.waitForSelector('#app');
    await page.waitForSelector('.hero-title');
  });

  test('Navigation renders correctly', async () => {
    await page.goto(BASE_URL);
    await expectVisible('.navbar');
    await expectVisible('.nav-links');
  });

  test('All nav links are present', async () => {
    await page.goto(BASE_URL);
    const links = await page.$$('.nav-links a');
    if (links.length < 5) throw new Error(`Expected 5+ nav links, found ${links.length}`);
  });

  test('Menu toggle works on mobile', async () => {
    await page.setViewport({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    await expectVisible('.menu-toggle');
    await page.click('.menu-toggle');
    await page.waitForSelector('.nav-active');
  });

  test('Footer renders correctly', async () => {
    await page.goto(BASE_URL);
    await expectVisible('.footer');
    await expectText('.footer', 'Autitude');
  });

  test('Year is dynamic', async () => {
    await page.goto(BASE_URL);
    const year = new Date().getFullYear().toString();
    await expectText('.footer', year);
  });

  test('Route: / renders Home component', async () => {
    await page.goto(BASE_URL);
    await expectText('.hero-title', 'Autitude');
  });

  test('Route: /sobre renders About component', async () => {
    await page.goto(`${BASE_URL}/sobre`);
    await expectText('h2', 'Sobre a Autitude');
  });

  test('Route: /servicos renders Services component', async () => {
    await page.goto(`${BASE_URL}/servicos`);
    await expectText('h2', 'Nossos Serviços');
  });

  test('Route: /equipe renders Team component', async () => {
    await page.goto(`${BASE_URL}/equipe`);
    await expectText('h2', 'Nossa Equipe');
  });

  test('Route: /agendar renders Schedule component', async () => {
    await page.goto(`${BASE_URL}/agendar`);
    await expectText('h2', 'Agende sua Consulta');
  });

  test('Route: /contato renders Contact component', async () => {
    await page.goto(`${BASE_URL}/contato`);
    await expectText('h2', 'Fale Conosco');
  });

  test('Route: /invalid renders NotFound component', async () => {
    await page.goto(`${BASE_URL}/invalid-page-xyz`);
    await expectText('h1', '404');
    await expectText('h2', 'não encontrada');
  });

  test('Navigation between routes works', async () => {
    await page.goto(BASE_URL);
    await clickAndNavigate('.nav-links a[href="/sobre"]', '/sobre');
    await clickAndNavigate('.nav-links a[href="/servicos"]', '/servicos');
    await clickAndNavigate('.nav-links a[href="/"]', '/');
  });

  test('Logo link goes to home', async () => {
    await page.goto(`${BASE_URL}/sobre`);
    await clickAndNavigate('.logo', '/');
  });

  test('Schedule form exists and has all fields', async () => {
    await page.goto(`${BASE_URL}/agendar`);
    const inputs = await page.$$('.form-input, .form-select, .form-textarea');
    if (inputs.length < 6) throw new Error(`Expected 6+ form fields, found ${inputs.length}`);
  });

  test('Contact form exists', async () => {
    await page.goto(`${BASE_URL}/contato`);
    await expectVisible('.contact-form');
  });

  test('WhatsApp link is present in footer', async () => {
    await page.goto(BASE_URL);
    const waLink = await page.$('.whatsapp-link');
    if (!waLink) throw new Error('WhatsApp link not found');
  });

  test('Footer links work', async () => {
    await page.goto(BASE_URL);
    await clickAndNavigate('.footer-links a:first-child', '/');
    await page.goto(BASE_URL);
    await clickAndNavigate('.footer-links a:nth-child(2)', '/sobre');
  });

  test('Page title is set', async () => {
    await page.goto(BASE_URL);
    const title = await page.title();
    if (!title.includes('Autitude')) throw new Error('Title not set correctly');
  });

  test('Responsive: Navbar scrolled state', async () => {
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(100);
    const scrolled = await page.$('.nav-scrolled');
    if (!scrolled) throw new Error('Navbar should have scrolled state');
  });

  test('Services page has service cards', async () => {
    await page.goto(`${BASE_URL}/servicos`);
    const cards = await page.$$('.service-card');
    if (cards.length < 3) throw new Error(`Expected 3+ service cards, found ${cards.length}`);
  });

  test('Team page has team members', async () => {
    await page.goto(`${BASE_URL}/equipe`);
    const members = await page.$$('.team-member');
    if (members.length < 2) throw new Error(`Expected 2+ team members, found ${members.length}`);
  });

  test('No console errors on homepage', async () => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto(BASE_URL);
    await page.waitForTimeout(500);
    if (errors.length > 0) throw new Error(`Console errors: ${errors.join(', ')}`);
  });

  test('No console errors on all routes', async () => {
    const routes = ['/', '/sobre', '/servicos', '/equipe', '/agendar', '/contato'];
    for (const route of routes) {
      const errors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      await page.goto(`${BASE_URL}${route}`);
      await page.waitForTimeout(300);
      if (errors.length > 0) throw new Error(`Console errors on ${route}: ${errors.join(', ')}`);
    }
  });

  test('CTA buttons are present', async () => {
    await page.goto(BASE_URL);
    const cta = await page.$('.hero-buttons');
    if (!cta) throw new Error('CTA buttons not found on home');
  });

  test('About page has mission/vision/values', async () => {
    await page.goto(`${BASE_URL}/sobre`);
    const values = await page.$$('.value-item');
    if (values.length < 3) throw new Error(`Expected 3 value items, found ${values.length}`);
  });

  test('All pages have footer', async () => {
    const routes = ['/', '/sobre', '/servicos', '/equipe', '/agendar', '/contato'];
    for (const route of routes) {
      await page.goto(`${BASE_URL}${route}`);
      const footer = await page.$('.footer');
      if (!footer) throw new Error(`Footer missing on ${route}`);
    }
  });

  test('All pages have navbar', async () => {
    const routes = ['/', '/sobre', '/servicos', '/equipe', '/agendar', '/contato'];
    for (const route of routes) {
      await page.goto(`${BASE_URL}${route}`);
      const navbar = await page.$('.navbar');
      if (!navbar) throw new Error(`Navbar missing on ${route}`);
    }
  });
});