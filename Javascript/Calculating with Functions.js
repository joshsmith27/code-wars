// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
//


var expr = function(number, operation){
  if(!operation){
    return number;
  }
  return operation(number);
};
function zero(operation) {return expr(0, operation); }
function one(operation) {return expr(1, operation); }
function two(operation) {return expr(2, operation); }
function three(operation) {return expr(3, operation); }
function four(operation) {return expr(4, operation); }
function five(operation) {return expr(5, operation); }
function six(operation) {return expr(6, operation); }
function seven(operation) {return expr(7, operation); }
function eight(operation) {return expr(8, operation); }
function nine(operation) {return expr(9, operation); }

function plus(first){
  return function(second){
    return first + second;
  };
}
function minus(first) {
  return function(second){
    return second - first;
  };
}
function times(first) {
  return function(second){
    return first * second;
  };
}
function dividedBy(first) {
  return function(second){
    return second / first;
  };
}

// best answer;
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }
