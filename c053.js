// This is a code with a 80% pass rate.
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
  const INPUTS  = lines,
        COUNT   = Number(INPUTS[0]),
        NUMBERS = INPUTS[1].split(/\s/);
  if (NUMBERS.includes('x10') === true) {
    let multiplyNumber = 'x10';
    let newNumbers = NUMBERS.filter(item => item !== multiplyNumber).map(Number);
    let result = 0;
    if (newNumbers.includes(0) === true) { 
      let maxNumber = Math.max(...newNumbers);
      result = newNumbers.filter(item => item !== maxNumber);
      console.log(result.reduce((a,b) => { return a + b }) * 10);
    } else {
      console.log(newNumbers.reduce((a,b) => { return a + b }) * 10);
    }
  } else {
    let newNumbers = NUMBERS.map(Number);
    if (newNumbers.includes(0) === true) { 
      let maxNumber = Math.max(...newNumbers);
      result = newNumbers.filter(item => item !== maxNumber);
      console.log(result.reduce((a,b) => { return a + b }));
    } else {
      console.log(newNumbers.reduce((a,b) => { return a + b }));
    }
  }
});