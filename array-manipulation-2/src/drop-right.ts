/* exported dropRight */

function dropRight(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i <= array.length - count - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
