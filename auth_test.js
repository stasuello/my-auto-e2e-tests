const { I } = inject();
const loginPage = require('./pages/loginPage');

Feature('Auth');

Scenario('Проверка валидации при незаполненном поле password', () => {
  I.amOnPage(loginPage.url);
  I.fillField(loginPage.input.username, 'tomsmith');
  I.click(loginPage.button.login);
  I.waitForText('Your password is invalid!', 30, loginPage.validationMessage);
});

Scenario('Проверка валидации при незаполненном поле username', () => {
  I.amOnPage(loginPage.url);
  I.fillField(loginPage.input.password, 'SuperSecretPassword!');
  I.click(loginPage.button.login);
  I.waitForText('Your username is invalid!', 30, loginPage.validationMessage);
});

Scenario('Проверка валидации при указании некорректного пароля', () => {
  I.amOnPage(loginPage.url);
  I.fillField(loginPage.input.username, 'tomsmith');
  I.fillField(loginPage.input.password, 'SuperSecretPassword');
  I.click(loginPage.button.login);
  I.waitForText('Your password is invalid!', 30, loginPage.validationMessage);
});

Scenario('Успешная авторизация', () => {
  I.amOnPage(loginPage.url);
  I.fillField(loginPage.input.username, 'tomsmith');
  I.fillField(loginPage.input.password, 'SuperSecretPassword!');
  I.click(loginPage.button.login);
  I.waitForText(' You logged into a secure area!', 30, loginPage.validationMessage);
});
