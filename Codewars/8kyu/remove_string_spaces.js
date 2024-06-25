//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
  let newString = ""
  
  for(i = 0; i < x.length; i++){
    if(x[i] != " "){
      newString += x[i]
    }
  }
  
  return newString
}