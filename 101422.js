function modifyMultiply (str,loc,num) {


let chosenIndex = str.split(' ')[loc]   //we create an array using the string and assign the chosen word(loc) to chosenIndex
let newArr = new Array(num)             //create a new array that has the chosen number(num) of empty indexes
return newArr.fill(chosenIndex).join('-')   //we fill the indexes in the array with the word in chosenIndex and join them with '-'
} 
