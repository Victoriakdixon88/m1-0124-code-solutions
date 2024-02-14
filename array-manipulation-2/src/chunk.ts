/* exported chunk */

function chunk(array: any[], size: number): any[] {
  const newArray: any[] = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (i % size === 0) {
      newArray.push([array[i]]);
    } else {
      const lastChunk = newArray[newArray.length - 1];
      lastChunk.push(array[i]);
    }
  }

  return newArray;
}

// if % remainder equals 0, go inside the new array
// else is automatically ran. const lastCbunk is a new array inside of array we created
