import React from "react";

interface User {
  name: string;
  age: number;
}
function greetUser(user: User): void {
  console.log(`Hello, ${user.name}`);
}

function getName(name: string | number): string | number {
  return name;
}

const greet = (user: User): void => {
  console.log(`Hello, ${user.name}`);
};
// default function
function greetdefault(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}
// optional function
function greetoptional(name?: string): string {
  return `Hello, ${name ?? "Guest"}!`;
}

const Test = () => {
  greetUser({ name: "John", age: 30 });
  greet({ name: "Jane", age: 25 });
  return <div>Test</div>;
};

export default Test;
