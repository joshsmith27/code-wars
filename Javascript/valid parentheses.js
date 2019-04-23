// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens){
    console.log(parens.split("()").join(''))
    return parens.split("()").join('') === parens ? !parens.length > 0 :validParentheses(parens.split('()').join(''))
 }

console.log(validParentheses( "()" )) //true;
// console.log(validParentheses( "())" )) //false;