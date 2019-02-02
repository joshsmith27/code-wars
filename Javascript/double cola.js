// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.

// Input
// The input data consist of an array which contains at least 1 name, and single integer n.

// 1  ≤  n  ≤  10000000000
// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

function whoIsNext(names, r){
    for(var i = 0; i < names.length; i++){
      if(i === r - 1){
        return names[i]
      }else{
        names.push(names[i], names[i])    
      }
    }
  }

  function whoIsNext(names, r){

    var numOfGeeks = names.length;
    var loga = Math.log((r/numOfGeeks)+1) / Math.log(2);
    var completeCycles = Math.floor(loga)
    var fullCycleColas = (Math.pow(2,completeCycles)-1) * numOfGeeks;
    var currCycleSize  =  Math.pow(2,completeCycles)    * numOfGeeks;
    var geekCode = Math.ceil((r - fullCycleColas)/currCycleSize * numOfGeeks);
    
    return names[geekCode-1]
  }
  

  