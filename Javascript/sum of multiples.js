// ###Your Job:
//
// Find the sum of the multiples of n i.e. less than m
//
// ###Keep in Mind:
//
// n and m are natural number
// note that the second argument m is excluded from the multiples
// ###Remember these:
//
// sumMul(2,9)    should return 20
// sumMul(3,13)   should return 30
// sumMul(4,123)  should return 1860
// sumMul(4,-7)   should return INVALID

function sumMul(n,m){
  var answer = 0;
  var arr = [];
  if(n === 0 || m < 1){
     answer = 'INVALID';
  }else{
    for(var i = n; i < m; i+=n){
      arr.push(i);
    }
    answer = arr.reduce(function(sum, value) {
      return sum + value;
    }, 0);
  }

  return answer;
}

//best answer
