// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

function peopleWithAgeDrink(old) {
    if(old >= 21){
      return "drink whisky"
    }else if(old < 21 && old >= 18){
      return "drink beer"
    }else if(old < 18 && old > 13){
      return "drink coke"
    }else if(old < 18 && old > 13){
      return "drink coke"
    }else if(old <= 13){
      return "drink toddy"
    }
  };