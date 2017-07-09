// Description:
//
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//
// Examples
//
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"
// FUNDAMENTALS

function remove(s){
  var arr = s.split('');
  var ansArr = [];
  for(var x in arr){
    if(arr[x] !== '!'){
      ansArr.push(arr[x]);
     }
  }
  ansArr.push('!');
  return ansArr.join('');
}
// best answer
const remove = s => s.replace(/!+/g, "")+"!";
