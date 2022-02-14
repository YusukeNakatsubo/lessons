// This is a code with a 90% pass rate. Why?
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
  const [NUMBER_A, NUMBER_B] = lines[0].split(/\s/).map(String);

  const NUMBER_ARR = [...Array(10).keys()];
  const combinationNumber = (number, factor) => {
    let answer = [];
    if (number.length < factor) return [];
    if (factor === 1) {
      for (let i = 0; i < number.length; i += 1) {
        answer[i] = [number[i]];
      }
    } else {
      for (let i = 0; i < number.length - factor + 1; i += 1) {
        let row = combinationNumber(number.slice(i + 1), factor - 1);
        for (let j = 0; j < row.length; j += 1) {
          answer.push([number[i]].concat(row[j]));
        }
      }
    }
    return answer;
  }
  const COMBINATION_NUMBER_ARR = combinationNumber(NUMBER_ARR, 2);

  let flagArr = [];
  for (let i = 0; i < COMBINATION_NUMBER_ARR.length; i += 1) {
    if (flagArr.length > 1) break;
    let numberX  = COMBINATION_NUMBER_ARR[i][0],
        numberY  = COMBINATION_NUMBER_ARR[i][1],
        numberXY = Number(String(numberX) + String(numberY));
    if (numberX !== 0) {
      let tmpEquation = numberXY * numberY,
          tmpAnswer   = Number(NUMBER_A + String(numberX) + NUMBER_B);
      if (tmpEquation === tmpAnswer) flagArr.push(numberX, numberY);
    }
    // ここをうまく関数化できないか
    numberX  = COMBINATION_NUMBER_ARR[i][1],
    numberY  = COMBINATION_NUMBER_ARR[i][0],
    numberXY = Number(String(numberX) + String(numberY));
    if (numberX !== 0) {
      let tmpEquation = numberXY * numberY,
          tmpAnswer   = Number(NUMBER_A + String(numberX) + NUMBER_B);
      if (tmpEquation === tmpAnswer) flagArr.push(numberX, numberY);
    }
  }

  flagArr.length !== 0 ? console.log(flagArr.join(' ')) : console.log('No');
});