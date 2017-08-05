function minMinMax(array) {
  var answer = [];
  var compareArr = [];
  var filteredArr = array.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
  var sortedArr = filteredArr.sort(function(a, b) {
    return a - b;
  });
  for (var i = sortedArr[0]; i < sortedArr[sortedArr.length -1]; i++){
    compareArr.push(i);
  }
  for (var j = 0; j < compareArr.length; j++){
    if(compareArr[j] !== sortedArr[j]){
      answer.push(sortedArr[0], compareArr[j], sortedArr[sortedArr.length-1]);
      break;
      }
  }
return answer;
}
//best answer;
minMinMax=(array)=> {
  b = Math.min(...array)
  while (array.includes(b) == true){b += 1}
  return [Math.min(...array),b,Math.max(...array)]
}
