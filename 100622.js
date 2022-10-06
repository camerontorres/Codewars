// write the function isAnagram
var isAnagram = function(test, original) {
 let testVal =  test.toLowerCase().split('').sort().join('')
  let oriVal = original.toLowerCase().split('').sort().join(''). //we create 2 new Vals with where the elements are sorted and joined together
  
  return testVal === oriVal ? true : false. //test whether they are anagrams or not
};

