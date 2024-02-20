/* exported addSuffixToAll */
function addSuffixToAll(words:string[], suffix:string):string[]{
  const suffixArray:string [] =[]
  for(let i=0; i < words.length; i++){
    suffixArray.push(words[i]+suffix);
  }
  return suffixArray;
}
