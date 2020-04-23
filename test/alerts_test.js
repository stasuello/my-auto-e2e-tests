const { I } = inject();
const alertsPage = require('../pages/alertsPage');

Feature('Alerts');

Scenario('Закрытие аллерта', () => {
  I.amOnPage(alertsPage.url);
  I.acceptPopup();
  I.click(alertsPage.button.jsAlert);
  I.waitForText('You successfuly clicked an alert', 30, alertsPage.field.resultMessage);
});

Scenario('Одобрение confirma', () => {
  I.amOnPage(alertsPage.url);
  I.amAcceptingPopups();
  I.click(alertsPage.button.jsConfirm);
  I.acceptPopup();
  I.waitForText('You clicked: Ok', 30, alertsPage.field.resultMessage);
});

Scenario('Отказ confirma', () => {
  I.amOnPage(alertsPage.url);
  I.amCancellingPopups();
  I.click(alertsPage.button.jsConfirm);
  I.cancelPopup();
  I.waitForText('You clicked: Cancel', 30, alertsPage.field.resultMessage);
});

Scenario('Работа с prompt', () => {
  I.amOnPage(alertsPage.url);
  I.acceptPopup();
  I.click(alertsPage.button.jsPrompt);
});
