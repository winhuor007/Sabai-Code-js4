// Given an array of numbers, use the `reduce` method to find the maximum number of the array
const numbers = [10, 5, 8, 20, 15, 3];

const maxNumber = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]);

console.log(maxNumber);
