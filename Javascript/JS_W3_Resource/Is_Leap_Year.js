// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const checkIsLeapYear = (year) => {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0 );
}

