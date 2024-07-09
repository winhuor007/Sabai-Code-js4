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
