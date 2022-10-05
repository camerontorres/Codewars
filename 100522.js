function twoSort(s) {

let newArray = s.sort()[0]              //makes a new array with the first charcter of each word sorted.
return newArray.split('').join('***')   // returns that array with the indexes sepereated by '***'

}
