// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
//
// Examples
//
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some others Math functions are disabled on final tests.
function numberToPower(number, power){
  var answer = 1;
  for(var i = 0; i < power; i++){
    answer *= number;
  }
return answer;
}

//best answer
const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;
