/* exported truncate */
function truncate(length: number, string: string): string {
  return string.slice(0, length) + '...'; // want to start the slice at 0 and end at length
}
