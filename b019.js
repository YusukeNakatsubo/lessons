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
        [N, K] = INPUTS[0].split(/\s/).map(Number);

  let originalArr = [],
      resizeArr   = [],
      resultArr   = [],
      blockCount  = Math.trunc(N / K);
  for (let i = 0; i < N; i += 1) {
    originalArr.push(INPUTS[i + 1].split(/\s/).map(Number));
  }
  for (let i = 0; i < N; i += 1) {
    let tmpArr = [];
    for (let j = 0; j < blockCount; j += 1) {
      tmpArr.push(0);
    }
    resizeArr.push(tmpArr);
  }
  for (let i = 0; i < blockCount; i += 1) {
    let tmpArr = [];
    for (let j = 0; j < blockCount; j += 1) {
      tmpArr.push(0);
    }
    resultArr.push(tmpArr);
  }

  // stack...

});

// n,k=list(map(int,input().split()))
// a=[list(map(int,input().split())) for i in range(n)]
// print(a)
// b,c=[[0 for i in range(n//k)] for j in range(n)],[[0 for i in range(n//k)] for j in range(n//k)]
// print(b)
// print(c)

// # 横の足し算
// for i in range(n):
//     for j in range(0,n,k):
//         b[i][j//k]=sum(a[i][j:j+k])

// # # 縦の足し算 + 平均の計算
// # for i in range(n//k):
// #     for j in range(n//k):
// #         for h in range(k):
// #             c[j][i]+=(b[j*k+h][i])
// #         c[j][i]=c[j][i]//(k**2)

// # for i in c:
// #     c=' '.join([str(j) for j in i])
// #     print(c)