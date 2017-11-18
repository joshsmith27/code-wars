// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
    var arr =  str.split('').reverse().join('');
    var answer = arr.split(' ').map((e) =>{
       return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
     })
     return answer.join(' ');
   }