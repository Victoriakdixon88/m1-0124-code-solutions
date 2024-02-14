'use strict';
/* exported capitalize */
function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const theRest = word.slice(1).toLowerCase();
  return firstLetter + theRest;
}
