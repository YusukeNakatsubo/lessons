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

  const getConvertValue = (number, type) => {
    const DICTINARY = {
      '0':{'minus':[],              'plusminus':['6', '9'], 'plus':['8']},
      '1':{'minus':[],              'plusminus':[],         'plus':[]},
      '2':{'minus':[],              'plusminus':['3'],      'plus':[]},
      '3':{'minus':[],              'plusminus':['2', '5'], 'plus':['9']},
      '4':{'minus':[],              'plusminus':['7'],      'plus':[]},
      '5':{'minus':[],              'plusminus':['3'],      'plus':['6', '9']},
      '6':{'minus':['5'],           'plusminus':['0', '9'], 'plus':['8']},
      '7':{'minus':[],              'plusminus':['4'],      'plus':[]},
      '8':{'minus':['0', '6', '9'], 'plusminus':[],         'plus':[]},
      '9':{'minus':['3', '5'],      'plusminus':['0', '6'], 'plus':['8']},
    }
    return DICTINARY[number][type];
  }
  //   console.log(getConvertValue('9', 'minus'));

  // 順番に数値を処理
});
