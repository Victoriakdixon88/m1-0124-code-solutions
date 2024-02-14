'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let newArray = [];
  if (count > array.length - 1) {
    newArray = array;
  } else {
    for (let i = array.length - count; i <= array.length - 1; i++) {
      // we want i to start at the end of the array and minus the count, as we only want the last elements, which would give us the last elements based off the number in the count.
      newArray.push(array[i]);
    }
  }
  return newArray;
}
//
//math.max returns the biggest item
//array.length - count because the main porition of this question, it wants us to take the back end of the
//array so we have to go to the porition of the array of where we want to start at.
//array.length-count(if count is 2 and the length of array is 4, it will start at the second index.)
//if the count is larger (one way we can test if count is larger, we use math.max, pick the larger number. only
//there to faciliate if the count variable is larget than the length of the array. )
