function derDieDas(wort){
 let vowels = ['a', 'e', 'i', 'o', 'u','ä', 'ö', 'ü']   //here we establish what our vowels are in an array
 
 let count = 0                                          //create a counter starting from 0
 let split = wort.toLowerCase().split('')       //in order to run through each letter of 'wort', we will split it into an array of letters and turn them all lowercase
 
 for(let i = 0; i <= split.length; i++){          //this loop runs through each letter in 'split
   for(let j= 0; j <= vowels.length-1; j++){      //loops through each vowel
     if(split[i] === vowels[j]){                  //if the vowels match any letter in split, we increase the counter
       count++
       

     }
   }
 }
 
       if(count > 3){                       //make the cases for the counter, and return wort
    return 'der ' + wort
  }else if(count == 2 || count == 3){
    return 'die ' + wort
  }else{
    return 'das ' + wort 
  }
  
  //I was stuck for a little bit on this kana before realising I had to put "length-1" on either loop to keep them from increasing the count for than it was supposed to
  
}
