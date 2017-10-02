// An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
function ìsZeroBalanced(n){
const answer = n.reduce(function(sum, value) {
  return sum + value;
}, 0);
  if(answer === 0 ){
    return true;
  }
  else{
    return false;
  }
}
