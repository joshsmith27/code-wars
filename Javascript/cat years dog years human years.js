// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const humanYearsCatYearsDogYears = (humanYears)=>{
    if(humanYears > 1){
     let cat = 15 +  9 + ((humanYears - 2) * 4 );
     let dog =  15 +  9 + ((humanYears - 2) * 5 );
     return [humanYears, cat , dog];
    }else{
      return [humanYears, 15 , 15];
    }
  }