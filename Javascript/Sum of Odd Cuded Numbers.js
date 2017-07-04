// Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.
//
// Note: There are ONLY integers in the JAVA version of this Kata.

function cubeOdd(arr) {
  var cubedArr =[];
  for(var i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){
      return undefined;
    }else if(arr[i] % 2 !== 0){
      cubedArr.push(Math.pow(arr[i], 3));
    }
  }
  return cubedArr.reduce(function(sum, value) {
    return sum + value;
  }, 0);
}

// best answer

var cubeOdd = arr => arr.some(x=> +x !== x) ? undefined : arr.filter(x=>x%2!=0).reduce((s,x)=>s+x**3,0);
