'use strict';
/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...'; //want to start the slice at 0 and end at length
}
