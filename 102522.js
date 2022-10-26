function dontGiveMeFive(start, end){
    let arr = []
    arr.push(start,end)
  
    for (let i = start + 1; i < end ; i++){
    
            if(i.toString().includes('5') != true){
                  arr.push(i)
                  
                   
                          arr.sort(function(a, b){

                                    return a-b
                              
                                 
                           if(arr[start].toString().includes('5')){
                             arr.shift()
                           }
                            if((arr.length-1).toString().includes('5')){
                              arr.pop()
                            }
                               
                               })
              
                   
            }
    }
     
      
 
  
        console.log(arr)
                        return arr.length
  
  }
  
