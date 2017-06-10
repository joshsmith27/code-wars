// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2) {
    var array1 = str1.split("").sort();
    var array2 = str2.split("").sort();
    var i = 0;
    for(var x = 0; i<array2.length && x<=array1.length; x++) {
        if(array2[i] === array1[x]) {
            i++;
        }
    }
    return (x <= array1.length);
}
