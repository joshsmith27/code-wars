// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  var zerosArr = [];
  for (var i = arr.length-1; i >=0; i--){
    console.log(arr[i]);
    if(arr[i] === 0){
      zerosArr.push(arr[i]);
      arr.splice(i, 1);
    }
  }
 return arr.concat(zerosArr);
}
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
