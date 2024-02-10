/* exported getIndexes */
function getIndexes(array:unknown[]):number []{
  let indexArray:number[] =[]
  for(let i=0; i<array.length; i++){
    indexArray.push(i)
  };
  return indexArray;
};
