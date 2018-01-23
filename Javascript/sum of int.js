// Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

// Example
// summy("1 2 3")  ==> 6
// Good luck!

function summy(stringOfInts){
    var arr = stringOfInts.split(' ');
    var answer = 0;
    for (var x in arr ){
      if(Number(arr[x]) !== NaN){
        answer += Number(arr[x]);
      }
    }
    return answer;
}