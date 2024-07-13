
// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array 
// (true means present).


function countSheeps(sheep) {
  let count = 0;
  for(i = 0; i < sheep.length; i++){
    if(sheep[i]){
      count += 1
    }
    
  }
  return count;
}