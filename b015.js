// This is a code with a 0 pass rate...
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
        INPUT_A_ARR = INPUTS[0].split(/\s/).map(Number),
        INPUT_B_ARR = INPUTS[1].split(/\s/).map(Number);

  const NUMBER_LIST = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1]
  }

  let resultArr = [];

  // 装置が正しく2桁の数字を表すか
  const compareNormalArray = (array) => {
    let flag = 0;
    for (let i = 0; i < 10; i += 1) {
       if (array.join('') === NUMBER_LIST[i].join('')) {
          flag += 1;
          break;
       }
    }
    return flag;
  }
  compareNormalArray(INPUT_A_ARR) === 1 && compareNormalArray(INPUT_B_ARR) === 1 ? resultArr.push('Yes') : resultArr.push('No');

  // 装置を対称移動すると正しく2桁の数字を表すか
  const compareSymmetryArray = (array) => {
    let flag = 0;
    [array[1], array[5]] = [array[5], array[1]];
    [array[2], array[4]] = [array[4], array[2]];
    for (let i = 0; i < 10; i += 1) {
       if (array.join('') === NUMBER_LIST[i].join('')) {
          flag += 1;
          break;
       }
    }
    return flag;
  }
  compareSymmetryArray(INPUT_A_ARR) === 1 && compareSymmetryArray(INPUT_B_ARR) === 1 ? resultArr.push('Yes') : resultArr.push('No');

  // 装置を回転移動すると正しく2桁の数字を表すか
  const compareLotationArray = (array) => {
    let flag = 0;
    [array[3], array[0]] = [array[0], array[3]];
    [array[4], array[1]] = [array[1], array[4]];
    [array[5], array[2]] = [array[2], array[5]];
    for (let i = 0; i < 10; i += 1) {
       if (array.join('') === NUMBER_LIST[i].join('')) {
          flag += 1;
          break;
       }
    }
    return flag;
  }
  compareLotationArray(INPUT_A_ARR) === 1 && compareLotationArray(INPUT_B_ARR) === 1 ? resultArr.push('Yes') : resultArr.push('No');

  // 判定
  console.log(resultArr.join('\n'));
});