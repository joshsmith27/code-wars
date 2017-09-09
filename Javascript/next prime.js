// I don't think we have this specific prime kata on codewars, yet.
//
// It's really simple:
//
// Get the next prime number!
//
// You will get a number n (n>=0) and your task is to find the next prime number.
//
// e.g: nextPrime(5)=>7 || nextPrime(12)=>13
//
// Make sure to optimize your code. There will be huge numbers in the tests!

function nextPrime(n){
  if(n === 0){return 2;}
  var answer = 0;
  function isPrime(num, start) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
      }
      return true;
  }
  for(var i = n + 1; i < n + 100; i++){
    if(isPrime(i , n)){
      answer = i;
      break;
    }
  }
  return answer;
}
