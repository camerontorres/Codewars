// I WILL NEED REDO THIS AS I KNOW ITS MUCH EASIER THAN WHAT I CODED HERE!!!!
//i will detail what I was INTENDING the code to do in the comments


function dontGiveMeFive(start, end){
    let arr = []            //intitialize a new empty array
    arr.push(start,end)     // add the start and end numbers to the array
  
    for (let i = start + 1; i < end ; i++){             //start a loop that  will add each number beginning from the start number to the end number 
            if(i.toString().includes('5') != true){        //to check if the i contains '5', we will turn to a string and check if it contains '5'
                  arr.push(i)                          //if it doesnt, we push to the arr
                          arr.sort(function(a, b){         //sort the arr lowest to highest 
                                    return a-b    
                           if(arr[start].toString().includes('5')){             //desperate attempt to remove 5 from the start and end numbers but was unable to complete the challenge
                             arr.shift()
                           }
                            if((arr.length-1).toString().includes('5')){
                              arr.pop()
                            }        
                  })
            }
    }      
        console.log(arr)
        return arr.length       //test and return
  }
  
