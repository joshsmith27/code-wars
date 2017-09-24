// Write a function sumTimesTables which sums the result of the sums of the elements specified in tables multiplied by all the numbers in between min and max including themselves.
//
// For example, for sumTimesTables([2,5],1,3) the result should be the same as


function sumTimesTables(tables, min, max){
  function total (toAdd, start, end){
    var sum = [];
    for(var i = start; i <= end; i++){
      sum.push(toAdd * i);
    }
    return sum.reduce(function(sum, value) {
      return sum + value;
    }, 0);
  }
  var answer = 0;
  for (var i = 0; i < tables.length; i++){
    answer+= total(tables[i], min, max);
  }
  return answer;
}
//best answer
function sumTimesTables(tables, min, max){
  return tables.reduce((p,c) => p + c, 0) * (max * (max + 1) / 2 - (min * (min - 1) / 2));
}
