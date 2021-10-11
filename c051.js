// This is a code with a 100% pass rate.
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const INPUTS = lines[0].split(/\s/).map(String);
  const permutation = (array) => {
    let result = [];
    if (array.length === 1) {
      result.push(array);
      return result;
    }
    for (let i = 0; i < array.length; i += 1) {
      const firstElem = array.slice(i, i + 1);
      const restElem = [
        ...array.slice(0, i),
        ...array.slice(i + 1),
      ];
      let innerPermutations = permutation(restElem);
      for (let j = 0; j < innerPermutations.length; j += 1) {
        result.push([...firstElem, ...innerPermutations[j]]);
      }
    }
    return result;
  };
  const permutationResult = permutation(INPUTS);
  let sumResult = [];
  for (let i = 0; i < permutationResult.length; i += 1) {
    let leftCard  = Number(permutationResult[i][0] + permutationResult[i][1]),
        rightCard = Number(permutationResult[i][2] + permutationResult[i][3]),
        sumCard   = leftCard + rightCard;
    sumResult.push(sumCard);
  }
  let maxValue = sumResult.reduce((a,b) => { return Math.max(a, b) });
  console.log(maxValue);
});