import React from "react";

let user: [string, number];

user = ["Alice", 30]; // ✅ Correct
// user = [30, "Alice"];  // ❌ Error: types must match order

function getUserInfo(): [string, number] {
  return ["Bob", 25];
}

const [name, age] = getUserInfo();

console.log(name); // Bob
console.log(age); // 25

// Tuple with rest elements
let data: [number, ...string[]];

data = [1, "a", "b", "c"]; // first is number, rest are strings

const tuples = () => {
  return <div>{data}</div>;
};

export default tuples;
