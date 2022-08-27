function longestWord(str){
    return str.split(' ').sort((b,a) => b.length - a.length).pop()
}

//split the words by spaces into an array
//sort the elements by length from largest to smallest
//remove and return the last word