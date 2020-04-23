const { I } = inject();
const hoverPage = require('../pages/hoverPage');

Feature('Hover');

Scenario('Отображение информации при наведении на 1 аватар', () => {
  I.amOnPage(hoverPage.url);
  I.moveCursorTo(hoverPage.getImgElement(1));
  I.waitForText('name: user1', 30);
  I.dontSee('name: user2');
  I.dontSee('name: user3');
});

Scenario('Отображение информации при наведении на 2 аватар', () => {
  I.amOnPage(hoverPage.url);
  I.moveCursorTo(hoverPage.getImgElement(2));
  I.waitForText('name: user2', 30);
  I.dontSee('name: user1');
  I.dontSee('name: user3');
});

Scenario('Отображение информации при наведении на 3 аватар', () => {
  I.amOnPage(hoverPage.url);
  I.moveCursorTo(hoverPage.getImgElement(3));
  I.waitForText('name: user3', 30);
  I.dontSee('name: user2');
  I.dontSee('name: user1');
});
