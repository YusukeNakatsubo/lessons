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
  const INPUTS = lines;

  // every citys / every lags
  const TIMEZONE_CITYS = [];
  const TIMEZONE_LAGS = [];
  for (let i = 1; i < INPUTS.length - 1; i += 1) {
    let tmp = [];
    tmp = INPUTS[i].split(/\s/);
    TIMEZONE_CITYS.push(tmp[0]);
    TIMEZONE_LAGS.push(Number(tmp[1]));
  }
  // console.log(TIMEZONE_CITYS);
  // console.log(TIMEZONE_LAGS);

  const POST_DATA = INPUTS.slice(-1)[0];
  const POST_TMP = POST_DATA.split(/\s/);
  // base city
  const BASE_CITY = String(POST_TMP[0].split(':'));
  // base time
  const TIMESTAMP = POST_TMP[1].split(':');
  const BASE_HOUR = Number(TIMESTAMP[0]);
  const BASE_MINITE = TIMESTAMP[1];
  // console.log(BASE_CITY);
  // console.log(BASE_HOUR);
  // console.log(BASE_MINITE);

  // standard hour
  const STANDARD_CITY_TMP = TIMEZONE_CITYS.indexOf(BASE_CITY) + 1;
  const STANDARD_CITY = INPUTS[STANDARD_CITY_TMP].split(/\s/);
  const STANDARD_CITY_TIME = Number(STANDARD_CITY[1]);
  // (現地時間 - 現地時間の時差) % 24 -> 基準時間
  // ex (19 - 7) % 24 -> 12
  const STANDARD_HOUR = (BASE_HOUR - STANDARD_CITY_TIME) % 24;
  // console.log(STANDARD_HOUR);

  // calculate lags
  const OUTPUTS = []
  TIMEZONE_LAGS.forEach((lags) => {
    // (基準時間 + タイムラグ) % 24 -> 現地時間
    // ex (12 + 7) % 24 -> 19
    let tmp = (STANDARD_HOUR + lags) % 24;
    // 負の値の場合 24 加算する
    if (Math.sign(tmp) === -1) { tmp += 24; }
    tmp = String(tmp);
    if (tmp.length < 2) { tmp = `0${tmp}`; }
    let newTime = `${tmp}:${BASE_MINITE}`;
    OUTPUTS.push(newTime)
  })

  // output
  console.log(OUTPUTS.join('\n'));
});