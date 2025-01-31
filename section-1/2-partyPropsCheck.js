const { check, runTest, skipTest } = require("../test-api/index.js");

function partyPropCheck(stock, colour) {
	/*
  Its nearly party time! But how many items do we have to fit the colour scheme? 

  You will be given a stock object, and a colour. Return the number 
  of items which match the given colour. The colour "rainbow" is a match for all colours.
  */

	let counter = 0;

		for (let item in stock) {
			for (let itemColour in stock[item]) {
				if ("rainbow" === colour || itemColour === colour) {
					counter += stock[item][itemColour]
				}
			}
		}
		return counter;
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

runTest(
	"return 0 when only one item is in stock and the color does not match the item", function () {
		// Arrange
	const stock = {
		balloons: {
			purple: 3,
		},
	}

	// Act
	const result = partyPropCheck( stock, "red" )
	
	// Assert
	check(result).isEqualTo(0);
	}
);

runTest(
	"return 0 when there are multiple items in stock and the color does not match the item", function () {
		// Arrange
	const stock = {
		balloons: {
			purple: 3,
		},
		partyHats: {
			blue: 2,
		},
		partyRings: {
			yellow: 1,
		},
	}

	// Act
	const result = partyPropCheck( stock, "red" )
	
	// Assert
	check(result).isEqualTo(0);
	}
);

runTest(
	"count the props when multple items are in stock and only one match the colour given", function () {
		// Arrange
	const stock = {
		balloons: {
			purple: 3,
		},
		partyHats: {
			blue: 2,
		},
		partyRings: {
			red : 2,
		},
	}

	// Act
	const result = partyPropCheck( stock, "red" )
	
	// Assert
	check(result).isEqualTo(2);
	}
);

runTest(
	"count the props when multple items are in stock and colour given is found in more than one item", function () {
		// Arrange
	const stock = {
		balloons: {
			red: 3,
		},
		partyHats: {
			blue: 2,
		},
		partyRings: {
			red : 2,
		},
	}

	// Act
	const result = partyPropCheck( stock, "red" )
	
	// Assert
	check(result).isEqualTo(5);
	}
);

runTest(
	"count the props when multple items are in stock and colour given is found in more than one item", function () {
		// Arrange
	const stock = {
		balloons: {
			red: 3,
		},
		partyHats: {
			green: 7,
		},
		partyRings: {
			yellow : 2,
		},
		costumes: {
			green : 12,
		},
	}

	// Act
	const result = partyPropCheck( stock, "green" )
	
	// Assert
	check(result).isEqualTo(19);
	}
);

runTest(
	"count the props when multple items are in stock and colour given is found in more than one item", function () {
		// Arrange
	const stock = {
		balloons: {
			red: 3,
		},
		partyHats: {
			green: 7,
		},
		partyRings: {
			yellow : 2,
		},
		costumes: {
			green : 12,
		},
	}

	// Act
	const result = partyPropCheck( stock, "rainbow" )
	
	// Assert
	check(result).isEqualTo(24);
	}
);

// ...and add more test blocks down here!
