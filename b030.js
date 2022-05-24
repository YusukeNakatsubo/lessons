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
  const DATA = lines,
        [HEIGHT, WIDTH] = DATA[0].split(/\s/).map(Number);

  let gridArr = [];
  for (let i = 0; i < HEIGHT; i += 1) {
    gridArr.push(DATA[i + 1].split('').map(String));
  }
//   console.log(gridArr);

  let [initX, initY] = DATA[1 + HEIGHT].split(/\s/).map(Number);
//   console.log(initY);
  const COUNT = Number(DATA[HEIGHT + 2]);

  let commandArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    commandArr.push(DATA[i + HEIGHT + 3]);
  }

  let myPosition = [initX - 1, initY - 1];
  let moveX, moveY;
  for (let i = 0; i < COUNT; i += 1) {
    let operation = DATA[i + HEIGHT + 3];

    if (operation === 'U') {
      moveX = 0;
      moveY = -1;
    } else if (operation === 'R') {
      moveX = 1;
      moveY = 0;
    } else if (operation === 'D') {
      moveX = 0;
      moveY = 1;
    } else if (operation === 'L') {
      moveX = -1;
      moveY = 0;
    }

    while (gridArr[myPosition[0]][myPosition[1]] === '#') {
      if (myPosition[0] + moveX < 0 ||
          myPosition[1] + moveY < 0 ||
          myPosition[0] + moveX > WIDTH ||
          myPosition[1] + moveY > HEIGHT
          ) break;
      myPosition[0] += moveX;
      myPosition[1] += moveY;
      console.log('Hey');
    }

    console.log(myPosition);
  }

});




// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// // 自分の得意な言語で
// // Let's チャレンジ！！
// var lines = [];
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', (line) => {
//   lines.push(line);
// });
// reader.on('close', () => {
//   const DATA = lines,
//         [HEIGHT, WIDTH] = DATA[0].split(/\s/).map(Number);

//   let gridArr = [];
//   for (let i = 0; i < HEIGHT; i += 1) {
//     gridArr.push(DATA[i + 1].split('').map(String));
//   }
// //   console.log(gridArr);

//   let [initX, initY] = DATA[1 + HEIGHT].split(/\s/).map(Number);
// //   console.log(initY);
//   const COUNT = Number(DATA[HEIGHT + 2]);

//   let myPosition = [initX - 1, initY - 1];
//   let moveX, moveY;
//   for (let i = 0; i < COUNT; i += 1) {
//     let operation = DATA[i + HEIGHT + 3];

//     if (operation === 'U') {
//       moveX = 0;
//       moveY = -1;
//     } else if (operation === 'R') {
//       moveX = 1;
//       moveY = 0;
//     } else if (operation === 'D') {
//       moveX = 0;
//       moveY = 1;
//     } else if (operation === 'L') {
//       moveX = -1;
//       moveY = 0;
//     }

//     while (gridArr[myPosition[0]][myPosition[1]] === '#') {
//       if (myPosition[0] + moveX < 0 ||
//           myPosition[1] + moveY < 0 ||
//           myPosition[0] + moveX > WIDTH ||
//           myPosition[1] + moveY > HEIGHT
//           ) break;
//       myPosition[0] += moveX;
//       myPosition[1] += moveY;
//       console.log('Hey');
//     }

//     console.log(myPosition);
//   }

// });