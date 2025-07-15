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

const Generics = () => {
  //   return <div>{name([12, 21])}</div>; // join array to display nicely
  return (
    <div>
      add: {add(10, 20)} <br />
    </div>
  );
};

export default Generics;
