'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    //while the count of the word(javascript) is less than or == times, run the code.
    repeated += word; //updates the value of repeated to INCLUDE word (count +=word)
    count++; // increments the count variable, which is 1
  }
  return repeated;
}
console.log(repeatWord('Javascript', 20)); //while count of Javascript, is less than the argument 20, run the code.
//we have to parameters, we inputted javascript, and ran it 20 times.
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    //if 0 is less than the string's length, go up and iterate through.
    console.log(string[i]); //console to show each string at each individual index.
  }
}
//Why did we not want to return anything?
function doubleAll(numbers) {
  let doubled = []; //create a new array to push the numbers into called doubled
  for (let i = 0; i < numbers.length; i++) {
    //if i is less than the length of the numbers in the array, increment.
    doubled.push(numbers[i] * 2); //we want to push our numbers in our index and double them and push into our new array.
  }
  return doubled;
}
function getKeys(object) {
  let keys = []; //assigned variable keys to an empty array string
  for (let prop in object) {
    //iterated over properties in the key object
    keys.push(prop); //pushed the properties in the new keys array
  }
  return keys; //returned our new string array of keys
}
function getValues(object) {
  let values = []; //assinged a variable "values" to an empty array
  for (let prop in object) {
    //iterated over properties in our object
    values.push(object[prop]); //pushed the object properties into our new values array
  }
  return values; //returned our new values array;
}
