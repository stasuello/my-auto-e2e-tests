const { I } = inject();
const checkboxesPage = require('../pages/checkboxesPage');

Feature('Checkboxes');

Scenario('Проверка функциональности чекбоксов', () => {
  I.amOnPage(checkboxesPage.url);
  I.dontSeeCheckboxIsChecked(checkboxesPage.checkbox.first);
  I.seeCheckboxIsChecked(checkboxesPage.checkbox.second);
  I.click(checkboxesPage.checkbox.first);
  I.seeCheckboxIsChecked(checkboxesPage.checkbox.first);
  I.click(checkboxesPage.checkbox.second);
  I.dontSeeCheckboxIsChecked(checkboxesPage.checkbox.second);
});
