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
  const DATA  = lines,
        COUNT = Number(DATA[0]);

  let userListArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    userListArr.push(DATA[i + 1].match(/(\d+|[^\d]+)/g));
  }

  const sortNumberListArr = userListArr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < sortNumberListArr.length; i += 1) {
    console.log(sortNumberListArr[i].join(''));
  }

});