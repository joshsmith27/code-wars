// function subsetString(str) 
// {
//   var subset = [];
//   for (var m = 0; m < str.length; m++) 
//   {
//     for (var n = m+1; n<str.length+1; n++) 
//     {
//        console.log(str.slice()) 
//       subset.push(str.slice(m,n));
//     }
//   }
//   return subset;
// };

// const subsetString = (str) => {
//     return str.split('').reduce((r, e, i, a)=>{
//         a.forEach((e, j) => {
//             r.push(str.substring(i, j +1))
//         });
//         return r
//     }, [])
// }
const arrNums = [1,2,3,4,5,6,7]

let sum = 0;

console.log(arrNums.reduce((r, e)=>{
    r+=e
    return r
}, 0))

