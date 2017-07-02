// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  var answerArr = [];
	var strArr = s.split('').map(function(letter, i){
    var letterArr = [];
    for(var x = 0; x < i + 1; x++){
      letterArr.push(letter.toLowerCase());
    }
    var string =letterArr.join('');
      answerArr.push(string.charAt(0).toUpperCase() + string.slice(1));
  });
  return answerArr.join('-');
}

//best answer
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}
