// 1
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

///////////////////////////////////////////////////////

// 2
// Write function makeUpperCase.

//////////////////////////////////////////////////////

//3
// What if we need the length of the words separated 
//by a space to be added at the end of that same 
//word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and 
//returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; 
//words will always be separated by a space.

const wordsLength = (str) => {
    return str.split(' ').map((word)=>{
        return `${word} ${word.length}`
    })
}

console.log(wordsLength("This is a sentence"))

///////////////////////////////////////////////////////
//4
// Who likes keywords? Nobody likes keywords, so why use them?
//
// You know what keyword I use too much? if! 
//We should make a function called _if, with its arguments 
//as a logical test and two functions/lambdas where the first function 
//is executed if the boolean is true, and the second if it's false, 
//like an if/else statement, so that we don't have to mess around with 
//those nasty keywords! Even so, It should support truthy/falsy types just 
//like the keyword.

const func1 = () => {
    console.log('func1')
}

const func2 = () => {
    console.log('func2')
}

const _if = (bool, cb1, cb2)=>{
    return bool ? cb1() : cb2();
}

console.log(_if(false, func1, func2))


///////////////////////////////////////////////////////
//5
// Prolog:
//
// This kata series was created for friends 
//of mine who just started to learn programming. 
//Wish you all the best and keep your mind open and sharp!
//
// Task:
//
// Write function typeValidation that 
// will accept two parameters: variable and 
// type and check if type of variable is matching type.
// Return true if types match or false if not.

const typeValidation = (variable, type) => {
    return typeof variable === type ? type : false;
}

console.log(typeValidation(5, 'number'))

///////////////////////////////////////////////////////
//6
// #Triple Trouble
//
// Create a function that will return a 
// string that combines all of the letters of the three 
// inputed strings in groups. Taking the first letter of all 
// of the inputs and grouping them next to each other. 
// Do this for every letter, see example below!
//
// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.

const firstLetterWordMaker = (str1, str2, str3) =>{
   return str1.split('').map((e, i)=>{
        return e + str2.split('')[i] + str3.split('')[i];
   }).join('')
}

console.log(firstLetterWordMaker('aa', 'bb', 'cc'))
///////////////////////////////////////////////////////
//7
//Given a non-negative integer n, write a function 
//toBinary/ToBinary which returns that number in a binary format.

const toBinary = (num) =>{
    return num.toString(2)
}

console.log(toBinary(45))
///////////////////////////////////////////////////////
//8
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

///////////////////////////////////////////////////////
//9
// I'm new to coding and now I want to get the sum of 
// two arrays...actually the sum of all their elements. 
// I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const addArrays = (arr1, arr2) =>{
   const num1 = arr1.reduce((sum,e) =>
    { 
        return sum+=e
    },0)  
    const num2 = arr2.reduce((sum,e) =>
    {
        return sum+=e
    },0 )
    return num1 + num2
}

console.log(addArrays([1,2,3,4], [1,2,3,4]))
///////////////////////////////////////////////////////
//10
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

///////////////////////////////////////////////////////
//11
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

///////////////////////////////////////////////////////
//12
// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]

///////////////////////////////////////////////////////
//13
// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

///////////////////////////////////////////////////////
//14
// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

///////////////////////////////////////////////////////
//15
// In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.
//
// A function is a block of code that takes an input and produces an output. In this example, boolean_to_string is a function whose input is either true or false, and whose output is the string representation of the input, either "true" or "false".
//
// A common idea we often want to represent in code is the concept of true and false. A variable that can either be true or false is called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.
//
// Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.
//
// For this kata, don't worry about edge cases like where unexpected input is passed to the function. You'll get to worry about these enough in later exercises.

///////////////////////////////////////////////////////
//16
// Write function avg which calculates average of numbers in given list.

///////////////////////////////////////////////////////
//17
// This time we want to write calculations using 
// functions and get the results. 
// Let's have a look at some examples:
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
  
  
///////////////////////////////////////////////////////
//18
// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

///////////////////////////////////////////////////////
//19
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

///////////////////////////////////////////////////////
//20
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

///////////////////////////////////////////////////////
//21
// Given a year, return the century it is in.

// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

// Let's see some examples:

// centuryFromYear(1705) // returns 18
// centuryFromYear(1900) // returns 19
// centuryFromYear(1601) // returns 17
// centuryFromYear(2000) // returns 20
// Hope you enjoy it .. Awaiting for Best Practice Codes hahaha ..

// Enjoy Learning !!!

///////////////////////////////////////////////////////
//22
// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

///////////////////////////////////////////////////////
//23
// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

///////////////////////////////////////////////////////
//24
// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to miliseconds.
//
// #####Example:
//
// past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

///////////////////////////////////////////////////////
//25
// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

///////////////////////////////////////////////////////
//26
// An AI has infected a text with a character!!
//
// This text is now fully mutated to this character.
//
// If the text or the character are empty, return an empty string.
// There never will be a case when both are empty as nothing is going on!!
//
// The character is a string. It will always be of length 1 if it's not empty.
//
// Example:
//
// before = "abc"
// character = "z"
// after = "zzz"