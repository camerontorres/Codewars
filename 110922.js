String.prototype.isUpperCase = function() {     //this was a little difficult to figure out but the solution was super easy
  return this.toUpperCase() === this.toString()   // simply check if the toUpperCase version of the string equals the toString version and return true or false
}
