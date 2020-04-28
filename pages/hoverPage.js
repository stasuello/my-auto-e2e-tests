module.exports = {
  url: '/hovers',
  getImgElement(number) {
    return { xpath: `(//img[@src="/img/avatar-blank.jpg"])[${number}]` };
  },
};
