function removeEveryOther(arr){
  return arr.filter((el, index) =>{ 
    return index % 2 ===0  //returns every other index in the array
  })
}
