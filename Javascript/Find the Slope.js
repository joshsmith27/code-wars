// https://www.codewars.com/kata/find-the-slope/train/javascript
function slope(points)
{
    const badThings = ["Infinity", 'NaN', "-Infinity"]
    const num = (points[1] - points[3])/(points[0] - points[2]);
    return badThings.includes(num.toString())  ? 'undefined' : num.toString()
}