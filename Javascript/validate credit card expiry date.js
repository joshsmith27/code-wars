// It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits). These are separated by one character ("-" or "/", maybe some spaces too). For example:
//
// 02/21
// 02 / 21
// 02 / 2021
// 02-2021
// Assume that all dates are in the XXI century.
//
// Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.
//
// Good luck.

function checkExpiryValid (str) {
  var dateArr = str.split('/');
  var todaysDate = new Date().getTime();
  var answer = false;
  var expirationDate = '';
  if (dateArr.length < 2){
    dateArr = str.split('-');
  }
  if (dateArr[1].length < 3){
    expirationDate = new Date('20' + dateArr[1], dateArr[0], '01').getTime();
  }else{
    expirationDate = new Date(dateArr[1], dateArr[0], '01').getTime();
  }
  if (expirationDate > todaysDate){
    answer = true;
  }
  return answer;
}

// best answer

function checkExpiryValid (date) {
  return /^(0[1-9]|1[0-2]).+(20)?(1[7-9]|[2-9]\d)$/.test(date)
}
