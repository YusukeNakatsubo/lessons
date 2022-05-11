// This is a code with a 50% pass rate.
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

  console.log(Math.floor(result / K));
});

// This Python Code is a code with a 90% pass rate.

// import math

// x,y = map(int,input().rstrip().split(' '))
// k = int(input())
// N = int(input())
// distancelist = [0 for i in range(N)]

// # print(distancelist)

// for i in range(N):
//     xx,yy,p = map(int,input().rstrip().split(' '))
//     score = math.sqrt((x - xx)**2 + (y - yy)**2)
//     distancelist[i] = (i,score,p)

// # print(distancelist)

// sorted_distance = sorted(distancelist,key=lambda distance: distance[1])

// # print(sorted_distance)

// result = 0
// for i in range(k):
//     result += sorted_distance[i][2]

// print(round(result/k))
