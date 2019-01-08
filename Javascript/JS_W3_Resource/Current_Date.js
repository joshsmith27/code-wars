// Write a JavaScript program to get the current date.
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy

const currentDate = () => {
    return new Date().toLocaleDateString('en-us')
}

console.log(currentDate())