// https://www.codewars.com/kata/get-the-mean-of-an-array/train/javascript

function getAverage(marks){
    return Math.floor(marks.reduce((r, e) => {return r+=e}, 0) / marks.length)
  }