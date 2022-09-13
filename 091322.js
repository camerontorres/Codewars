function sumTwoSmallestNumbers(numbers) {  /***attempt to sum the two lowest ints in an array */
    numbers.sort(function(a,b){return a-b}) /***this sorts the array from lowest to highest */
    
    return numbers[0] + numbers[1] /***now sorted, this will sum the two lowest integers */
  }