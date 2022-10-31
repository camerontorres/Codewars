//this had me stumped so i had to view the solutions to se how to access objects in an array, as it had been a while since ive done this


function outed(meet, boss){
  const team = Object.keys(meet);   //here we are assigning the object "meet" to "team" using Obeject.keys()
  const happiness = team.reduce(        //we reduce(sum up the total) of the happiness scores.
    (avg, name) => meet[name] * (name === boss ? 2 : 1) + avg   //we reduce each score into itself AND if the name is the boss, we double the score 
  , 0) / team.length;                                         // divide the total by the number of people
  return happiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';      //if the score is less than 5 we get out, if its over 5, we stay
}

//i need to do more work into seeing how the name and value of the "meet" objects are assigned and refered to in the code
