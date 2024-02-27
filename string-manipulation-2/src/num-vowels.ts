/* exported numVowels */
function numVowels(string: string): number {
  const Vowels = 'aAeEiIoOuU'; // created a variable for our vowels.
  let vowelsCount = 0; // we put out count equal to 0
  for (let i = 0; i < string.length; i++) {
    // ran a for loop to check through our string of values.
    if (Vowels.indexOf(string[i]) !== -1) {
      // created an if statement saying, if our string of vowels at the index of method of our string to find he index of the first occurents of a specified value within a given string. not equal to -1, as that would not be in our string.
      vowelsCount += 1; // incremented to our vowel count everytime a vowel is located.
    }
  }
  return vowelsCount; // returned the count of our vowels.
}
