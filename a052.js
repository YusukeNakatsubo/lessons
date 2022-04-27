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
  const DATA   = lines,
        COUNT  = Number(DATA[0]),
        [A, B] = DATA[1].split(/\s/).map(Number);

  let resultArr  = Array(COUNT).fill(0),
      currentArr = [- 1];

    while (true) {
      let nextArr = [];

      for (let current of currentArr) {
        if (current + A <= COUNT - 1) {
           if (resultArr[current + A] === 0) {
             nextArr.push(current + A);
             resultArr[current + A] = 1;
           }
        }
        if (current + B <= COUNT - 1) {
           if (resultArr[current + B] === 0) {
             nextArr.push(current + B);
             resultArr[current + B] = 1;
           }
        }
     }

     if (nextArr.length === 0) break;
     currentArr = nextArr;
   }

  if (resultArr.slice(-1)[0] === 0) resultArr.splice(-1, 1, 1);

  const result = resultArr.filter(el => el === 0).length;
  console.log(result);
});