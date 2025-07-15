import React from "react";

const person: {
  name: string;
  age: number;
  isEmployed: boolean;
  greet: () => void;
  adress: {
    city: string;
    country: string;
  };
} = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  adress: {
    city: "New York",
    country: "USA",
  },
};
console.log(person.name); // Accessing properties
console.log(person.age);

// isse acha type define krlo
// kiuki ese 100 hor banenge

type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
  greet: () => void;
  adress: {
    city: string;
    country: string;
  };
};
const person1: Person = {
  name: "Alice",
  age: 28,
  isEmployed: false,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  adress: {
    city: "Los Angeles",
    country: "USA",
  },
};
const person2: Person = {
  name: "Bob",
  age: 35,
  isEmployed: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  adress: {
    city: "Chicago",
    country: "USA",
  },
};

const objects = () => {
  person.greet(); // Calling a method
  person.adress.city = "Los Angeles"; // Modifying a nested object property
  //   agar object ke andar koi object hai to usko bhi modify kr sakte ho
  // if define kiya hai types to usi type ka hona chahiye and types define k bina nhi hoga
  console.log(person.adress.city); // Accessing nested object properties
  console.log(person.adress.country);
  console.log(person.isEmployed); // Accessing boolean property
  console.log(person); // Logging the entire object
  return `${person1.name}` + " " + `${person2.name}`; // Returning names of person1 and person2
};
export default objects;
