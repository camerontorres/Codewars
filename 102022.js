function isPalindrome(x) {
  return x.toLowerCase() == x.split('').reverse().join('').toLowerCase()  //here we will return true if the lowercase string(x) equals the lowercase reverse of it
                                                                        //we get the reverse by splitting the string into an array, reversing, then joining it together again 
  
}
