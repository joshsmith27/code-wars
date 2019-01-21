// Write a JavaScript program to calculate days left until next Christmas.

const daysUntilChristmas = () => {
    const date = new Date();
    const todaysTime = date.getTime();

    const christmas = new Date(`12/25/${date.getFullYear()}`);
    const christmasTime = christmas.getTime();

    if (christmasTime < todaysTime) {
        const christmasNextYear = new Date(`12/25/${date.getFullYear() + 1}`);
        const christmasTimeNextYear = christmasNextYear.getTime();
        return Math.ciel((christmasTimeNextYear - todaysTime) / 1000 / 60 / 60 / 24);
    } else {
        return Math.ciel((christmasTime - todaysTime) / 1000 / 60 / 60 / 24);
    }
}

console.log()