'use strict';
/* exported isVowel */
const isVowel = (char) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i <= vowel.length - 1; i++) {
    if (char.toLowerCase() === vowel[i]) {
      return true;
    }
  }
  return false;
};
