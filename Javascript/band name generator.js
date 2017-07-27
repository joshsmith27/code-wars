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
function bandNameGenerator(str) {
  if(str[0] !== str[str.length-1]){
    return "The " + str.charAt(0).toUpperCase() + str.slice(1);
  }else{
    return str.charAt(0).toUpperCase() + str.slice(1) + str.slice(1);
  }
}

// best answer
const bandNameGenerator = s => s[0] != s[s.length-1] ? "The " + s[0].toUpperCase() + s.slice(1) :
       s[0].toUpperCase() + s.slice(1) + s.slice(1);
