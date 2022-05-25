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
  const DATA = lines,
        [HEIGHT, WIDTH] = DATA[0].split(/\s/).map(Number);

  let gridArr = [];
  for (let i = 0; i < HEIGHT; i += 1) {
    gridArr.push(DATA[i + 1].split('').map(String));
  }

  let [myPositionY, myPositionX] = DATA[1 + HEIGHT].split(/\s/).map(Number);
  myPositionY -= 1;
  myPositionX -= 1;

  const COUNT = Number(DATA[HEIGHT + 2]);
  let commandArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    commandArr.push(String(DATA[i + HEIGHT + 3]));
  }

  let flag = true;
  for (let i = 0; i < COUNT; i += 1) {
    if (commandArr[i] === 'U') {
      while (flag) {
        if (myPositionX - 1 >= 0) {
          if (gridArr[myPositionX - 1][myPositionY] === '.') {
            myPositionX--;
            break;
          }
          else if (gridArr[myPositionX - 1][myPositionY] === '#') {
            myPositionX--;
          }
        }
        else {
          break;
        }
      }
    }
    else if (commandArr[i] === 'D') {
      while (flag) {
        if (myPositionX + 1 < HEIGHT) {
          if (gridArr[myPositionX + 1][myPositionY] === '.') {
            myPositionX++;
            break;
          }
          else if (gridArr[myPositionX + 1][myPositionY] === '#') {
            myPositionX++;
          }
        }
        else {
          break;
        }
      }
    }
    else if (commandArr[i] === 'L') {
      while (flag) {
        if (myPositionY - 1 >= 0) {
          if (gridArr[myPositionX][myPositionY - 1] === '.') {
            myPositionY--;
            break;
          }
          else if (gridArr[myPositionX][myPositionY - 1] === '#') {
            myPositionY--;
          }
        }
        else {
          break;
        }
      }
    }
    else if (commandArr[i] === 'R') {
      while (flag) {
        if (myPositionY + 1 < WIDTH) {
          if (gridArr[myPositionX][myPositionY + 1] === '.') {
            myPositionY++;
            break;
          }
          else if (gridArr[myPositionX][myPositionY + 1] === '#') {
            myPositionY++;
          }
        }
        else {
          break;
        }
      }
    }
  }

  myPositionX += 1;
  myPositionY += 1;

  console.log(`${myPositionY} ${myPositionX}`);
});