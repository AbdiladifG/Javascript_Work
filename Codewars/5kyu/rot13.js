// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message){
  message =  message.split("").map((x,i) => x = x.charCodeAt(0)).map( (n)=> {
    if(n>= 97 && n <= 122){
      n = ((n - 97 + 13) % 26) + 97
      return String.fromCharCode(n)
    }
    else if(n>= 65 && n <= 90){
      n = ((n - 65 + 13) % 26) + 65
      return String.fromCharCode(n)
    }
    else{
      return String.fromCharCode(n)
    }
  })
  return message.join("")
  //97-122
  //65-90
}