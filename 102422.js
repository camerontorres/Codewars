function smallEnough(a, limit){
  
  for( let i = 0; i < a.length; i++){   //we run a for loop that goes through each index of the array "a"
    if( a[i] > limit){        // if any index in a is greater than the limit number, we will return false
     return false
    }}
  return true  // if no number is higher than the limit, we simply return true
}
