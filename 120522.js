function lastSurvivor(letters, coords) {
  letters = letters.split('')             //we start by turning letters into an array of letters
    
 for(let i = 0; i < coords.length; i++){      //we make a loop that runs through each number in coords
   letters.splice(coords[i],1)            //for each element of coords, we will splice the number and 1 length which will remove that element in our letters array
   
 }
  console.log(letters.join(''))
   return letters.join('') //we will return the letters array after re-joining it back into a string
}
