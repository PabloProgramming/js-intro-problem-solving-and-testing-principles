const { check, runTest, skipTest } = require("../test-api/index.js");

// cat and mouse positions with multiple mice, how many would the cat catch

// cat move and mouse move, place to hide

function calculateJump(locations, jumpLength){
/*
You will be given an array containing string representations of the locations of a cat and a mouse. The array may also contains walls represented by "W".
You will also be given a positive integer which represents how far the cat can jump.

Your task is to calculate if the cat can jump far enough to catch the mouse. 

Each space "x" expends 1 of the cat's movement, and each wall "W" expends 2. 
It does not matter if the cat is before or after the mouse in the array.
*/
}

runTest(
  "cat catches the mouse when it's closer than the jump length",
  function () {
    check(calculateJump(['cat', 'W', 'mouse'], 5)).isEqualTo(true);
    check(calculateJump(['cat', 'x', 'x', 'mouse'], 3)).isEqualTo(true);
    check(calculateJump(['x', 'mouse', 'W', 'x', 'cat'], 4)).isEqualTo(true);
  }
);

skipTest(
  "cat fails to catch the mouse when jump length is smaller than distance",
  function () {
    check(calculateJump(['cat', 'W', 'mouse'], 2)).isEqualTo(false);
    check(calculateJump(['x', 'cat', 'x', 'x','mouse'], 2)).isEqualTo(false);
    check(calculateJump(['mouse', 'x', 'W', 'x', 'W','cat'], 5)).isEqualTo(false);
  }
);