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
        [X, Y] = DATA[0].split(/\s/).map(Number),
        K      = Number(DATA[1]),
        COUNT  = Number(DATA[2]);

  let distancePointArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    let [x, y, price] = DATA[i + 3].split(/\s/).map(Number);
    let score = Math.sqrt(Math.pow((X - x), 2) + Math.pow((Y - y), 2));
    distancePointArr.push({i, score, price});
  }

  const sortDistacePointArr = distancePointArr.sort((a, b) => a.score - b.score);

  let result = 0;
  for (let i = 0; i < K; i += 1) {
    result += sortDistacePointArr[i].price;
  }

  console.log(Math.round(result / K));
});
