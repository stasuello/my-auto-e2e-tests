const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/*_test.js',
  show: process.env.HEADLESS === 'true',
  output: './output',
  helpers: {
    Playwright: {
      browser: process.env.BROWSER || 'chromium',
      url: 'https://the-internet.herokuapp.com',
      show: process.env.HEADLESS === 'false',
      restart: true,
      fullPageScreenshots: true,
      waitForTimeout: 30000,
      waitForAction: 100,
      windowSize: '1440 x 768',
      getPageTimeout: 60000,
      uniqueScreenshotNames: true,
      emulate: {
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
      },
      chromium: {
        args: ['--disable-dev-shm-usage'],
        devtools: false,
      },
    },
    MyPlaywright: {
      require: './myplaywright_helper.js',
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  rerun: {
    minSuccess: 10,
    maxReruns: 10,
  },
  name: 'my-auto-e2e-tests',
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
  },
};
