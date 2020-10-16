module.exports = function reverse (n) {
  let result = 0;
  let number = n < 0 ? n * (-1) : n;
  while (number >= 1) {
      result = result * 10 + number % 10;
      number = Math.floor(number / 10);
  }
  return result;
}
