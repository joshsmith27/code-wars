// In this kata, you will write a func that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
//
// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak in position 3 with a value of 5 (arr[3] equals 5).
//
// The output will be returned as a struct (PosPeaks) with two properties: Pos and Peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {Pos: [], Peaks: []}.
//
// Example: PickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) returns {Pos: [3, 7], Peaks: [6, 3]}
//
// All input arrays will be valid numeric arrays (although it could still be empty), so you won't need to validate the input.
//
// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
//
// Also, beware of plateaus! [1, 2 , 2 , 2 , 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: PickPeaks([1, 2, 2, 2, 1]) returns {Pos: [1], Peaks: [2]}
//
// Have fun!
function pickPeaks(arr){
  var peaks = [];
  var positions = [];
  for (var i = 0; i < arr.length; i++ ){

    if(arr[i] > arr[i +1 ] && arr[i] > arr[i-1]){
      peaks.push(arr[i]);
      positions.push(i);
    }else if(arr[i] > arr[i - 1] && arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i + 3] != arr[arr.length- 1]){
          peaks.push(arr[i]);
          positions.push(i);
          break;
      }else if(arr[i] > arr[i - 1] && arr[i] === arr[i + 1] && arr[i] === arr[i + 2]  && arr[i] !== arr[i + 3] && arr[i + 2] !== arr[arr.length- 1]){
          peaks.push(arr[i]);
          positions.push(i);
          break;
      }else if (arr[i] >= arr[i + 1] && arr[i] > arr[i-1] && arr[i] > arr[i +2]){
          peaks.push(arr[i]);
          positions.push(i);
       }
   }
   return {pos:positions, peaks:peaks};
}

function pickPeaks(arr){
  var result = {pos: [], peaks: []};
  if(arr.length > 2) {
    var pos = -1;
    for(var i=1; i<arr.length;i++){
      if(arr[i] > arr[i-1]) {
        pos = i;
      } else if(arr[i] < arr[i-1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}
