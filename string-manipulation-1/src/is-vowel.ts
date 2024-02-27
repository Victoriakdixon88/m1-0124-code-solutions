/* exported isVowel */
const isVowel = (char: string): boolean => {
  const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i <= vowel.length - 1; i++) {
    if (char.toLowerCase() === vowel[i]) {
      return true;
    }
  }
  return false;
};
