// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
//
// Ex.
//
// multiples(3, 5)
// should return
//
// [5, 10, 15]
function multiples(m, n){
  var number = 0;
  var answer = [];
  for(var i = 0; i < m; i++){
    number = number + n;
    answer.push(number);
  }
  return answer;
}

// best answer

const multiples = (m, n) => Array.from({ length: m }).map((_, i) => ++i * n);
