const { check, runTest, skipTest } = require("../test-api/index.js");

function carrotCropCount(gardenPatch) {
	/*
  Spring came, the desire to have a veggie garden overwhelmed you and so you planted some seeds. Now they are all grown, how many are carrots?

  You are given a garden patch represented by a nested array. Count the total number of carrots found, and return it.
  */
}

runTest("counts the carrots when there are only carrots present", function () {
	check(carrotCropCount([["carrot"]])).isEqualTo(1);
	// add more check() assertions here
});

skipTest(
	"change this to describe the behaviour you are testing in this block",
	function () {
		// ...add check() assertions here
	}
);

// ...and add more test blocks down here!
