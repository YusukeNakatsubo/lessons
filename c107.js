// This is a code with a 50% pass rate.
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
//   console.log(totalRaceLogArr);

  let raceLogArr = [];
  let counter = 0;
  for (let i = 0; i < DATA.length - 1; i += DATA_COUNT) {
    counter += DATA_COUNT;
    raceLogArr.push(totalRaceLogArr.slice(i, counter));
  }
//   console.log(raceLogArr);

  function calcAverageScore(arr) {
    const SUM = arr.reduce((a, b) => a + b);
    const AVERAGE = SUM / arr.length;
    return AVERAGE;
  }

  const minValue = (a, b) => { return Math.min(a, b); }
  function calcMinScore(arr) {
    const MIN_SCORE = arr.reduce(minValue);
    return MIN_SCORE;
  }

  let resultArr = [];
  for (let i = 0; i < raceLogArr.length; i += 1) {
    let counter = RACE_COUNT,
        calcRaceLogArr = [],
        calcResult;
    for (let j = 0; j < RACE_COUNT; j += 1) {
      let tmpRaceLog = raceLogArr[i];
      let raceLog = tmpRaceLog.slice(j, counter);
      calcRaceLogArr.push(calcAverageScore(raceLog));
      counter += 1;
    }
    calcResult = calcMinScore(calcRaceLogArr);
    resultArr.push(calcResult);
  }
//   console.log(resultArr);

  let result = resultArr.indexOf(calcMinScore(resultArr)) + 1;
  console.log(result);

});