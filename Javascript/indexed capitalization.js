// Given a string and an array of integers representing indices, capitalize all letters at the given indices.
//
// For example:
//
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.
//
// Good luck!

function capitalize(s,arr){
  const array = s.split('');
  const answer = [];
  for (let i = 0; i < array.length; i++){
    if(arr.includes(i)){
      answer.push(array[i].toUpperCase());
    }else{
    answer.push(array[i]);
    }
  }
  return answer.join('');
};
