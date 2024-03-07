const { check, runTest, skipTest } = require("../test-api/index.js");

function partyPropCheck(stock, colour) {
  /*
  Its nearly party time! But how many items do we have to fit the colour scheme? 

  You will be given a stock object, and a colour. Return the number of items which match the given colour. The colour "rainbow" is a match for all colours.
  */
}

runTest(
  "counts the props when only one item is in stock",
  function () {
    check(partyPropCheck({balloons: {
      purple: 3, 
    }, }, 'purple')).isEqualTo(3);
    check(partyPropCheck({balloons: {
      purple: 3, 
    }}, 'green')).isEqualTo(0);
    check(partyPropCheck({balloons: {
      purple: 3, 
      green: 1,
      red: 30, 
    }}, 'red')).isEqualTo(30);
  }
);

skipTest(
  "counts the items where multiple items are in the stock",
  function () {
    check(partyPropCheck({balloons: {
      purple: 3, 
    }, ribbons: {
      green: 12,
      black: 4,
    }}, 'purple')).isEqualTo(3);
    check(partyPropCheck({balloons: {
      purple: 3, 
    }, ribbons: {
      green: 12,
      black: 4,
    }}, 'green')).isEqualTo(12);
    check(partyPropCheck({balloons: {
      purple: 3, 
      green: 1,
      red: 30, 
    }, ribbons: {
      green: 12,
      black: 4,
    }}, 'green')).isEqualTo(13);
  }
);

skipTest(
  "counts rainbow items in addition to those of specific",
  function () {
    check(partyPropCheck({balloons: {
      purple: 3, 
    }, ribbons: {
      rainbow: 5,
      green: 12,
      black: 4,
    }}, 'purple')).isEqualTo(8);

    const stock = {
      balloons: {
        purple: 3, 
        green: 1,
        red: 30,
        blue: 11,
        gold: 4
      },
      ribbons: {
        rainbow: 5,
        green: 12,
        black: 4,
        blue: 45
      },
      confetti: {
        gold: 32,
        rainbow: 5,
        red: 1,
        silver: 13
      }
    }
    check(partyPropCheck(stock, 'green')).isEqualTo(23);
  }
);

