const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateJump(locations, jumpLength) {
	/*
  You will be given an array containing string representations of the locations of a cat and a mouse. 
  You will also be given a positive integer which represents how far the cat can jump.

  Your task is to calculate if the cat can jump far enough to catch the mouse. 
  Each space "x" in the array expends 1 from the cat's movement.
  It does not matter if the cat is before or after the mouse in the array.

  E.g.
    calculateJump(["cat", "mouse"], 5) 
    // => true
  */
  let catIndex = 0;
  let mouseIndex = 0;

    for (let i = 0; i < locations.length; i++) {
      if (locations[i] === "cat") {
        catIndex = i;
      }
      if(locations[i] === "mouse") {
        mouseIndex = i;
      }
    }

    let difference = catIndex - mouseIndex

      if (difference < 0) {
      difference = - difference;
      }

    return jumpLength >= difference ? true :false;
}


runTest("when jumpLength is 0", function () {
    //Arrange
    const locations = ["x", "x", "cat", "x", "x", "x", "mouse"];
    //Act
    const jumpLength = calculateJump(locations, 0);
    //Assert
    check(jumpLength).isEqualTo(false);
	}
);

runTest("when jumpLength is less than the distance between the cat and the mouse", function () {
  //Arrange
  const locations = ["x", "x", "cat", "x", "x", "x", "mouse"];
  //Act
  const jumpLength = calculateJump(locations, 1);
  //Assert
  check(jumpLength).isEqualTo(false);
}
);

runTest("when jumpLength is isEqualTo than the distance between the cat and the mouse", function () {
  //Arrange
  const locations = ["x", "x", "cat", "x", "x", "x", "mouse"];
  //Act
  const jumpLength = calculateJump(locations, 4);
  //Assert
  check(jumpLength).isEqualTo(true);
}
);

runTest("when jumpLength is greater than the distance between the cat and the mouse", function () {
  //Arrange
  const locations = ["x", "x", "cat", "x", "x", "x", "mouse"];
  //Act
  const jumpLength = calculateJump(locations, 6);
  //Assert
  check(jumpLength).isEqualTo(true);
}
);

runTest("when jumpLength is greater than the distance between the cat and the mouse", function () {
  //Arrange
  const locations = ["mouse", "x", "x", "x", "x", "cat", ];
  //Act
  const jumpLength = calculateJump(locations, 7);
  //Assert
  check(jumpLength).isEqualTo(true);
}
);

// ...and add more test blocks down here!

(["x", "x", "cat", "x", "x", "x", "mouse"], 4)