// Build a function that can get all the integers between two given numbers.
//
// Example:
//
// (2,9)
//
// Should give you this output back:
//
// [ 3, 4, 5, 6, 7, 8 ]

function range(startNum, endNum)
{
 var answer = [];
for (var i = startNum +1; i < endNum; i++){
    answer.push(i);
    }
  return answer;
}
