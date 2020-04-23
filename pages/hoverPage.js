module.exports = {
  url: 'https://the-internet.herokuapp.com/hovers',
  getImgElement(number) {
    return { xpath: `(//img[@src="/img/avatar-blank.jpg"])[${number}]` };
  },
};
