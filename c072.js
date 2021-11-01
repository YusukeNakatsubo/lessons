// This is a code with a 90% pass rate. Why?
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
        [INI_ATK, INI_DEF, INI_AGI] = INPUTS[0].split(/\s/).map(Number);
        COUNT = Number(INPUTS[1]);
  let result = [];
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i + 2].split(/\s/);
    if (INI_ATK >= tmp[1]  && INI_ATK <= tmp[2] && INI_DEF >= tmp[3] && INI_DEF <= tmp[4] && INI_AGI >= tmp[5] && INI_AGI <= tmp[6]) {
      result.push(tmp[0]);
    }
  }
  result.length === 0 ? console.log('no evolution') : console.log(result.join('\n'));
});