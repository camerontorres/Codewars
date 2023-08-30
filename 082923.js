function duplicateCount(text){
  var count = 0; 
  var used = [];
  
  text.toLowerCase().split('').forEach(function(letter) {   //split the text and do a foreach loop 
    if (!used.includes(letter) && (text.toLowerCase().split(letter).length - 1) > 1) {    //if the letter is not in the used array the length is not greater than 1 then  the count will increase and the letter will be pushed into the array 
      count++;
     used.push(letter);
    }
  });
  
  return count;}
