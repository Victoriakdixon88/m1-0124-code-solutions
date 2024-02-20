/* exported compact */
function compact(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
