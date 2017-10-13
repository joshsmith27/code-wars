// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.
//
// Example:
//
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverseWords "An example!"    -- "nA !elpmaxe"
// reverseWords "double  spaces" -- "elbuod  secaps"

function reverseWords(str) {
  return str.split(' ').map((e)=>{
    return e.split('').reverse().join('');
  }).join(' ')
}
