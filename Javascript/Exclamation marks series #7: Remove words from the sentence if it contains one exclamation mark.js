// Description:
//
// Remove words from the sentence if it contains one exclamation mark. Words are separated by spaces in the sentence. Please remember, one.
//
// Examples
//
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"
// Note
//
// Please don't post issue about difficulty or duplicate.

function remove(s){
  var arr = s.split(' ');
  var answer = [];
  for (var i = 0; i < arr.length; i++){
    var exc = 0;
    var innerArr = arr[i].split('');
      for (var j = 0; j < innerArr.length; j++){
        if(innerArr[j] === '!'){
          exc +=1;
        }
      }
     if(exc !== 1){
       answer.push(arr[i]);
      }
   }
  return answer.join(' ');
}

//best answer
function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}
