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
  const [setAString, setBString] = lines[0].split(/\s/).map(String),
        setANumber     = Number(setAString),
        setBNumber     = Number(setBString);
  let result = '';
  if (setAString.length === 3 || setBString.length === 3) {
    let tmp = String(Math.floor(setANumber / 100) + Math.floor(setBNumber / 100) % 10);
    tmp.length === 2 ? result += tmp % 10 : result += tmp;
  }
  if (setAString.length >= 2 || setBString.length >= 2) {
    let tmp = String(Math.floor(setANumber / 10) + Math.floor(setBNumber / 10) % 10);
    tmp.length === 2 ? result += tmp % 10 : result += tmp;
  }
  let tmp = (setANumber + setBNumber) % 10;
  tmp.length === 2 ? result += tmp % 10 : result += tmp;
  console.log(result);
});