function abbrevName(name){
  let nameToArr = name.split(' ')                                    /**** turn name into an array of two words seperated by ' ' ****/
let initials = nameToArr.map((nameToArr) => nameToArr[0]).join('.') /**** creates a new array of just the first index of each word joined together by '.'****/
    return initials.toUpperCase()                                   /**** returns the initals all uppercase ***/

}
