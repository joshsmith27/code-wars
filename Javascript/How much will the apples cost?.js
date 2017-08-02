// Buying in bulk is often cheaper than buying individual items. You will have to determine the total cost of apples. Write a function called apples that takes the arguments kilos and price. Purchases of 1 or more kilograms get a discount of 5%, purchases of 3 or more kilograms get a discount of 10%, purchases of 5 or more kilograms get a discount of 15%, and so on until you reach the maxium discount of 30%.

function apples(kilos, price) {
  var cost = price * kilos;
  var discount = 0;
  if(kilos >=11){
    discount = cost * 0.30;
  }else if(kilos >= 9){
    discount = cost * 0.25;
  }else if(kilos >= 7){
    discount = cost * 0.20;
  }else if(kilos >= 5){
    discount = cost * 0.15;
  }else if(kilos >= 3){
    discount = cost * 0.10;
  }else if(kilos >= 1){
    discount = cost * 0.05;
  }
return cost - discount;
}


// best answer
function apples(k, p) {
  return k * p * (1 - 0.05 * Math.floor((1 + k) / 2));
}
