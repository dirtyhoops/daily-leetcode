/**
 * @param {number} celsius
 * @return {number[]}
 */

// Solution #2
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32];
};

// Solution #1
var convertTemperature = function (celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32;

  return [kelvin, fahrenheit];
};
