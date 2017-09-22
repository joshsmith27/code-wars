// In the drawing below we have a part of the Pascal's triangle, lines are numbered from zero (top).
//
// We want to calculate the sum of the squares of the binomial coefficients on a given line with a function called easyline (or easyLine or easy-line).
//
// Can you write a program which calculate easyline(n) where n is the line number?
//
// The function will take n (with: n>= 0) as parameter and will return the sum of the squares of the binomial coefficients on line n.
//
// ##Examples:
//
// easyline(0) => 1
// easyline(1) => 2
// easyline(4) => 70
// easyline(50) => 100891344545564193334812497256

function createPascalTriangle (numRows) {
  var pascalTriangle = [];

  for (var i = 0; i < numRows; i++) {
    pascalTriangle[i] = new Array(i+1);

    for (var j = 0; j < i+1; j++) {
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
    }
  }

  return pascalTriangle;
}


function easyLine(n) {
 var triangle = createPascalTriangle(n + 1);
 var answer = triangle[n].reduce(function(sum, value) {
  return sum + value;
}, 0);
    return Math.round(Math.log(answer));
}

//best correct answer
function easyLine(n) {
  let res = 1;
  for (let i=1; i <=n; i++) {
    res *= (n+i)/i;
  }
  return Math.round(Math.log(res));
}
