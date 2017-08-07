// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.
//
// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)
//
// Note: Of course you can't do half a fold. You should know what this means ;P
//
// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

function foldTo(distance) {
  var width = 0.0001;
  var answer = 0;
  if(distance < 0.0000000000001){
    return null;
  }
  while(width < distance){
    width *= 2;
    answer += 1;
  }
console.log(distance);
return answer;
}
//best answer
function foldTo(n) {
  return n > 0 ? Math.max(0, Math.ceil(Math.log2(1e4 * n))) : null;
}
