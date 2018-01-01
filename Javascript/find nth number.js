// The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).

// #Note

// If num is negative, ignore its sign and treat it as a positive value.
// If nth is not positive, return -1.
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.
// #Examples

// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8
// findDigit(-456, 4)     returns 0
// findDigit(0, 20)       returns 0
// findDigit(65, 0)       returns -1
// findDigit(24, -8)      returns -1

var findDigit = function(num, nth){
    if (num < 0){
      num *= -1;
    }
    if(nth<= 0){
      return -1;
    }
  var arr = num.toString().split('').reverse();
  return arr[nth-1] == undefined ? 0 : Number(arr[nth-1]);
}