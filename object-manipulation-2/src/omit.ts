/* exported omit */
function omit(source: any, keys: string[]): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      obj[prop] = source[prop];
    }
  }
  return obj;
}

// create a new object containing all the properties of source that are NOT listed in keys.
// if a key is listed in keys, then it should not be included in the new object.
