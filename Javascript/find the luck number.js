// Write a function filterLucky that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
//
// For example,
//
// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.
var filterLucky=x=>{
  var answerArr = [];
  for (var i = 0; i<x.length; i++){
    if (x[i].toString().length > 0){
      var arr = x[i].toString().split('');
      for (var y in arr){
        if (arr[y] === '7'){
          answerArr.push(x[i]);
          break;
        }
      }
    }else if(x[i] === 7){
     answerArr.push(x[i]);
   }
  }
return answerArr;
};

//best answer;
const filterLucky = xs => xs.filter(x => x.toString().includes('7'));
