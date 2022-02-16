// This is a code with a 80% pass rate.
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
  const INPUTS = lines,
        COUNT  = Number(INPUTS[0]);

  let userInfoArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i + 1].split(/\s/);
    userInfoArr.push([tmp[0], Number(tmp[1])]);
  }

  let hourCounter     = 10,
      minuteCounter   = 0,
      startTimeHour   = 0,
      startTimeMinute = 0,
      endTimeHour     = 0,
      endTimeMinite   = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let userName = userInfoArr[i][0],
        userTime = userInfoArr[i][1];

    startTimeHour   = hourCounter;
    endTimeHour     = hourCounter;
    startTimeMinute = minuteCounter;
    endTimeMinite   = startTimeMinute + userTime;
    if (endTimeMinite >= 60) {
      endTimeHour   += 1;
      endTimeMinite -= 60;
    }

    // 12時を超える場合の処理
    if (startTimeHour === 12 || endTimeHour === 12) {
      startTimeMinute -= 10;
      endTimeMinite   -= 10;
      // 60分休憩
      if (startTimeMinute < 0) {
        startTimeMinute += 60;
        startTimeHour   -= 1;
      }
      if (endTimeMinite < 0) {
        endTimeMinite += 60;
        endTimeHour   -= 1;
      }
      startTimeHour += 1;
      endTimeHour   += 1;
    }

    // 出力
    const getdoubleDigestNumer = (number) => {
      return ('0' + number).slice(-2)
    }
    console.log(`${startTimeHour}:${getdoubleDigestNumer(startTimeMinute)} - ${endTimeHour}:${getdoubleDigestNumer(endTimeMinite)} ${userName}`);

    // 10分休憩の処理
    hourCounter   = endTimeHour;
    minuteCounter = endTimeMinite + 10;
    if (minuteCounter >= 60) {
      hourCounter   = endTimeHour + 1;
      minuteCounter = minuteCounter - 60;
    }
  }

});