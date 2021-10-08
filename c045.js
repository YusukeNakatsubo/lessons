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
  const [PAGE_VOLUME, PAGE_SIZE, PAGE_SHOW] = lines[0].split(/\s/).map(Number);
  // let pageList = [];
  // for (let i = 0; i < PAGE_VOLUME; i += 1) { pageList.push(i+1); }
  let pageList = [...Array(PAGE_VOLUME)].map((_, i) => i + 1);
  let startIndex = PAGE_SIZE * (PAGE_SHOW - 1),
      endIndex   = PAGE_SIZE * (PAGE_SHOW - 1) + PAGE_SIZE;
  let result = pageList.slice(startIndex, endIndex);
  !result.length ? console.log('none') : console.log(result.join(' '));
});