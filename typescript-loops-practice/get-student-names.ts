/* exported getStudentNames */

function getStudentNames(students:{name:string}[]):string[]{
  let studentName: string[] =[]
  for(let i =0; i<students.length; i++){
    studentName.push(students[i].name);// push the student array [i] access with dot notation names property into new studentName Array.
  }
  return studentName;
};
//for the student parameter we have a students array, however, we need to ensure we have the objects type, which
//is{name:string}, since we are accessing the name when we push students.name into our new arrray.
