/* exported getLastNameOfPerson */
interface Person {
  lastName:string;
  firstName:string;
}

const getLastNameOfPerson = (person:Person) : string => person.lastName;
