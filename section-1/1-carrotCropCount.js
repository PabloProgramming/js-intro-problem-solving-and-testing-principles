const { check, runTest, skipTest } = require("../test-api/index.js");

function carrotCropCount(gardenPatch) {
	/*
  Spring came, the desire to have a veggie garden overwhelmed you and so you planted some seeds. Now they are all grown, how many are carrots?

  You are given a garden patch represented by a nested array. Count the total number of carrots found, and return it.
  */

	let count = 0

	/*for(let i = 0; i < gardenPatch.length; i++)
		{
			for(let j = 0; j < gardenPatch[i].length; j++)
				{
					if(gardenPatch[i][j] === "carrot")
						{
							count++
						}											
				}			
		}
		*/
		gardenPatch.flat().filter(veggy => 
			{
				if(veggy === 'carrot')
				{
					count++
				}
			})
		
		return count
}

runTest("counts the carrots when there are only carrots present", function () {
	// Arrange
	const garden = ["carrot"]

	// Act
	const count = carrotCropCount(garden)

	// Assert
	check(count).isEqualTo(1);
});

runTest(
	"Return zero when there are no carrots present", function () {
		//Arrange
		const garden = ['tomato', 'broccoli', 'potatoes' ]
		//Act
		const count = carrotCropCount(garden)
		//Asser
		check(count).isEqualTo(0)
		// ...add check() assertions here
	}
);

runTest(
	"Return number of carrots when there are multiple items", function () {
		//Arrange
		const garden =['tomato', 'broccoli', 'potatoes', ['carrot' , 'tomato', 'carrot']]
		//Act
		const count = carrotCropCount(garden)
		//Assert

		check(count).isEqualTo(2)
	}
)
runTest(
	"Return number of carrots when there are multiple items", function () {
		//Arrange
		const garden =['tomato','carrot', 'broccoli', 'potatoes', ['carrot' , 'tomato', 'carrot','turnip']]
		//Act
		const count = carrotCropCount(garden)
		//Assert

		check(count).isEqualTo(3)
	}
)
// ...and add more test blocks down here!
