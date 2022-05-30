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
  const DATA = lines,
        [DATA_COUNT, RACE_COUNT] = DATA[0].split(/\s/).map(Number);

  let totalRaceLogArr = [];
  for (let i = 0; i < DATA.length - 1; i += 1) {
    totalRaceLogArr.push(Number(DATA[i + 1]));
  }

  let raceLogArr = [];
  let logCounter = 0;
  for (let i = 0; i < DATA.length - 1; i += DATA_COUNT) {
    logCounter += DATA_COUNT;
    raceLogArr.push(totalRaceLogArr.slice(i, logCounter));
  }

  let raceLogA = raceLogArr[0],
      raceLogB = raceLogArr[1],
      raceLogC = raceLogArr[2];

  let raceResultA = [],
      raceResultB = [],
      raceResultC = [];

  function getScoreArr(inputArr, outputArr) {
    let scoreCounter = RACE_COUNT;
    for (let i = 0; i < DATA_COUNT - RACE_COUNT + 1 ; i += 1) {
      let sum = 0;
      let average = 0;

      let range = inputArr.slice(i, scoreCounter);
      sum = range.reduce((a, b) => a + b);
      average = sum / RACE_COUNT;

      outputArr.push(average);
      scoreCounter += 1;
    }
    return outputArr;
  }

  const minValue = (a, b) => { return Math.min(a, b); }
  function getMinScore(arr) {
    const MIN_SCORE = arr.reduce(minValue);
    return MIN_SCORE;
  }

  let minValueA = getMinScore(getScoreArr(raceLogA, raceResultA));
  let minValueB = getMinScore(getScoreArr(raceLogB, raceResultB));
  let minValueC = getMinScore(getScoreArr(raceLogC, raceResultC));

  if (minValueA < minValueB && minValueA < minValueC) console.log(1);
  else if (minValueB < minValueA && minValueB < minValueC) console.log(2);
  else if (minValueC < minValueA && minValueC < minValueB) console.log(3);

});