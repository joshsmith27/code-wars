// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.
//
// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.
//
//
// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.
//
// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
//
// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
function validateBattlefield(field) {
  var count = [0,0,0,0], coord = [[],[],[],[]], hash = {}, i;

  var transposedField = Object.keys(field[0]).map(function(c) {
    return field.map(function(r) {return r[c];});
  }); // transposes field matrix for easy column traversal

  for (i = 0; i < 10; i++) {
    identifyRow(field[i].join(''), false, coord, i);
    identifyRow(transposedField[i].join(''), true, coord, i);
  } // find positions of ships and save them into coords.

  for(i = 0; i < coord[3].length; i++) {
    hash[coord[3][i]] = i;
  } // create hash for searching arrays of coordinates inside coord.

  coord[3] = coord[3].filter(function(item,index,count){
    return item[2] && hash.hasOwnProperty([item[0], item[1], false]);
  }); //filter out non-single cells. only single cell items will have the same coord with different direction.
  count = coord.map(function(item) {return item.length;}); // count the ships

  return function(a,b){return !(a < b || b < a);}(count, [1,2,3,4]) && // check ship count
    !coord.some(function(item, i) { // check diagonal edges of ships for contact
      return item.some(function(item, k) {
        var target1 = item[2] ? field[item[0] - 1] : transposedField[item[1] - 1];
        var target2 = item[2] ? field[item[0] + 1] : transposedField[item[1] + 1];
        var offset = item[2] ? item[1] - 1 : item[0] - 1; // x of y coordinate according to ship position
        return ((target1 && target1[offset]) || (target2 && target2[offset]) || //check leading edge
                (target1 && target1[offset + 5 - i]) || (target2 && target2[offset + 5 - i])); //check trailing edge
      });
  });
}

function identifyRow(rowstr, isHorizontal, coord, index) {
  var length, position, re = /1+/g, matches = [];
  while ((matches = re.exec(rowstr)) !== null) { // run greedy regular expression search until no ship is found in row
    length = matches[0].length; // length of the ship
    if (length > 4) return;
    position = matches.index; // position of the ship
    coord[4-length].push(isHorizontal ? [position, index, false] : [index, position, true]); //save position and direction
  }
}
