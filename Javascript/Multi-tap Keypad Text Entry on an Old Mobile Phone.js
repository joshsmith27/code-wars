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
  var phaseArr = phrase.split('');
  var clicks = 0;
  console.log(phrase);
  for(var x in phaseArr){
    switch(phaseArr[x]){
      case 'A'|| 'a':
      clicks = clicks + 1;
      break;

      case 'B'|| 'b':
      clicks = clicks + 2;
      break;

      case 'C'|| 'c':
      clicks = clicks + 3;
      break;

      case 'D'|| 'd':
      clicks = clicks + 1;
      break;

      case 'E'|| 'e':
      clicks = clicks + 2;
      break;

      case 'F'|| 'f':
      clicks = clicks + 3;
      break;

      case 'G'|| 'g':
      clicks = clicks + 1;
      break;

      case 'H'|| 'h':
      clicks = clicks + 2;
      break;

      case 'I' || 'i':
      clicks = clicks + 3;
      break;

      case 'J' || 'j':
      clicks = clicks + 1;
      break;

      case 'K' || 'k':
      clicks = clicks + 2;
      break;

      case ('L'|| 'l'):
      clicks = clicks + 3;
      break;

      case 'l':
      clicks = clicks + 3;
      break;

      case 'M' || 'm':
      clicks = clicks + 1;
      break;

      case 'N' || 'n':
      clicks = clicks + 2;
      break;

      case ('O' || 'o'):
      clicks = clicks + 3;
      break;

      case ('o'):
      clicks = clicks + 3;
      break;

      case 'P'|| 'p':
      clicks = clicks + 1;
      break;

      case 'Q'|| 'q':
      clicks = clicks + 2;
      break;

      case 'R'|| 'r':
      clicks = clicks + 3;
      break;

      case 'S' || 's':
      clicks = clicks + 4;
      break;

      case 'T'|| 't':
      clicks = clicks + 1;
      break;

      case 'U' || 'u':
      clicks = clicks + 2;
      break;

      case 'V' || 'v':
      clicks = clicks + 3;
      break;

      case 'W' || 'w':
      clicks = clicks + 1;
      break;

      case 'X' || 'x':
      clicks = clicks + 2;
      break;

      case ('Y' || 'y'):
      clicks = clicks + 3;
      break;

      case ('Z' || 'z'):
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
