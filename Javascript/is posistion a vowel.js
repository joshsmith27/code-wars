// Check if it is a vowel(a, e, i, o, u,) on the n position (the second argument, only positive integer) in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }

function checkVowel(string, position) {
	if(string[position]){
		switch(string[position].toLowerCase()){
		case 'a' : 
			return true;
		case 'e' : 
			return true;
		case 'i' : 
			return true;
		case 'o' : 
			return true;
		case 'u' : 
			return true;
		default: 
			return false;
		}
	}else{
		return false;
	}
    
}