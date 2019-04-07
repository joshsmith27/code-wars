// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

// For Example:

// By applying a move to the string "where", the result is the string "here".
// By applying a move to the string "a", the result is an empty string "".
// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

// Notes
// Both strings consist of lowercase latin letters.
// If the string is already empty, you cannot perform any more delete operations.

function shiftLeft(s, t){
    let total = s.length + t.length;
    s.split('').reverse().some((e, i )=>{
        if(e === t.split('').reverse()[i]){
         total -= 2;
         return false;
        }else{
            return true
        }
    })
    return total
  }

  console.log(shiftLeft("abacabadabacaba", "abacabadacaba"))

  //best answer

  function shiftLeft(s, t){
    return getIndex(s,t) + getIndex(t,s);
  }
  
  function getIndex(a,b) {  
    for(let i = 0; i <= a.length; i++)
      if(b.endsWith(a.substring(i, a.length)))
        return i
  }