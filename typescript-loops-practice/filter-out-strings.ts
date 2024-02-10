/* exported filterOutStrings */
function filterOutStrings(values:unknown[]):unknown[]{
  let filteredStrings:unknown[]=[];
  for(let i =0; i<values.length;i++ ){
    if(typeof values[i] !=='string'){ //we need to use a typeof? is it
      filteredStrings.push(values[i]);
    };
  };
  return filteredStrings;
};
