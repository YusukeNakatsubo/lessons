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
  const INPUTS = lines,
        COUNT  = Number(INPUTS[0]);
  let counter  = 0,
      typesAry = [],
      soxsAry  = [];
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i + 1].split(/\s/).map(String);
    soxsAry.push(tmp);
    if (typesAry.includes(tmp[0]) === false) {
      typesAry.push(tmp[0]);
    }
  }
  for (let i = 0; i < typesAry.length; i += 1) {
    let tmp = soxsAry.filter(value => {
      if(value[0].indexOf(typesAry[i]) !== -1) {
        return value;
      }
    });
    let rCount = tmp.filter(value => {
      if(value[1].indexOf('R') !== -1) {
        return value;
      }
    })
    let lCount = tmp.filter(value => {
      if(value[1].indexOf('L') !== -1) {
        return value;
      }
    })
    if (rCount.length === 0 || lCount.length === 0) {
      counter += 0;
    } else if (rCount.length === lCount.length) {
      counter += rCount.length;
    } else if (rCount.length > lCount.length) {
      counter += lCount.length;
    } else if (rCount.length < lCount.length) {
      counter += rCount.length;
    }
  }
  console.log(counter);
});