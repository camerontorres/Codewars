//i was unable to finish this one but after chekcing the solutions, the answers to this took me slightly by suprise in the simplicity/ cleverness of it:


function isFlush(cards) {   //attepmting to tell if a ha d of cards is flush:
 
  return cards.every(a=>cards[0].slice(-1)===a.slice(-1))
  
  //the first portion of the euqation removes the first letter of every card in the hand, leaving only the suit letters
  // the second part checks if each card suit is equal to one another
  //if they are, the function returns true
  
  
  
}
