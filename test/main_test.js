const { I } = inject();
const mainPage = require('../pages/mainPage');

Feature('Links');

Scenario('Переходы по ссылкам', () => {
  I.amOnPage(mainPage.url);
  I.click('File Download');
  I.seeTextEquals('File Downloader', mainPage.title);
  I.goBack();
  I.click('File Upload');
  I.seeTextEquals('File Uploader', mainPage.title);
});

xScenario('Проверка на error', () => {
  I.amOnPage('/javascript_error');
});
