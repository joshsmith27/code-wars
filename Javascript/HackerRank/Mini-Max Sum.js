// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.

// For example, .Our minimum sum is  and our maximum sum is.We would print

// 16 24

function miniMaxSum(arr) {
    const sA = arr.sort((a, b) => { return a - b });
    const sAL = sA.length;
    const small = (sA[0] + sA[1] + sA[2] + sA[3]);
    const large = (sA[sAL - 1] + sA[sAL - 2] + sA[sAL - 3] + sA[sAL - 4])
    console.log(small, large);
}