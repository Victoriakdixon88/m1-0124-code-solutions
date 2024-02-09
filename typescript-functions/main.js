'use strict';
const convertMinutesToSeconds = (minutes) => minutes * 60;
console.log('Convert Minutes to Seconds', convertMinutesToSeconds(45));
const greet = (name) => `Hey there, ${name}!!`;
console.log('greeting:', greet('Victoria'));
const getArea = (width, height) => width * height;
console.log('Area of the Rectangle is', getArea(17, 42));
const getFirstName = (person) => person.firstName;
getFirstName({ firstName: 'leLouche', lastName: `lamperouge` });
console.log(
  'First Name is',
  getFirstName({ firstName: 'LeLouche', lastName: 'Lamperouge' })
);
const getLastElement = (array) => array[array.length - 1];
console.log(
  'The Last Element is: ',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
const callOtherFunction = (otherFunction, params) => otherFunction(params);
console.log('Call another function', convertMinutesToSeconds, 15);
