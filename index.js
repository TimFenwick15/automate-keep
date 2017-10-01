const puppeteer = require('puppeteer');

(async () => {
  try {

    const note = 'This is a note from automate-keep'
    const {email, password} = process.env
    if (!email || !password)
      throw 'Email or password not set as environment variables'

    const browser = await puppeteer.launch()
    
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 800})
    await page.goto('https://keep.google.com');

    // email input
    //await page.focus('.aCsJod oJeWuf')
    await page.focus('.aCsJod')
    await page.type(email)

    // click next
    //await page.click('.RveJvd snByac')
    await page.click('.RveJvd')

    // wait for the pw field
    await page.waitForNavigation({waitUntil: 'networkidle'})
    //whsOnd zHQkBf
    await page.focus('.whsOnd')
    await page.type(password)
    await page.click('.RveJvd')

    //await page.waitForNavigation({waitUntil: 'networkidle'})
    await page.waitForSelector('.Q0hgme-LgbsSe')

    await page.type('c')
    await page.type(note)
    await page.screenshot({path: 'example.png'});
    await page.click('.Q0hgme-LgbsSe')
    //Q0hgme-LgbsSe Q0hgme-Bz112c-LgbsSe qrlFte VIpgJd-LgbsSe JbbQac-AHmuwe-i5vt6e

    await page.waitForNavigation({waitUntil: 'networkidle'})

    //await page.screenshot({path: 'example.png'});
    await browser.close();
  }
  catch (e) {
    console.error(`Error: ${e}`)
  }
})();
