// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
   var arr = str.split('');
   var smArr = [];
   var answer = [];
   if(arr.length % 2 !== 0){
     arr.push('_');
    }

   for(var i = 0; i<arr.length; i++){

      if(smArr.length < 2){
        smArr.push(arr[i])
      }else{
        answer.push(smArr.join(''));
        smArr = [];
        smArr.push(arr[i]);
      }
    }
  answer.push(smArr.join(''));
  return answer;
}

// best answer

function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
