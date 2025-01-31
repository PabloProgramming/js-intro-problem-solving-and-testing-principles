const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateJump(locations, jumpLength) {

  let catIndex = locations.indexOf("cat");
  let mouseIndex = locations.indexOf("mouse");

    let extraJump = 0;
      
      for (let i = 0; i <locations.length; i++){
            
        if (locations[i] === 'W' ) {
                extraJump++;
        }
      }

  let difference = catIndex - mouseIndex;
  
    if (difference < 0) {
      difference = - difference;
    }
        
    const jumpDist = difference + extraJump
  
  return jumpLength >= jumpDist ? true :false;

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

