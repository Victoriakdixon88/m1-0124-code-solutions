/* exported getFullNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person:Person):string{
  const fullName:string = person.firstName + ' ' + person.lastName;
  return fullName;
}

//why do we not use arrow - or how do we use the arrow and template literals?
