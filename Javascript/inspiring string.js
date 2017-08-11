// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
//
// Example:
//
// 'red white blue' //returns string value of white
//
// 'red blue gold' //returns gold

function longestWord(stringOfWords){
  var arr = stringOfWords.split(' ');

 return arr.reduce(function(longest, item){
    return (longest.length <= item.length) ? item : longest;
  }, '');
}
//best answer
function longestWord(str){
  return str.split(' ').sort((b, a) => b.length - a.length).pop();
}
