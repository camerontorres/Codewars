function divisibleBy(numbers, divisor) {
  var newArr = []                           //we create a new empty array
  for (let i = 0; i < numbers.length; i++) {   // we will loop though each element in the array
    if (numbers[i] % divisor === 0) {         //if any element divisible by the divisor equals 0...
      newArr.push(numbers[i])                 // we push that element to the newArr
    } 
  }
return newArr                           // return newArr
}
