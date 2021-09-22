// This code is error.
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
  //
  const THIS = lines[0].split(/\s/).map(Number);
  const THIS_YEAR = Number(THIS[0]);
  const THIS_MONTH = Number(THIS[1]);
  const THIS_DAY = Number(THIS[2]);
  //
  const NEXT = lines[1].split(/\s/).map(Number);
  const NEXT_MONTH = Number(NEXT[0]);
  const NEXT_DAY = Number(NEXT[1]);
  //
  // 開催年されるか否か
  // 年の計算 -> 一年は181日
  const DAYS = (15 * 6) + (13 * 7);
  let standardYear = 0;
  if (THIS_YEAR % 4 === 0) {
    standardYear = 0;
  } else {
    let tmp = THIS_YEAR % 4;
    tmp *= DAYS
    standardYear += tmp;
  }
//   console.log(standardYear);

  // 月の計算
  let standardMonth = 0;
  let remnantMonth = 13 - THIS_MONTH;
  if (remnantMonth % 2 === 0) {
    let tmp = remnantMonth / 2
    standardMonth = (15 * tmp) + (13 * tmp)
  } else {
    let tmp = Math.floor(remnantMonth / 2)
    standardMonth = (15 * tmp) + (13 * tmp) + 13
  }
//   console.log(standardMonth);
  let nextRemnantMonth = NEXT_MONTH;
  if (nextRemnantMonth !== 1) {
    if (remnantMonth % 2 === 0) {
      let tmp = nextRemnantMonth / 2
      standardMonth = (15 * tmp) + (13 * tmp)
    } else {
      let tmp = Math.floor(nextRemnantMonth / 2)
      standardMonth = (15 * tmp) + (13 * tmp) + 13
    }
  }
//   console.log(standardMonth);

  // 日の計算
  let standardDay = 0;
  if (THIS_MONTH % 2 === 0) {
    standardDay = 15 - THIS_DAY + NEXT_DAY;
  } else {
    standardDay = 13 - THIS_DAY + NEXT_DAY;
  }
//   console.log(standardDay);

  console.log(standardYear+standardMonth+standardDay)
});