const rps = (p1, p2) => {
  if (p1 == p2){        //first we establish the draw case
    return 'Draw!'
  }else if(p1 == 'rock' && p2 == 'scissors'|| p1 == 'scissors' && p2 == 'paper' || p1 == 'paper' && p2 == 'rock'){ //next we write the ugly line that covers all instances of a p1 win
    return 'Player 1 won!'
  }else{        
    return 'Player 2 won!'    //if there was no tie nor p1 win, then p2 would have to be the winner
  }
};
