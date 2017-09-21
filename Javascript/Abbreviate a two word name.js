// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F
function abbrevName(name){
  var answer = ['.'];
  var arr = name.split(' ');
  answer.unshift(arr[0][0]);
  answer.push(arr[1][0]);
  return answer.join('')
}
