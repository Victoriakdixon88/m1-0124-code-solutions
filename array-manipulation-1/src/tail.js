'use strict';
/* exported tail */
const tail = (array) => {
  const newArray = [];
  for (let i = 1; i <= array.length - 1; i++) {
    //i =1 since we want to start at all elements after the first
    newArray.push(array[i]);
  }
  return newArray;
};
