/* exported take */

function take(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i <= Array.length - 1; i++) {
    if (i === count) {
      break;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

// keyword in a loop, when we hit the break statement, it will end the loop no matter where it is.
// continue - breaks counter part, if its inside the if statement, it will automatically force the loop to go to the next iteration.
