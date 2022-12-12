function solution(str, ending){
  let slicePoint = ending.split('').length    //we get a number out of the ending length
  let cutStr = str.split('').reverse()      //we create a variable that holds the reversed characters of str
  
  
  //code below will reverse 'ending'. it will also slice out and join together the final reversed characters of 'str' from 'cutStr' and if both sides are equal, we will return true
  
  return ending.split('').reverse().join('') == cutStr.slice(0, slicePoint).join('') ? true : false
}
