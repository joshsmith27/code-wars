// https://www.codewars.com/kata/count-by-x/train/javascript

function something(multiple, number){
    const answer = [];
    for(let i = multiple; i <= number; i+= multiple){
        answer.push(i)
    }
    return answer;
  }
