/* exported findIndex */
function findIndex(array:unknown[], value:unknown[]):number{
  for(let i=0; i<array.length; i++){
    if(array[i]=== value){ //use an if statement to find if a value is located in the array
      return i;// if a value is inside, we return
    }
  }
  return -1; //if no value, return -1
};
