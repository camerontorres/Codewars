var number=function(array){
   
    
    return array.map(function(element, index){
      return(index + 1 ) + `: ${element}`
      
    })
  }