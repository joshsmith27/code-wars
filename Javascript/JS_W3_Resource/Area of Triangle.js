//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.


const triangleArea = (a, b, c) => {
    const perimeter = (a + b + c) / 2;
    return Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
}

console.log(10 + 1 + 2)