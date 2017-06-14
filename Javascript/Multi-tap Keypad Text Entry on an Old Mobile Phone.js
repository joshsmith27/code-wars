// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.
//
// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.
//
// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.
//
// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.
//
// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).
function presses(phrase) {
  var phraseArr = phrase.split('');
  var clicks = 0;
  for(var x in phraseArr){
    phraseArr[x] = phraseArr[x].toUpperCase();
    switch(phraseArr[x]){
      case 'A':
      clicks = clicks + 1;
      break;

      case 'B':
      clicks = clicks + 2;
      break;

      case 'C':
      clicks = clicks + 3;
      break;

      case 'D':
      clicks = clicks + 1;
      break;

      case 'E':
      clicks = clicks + 2;
      break;

      case 'F':
      clicks = clicks + 3;
      break;

      case 'G':
      clicks = clicks + 1;
      break;

      case 'H':
      clicks = clicks + 2;
      break;

      case 'I':
      clicks = clicks + 3;
      break;

      case 'J':
      clicks = clicks + 1;
      break;

      case 'K':
      clicks = clicks + 2;
      break;

      case 'L':
      clicks = clicks + 3;
      break;

      case 'M':
      clicks = clicks + 1;
      break;

      case 'N':
      clicks = clicks + 2;
      break;

      case 'O':
      clicks = clicks + 3;
      break;

      case 'P':
      clicks = clicks + 1;
      break;

      case 'Q':
      clicks = clicks + 2;
      break;

      case 'R':
      clicks = clicks + 3;
      break;

      case 'S':
      clicks = clicks + 4;
      break;

      case 'T':
      clicks = clicks + 1;
      break;

      case 'U':
      clicks = clicks + 2;
      break;

      case 'V':
      clicks = clicks + 3;
      break;

      case 'W':
      clicks = clicks + 1;
      break;

      case 'X':
      clicks = clicks + 2;
      break;

      case 'Y' :
      clicks = clicks + 3;
      break;

      case 'Z':
      clicks = clicks + 4;
      break;
      case '0':
      clicks = clicks + 2;
      break;
      case '1':
      clicks = clicks + 1;
      break;
      case '2':
      clicks = clicks + 4;
      break;
      case '3':
      clicks = clicks + 4;
      break;
      case '4':
      clicks = clicks + 4;
      break;
      case '5':
      clicks = clicks + 4;
      break;
      case '6':
      clicks = clicks + 4;
      break;
      case '7':
      clicks = clicks + 5;
      break;
      case '8':
      clicks = clicks + 4;
      break;
      case '9':
      clicks = clicks + 5;
      break;

      default:
      clicks =clicks + 1;
     }
   }
return clicks;
}

function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;

  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });

  return total;

}
