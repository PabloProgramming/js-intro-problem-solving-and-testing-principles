const { check, runTest, skipTest } = require("../test-api/index.js");

function consecutiveItems(integers, a, b) {
/*
You are given a list of unique integers arr, and two integers a and b. 
Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/
}

runTest(
  "returns true when the given numbers are consecutive",
  function () {
    check(consecutiveItems([1, 2, 3, 4], 1, 2)).isEqualTo(true);
    check(consecutiveItems([1, 2, 3, 4], 2, 3)).isEqualTo(true);
    check(consecutiveItems([1, -12, 4, 11, , 58, -111, 3], -111, 3)).isEqualTo(true);
  }
);

skipTest(
  "returns false when the given numbers are not consecutive",
  function () {
    check(consecutiveItems([1, 2, 3, 4], 1, 3)).isEqualTo(false);
    check(consecutiveItems([1, 16, -7, 90, -8], 16, -8)).isEqualTo(false);
  }
);
