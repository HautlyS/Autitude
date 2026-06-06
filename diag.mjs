import puppeteer from 'puppeteer'
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'], executablePath: '/usr/bin/google-chrome' })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await page.goto('http://localhost:3010/Autitude/', { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 2500))

const diag = await page.evaluate(() => {
  function info(sel) {
    const el = document.querySelector(sel)
    if (!el) return { sel, missing: true }
    const r = el.getBoundingClientRect()
    const s = getComputedStyle(el)
    return {
      sel,
      x: r.x, y: r.y, w: r.width, h: r.height,
      padding: s.padding, margin: s.margin, maxWidth: s.maxWidth,
      display: s.display, position: s.position,
      justifySelf: s.justifySelf, alignItems: s.alignItems,
      gridTemplateColumns: s.gridTemplateColumns,
    }
  }
  return {
    hero: info('.hero'),
    heroBg: info('.hero-bg'),
    container: info('.hero .container'),
    wrapper: info('.hero-wrapper'),
    content: info('.hero-content'),
    rings: info('.hero-rings'),
    body: { scrollW: document.body.scrollWidth, clientW: document.body.clientWidth },
    viewport: { w: window.innerWidth, h: window.innerHeight },
  }
})
console.log(JSON.stringify(diag, null, 2))
await page.screenshot({ path: '/tmp/hero-debug-desktop.png', fullPage: false })
await browser.close()
console.log('OK')
