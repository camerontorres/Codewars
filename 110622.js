function digitize(n) {
  let arr = n.toString().split('').sort(function(a,b){      //we turn the array to a string, split it up and sort it
    return a - b
  })
  
var array = arr.map(Number)   //turn it backto a number and return
  return array
}
