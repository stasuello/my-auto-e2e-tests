const { Helper } = codeceptjs;
const errors = [];

class MyPlaywright extends Helper {
  page() {
    return this.helpers.Playwright.page;
  }

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    this.page().on('pageerror', (exception) => {
      errors.push(exception);
    });
  }

  /**
   * @protected
   */
  _after() {
    if (errors.includes('Error')) throw new Error(errors);
  }

  async goBack() {
    await this.page().goBack();
  }
}

module.exports = MyPlaywright;
