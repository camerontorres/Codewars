function dontGiveMeFive(start, end){
    let arr = []                     //this time around we declare a new empty array but dont push the start and end value         
    
  
    for (let i = start; i <= end ; i++){            //here we loop through every value including the start and end
    
            if(i.toString().includes('5') != true){ //if any value contains '5', we dont push to the new array
                  arr.push(i)
                  
                   
                arr.sort(function(a, b){      //sort our numbers from low to high

                return a-b
                  })
            }}
    
       return arr.length      //get the length
  
  }
  

//so much easier
