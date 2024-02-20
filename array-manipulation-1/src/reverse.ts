/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    // we want to start the iteration at the last index, and if that index is greater than 0, we reverse
    newArray.push(array[i]);
  }
  return newArray;
}
