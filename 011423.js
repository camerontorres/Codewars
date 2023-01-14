function alphabet(ns) { 
  let sortedArray = ns.sort(function(a, b) { //first we sort the array from low to high
  return a - b;
    
    
})
  let a = sortedArray[0]  //a would be the first number in our array
  let b = sortedArray[1]  //b would be the 2nd number in our array
  let AxB = a * b         //muliplying a and b gets us the axb value
  let c =  sortedArray[2]=== AxB ? sortedArray[3] : sortedArray[2]  // if axb is our 2nd index then c would be our 3rd
  
  let BxC = c * b   // mulitply b and c to get his value, i actully dont think this is neccecary
  let CxD = sortedArray[sortedArray.length - 1] //cxd would logically be the largest number in the array so we'll grab the last one
  let d = CxD/c     //divide cxd by c to get d
  return d
}
