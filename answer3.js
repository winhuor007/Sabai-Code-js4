// Given an array of user objects which include property name and age,
// use the `map` method to create a new array that contains just the names of the users

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 18 },
  { name: "David", age: 19 },
];

const userNames = users.map((user) => user.name);

console.log(userNames);
