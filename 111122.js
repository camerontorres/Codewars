function findNeedle(haystack) { 
  if(haystack.includes('needle')){  //if statement will check if the inputted array contains  the string 'needle'
      return 'found the needle at position ' + haystack.indexOf('needle') // if it does, it will return the phrase and the index the needle was found at
     } //if there is no needle the statement will return false
}
