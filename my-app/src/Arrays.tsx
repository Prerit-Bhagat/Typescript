import React from "react";
// 1
const numbers: number[] = [1, 2, 3, 4];
// 2
const numbers1: number[] = new Array(1, 2, 3, 4);
// 3
// arrar of use krlo

const fruits: string[] = ["apple", "banana", "orange"];

// Array of Objects
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const Arrays = () => {
  fruits.push("grape"); // Adding an element
  fruits.pop(); // Removing the last element
  console.log(numbers[0]);
  console.log(fruits[0]);
  return <div>Arrays</div>;
};

export default Arrays;
