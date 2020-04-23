module.exports = {
  url: 'https://the-internet.herokuapp.com/javascript_alerts',
  button: {
    jsAlert: { xpath: '//button[@onclick="jsAlert()"]' },
    jsConfirm: { xpath: '//button[@onclick="jsConfirm()"]' },
    jsPrompt: { xpath: '//button[@onclick="jsPrompt()"]' },
  },
  field: {
    resultMessage: { css: '#result' },
  },
};
