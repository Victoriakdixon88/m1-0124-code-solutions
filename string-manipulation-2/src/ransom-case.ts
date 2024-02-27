/* exported ransomCase */
function ransomCase(string: string): string {
  let convertedString = ''; // holds the result after capitalizing every other letter in the string
  // run loop on every letter in the string and check if the index is odd or even using the mod(%) operator
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      // why do we not do ===0
      convertedString += string[i].toUpperCase();
    } else {
      convertedString += string[i].toLowerCase();
    }
  }
  return convertedString;
}

// return result
