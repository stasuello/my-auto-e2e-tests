const { I } = inject();
const mainPage = require('../pages/mainPage');

Feature('Links');

Scenario('Переходы по ссылкам', () => {
  I.amOnPage(mainPage.url);
  I.click('File Download');
  I.waitForText('File Download', 30, mainPage.title);
  I.goBack();
  I.click('File Upload');
  I.waitForText('File Upload', 30, mainPage.title);
});
