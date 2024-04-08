const { check, runTest, skipTest } = require("../test-api/index.js");

// cat move and mouse move, place to hide

function calculateJump(locations, catJumpLength, mouseRunLength){
/*
You will be given an array containing string representations of the locations of a cat and multiple mice. Hiding holes for mice are represented by "O".
You will also be given one positive integer which represents how far the cat can jump, and a second one representing how far the mouse can move.

Your task is to determine if the cat can catch the mouse before it hides. 

Each space "x" expends 1 of the cat's and mouse's movement. 
The cat and mouse moce simultaneously, so the cat has to catch the mouse before the mouse would go over to a hole "O".
*/
}

runTest(
  "cat catches the mouse when its closer to it than the mouse to the escape",
  function () {
    check(calculateJump(['cat', 'mouse', 'x', 'O'], 5, 1)).isEqualTo(true);
    check(calculateJump(['cat', 'x', 'x', 'mouse', 'x', 'x', 'x', 'O'], 3, 2)).isEqualTo(true);
    check(calculateJump(['O', 'x', 'x', 'mouse', 'x', 'cat'], 3, 1)).isEqualTo(true);
  }
);

skipTest(
  "cat fails to catch the mouse when the mouse is closer, or same distance to escape",
  function () {
    check(calculateJump(['x', 'cat', 'x', 'mouse', 'O'], 2, 1)).isEqualTo(false);
    check(calculateJump(['cat', 'x', 'x', 'O', 'x', 'x', 'mouse'], 3, 3)).isEqualTo(false);
  }
);
