// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
  var arr = str.split('');
  var count = 0;
  for (var x in arr){
  if(arr[x] === 'a' || arr[x] === 'e' || arr[x] === 'i' || arr[x] === 'o' || arr[x] === 'u'){
    count++;
  }
}
 return count;
}
// best answer
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
