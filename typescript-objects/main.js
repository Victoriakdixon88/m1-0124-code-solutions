'use strict';
const student = {
  firstName: 'Victoria',
  lastName: 'Dixon',
  age: 35,
};
const fullName = student.firstName + student.lastName;
console.log('Value of FullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Social Worker';
console.log('Value of Student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
const vehicle = {
  make: 'Subaru',
  model: 'Outback',
  year: 2023,
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Color', vehicle['color']);
console.log('isConvertible', vehicle['isConvertible']);
console.log('vehicle', vehicle);
const pet = {
  name: 'Minnie',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log('Value of pet', pet);
