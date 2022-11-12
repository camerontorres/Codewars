// Return an array
function fizzbuzz(n)
{
  let array = []. //create empty array
  
  for(let i = 1; i <= n; i++){. //start a loop using n as the last number in the loop
    
    if(i % 3 == 0 && i % 5 == 0 ){      //if it is a multiple of 3 and 5, return fizzbuzz
      array.push("FizzBuzz")
    } else if (i % 5 == 0){. //mulitple of 5, buzz
      array.push("Buzz")
    }else if(i % 3 == 0){ // mulitple of 3, fizz
      array.push("Fizz")
    }else{
      array.push(i). //every other number we will push into the array
    }
    
  }
 
  return array //return the array
}
