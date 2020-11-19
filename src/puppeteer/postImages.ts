const puppeteer = require('puppeteer');

const PAGE_URL = 'http://localhost:5432';

const capture = async (url: string) => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.screenshot({
    path: './images/testingScreenshot.png',
    type: 'png',
    fullPage: true
  });
  await browser.close();
};
capture(PAGE_URL);
