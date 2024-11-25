const { check, runTest, skipTest } = require("../test-api/index.js");

function partyPropCheck(stock, colour) {
	/*
  Its nearly party time! But how many items do we have to fit the colour scheme? 

  You will be given a stock object, and a colour. Return the number of items which match the given colour. The colour "rainbow" is a match for all colours.
  */
}

runTest("counts the props when only one item is in stock", function () {
	// Arrange
	const stock = {
		balloons: {
			purple: 3,
		},
	}

	// Act
	const result = partyPropCheck( stock, "purple" )
	
	// Assert
	check(result).isEqualTo(3);
});

skipTest(
	"change this to describe the behaviour you are testing in this block", function () {
		// ...add check() assertions here
	}
);

// ...and add more test blocks down here!
