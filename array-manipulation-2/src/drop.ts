/* exported drop */

function drop(array: unknown[], count: number): unknown[] {
  const dropArray: unknown[] = [];
  for (let i = count; i <= array.length - 1; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
