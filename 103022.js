function oddOrEven(array) {     
   let sum = array.reduce((a, b) => a + b, 0)   //using .reduce, we will add up all of the numbers in the array and return the total as the variable sum
   
   
   return (sum % 2 === 0) || (sum == 0) ? "even" : "odd"    // if sum remainder 2 equals 0 or if the sum is 0, we will return even,  else, odd
}
