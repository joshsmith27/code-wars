// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

function looper (num1, num2, arr){
  var answer = [];
  for (var i = 0; i < num1 + num2; i++){
    answer.push(arr);
  }
  return answer;
}

function explode(x){

  var checker = true;
  if(!isNaN(x[0]) && !isNaN(x[1])){
    return looper(x[0], x[1], x);
  }else if (!isNaN(x[0]) || !isNaN(x[1])){
     return looper((!isNaN(x[0])) ? x[0] : 0, (!isNaN(x[1])) ? x[1] : 0, x);
  }else{
   return 'Void!';
  }
}

//best answer

const explode=([x,y])=>x+0!=x&&y+0!=y?"Void!":Array((+x||0)+(+y||0)).fill([x,y]);
