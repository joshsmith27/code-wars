// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
    var arr = str.split('');
    var os = 0;
    var xs = 0;
    for(var x in arr){
      if(arr[x].toLowerCase() === 'o'){
        os++;
      }else if(arr[x].toLowerCase() === 'x'){
        xs++;
      }
    }
  if(os === xs){
   return true;
  }else{
    return false;
  }
}
//best answer
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
