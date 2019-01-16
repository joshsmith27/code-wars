// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

const theFirst = (year1, year2) => {

    if(year1 > year2) return `Whoa bro the first year has to be less then the second year.`;
    for(let i = year1; i <= year2; i++){
        if (new Date(`01/01/${i}`).getDay() === 0){
            return i
        }
    }
    return `Sorry Bro This year range doesn't have one man!`
}