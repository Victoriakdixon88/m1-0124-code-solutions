/* exported pick */
// create an object composed of the picked source properties
// return a new Object containing all the properties of the source listed in keys.
// if a key is listed in keys, but not defined in source, do not add the prob to a new object.

function pick(source: any, keys: string[]): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  for (let i = 0; i < keys.length; i++) {
    // loop through our keys
    if (source[keys[i]] !== undefined) {
      // if the source key doesnt not equal undefined
      obj[keys[i]] = source[keys[i]]; // the obj key value equals the source key value//return our new object
    }
  }
  return obj;
}
