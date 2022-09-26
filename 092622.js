function flyBy(lamps, drone){         
let newArr = lamps.split('')      /*** splits the lamps str into a character array ***/
let droneDist = drone.length    /*** takes the number from the length of the drone str *****/

return newArr.fill('o', 0, droneDist).join('') /*****replaces the x's in the lamps arry with 'o's up to the number of the drone.length. then joins the array together ***/




}
