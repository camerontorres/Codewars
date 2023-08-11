function printerError(s) {
    
    var count = 0;
    for(var i = 0; i < s.length; i++) { //run through the array
      if (s[i] > "m") { //if lesss than the letter m add to the error count
        count++;
      }
    }
    return count+"/"+s.length;
}
