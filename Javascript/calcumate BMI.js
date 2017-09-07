// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var BodyMassIndex = weight/ Math.pow(height, 2);
  var answer = "";
  if(BodyMassIndex<=18.5){
    answer = "Underweight";
  }else if(BodyMassIndex<=25.0){
    answer = "Normal";
  }else if (BodyMassIndex<=30.0) {
    answer = "Overweight";
  }else if(BodyMassIndex>30.0){
    answer = "Obese";
  }

  return answer;
}
