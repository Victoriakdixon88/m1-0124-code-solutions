const convertMinutesToSeconds = (minutes: number): number => minutes * 60;

console.log('Convert Minutes to Seconds', convertMinutesToSeconds(45));

const greet = (name: string): string => `Hey there, ${name}!!`;

console.log('greeting:', greet('Victoria'));

const getArea = (width: number, height: number): number => width * height;

console.log('Area of the Rectangle is', getArea(17, 42));

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => person.firstName;
getFirstName({ firstName: 'leLouche', lastName: `lamperouge` });
console.log(
  'First Name is',
  getFirstName({ firstName: 'LeLouche', lastName: 'Lamperouge' })
);

const getLastElement = (array: any[]): any => array[array.length - 1];
console.log(
  'The Last Element is: ',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);

function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}

console.log(callOtherFunction(convertMinutesToSeconds, 10));
