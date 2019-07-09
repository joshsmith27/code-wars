// https://www.codewars.com/kata/59342039eb450e39970000a6
function oddCount(n){
    if(n % 2 !== 0){
        n--
    }
    return n / 2;
}

  console.log(oddCount(7)) //[1, 3, 5].length = 3