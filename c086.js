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
  const INPUT_STRING = lines[0].split('').map(String);
  const REMOVALS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const OUTPUT_STRING = INPUT_STRING.filter((value) => {
    return ! REMOVALS.includes(value);
  })
  console.log(OUTPUT_STRING.join(''));
});