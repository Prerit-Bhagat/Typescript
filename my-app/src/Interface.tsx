import React from "react";

interface User {
  name: string;
  age: number;
}

interface User {
  email: string; // This merges with the above User interface
}

const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};
const greetUser = (user: User): void => {
  console.log(`Hello, ${user.name}, Age: ${user.age}, Email: ${user.email}`);
};
greetUser(user);
// Interface with optional properties
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}
const product: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  description: "A high-performance laptop",
  // description is optional, so it can be omitted
};
const displayProduct = (product: Product): void => {
  console.log(
    `Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`
  );
  if (product.description) {
    console.log(`Description: ${product.description}`);
  }
};
const Interface = () => {
  return <div>Interface</div>;
};

export default Interface;
