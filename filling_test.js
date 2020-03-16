const { I } = inject();
const wysiwygPage = require('./pages/wysiwygPage');

Feature('Editor');

Scenario('Работа с WYSIWYG Editor', () => {
    I.amOnPage('http://the-internet.herokuapp.com');
    I.click('WYSIWYG Editor');
    I.switchTo(wysiwygPage.iFrame);
    I.click(wysiwygPage.field.textarea);
    I.pressKey(['CommandOrControl', 'A']);
    I.fillField(wysiwygPage.field.textarea, 'What are you doing,');
    I.switchTo();
    I.click(wysiwygPage.button.italic);
    I.switchTo(wysiwygPage.iFrame);
    I.click(wysiwygPage.field.textarea);
    I.fillField(wysiwygPage.field.textarea, ' mama?');
    I.saveScreenshot('editor_test.png');
});
