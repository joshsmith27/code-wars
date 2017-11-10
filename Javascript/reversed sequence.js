// Get the number n to return the reversed sequence from n to 1.

// Example : n==5 >> [5,4,3,2,1]

const reverseSeq = n => {
	var answer = [];
	for(var i = n; i > 0; i--){
		answer.push(i);
	}
	return answer;
};