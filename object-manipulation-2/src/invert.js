'use strict';
/* exported invert */
function invert(source) {
  const invertedObj = {};
  for (const prop in source) {
    invertedObj[source[prop]] = prop;
  }
  return invertedObj;
}
