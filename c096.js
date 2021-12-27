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
  const INPUT = lines;
        PASSCODE = String(INPUT[0]),
        KEY = String(INPUT[1]);
  const passcodeAry = PASSCODE.split('').map(String),
        keyAry = KEY.split('').map(String);
  const alphabetSort = (a, b) => {
	  a = a.toString().toLowerCase();
	  b = b.toString().toLowerCase();
	  if(a < b) return -1;
	  else if(a > b) return 1;
	  return 0;
  }
  PASSCODE === KEY || passcodeAry.sort(alphabetSort).join() !== keyAry.sort(alphabetSort).join() ? console.log('NO') : console.log('YES');
});