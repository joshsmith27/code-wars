// Is it possible to write a book without the letter 'e' ?
//
// Task
//
// Given String str, return:
//
// How much "e" does it contains (case-insensitive) - return number as String.
// If given String doesn't contain any "e", return: There is no "e".
// If given String is empty, return empty String.
// If given String is null, return null

function find_E(str){
  if(str === ''){
    return '';
  }else if (str === null){
    return null;
  }
  var arr = str.split('');
  var number = 0;
  for (var x in arr ){
    if (arr[x].toLowerCase() === 'e'){
      number = number + 1;
    }
  }
  if(number === 0){
    return "There is no \"e\".";
  }else{
    return number.toString();
  }
}

//best answer
const find_E = s => s ? `${(s.match(/e/gi) || []).length || `There is no "e".`}` : s
