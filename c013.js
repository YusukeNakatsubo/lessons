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
  const HATE_NUMBER = Number(lines[0]),
        ROOM_COUNT  = Number(lines[1]);
  let result = [];
  for (let i = 0; i < ROOM_COUNT; i += 1) {
    let tmp = lines[i+2];
    if (tmp.includes(HATE_NUMBER) === false) { result.push(tmp); }
  }
  if (result.length !== 0) {
    console.log(result.join('\n'));
  } else {
    console.log('none');
  }
});