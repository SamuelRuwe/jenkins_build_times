const puppeteer = require('puppeteer');

const PAGE_URL = 'http://localhost:5432';

let errCount = 0;
const capture = async (url: string) => {
  let browser;
  try {
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.screenshot({
      path: './images/testingScreenshot.png',
      type: 'png',
      fullPage: true
    });
  } catch (err) {
    errCount++;
    if (errCount < 9) {
      setTimeout(() => capture(url), 15000);
    }
  } finally {
    await browser.close();
  }
};

capture(PAGE_URL);
