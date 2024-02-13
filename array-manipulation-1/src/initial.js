'use strict';
/* exported initial */
function initial(array) {
  const initialArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    //only less than, since we do not want it equal to the last element.
    initialArray.push(array[i]);
  }
  return initialArray;
}
