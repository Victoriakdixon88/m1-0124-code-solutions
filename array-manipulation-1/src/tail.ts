/* exported tail */
const tail = (array: unknown[]): unknown[] => {
  const newArray: unknown[] = [];
  for (let i = 1; i <= array.length - 1; i++) {
    // i =1 since we want to start at all elements after the first
    newArray.push(array[i]);
  }
  return newArray;
};
