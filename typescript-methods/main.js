'use strict';
const heroes = ['superman', 'batman', 'She Hulk', 'Iron Man'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
const randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);
const library = [
  { title: "Harry Potter and the Sorcerer's Stone", author: 'J.K Rowling' },
  { title: 'Never Lie', author: 'Freida McFadden' },
  { title: 'The Perfect Marriage', author: 'Jeneva Rose' },
];
const lastBook = library.pop();
console.log('last book:', lastBook);
const firstBook = library.shift();
console.log('lastBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1); //remove 1 index before index 1??
console.log(library);
let fullName = 'Victoria Dixon';
console.log('full name:', fullName);
const firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
const firstName = firstAndLastName[0];
console.log('first name:', firstName);
const sayMyName = firstName.toLocaleUpperCase();
console.log('Say my name:', sayMyName);
const employee = {
  name: 'Victoria',
  age: 35,
  position: 'Coding student',
};
const employeeKeys = Object.keys(employee);
console.log('Employee Keys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('Employee Values:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('Employee Pairs:', employeePairs);
