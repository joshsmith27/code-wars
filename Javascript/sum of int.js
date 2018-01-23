function summy(stringOfInts){
    var arr = stringOfInts.split(' ');
    var answer = 0;
    for (var x in arr ){
      if(Number(arr[x]) !== NaN){
        answer += Number(arr[x]);
      }
    }
    return answer;
}