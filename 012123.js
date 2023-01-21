function DNAStrand(dna){
 let code = {       //we create an object that translate one letter into another
   A: "T",
   T: "A",
   C: "G",
   G: "C",
   
 }
  
  return dna.split('').map(function(index){   //after spliting the dna strand, we map it to the key we made above to translate and join
    return code[index]
  }).join('')
}
