const { Helper } = codeceptjs;
let errors;

class MyPlaywright extends Helper {
  page() {
    return this.helpers.Playwright.page;
  }

  // before/after hooks
  _before() {
    this.page().on('pageerror', (exception) => {
      errors = Error(exception);
    });
  }

  _afterStep() {
    if (errors) {
      throw new Error(errors);
    }
    errors = null;
  }

  /**
   * @protected
   */
  _after() {
  }

  async goBack() {
    await this.page().goBack();
  }
}

module.exports = MyPlaywright;
