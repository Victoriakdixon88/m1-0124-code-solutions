/* exported take */

function take(array: any[], count: number): any[] {
  const newArray: any[] = [];
  if (array.length) {
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
}
