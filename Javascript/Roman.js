// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

function solution(num) {
  return [
    { threshold: 1000, char: 'M'},
    { threshold: 900,  char: 'CM'},
    { threshold: 500,  char: 'D'},
    { threshold: 400,  char: 'CD'},
    { threshold: 100,  char: 'C'},
    { threshold: 90,   char: 'XC'},
    { threshold: 50,   char: 'L'},
    { threshold: 40,   char: 'XL'},
    { threshold: 10,   char: 'X'},
    { threshold: 9,    char: 'IX'},
    { threshold: 5,    char: 'V'},
    { threshold: 4,    char: 'IV'},
    { threshold: 1,    char: 'I'}
  ].reduce(function(prev, curr, idx, arr)
  {
    console.log(prev)
    while(num >= curr.threshold)
    {
      prev += curr.char;
      num -= curr.threshold;
    }
    
    return prev;
  }, '');
}


console.log(solution(1010)) //'I'; 