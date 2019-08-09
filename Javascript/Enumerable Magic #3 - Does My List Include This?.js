// https://www.codewars.com/kata/enumerable-magic-number-3-does-my-list-include-this/train/javascript

function include(arr, item){
    return arr.some((e) => {return e === item})
  }