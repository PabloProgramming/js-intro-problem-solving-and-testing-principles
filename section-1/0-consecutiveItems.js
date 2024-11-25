const { check, runTest, skipTest } = require("../test-api/index.js");

function consecutiveItems(integers, a, b) {
	/*
You are given a list of unique integers arr, and two integers a and b. 
Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/
}

runTest("returns true when the given numbers are consecutive", function () {
	// Arrange
	const numsToCheck = [1, 2]

	// Act
	const result = consecutiveItems(numsToCheck, 1, 2)

	// Assert
	check(result).isEqualTo(true);
});

runTest("returns true when the given numbers are consecutive for a larger array", function () {
	// Arrange
	const numsToCheck = [5, 2, 3, 12]

	// Act
	const result = consecutiveItems(numsToCheck, 2, 3)

	// Assert
	check(result).isEqualTo(true);
});

// populate the different steps for the next condition
skipTest("returns false when the given numbers are not consecutive", function () {
	// Arrange

	// Act

	// Assert
});


// ...and add more test blocks down here!
