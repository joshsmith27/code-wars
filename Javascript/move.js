// Write a JavaScript function to move an array element from one position to another.
// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }


    while (new_index < 0) {
        new_index += arr.length;
    }

    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
}
// const move = (arr, start, end) => {
//     start = start >= 0 ? start : arr.length + start
//     end = end >= 0 ? end : arr.length + end
//     const toBeMove = arr[start];

//     return arr.reduce((r, e, i, a)=>{

//         if(i === end){
//             r.push(toBeMove)
//         } 

//         if(i !== start){
//             r.push(e)
//         }

       

//         return r
//     }, [])
// }

console.log(move([10, 20, 30, 40, 50], 2, 0))
// [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], 7, 2))
// [10, 20, undefined 30, 40, 50]
console.log(move([10, 20, 30, 40, 50], 0, 5))
// [20, 30, 40, 50, undefined, 10,]
console.log(move([10, 20, 30, 40, 50], -9, -2));
// [10, 20, 30, 50, 40]
