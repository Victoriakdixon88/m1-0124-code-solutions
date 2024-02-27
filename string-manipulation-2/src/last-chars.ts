/* exported lastChars */
function lastChars(length: number, string: string): string {
  if (string.length >= length) {
    // create an if statement if the string length is greater than the length(number given)
    return string.slice(string.length - length); // we want to return the sliced string -our length number
  } else {
    return string;
  }
}
