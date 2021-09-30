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
  const INPUT = lines[0];
  console.log(INPUT
  .replace(/A/g, '4')
  .replace(/E/g, '3')
  .replace(/G/g, '6')
  .replace(/I/g, '1')
  .replace(/O/g, '0')
  .replace(/S/g, '5')
  .replace(/Z/g, '2')
  );
});