// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
//
// Please note that using "encode" in Python is considered cheating.

function rot13(message){
  var messageArr = message.split('');
  var newMessageArr = [];
  for(var i = 0; i < messageArr.length; i++){
  switch(messageArr[i]){
    case 'a':
      newMessageArr.push('n');
      break;
    case 'b':
      newMessageArr.push('o');
      break;
    case 'c':
      newMessageArr.push('p');
      break;
    case 'd':
      newMessageArr.push('q');
      break;
    case 'e':
      newMessageArr.push('r');
      break;
    case 'f':
      newMessageArr.push('s');
      break;
    case 'g':
      newMessageArr.push('t');
      break;
    case 'h':
      newMessageArr.push('u');
      break;
    case 'i':
      newMessageArr.push('v');
      break;
    case 'j':
      newMessageArr.push('w');
      break;
    case 'k':
      newMessageArr.push('x');
      break;
    case 'l':
      newMessageArr.push('y');
      break;
    case 'm':
      newMessageArr.push('z');
      break;
    case 'n':
      newMessageArr.push('a');
      break;
    case 'o':
      newMessageArr.push('b');
      break;
    case 'p':
      newMessageArr.push('c');
      break;
    case 'q':
      newMessageArr.push('d');
      break;
    case 'r':
      newMessageArr.push('e');
      break;
    case 's':
      newMessageArr.push('f');
      break;
    case 't':
      newMessageArr.push('g');
      break;
    case 'u':
      newMessageArr.push('h');
      break;
    case 'v':
      newMessageArr.push('i');
      break;
    case 'w':
      newMessageArr.push('j');
      break;
    case 'x':
      newMessageArr.push('k');
      break;
    case 'y':
      newMessageArr.push('l');
      break;
    case 'z':
      newMessageArr.push('m');
      break;
    case 'A':
      newMessageArr.push('N');
      break;
    case 'B':
      newMessageArr.push('O');
      break;
    case 'C':
      newMessageArr.push('P');
      break;
    case 'D':
      newMessageArr.push('Q');
      break;
    case 'E':
      newMessageArr.push('R');
      break;
    case 'F':
      newMessageArr.push('S');
      break;
    case 'G':
      newMessageArr.push('T');
      break;
    case 'H':
      newMessageArr.push('U');
      break;
    case 'I':
      newMessageArr.push('V');
      break;
    case 'J':
      newMessageArr.push('W');
      break;
    case 'K':
      newMessageArr.push('X');
      break;
    case 'L':
      newMessageArr.push('Y');
      break;
    case 'M':
      newMessageArr.push('Z');
      break;
    case 'N':
      newMessageArr.push('A');
      break;
    case 'O':
      newMessageArr.push('B');
      break;
    case 'P':
      newMessageArr.push('C');
      break;
    case 'Q':
      newMessageArr.push('D');
      break;
    case 'R':
      newMessageArr.push('E');
      break;
    case 'S':
      newMessageArr.push('F');
      break;
    case 'T':
      newMessageArr.push('G');
      break;
    case 'U':
      newMessageArr.push('H');
      break;
    case 'V':
      newMessageArr.push('I');
      break;
    case 'W':
      newMessageArr.push('J');
      break;
    case 'X':
      newMessageArr.push('K');
      break;
    case 'Y':
      newMessageArr.push('L');
      break;
    case 'Z':
      newMessageArr.push('M');
      break;
    default:
      newMessageArr.push(messageArr[i]);
      break;
    }
  }
  return newMessageArr.join('');
}

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
