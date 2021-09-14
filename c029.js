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
  // 連休,日程
  const TRAVELL_DAYS = lines[0].split(/\s/).map(Number)
  // 連休期間数,日程期間数
  const HOLDAYS = TRAVELL_DAYS[0]
  const PERIODS = TRAVELL_DAYS[1]
  // 連休期間中の天気
  const HOLDAYS_ARY = []
  const WEATHERS_ARY = []
  for (let i = 1;i < lines.length; i += 1) {
    let travellDays = lines[i].split(/\s/).map(Number)
    HOLDAYS_ARY.push(travellDays[0])
    WEATHERS_ARY.push(travellDays[1])
  }
  // 日程期間中の配列
  const COMPARISON_WEATHERS = []
  const COMPARISON_WEATHERS_RANGE = HOLDAYS - PERIODS + 1
  // 連休期間中の天気
  for (let i = 0; i < COMPARISON_WEATHERS_RANGE; i += 1) {
    // iから日程期間分の合計値を出す
    let sumWeathers = 0
    for (let j = 0; j < PERIODS; j += 1) {
      sumWeathers += WEATHERS_ARY[j+i]
    }
    COMPARISON_WEATHERS.push(sumWeathers)
  }
  // 降水確率の最小値を求める
  const MIN_WEATHER = COMPARISON_WEATHERS.reduce((a,b) => {
    return Math.min(a,b);
  })
  const MIN_WEATHER_INDEX = COMPARISON_WEATHERS.indexOf(MIN_WEATHER);
  const STRAT_DATE = HOLDAYS_ARY[0] + MIN_WEATHER_INDEX
  const END_DATE = HOLDAYS_ARY[0] + MIN_WEATHER_INDEX + PERIODS - 1
  console.log(`${STRAT_DATE} ${END_DATE}`)
});
