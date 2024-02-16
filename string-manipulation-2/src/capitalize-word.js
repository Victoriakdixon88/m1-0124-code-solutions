'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowercaseWord = word.toLowerCase();
  if (lowercaseWord === 'javascript') {
    return 'JavaScript';
  }
  return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
}
