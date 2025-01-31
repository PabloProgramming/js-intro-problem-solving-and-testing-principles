const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateJump(locations, jumpLength) {
	/*
  You will be given an array containing string representations of the locations of a cat and a mouse. The array may also contains walls represented by "W".
  You will also be given a positive integer which represents how far the cat can jump.

  Your task is to calculate if the cat can jump far enough to catch the mouse. 

  Each space "x" expends 1 of the cat's movement, and each wall "W" expends 2. 
  It does not matter if the cat is before or after the mouse in the array.

  E.g. 
    calculateJump(["cat", "W", "mouse"], 5)
    // => true
  */

    let catIndex = locations.indexOf('cat');
    let mouseIndex = locations.indexOf('mouse');
    let extraJump = 0
      
      for(let i = 0; i <locations.length; i++)
        {
            if(location[i] === 'W' )
              {
                extraJump++
              }
        }
console.log(extraJump, "<<looooooogggg")

      let difference = catIndex - mouseIndex
  
        if (difference < 0) {
        difference = - difference;
        }
        
        const jumpDist = difference + extraJump

        
      console.log(catIndex, mouseIndex, jumpLength, difference,"<< logggggggg")
  
      return jumpLength >= jumpDist ? true :false;


}

runTest(
	"when jumpLength is 0", function () {

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
const locations = ["x", "x", "cat", "x", "W", "x", "mouse"];
//Act
const jumpLength = calculateJump(locations, 1);
//Assert
check(jumpLength).isEqualTo(false);
}
);

runTest("when jumpLength is sufficient to reach the mouse but there is a Wall inbetween  ", function () {

  //Arrange
  const locations = ["x", "x", "cat", "x", "W", "x", "mouse"];
  //Act
  const jumpLength = calculateJump(locations, 4);
  //Assert
  check(jumpLength).isEqualTo(false);
  }
  );
runTest("when jumpLength is isEqualTo than the distance between the cat and the mouse & does not have a Wall inbetween", function () {

//Arrange
const locations = ["x", "x", "cat", "x", "x", "x", "mouse"];
//Act
const jumpLength = calculateJump(locations, 4);
//Assert
check(jumpLength).isEqualTo(true);
}
);

runTest("when jumpLength is isEqualTo than the distance between the cat and the mouse & has a Wall inbetween", function () {

  //Arrange
  const locations = ["x", "x", "cat", "W", "x", "mouse"];
  //Act
  const jumpLength = calculateJump(locations, 4);
  //Assert
  check(jumpLength).isEqualTo(true);
  }
  );
runTest("when jumpLength is greater than the distance between the cat and the mouse", function () {

//Arrange
const locations = ["x", "x", "cat", "x", "x", "W", "mouse"];
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

