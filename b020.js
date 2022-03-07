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

  let logArr = [],
      goToStr = /go to (?<query>.+)/;
  for (let i = 0; i < COUNT; i += 1) {
    let query = String(INPUTS[i + 1]),
        flag = query.match(goToStr);
    if (flag) {
      logArr.push(flag.groups.query);
      console.log(flag.groups.query);
    } else {
      logArr.pop();
      console.log(logArr.slice(-1)[0]);
    }
  }

});