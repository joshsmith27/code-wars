// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//
// So given a string "super", we should return a list of [2, 4].
//
// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
//  Vowels in this context refers to English Language Vowels - a e i o u y
//
//  this is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
  var arr = word.toLowerCase().split('');
  var answer = [];
  for (var i = 0; i < arr.length; i++){

    switch(arr[i]){
      case 'a':
        answer.push(i + 1);
        break;
      case 'i':
        answer.push(i + 1);
        break;
      case 'o':
        answer.push(i + 1);
        break;
      case 'u':
        answer.push(i + 1);
        break;
      case 'e':
        answer.push(i + 1);
        break;
      case 'y':
        answer.push(i + 1);
        break;
      default:
        break;
    }
  }
return answer;
}

//best answer
function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a);
}
