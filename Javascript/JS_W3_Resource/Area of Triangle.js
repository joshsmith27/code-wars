const triangleArea = (a, b, c) => {
    const perimeter = (a + b + c) / 2;
    return Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
}

console.log(10 + 1 + 2)