'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let capitalizedWords = ''; //created a value of capitalize words to hold the new string.
  capitalizedWords += string[0].toUpperCase(); //capitalizewords equals to the first character 0 and we want to upper case.
  for (let n = 1; n < string.length; n++) {
    //want to loop through all the letters in the string starting at 1, since we accounted for the first letter already at [0]
    if (string[n - 1] === ' ') {
      //if our string index has a space in front of it, we want to capitalize the first word
      capitalizedWords += string[n].toUpperCase();
    } else {
      capitalizedWords += string[n].toLowerCase(); //if our string does not have a space in front, we want to keep it lower cased.
    }
  }
  return capitalizedWords;
}
