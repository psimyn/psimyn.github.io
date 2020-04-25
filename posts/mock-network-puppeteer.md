---
title: Mock network requests with Puppeteer
date: 2019-04-19
tags:
  - javascript
  - webdev
  - puppeteer
---
This week's thing: open an instance of Chrome that gives mock data for particular URLs.

Useful to mock backend responses when you don't want to have to donate RAM to minikube when developing locally

This snippet signs into local GitLab instance, and gives a fake response to the `additional_endpoints.json` URL

```js
const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const [page] = await browser.pages();

    await page.setRequestInterception(true);
    page.on('request', (interceptedRequest) => {
      if (interceptedRequest.url().includes('additional_metrics.json') {
        interceptedRequest.respond({
          metrics: {},
        });
      } else {
        interceptedRequest.continue();
      }
    });

    await page.goto('http://localhost:3001/users/sign_in');
    await page.type('input[name="user[login]"]', 'root');
    await page.type('input[name="user[password]"]', '5iveL!fe');
    await page.click('.qa-sign-in-button');

    await page.waitForSelector('.header-user-dropdown-toggle');

    // await browser.close();
  } catch (err) {
    console.error(err);
  })
});
```

