


function uncensor(infected, discovered) { 
    var uncensored= ""  //create an empty string
    uncensored = infected   //hold infected string in uncensored
    for(var i = 0; i < discovered.length; i++ ){    //i will run for each character of discovered
      uncensored = uncensored.replace('*',discovered[i])  //replace the "censored" letters in infected string with each letter in "discovered"
      
    }
    return uncensored //return
  }