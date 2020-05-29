const { I } = inject();
const dropdownPage = require('../pages/dropdownPage');

Feature('Dropdown');

Scenario('Выбираем опцию по тексту, после выбора проверяем, что выбрано значение', () => {
  I.amOnPage(dropdownPage.url);
  I.selectOption(dropdownPage.dropdown, 'Option 1');
  I.waitForValue(dropdownPage.dropdown, '1');
});

Scenario('Выбираем опцию по значению, после выбора проверяем, что выбрана опция с текстом', () => {
  I.amOnPage(dropdownPage.url);
  I.selectOption(dropdownPage.dropdown, '2');
  I.seeTextEquals('Option 2', dropdownPage.selectedOption);
});
