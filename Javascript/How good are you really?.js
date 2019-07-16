// https://www.codewars.com/kata/how-good-are-you-really/train/javascript

function betterThanAverage(classPoints, yourPoints) {
    const average = classPoints.reduce((r, e) => {return r+=e}, 0) / classPoints.length
    return yourPoints > average 
  }
  