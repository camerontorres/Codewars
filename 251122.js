
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce(function(a, b){
                    
                    
               return     a + b});
}
