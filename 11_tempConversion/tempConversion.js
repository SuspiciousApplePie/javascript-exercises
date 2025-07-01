const convertToCelsius = function(temp) {
  const toCelsius = (temp - 32) * (5/9);
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const toFarenheit = (temp * (9/5) + 32);
  return Math.round(toFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
