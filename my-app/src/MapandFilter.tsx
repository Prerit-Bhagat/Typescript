import React from "react";

//  Transform each element
// Purpose: Transforms every element in an array and returns a new array with the transformed values.

// Input: Original array

// Output: New array of the same length but with modified items.
const numbers = [1, 2, 3, 4];

// Multiply every number by 2
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

const print = numbers.map((num) => num);

console.log(print); // [1 , 2 , 3, 4]

// Select elements based on a condition
// Purpose: Filters elements by a condition and returns a new array with only elements that satisfy the condition.

// Input: Original array

// Output: New array with fewer or equal elements.

const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4, 6]

const MapandFilter = () => {
  return <div>MapandFilter</div>;
};

export default MapandFilter;
