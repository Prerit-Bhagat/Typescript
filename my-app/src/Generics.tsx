import React from "react";
// Generics Example
// function name(value: number | string): number | string {
//   console.log(value);
//   return value;
// }

function name<T>(value: T): T {
  if (Array.isArray(value)) {
    console.log(...value); // Spread array elements as separate args
  } else {
    console.log(value);
  }
  return value;
}

const add = <T1 extends number | string>(a: T1, b: T1): T1 => {
  const result = (a as any) + (b as any);
  console.log(result);
  return result;
};

// function overloading with generics
function combine<T>(a: T, b: T): T {
  console.log("Combining values:");
  console.log(a, b);
  return a; // or b, depending on your logic
}

console.log(combine<number>(10, 20)); // Example usage
console.log(combine<string>("Hello", "World")); // Example usage
// Function with two different types
function add2<T, U>(a: T, b: U): T {
  console.log("Adding values:");
  console.log(a);
  console.log(b);
  return a;
}
// Example usage
add2<number, string>(10, "Hello");
add2<string, boolean>("Hello", true);

const Generics = () => {
  //   return <div>{name([12, 21])}</div>; // join array to display nicely
  return (
    <div>
      add: {add(10, 20)} <br />
    </div>
  );
};

export default Generics;
