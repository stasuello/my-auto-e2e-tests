module.exports = {
  url: '/javascript_alerts',
  button: {
    jsAlert: { xpath: '//button[@onclick="jsAlert()"]' },
    jsConfirm: { xpath: '//button[@onclick="jsConfirm()"]' },
    jsPrompt: { xpath: '//button[@onclick="jsPrompt()"]' },
  },
  field: {
    resultMessage: { css: '#result' },
  },
};
