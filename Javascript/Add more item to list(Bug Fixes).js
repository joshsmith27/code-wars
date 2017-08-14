// #Bug Fixing Kata
//
// Here we have a method that add a new item to the list of integers. The number can be any number, and it does not matter.
//
// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
//
// P.S. You have to create a new list and add the new item to that. Adding a new item to the input list is not going to work. However it is not the whole story.

function addExtra( listOfNumbers ){
  var finalList = [];
  for (var i = 0; i <= listOfNumbers.length; i++){
    finalList.push(listOfNumbers[i]);
  }
  return finalList;
}

//best answer
