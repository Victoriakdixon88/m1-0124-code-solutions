/* exported invert */

function invert(source: any): any {
  const invertedObj: any = {};

  for (const prop in source) {
    invertedObj[source[prop]] = prop;
  }
  return invertedObj;
}
