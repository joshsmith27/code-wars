// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

function longest(s1, s2) {
    var answer = [];
    var arr = s1.split('');
    var arr1 = s2.split('');
    for(var i = 0; i < arr.length; i++){
      if(!answer.includes(arr[i])){
        answer.push(arr[i])
      }
    }
    for(var i = 0; i < arr1.length; i++){
      if(!answer.includes(arr1[i])){
        answer.push(arr1[i])
      }
    }
    return answer.sort().join('');
  }