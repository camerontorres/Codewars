function solve(n) {
  let f = ['0', '01'],            /****** let f equal an array with the indexes of 0 and 01 */
     str = '';                    /***** create an empty string */
  for (let i = 1; i < n; i++) {     /***** setting up a for loop */
    f.push(f[i] + f[i - 1]);        /***** the parentheses takes the value of f and f-1(the index before it) and contatinates them and pushes them into the array
  }
  return f[n];            /*** this will return the contatinated value of whatever is passed into (n) */
}
