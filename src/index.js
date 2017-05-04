var unuDinArray = require('unique-random-array');
var toateDatele = require('../date.json');

module.exports = {
  all: toateDatele,
  random: unuDinArray(toateDatele)
};
