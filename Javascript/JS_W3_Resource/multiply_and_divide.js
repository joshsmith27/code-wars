// Write a JavaScript program to calculate multiplication and division of two numbers

const multDiv = (num1, num2, operator) => {
    return operator == `divide` ? num1 / num2 : num1 * num2;
}