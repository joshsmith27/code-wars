// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

const randomNumberGuesser = (num) => {
   return Number(prompt(`Guess a number between 1 and 10`)) === num ?  `Good work` : `Not match, the number was ${num}`; 
}

