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
  const mailString = String(lines[0]),
        mailStringLength = mailString.length + 2;
  console.log('+'.repeat(mailStringLength));
  console.log(`+${mailString}+`);
  console.log('+'.repeat(mailStringLength));
});