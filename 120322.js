function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; //this is the words we want filtered from birds
  let newArr = []
  for (let i = 0; i < birds.length; i++) { //this is a for loop that will run through each element of birds
    for (let j = 0; j < geese.length; j++) {  //we will do the same except this will run through each of the geese
      if (birds[i] == geese[j]) {.  //if the two match, we splice the goose name out of birds
        birds.splice(i, 1)
        i--;
      }}   
}
  return birds; 
}
