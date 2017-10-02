// Write function avg which calculates average of numbers in given list.
function find_average(array) {
  var added = array.reduce(function(sum, value){
    return sum + value;
  }, 0)
  return added/array.length;
}
