function addLength(str) {
  let arr = str.split(" ") //turn the string into an array 
  let newArr = [] //create new empty array ( I apologize for the awful variable names)
   
  for (i = 0; i < arr.length; ++i) {    //a for loop running through the array
    newArr.push(arr[i] + " " + arr[i].length); // this fills the new array with the word, followed by a space and then the word length.
  } 
  return newArr;   //return
}
