//I thought this was going to be easier than expected but unfortunantly i needed to check the solutions ;( 
//I was ont he right track but i was missing a few crucial bits

function nextPal(val) {
    for(var i=val+1;;i++){  // this will count from the val and continue counting up
      
      var str=i+'';   //i belive this converts i into a string
      
      if(str.split('').reverse().join('')==str)return i; //if i is a palindrome, it will return i
    }
}
