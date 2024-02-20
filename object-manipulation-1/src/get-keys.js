'use strict';
/* exported getKeys */
const getKeys = (object) => {
  const newArray = [];
  for (const key in object) newArray.push(key); //accessing objects in a for loop.
  return newArray;
};
