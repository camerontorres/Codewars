function rowWeights(array){
  let x = 0 
  let y = 0       // create two empty variables
  
  array.forEach(function(element, index){   //here we use for each and pass the array's elements and indexes
    if(index % 2 === 0 ){       //if the index is an even number we add it to x
      return x += element
    }else{
      return y += element   //else, we add it to y
    }
  })
  return [x,y]        //return
}

//I am a little confused as to how the element and index are passed into the function. I initially had them swapped and was not able to get the code to work and am a little confused
// I will look into what causes this issue
