// Write a JavaScript function to generate an array between two integers of 1 step length. 
const rangeBetween = (start, end) => {
    const answer = [];
    for (let index = start; index <= end; index++) {
        console.log(index)
        answer.push(index)
    }
    return answer;
}
// Test Data :
console.log(rangeBetween(4, 7)); 
// [4, 5, 6, 7]
console.log(rangeBetween(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

