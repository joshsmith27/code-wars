// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = nums => {
    return nums.reduce((r, e)=>{
        return r ^ e 
    }, 0)
}

console.log(stray([17, 17, 11, 17, 17, 17, 17]))