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
  const [NUMBER_A, NUMBER_B] = lines[0].split(/\s/).map(String);

  let flagArr = [];
  for (let i = 0; i < 9; i += 1) {
    if (flagArr.length > 1) break;
    for (let j = 0; j < 10; j += 1) {
      if (flagArr.length > 1) break;
      let numberX = i + 1,
          numberY = j,
          numberXY = Number(String(numberX) + String(numberY));
      let tmpEquation = numberXY * numberY,
          tmpAnswer   = Number(NUMBER_A + String(numberX) + NUMBER_B);
      if (tmpEquation === tmpAnswer) flagArr.push(numberX, numberY);
    }
    for (let j = 0; j < 10; j += 1) {
      if (flagArr.length > 1) break;
      let numberX  = j + 1,
          numberY  = i,
          numberXY = Number(String(numberX) + String(numberY));
      tmpEquation = numberXY * numberY;
      tmpAnswer   = Number(NUMBER_A + String(numberX) + NUMBER_B);
      if (tmpEquation === tmpAnswer) flagArr.push(numberX, numberY);
    }
  }

  flagArr.length !== 0 ? console.log(flagArr.join(' ')) : console.log('No');
});