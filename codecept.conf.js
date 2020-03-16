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
      chrome: {
        args: ['--ignore-certificate-errors', '--incognito'],
      },
    }
  },
  include: {
    I: './steps_file.js'
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
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
