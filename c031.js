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
  const ALL_DATA = lines

  // 都市数
  const CITY_COUNT = ALL_DATA[0];

  // 投稿場所,日時
  const POST_DATA = ALL_DATA.slice(-1)[0];
  const TIMESTAMP = POST_DATA.split(/\s/);
  const TIMESTAMP_ARY = TIMESTAMP[1].split(':');

  // 基準となる時間
  const STANDARD_HOUR = Number(TIMESTAMP_ARY[0]);
  const STANDARD_MINITE = TIMESTAMP_ARY[1];

  // 基準となる都市を取得
  const TIMELAG_ARY = POST_DATA.split(/\s/);
  const STANDARD_CITY = TIMELAG_ARY[0];

  // 各都市を取得 各時差を取得
  const CITYS_ARY = [];
  const TIMELAGS_ARY = [];
  for (let i = 1; i < ALL_DATA.length - 1; i += 1) {
    let tmp = [];
    tmp = ALL_DATA[i].split(/\s/);
    CITYS_ARY.push(tmp[0]);
    TIMELAGS_ARY.push(Number(tmp[1]));
  }

  // 配列内に基準となる都市が含まれていないか
  const STANDARD_CITY_POSITION = CITYS_ARY.indexOf(STANDARD_CITY) + 1;
  const STANDARD_CITY_ARY = ALL_DATA[STANDARD_CITY_POSITION].split(/\s/);
  const STANDARD_CITY_TIME = Number(STANDARD_CITY_ARY[1]);

  // 各都市の時差を調整する
  const CONVERT_TIME_LAG = [];
  let tmp = 0;
  for (let i = 0; i < TIMELAGS_ARY.length; i+= 1) {
    // 基準となる都市と時間が一致
    if (CITYS_ARY[i] === STANDARD_CITY) {
      tmp = Math.abs(STANDARD_HOUR + TIMELAGS_ARY[i] - STANDARD_CITY_TIME);
    } else if (Math.sign(TIMELAGS_ARY[i]) === 0) {
      tmp = Math.abs(STANDARD_HOUR + TIMELAGS_ARY[i] - STANDARD_CITY_TIME);
    } else if (Math.sign(TIMELAGS_ARY[i]) === 1) {
      tmp = STANDARD_HOUR + TIMELAGS_ARY[i] - STANDARD_CITY_TIME;
      if (Math.sign(tmp) === -1) { tmp+= 24; }
      tmp = Math.abs(tmp)
    } else if (Math.sign(TIMELAGS_ARY[i]) === -1) {
      tmp = STANDARD_HOUR + TIMELAGS_ARY[i] - STANDARD_CITY_TIME;
      if (Math.sign(tmp) === -1) { tmp+= 24; }
      tmp = Math.abs(tmp)
    }
    // 桁調整
    tmp = String(tmp);
    if (tmp.length < 2) { tmp = `0${tmp}` }
    CONVERT_TIME_LAG.push(tmp);
  }

  // 出力用データの作成
  const POST_DATAS = []
  for (let i = 0; i < CONVERT_TIME_LAG.length; i+= 1) {
    let tmp = `${CONVERT_TIME_LAG[i]}:${STANDARD_MINITE}`
    POST_DATAS.push(tmp)
  }

  // 出力
  console.log(POST_DATAS.join('\n'))
});