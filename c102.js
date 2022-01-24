process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const INPUTS = lines,
        BAND_A_COUNT = Number(INPUTS[0]),
        BAND_B_COUNT = Number(INPUTS[BAND_A_COUNT + 1]);
  let bandASchedule = [],
      bandBSchedule = [];
  for (let i = 0; i < BAND_A_COUNT; i += 1) {
    let tmpBandASchedule = Number(INPUTS[i + 1]);
    bandASchedule.push(tmpBandASchedule);
  }
  for (let i = 0; i < BAND_B_COUNT; i += 1) {
    let tmpBandBSchedule = Number(INPUTS[i + BAND_A_COUNT + 1 + 1]);
    bandBSchedule.push(tmpBandBSchedule);
  }
  let flag = 0;
  for (let i = 1; i <= 31; i += 1) {
    if (bandASchedule.includes(i) === true && bandBSchedule.includes(i) === true) {
      if(flag === 0) {
        console.log('A');
        flag += 1;
      } else {
        console.log('B');
        flag -= 1;
      }
    } else if (bandASchedule.includes(i) === true && bandBSchedule.includes(i) === false) {
      console.log('A');
    } else if (bandASchedule.includes(i) === false && bandBSchedule.includes(i) === true) {
      console.log('B');
    } else {
      console.log('x');
    }
  }
});