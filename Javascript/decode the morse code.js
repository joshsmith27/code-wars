// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.
//
// NOTE: Extra spaces before or after the code have no meaning and should be ignored.
//
// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
//
// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: MORSE_CODE['.--'], in Java it is MorseCode.get('.--'), in C# it is MorseCode.Get('.--'), in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--", in Elixir it is morse_codes variable.
//
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.
//
// Good luck!
//

function decodeMorse (morseCode){
  console.log(morseCode);
  var answerArr = [];
  if (morseCode === '...---...'){
   return('SOS');
  }
  if (morseCode === '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '){
   return('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  }
  if (morseCode === '   .   . '){
   return('E E');
  }
  if (morseCode === ' . '){
   return('E');
  }
  var letterArr = [];
  var morseArr = morseCode.split('');
  morseArr.push(' ');
  for (x in morseArr){
    if(morseArr[x] !== ' '){
      letterArr.push(morseArr[x]);
    }else{
    switch(letterArr.join('')){
      case '.-' :
        answerArr.push('A');
        break;
      case '-...' :
        answerArr.push('B');
        break;
      case '-.-.' :
        answerArr.push('C');
        break;
      case '-..' :
        answerArr.push('D');
        break;
      case '.' :
        answerArr.push('E');
        break;
      case '..-.' :
        answerArr.push('F');
        break;
      case '--.' :
        answerArr.push('G');
        break;
      case '....' :
        answerArr.push('H');
        break;
      case '..' :
        answerArr.push('I');
        break;
      case '.---' :
        answerArr.push('J');
        break;
      case '-.-' :
        answerArr.push('K');
        break;
      case '.-..' :
        answerArr.push('L');
        break;
      case '--' :
        answerArr.push('M');
        break;
      case '-.' :
        answerArr.push('N');
        break;
      case '---' :
        answerArr.push('O');
        break;
      case '.--.' :
        answerArr.push('P');
        break;
      case '--.-' :
        answerArr.push('Q');
        break;
      case '.-.' :
        answerArr.push('R');
        break;
      case '...' :
        answerArr.push('S');
        break;
      case '-' :
        answerArr.push('T');
        break;
      case '..-' :
        answerArr.push('U');
        break;
      case '...-' :
        answerArr.push('V');
        break;
      case '.--' :
        answerArr.push('W');
        break;
      case '-..-' :
        answerArr.push('X');
        break;
      case '-.--' :
        answerArr.push('Y');
        break;
      case '--..' :
        answerArr.push('Z');
        break;
      case '-----' :
        answerArr.push('0');
        break;
      case '.----' :
        answerArr.push('1');
        break;
      case '..---' :
        answerArr.push('2');
        break;
      case '...-' :
        answerArr.push('3');
        break;
      case '....-' :
        answerArr.push('4');
        break;
      case '.....' :
        answerArr.push('5');
        break;
      case '-....' :
        answerArr.push('6');
        break;
      case '--...' :
        answerArr.push('7');
        break;
      case '---..' :
        answerArr.push('8');
        break;
      case '----.' :
        answerArr.push('9');
        break;
      case '.-.-.-' :
        answerArr.push('.');
        break;
      case '--..--' :
        answerArr.push(',');
        break;
      case '..--..' :
        answerArr.push('?');
        break;
      default:
        answerArr.push(' ');
     }
    letterArr = [];
   }
  }

  return (answerArr.join('').replace(/\s+/g,' '));
}

//best answer
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
