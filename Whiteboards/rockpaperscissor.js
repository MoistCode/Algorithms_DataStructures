/*
  Find all possible combinations in a rock-paper-scissor game.
  Given rounds, find all combinations.
  Ex. 
    Input = 2
    Output = [
      'rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss
    ]
*/

const rockPaperScissor = rounds => {
  let results = [];
  let possibilities = ["r", "p", "s"];

  const getRPSCombinations = (alreadyDone, rounds) => {
    if (rounds === 0) {
      results.push(alreadyDone);
      return;
    }
    for (poss of possibilities) {
      getRPSCombinations(alreadyDone + poss, rounds - 1);
    }
  };

  getRPSCombinations("", rounds);
  return results;
};

console.log(rockPaperScissor(2));
