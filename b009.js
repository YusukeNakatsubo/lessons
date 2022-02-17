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
      miniteCounter   = 0,
      startTimeHour   = 0,
      startTimeMinite = 0,
      endTimeHour     = 0,
      endTimeMinite   = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let userName = userInfoArr[i][0],
        userTime = userInfoArr[i][1];

    // 開始時間の設定
    startTimeMinite = miniteCounter;
    startTimeHour   = hourCounter;
    // 終了時間の設定
    endTimeMinite   = startTimeMinite + userTime;
    endTimeHour     = startTimeHour;
    if (endTimeMinite >= 60) {
      endTimeMinite -= 60;
      endTimeHour   += 1;
    }

    // 昼休憩の処理
    // 開始時間は休憩時間が足されている 終了時間は休憩時間が足されている
    if (startTimeHour === 12 || endTimeHour === 12) {
      // 開始時間と終了時間を調整する
      startTimeMinite -= 10;
      endTimeMinite   -= 10;
      if (startTimeMinite < 0) {
        startTimeMinite += 60;
        startTimeHour   -= 1;
      }
      if (endTimeMinite < 0) {
        endTimeMinite += 60;
        endTimeHour   -= 1;
      }
      // 昼休憩時間を調整する
      startTimeHour += 1; // 一時間後
      endTimeHour += 1;   // 一時間後
    }

    // 出力する
    const getdoubleDigestNumer = (number) => {
      return ('0' + number).slice(-2);
    }
    console.log(`${startTimeHour}:${getdoubleDigestNumer(startTimeMinite)} - ${endTimeHour}:${getdoubleDigestNumer(endTimeMinite)} ${userName}`);

    // 休憩時間を足す 次の順番へ回す
    miniteCounter = endTimeMinite + 10;
    hourCounter   = endTimeHour;
    if (miniteCounter >= 60) {
      miniteCounter -= 60;
      hourCounter   += 1;
    }
  }

});