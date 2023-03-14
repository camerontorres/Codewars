function solution(nums){ 
  if (nums === null){ //if null/ empty we return an empty array else...
    return []
  }else {
    return nums.sort(function(a,b){ 
                     return a-b
                     }) //...we sort the array from smallest to largest
  }

}
