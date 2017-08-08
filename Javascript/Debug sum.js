// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
//
// Example
//
// getSumOfDigits(123) // -> 6

function getSumOfDigits(integer) {
  var sum = 0;
  var arr = integer.toString().split('');
  console.log(arr);
  for (var x in arr){
    sum += parseInt(arr[x], 10);
  }
  return sum;
}

// best answer
getSumOfDigits = i => Math.abs(i).toString().split('').reduce((s, e) => s + +e, 0);
