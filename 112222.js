function highAndLow(numbers){
  let nums = numbers.split(' ')     //split the numbers string into an arry
  let low = Math.min.apply(null, nums)    //we find the low value, i am still unsure of the apply method and need to read up more on what its doing here
  let high = Math.max.apply(null, nums) //find the high number

  return high + ' ' + low. //return and concatanate
  

  }
