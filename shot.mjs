import puppeteer from 'puppeteer'
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'], executablePath: '/usr/bin/google-chrome' })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await page.goto('http://localhost:3010/Autitude/', { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 2500))
const logo = await page.$eval('.hero-rings-logo', el => {
  const r = el.getBoundingClientRect()
  const s = getComputedStyle(el)
  return { w: r.width, h: r.height, x: r.x, y: r.y, display: s.display, opacity: s.opacity, zIndex: s.zIndex, naturalW: el.naturalWidth, naturalH: el.naturalHeight, complete: el.complete, src: el.src }
})
const content = await page.$eval('.hero-content', el => {
  const r = el.getBoundingClientRect()
  const s = getComputedStyle(el)
  return { x: r.x, y: r.y, w: r.width, h: r.height, textAlign: s.textAlign, maxWidth: s.maxWidth, justifySelf: s.justifySelf }
})
console.log('LOGO:', JSON.stringify(logo, null, 2))
console.log('CONTENT:', JSON.stringify(content, null, 2))
await page.screenshot({ path: '/tmp/hero-final-desktop.png', fullPage: false })
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 })
await page.reload({ waitUntil: 'networkidle0' })
await new Promise(r => setTimeout(r, 2000))
await page.screenshot({ path: '/tmp/hero-final-mobile.png', fullPage: false })
await browser.close()
console.log('OK')
