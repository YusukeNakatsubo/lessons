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
  const INPUT = lines[0].split(/\s/),
        DATE  = INPUT[0],
        TIME  = INPUT[1];
  let tmpDate   = DATE.split(/\//),
      tmpTime   = TIME.split(/\:/),
      countDate = Number(tmpDate[1]),
      countTime = Number(tmpTime[0]);
  while (countTime >= 24) {
    countTime -= 24;
    countDate += 1;
  }
  const digestNumber = (number) => {
    return ('0' + number).slice(-2);
  }
  if (countTime < 10) { countTime = digestNumber(countTime); }
  if (countDate < 10) { countDate = digestNumber(countDate); }
  console.log(`${tmpDate[0]}/${countDate} ${countTime}:${tmpTime[1]}`);
});