function makeNegative(num) {
  if(num <= 0){       //if num is less than or equals zero, we will just return num
    return num
  }else{
  return num - (num*2)}     //else, we wil subtract the value of num twice, giving us a negative number.
  
  
  
  
  
  //seeing the solutions after i finished, I now know i can simply return (-num) to return a negative value, this would have been a little simpler.
  // my simplified code would be this:
  
  //********
  
  function makeNegative(num) {
 return num <= 0 ? num : -num
  }
  
  ******//
  
  
}
