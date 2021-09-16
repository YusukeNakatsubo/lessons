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
  // input
  const TRAVELL_DAYS = lines[0].split(/\s/).map(Number);

  // total holidays
  const HOLDAYS = TRAVELL_DAYS[0];
  // total periods
  const PERIODS = TRAVELL_DAYS[1];
  // all holidays /  all weathers
  const HOLDAYS_ARY = [];
  const WEATHERS_ARY = [];
  for (let i = 1;i < lines.length; i += 1) {
    let travellDays = lines[i].split(/\s/).map(Number);
    HOLDAYS_ARY.push(travellDays[0]);
    WEATHERS_ARY.push(travellDays[1]);
  }

  // comparison of periods
  const COMPARISON_WEATHERS = []
  const COMPARISON_WEATHERS_RANGE = HOLDAYS - PERIODS + 1
  for (let i = 0; i < COMPARISON_WEATHERS_RANGE; i += 1) {
    // probability of precipitation during the period
    let sumWeathers = 0
    for (let j = 0; j < PERIODS; j += 1) {
      sumWeathers += WEATHERS_ARY[j+i];
    }
    COMPARISON_WEATHERS.push(sumWeathers);
  }

  // best weather day
  const MIN_WEATHER = COMPARISON_WEATHERS.reduce((a,b) => {
    return Math.min(a,b)
  })
  const MIN_WEATHER_INDEX = COMPARISON_WEATHERS.indexOf(MIN_WEATHER);
  const STRAT_DATE = HOLDAYS_ARY[0] + MIN_WEATHER_INDEX;
  const END_DATE = HOLDAYS_ARY[0] + MIN_WEATHER_INDEX + PERIODS - 1;

  // output
  console.log(`${STRAT_DATE} ${END_DATE}`);
});
