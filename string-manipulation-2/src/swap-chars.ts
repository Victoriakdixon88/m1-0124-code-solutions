/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): any {
  const swappedString: any = string.split(''); // convert the input string into an array of characters so we can directly modify and access the characters using indexing.
  [swappedString[firstIndex], swappedString[secondIndex]] = [
    swappedString[secondIndex],
    swappedString[firstIndex],
  ];
  return swappedString.join('');
}
