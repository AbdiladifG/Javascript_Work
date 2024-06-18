//Write a function that accepts an integer n and a string s as parameters, 
//and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  let repeatS = ""
  for(i = 0; i < n; i++){
    repeatS += s
  }
  return repeatS
  ;
}