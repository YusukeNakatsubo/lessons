// 方向性がチガウコード
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
  let inputNumber = String(lines[0]),
      numberArr  = inputNumber.split('').map(String);

    // 一本取り除いた場合、生成される値
  const minusNumber = (number) => {
    if (number === '0') return [];
    if (number === '1') return [];
    if (number === '2') return [];
    if (number === '3') return [];
    if (number === '4') return [];
    if (number === '5') return [];
    if (number === '6') return [5];
    if (number === '7') return [1];
    if (number === '8') return [0, 6, 9];
    if (number === '9') return [3, 5];
    return []
  }
//   console.log(minusNumber(9));

  // 一本加えた場合、生成される値
  const plusNumber = (number) => {
    if (number === '0') return [8];
    if (number === '1') return [7];
    if (number === '2') return [];
    if (number === '3') return [9];
    if (number === '4') return [];
    if (number === '5') return [6, 9];
    if (number === '6') return [8];
    if (number === '7') return [];
    if (number === '8') return [];
    if (number === '9') return [8];
    return [];
  }
//   console.log(plusNumber(9));

  // 一本取り除いた場合の値を返す関数
  const getMinusNumberList = (array) => {
    let listArr   = [];
    for (let i = 0; i < array.length; i += 1) {
      let minusNum = minusNumber(array[i]);
      if (minusNum) listArr.push(minusNum);
    }
    return listArr;
  }
  console.log(getMinusNumberList(numberArr));

  // 一本加えた場合の値を返す関数
  const getPlusNumberList = (array) => {
    let listArr   = [];
    for (let i = 0; i < array.length; i += 1) {
      let plusNum = plusNumber(array[i]);
      if (plusNum) listArr.push(plusNum);
    }
    return listArr;
  }
  console.log(getPlusNumberList(numberArr));

});
