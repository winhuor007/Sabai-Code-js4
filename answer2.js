const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 10];

const uniqueNumbers = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers);
