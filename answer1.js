​

// Create a function that could take an argument which is an array of objects.
//  Each object should contain property name and age.
//   The function should return a new list which only contains the user who have higher than 18 years old

function filterAdults(users) {
  return users.filter((user) => user.age > 18);
}

// Example usage:
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 18 },
  { name: "David", age: 19 },
];

const adults = filterAdults(users);
console.log(adults);
