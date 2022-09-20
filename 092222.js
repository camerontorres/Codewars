function doubleChar(str) {
  
    var newStr = "";
    
    for(var current = 0; current < str.length; current++)
    {
      newStr += str[current] + str[current]; }
   
    return newStr  
  }