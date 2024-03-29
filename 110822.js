function switcher(nums){    //nums is a string of numbers
  let alphabet = {    //objects containting the alphabet
    29 : ' ',
    28 : '?',
    27 : '!',
    26 : 'a',
    25 : 'b',
    24 : 'c',
    23 : 'd',
    22 : 'e',
    21 : 'f',
    20 : 'g',
    19 : 'h',
    18 : 'i',
    17 : 'j',
    16 : 'k',
    15 : 'l',
    14 : 'm',
    13 : 'n',
    12 : 'o', 
    11 : 'p',
    10 : 'q',
    9  : 'r',
    8 : 's',
    7 : 't',
    6 : 'u',
    5 : 'v',
    4 : 'w',
    3 : 'x',
    2 : 'y',
    1 : 'z'
};
  return nums.map((el) => alphabet[el]).join('');  //we will map nums wth the element it corresponds to in the alphabet array then join them together and return
}
