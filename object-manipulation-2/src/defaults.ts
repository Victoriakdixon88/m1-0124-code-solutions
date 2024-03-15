/* exported defaults */
/* const target = {};
const source = {
  foo: 1,
  bar: 2,
  baz: 3,
};
defaults(target, source);
console.log(target); // -> { foo: 1, bar: 2, baz: 3 }
assigns properties of the source object to the target object for all properites that are not defined on target. D
does not return, but modify target */

const defaults = (target: any, source: any): void => {
  for (const prop in source) {
    if (!(prop in target)) {
      target[prop] = source[prop];
    }
  }
};

// loop through the source properties
// we want to check if source properties exisits in target properties
// if it doesnt exvist, assign the property from source to target
