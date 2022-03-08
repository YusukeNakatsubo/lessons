// This is a code with a 90% pass rate.
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
      originalNumberArr = inputNumber.split('').map(String);

  const getConvertValue = (number, type) => {
    const DICTINARY = {
      '0':{'minus':[],              'plusminus':['6', '9'], 'plus':['8']},
      '1':{'minus':[],              'plusminus':[],         'plus':['7']},
      '2':{'minus':[],              'plusminus':['3'],      'plus':[]},
      '3':{'minus':[],              'plusminus':['2', '5'], 'plus':['9']},
      '4':{'minus':[],              'plusminus':[],         'plus':[]},
      '5':{'minus':[],              'plusminus':['3'],      'plus':['6', '9']},
      '6':{'minus':['5'],           'plusminus':['0', '9'], 'plus':['8']},
      '7':{'minus':['1'],           'plusminus':[],         'plus':[]},
      '8':{'minus':['0', '6', '9'], 'plusminus':[],         'plus':[]},
      '9':{'minus':['3', '5'],      'plusminus':['0', '6'], 'plus':['8']},
    }
    return DICTINARY[number][type];
  }
//   console.log(getConvertValue('9', 'minus'));

  let resultArr = [];
  // 順番に数値を処理
  for (let i = 0; i < originalNumberArr.length; i += 1) {
    // 数値を取得
    let inputNumber = originalNumberArr[i];
    // 参照渡しを避ける
    let numberArr = originalNumberArr.concat();

    // マイナスして数値ができるか
    let minusArr = getConvertValue(inputNumber, 'minus');
    // console.log(minusArr);
    // 成立したら他の数をプラスして数値ができるかチェック
    if(minusArr.length !== 0) {
      for (let j = 0; j < numberArr.length; j += 1) {
        // その値自身はスキップ
        if (i === j) {
          continue;
        } else {
          let tmpPlusArr = getConvertValue(numberArr[j], 'plus');
          // プラスの値が存在する場合
          if (tmpPlusArr.length !== 0) {
            // マイナスの値が複数存在する場合
            for (k = 0; k < minusArr.length; k += 1) {
              let tmpMinus = minusArr[k];
              // プラスの値が複数存在する場合
              for (let l = 0; l < tmpPlusArr.length; l += 1) {
                // 数値の位置を入れ替える
                // 参照渡しを避ける
                let tmpNumberArr = numberArr.concat();
                tmpNumberArr[i]  = tmpMinus;
                tmpNumberArr[j]  = tmpPlusArr[l];
                resultArr.push(Number(tmpNumberArr.join('')));
              }
            }
          }
        }
      }
    }

    // プラスして数値ができるか
    let plusArr = getConvertValue(inputNumber, 'plus');
    // console.log(plusArr);
    // 成立したら他の数をマイナスして数値ができるかチェック
    if(plusArr.length !== 0) {
      for (let j = 0; j < numberArr.length; j += 1) {
        // その値自身はスキップ
        if (i === j) {
          continue;
        } else {
          let tmpMinusArr = getConvertValue(numberArr[j], 'minus');
          // マイナスの値が存在する場合
          if (tmpMinusArr.length !== 0) {
            // プラスの値が複数存在する場合
            for (k = 0; k < plusArr.length; k += 1) {
              let tmpPlus = plusArr[k];
              // マイナスの値が複数存在する場合
              for (let l = 0; l < tmpMinusArr.length; l += 1) {
                // 数値の位置を入れ替える
                // 参照渡しを避ける
                let tmpNumberArr = numberArr.concat();
                tmpNumberArr[i]  = tmpPlus;
                tmpNumberArr[j]  = tmpMinusArr[l];
                resultArr.push(Number(tmpNumberArr.join('')));
              }
            }
          }
        }
      }
    }

    // 上記2パターンだと重複して数値が生成されてしまう

    // プラスマイナスして数値ができるか
    let plusminus = getConvertValue(inputNumber, 'plusminus');
    // console.log(plusminus);
    if (plusminus.length !== 0) {
      // その値自身を入れ替える
      for (let j = 0; j < plusminus.length; j += 1) {
        let tmpNumberArr = numberArr.concat();
        tmpNumberArr[i] = plusminus[j];
        resultArr.push(Number(tmpNumberArr.join('')));
      }
    }
    // console.log(`----------i ${i}回目`);
  }
  // 出力する
  // 重複チェック 並び替え
  let sortResultArr = [...new Set(resultArr)].sort((a, b) => { return a - b; }).map(String);
  for (let i = 0; i < sortResultArr.length; i += 1) {
    if (sortResultArr[i].length !== originalNumberArr.length) sortResultArr[i] = '0' + sortResultArr[i];
  }
//   console.log(sortResultArr);
  sortResultArr.length !== 0 ? console.log(sortResultArr.join('\n')) : console.log('none');
});
