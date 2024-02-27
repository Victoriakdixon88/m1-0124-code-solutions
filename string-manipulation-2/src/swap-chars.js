'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let swappedString = string.split(''); //convert the input string into an array of characters so we can directly modify and access the characters using indexing.
  [swappedString[firstIndex], swappedString[secondIndex]] = [
    swappedString[secondIndex],
    swappedString[firstIndex],
  ];
  return swappedString.join('');
}
