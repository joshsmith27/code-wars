// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

// For Example:

// By applying a move to the string "where", the result is the string "here".
// By applying a move to the string "a", the result is an empty string "".
// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

// Notes
// Both strings consist of lowercase latin letters.
// If the string is already empty, you cannot perform any more delete operations.

function shiftLeft(s, t){
    let answer = s.length + t.length;
    const sArr = s.split('').reverse();
    const tArr = t.split('').reverse();
    sArr.some((e, i)=>{
        if(e === tArr[i]){
             answer -= 2;
        }else{
            return true
        }
    })
    return answer;
}

// console.log(shiftLeft("test", "west"));
// console.log(shiftLeft("test", "yes"));
// console.log(shiftLeft("b", "ab"));
console.log(shiftLeft("abacabadabacaba", "abacabadacaba"));