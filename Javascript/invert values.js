// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  var answer = [];
  if(array === []){
    return [];
    }else if(array.length < 2 && array[0] === 0){
      return [0];
    }else{
      for(var x in array){
      if(array[x] ===0){
      answer.push(0);
      }else{
        answer.push(array[x] * -1);
      }
    }
     return answer;
  }
}
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}
