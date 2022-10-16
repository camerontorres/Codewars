function fireFight(s){
  const newArr = s.split(' ').map(element =>{ //here we turn the string into an array an map a new array that takes in a paramater called 'element'
    if(element === 'Fire'){
      return '~~'             //if the element equals 'Fire', we will replace it with '~~'. we return it to get the value
      
    }
    return element             //return the remaining elements to get the value
    
  })
  return newArr.join(' ')       //return the new array we made and turn it back into a string.
}
