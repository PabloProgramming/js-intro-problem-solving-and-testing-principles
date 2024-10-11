const { check, runTest, skipTest } = require("../test-api/index.js");

function consecutiveItems(integers, a, b) {
	/*
You are given a list of unique integers arr, and two integers a and b. 
Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/
}

runTest("returns true when the given numbers are consecutive", function () {
	check(consecutiveItems([1, 2, 3, 4], 1, 2)).isEqualTo(true);
	// add more check() assertions here
});

skipTest(
	"change this to describe the behaviour you are testing in this block",
	function () {
		// ...add check() assertions here
	}
);

// ...and add more test blocks down here!
