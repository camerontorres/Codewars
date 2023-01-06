//this one stumped me and failed the test however I am unsure why but i thought id post this anyways


function minMinMax(array) {
 
  let sortedArr = array.sort((a, b) => a - b)  //sorts the array from smallest to largest
   let max = sortedArr[sortedArr.length - 1]    //the max is the largest number in the array, forsome reason this doesnt deeply equal the largest
  let min = sortedArr[0]    //the first index fo the sorted array is the smallest num

  let nextNum = min       
    while (array.includes(nextNum)){  //this code will keep counting until it lands on a number that is larger than the smallest num and isint in the array
    nextNum++
  }
  
  console.log(min, nextNum, max)
  return (min, nextNum, max)
    
}
 
