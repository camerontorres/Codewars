const howMuchILoveYou(n){
  
let answers = ['not at all','I love you','a little','a lot','passionately','madly'] //make a aray of the phrases

return answers[n%6] //return the answers but the index of n is divided by 6(the number of elements in the array)
}
