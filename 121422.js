//this was tricky and required looking at the solutions for help, i liked this one a lot


function solve(s){
  let array = Array.from({length: 4}, () =>0) //here we create an empty array with a length of 4
  for( let value of s){                       //this is a loop that will check each value in s
    let vl = value.toLowerCase(), vu = value.toUpperCase()    //here we create variables for upper and lowercase numbers
  if(!Number.isNaN(+value)) array[2]++          //if the value returns !NaN then the value of our 2nd index increases 
  else if( vl === vu)    array[3]++            // if the value uppercase is the same as lowercase, then the value is not a letter and must be a special character, in which we will increase the value of our 3rd index
  else if (value === vl)    array[1]++        // if the value is equal to the value being upper or lowercase we increase the respective index values in array
  else if(value === vu)     array[0]++
    }
    
    return array        //returning the array will give us all the numbers we need from any given string
  
 
    
  }
