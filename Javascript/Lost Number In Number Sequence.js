// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
//
// Example:
//
// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.
//
// Note that N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
   var compArr = mixArr.sort(function(a, b){return a-b;});
    var a = arr.reduce(function(sum, value) {
       return sum + value;
     }, 0);
    var b = mixArr.reduce(function(sum, value) {
       return sum + value;
     }, 0);
    if(a === b){
      return 0;
    }
   for (var i =0; i < arr.length; i++){
      if(arr[i] !== compArr[i]){
        return arr[i];
      }
    }
}

function findDeletedNumber(arr, mixArr) {
  if(arr.length === mixArr.length) return 0;
  for(var k in arr)
    if(mixArr.indexOf(arr[k]) === -1)
      return arr[k];
  return 0;
}
