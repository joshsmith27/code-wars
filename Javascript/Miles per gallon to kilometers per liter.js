// https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter/train/javascript


function converter (mpg) {
    const gallon = 4.54609188;
    const kilometers = 1.609344;
    return (mpg * kilometers / gallon).toFixed(2);
  }
