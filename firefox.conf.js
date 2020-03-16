const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  show: process.env.HEADLESS === 'true',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.sjob-dev.ru/',
      show: true,
      browser: 'firefox',
      firefox: {
        args: [
          '--ignore-certificate-errors'
        ],
      }
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'my-auto-e2e-tests',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
};
