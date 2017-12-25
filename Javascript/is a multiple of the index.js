// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
// FUNDAMENTALSARRAYSNUMBERSBASIC LANGUAGE FEATURES

// Poweredby_qualified
// Solution:

// function multipleOfIndex(array) {
//   var answer = [];
//   for (var i = 0; i < array.length; i++){
//     if((array[i] * -1) % i === 0){
//       answer.push(array[i]);
//     }
//   }
// return answer;
// }
// 1
// function multipleOfIndex(array) {
// 2
//   var answer = [];
// 3
//   for (var i = 0; i < array.length; i++){
// 4
//     if((array[i] * -1) % i === 0){
// 5
//       answer.push(array[i]);
// 6
//     }
// 7
//   }
// 8
// return answer;
// 9
// }
//  Great! You may take your time to refactor/comment your solution. Submit when ready.×


function multipleOfIndex(array) {
    var answer = [];
    for (var i = 0; i < array.length; i++){
      if((array[i] * -1) % i === 0){
        answer.push(array[i]);
      }
    }
  return answer;
  }