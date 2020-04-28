const { I } = inject();
const windowsPage = require('../pages/windowsPage');

Feature('Windows');

Scenario('Переход по вкладкам', () => {
  I.amOnPage(windowsPage.url);
  I.click('Click Here');
  I.switchToNextTab();
  I.seeInTitle('New Window');
  I.dontSeeInTitle('The Internet');
});
