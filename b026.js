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
  const DATA  = lines,
        [init500, init100, init50, init10] = DATA[0].split(/\s/).map(Number),
        COUNT = Number(DATA[1]);

  let [VMCounter500, VMCounter100, VMCounter50, VMCounter10] = [init500, init100, init50, init10];

  let purchaseHistoryArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    let tmpPurchaseArr = DATA[i + 2].split(/\s/).map(Number);
    purchaseHistoryArr.push(tmpPurchaseArr)
  }

  for (let i = 0; i < purchaseHistoryArr.length; i += 1) {
    let productPrice = purchaseHistoryArr[i][0],
        inputMoney   = 0,
        outputMoney  = 0;

    // 投入金額
    inputMoney += purchaseHistoryArr[i][1] * 500;
    inputMoney += purchaseHistoryArr[i][2] * 100;
    inputMoney += purchaseHistoryArr[i][3] * 50;
    inputMoney += purchaseHistoryArr[i][4] * 10;

    // おつり
    outputMoney = inputMoney - productPrice;

    // おつりの振り分け
    let counter500 = 0,
        counter100 = 0,
        counter50  = 0,
        counter10  = 0;
    if (outputMoney >= 500 && VMCounter500 !== 0) {
      outputMoney -= 500;
      counter500 += 1;
    }
    if (outputMoney >= 100 && VMCounter100 !== 0) {
      if (VMCounter100 >= Math.floor(outputMoney / 100)) {
        counter100  += Math.floor(outputMoney / 100);
        outputMoney -= Math.floor(outputMoney / 100) * 100;
      }
      else {
        counter100 += VMCounter100;
        outputMoney -= VMCounter100 * 100;
      }
    }
    if (outputMoney >= 50 && VMCounter50 !== 0) {
      if (VMCounter50 >= Math.floor(outputMoney / 50)) {
        counter50 += Math.floor(outputMoney / 50);
        outputMoney -= Math.floor(outputMoney / 50) * 50;
      }
      else {
        counter50 += VMCounter50;
        outputMoney -= VMCounter50 * 50;
      }
    }
    if (outputMoney >= 10 && VMCounter10 !== 0) {
      if (VMCounter10 >= Math.floor(outputMoney / 10)) {
        counter10 += Math.floor(outputMoney / 10);
        outputMoney -= Math.floor(outputMoney / 10) * 10;
      }
      else {
        counter10 += VMCounter10;
        outputMoney -= VMCounter10 * 10;
      }
    }

    // 出力する
    if (counter50 * 50 + counter10 * 10 >= 100 || outputMoney !== 0) {
      console.log('impossible');
    }
    else {
      VMCounter500 = VMCounter500 - counter500 + purchaseHistoryArr[i][1];
      VMCounter100 = VMCounter100 - counter100 + purchaseHistoryArr[i][2];
      VMCounter50  = VMCounter50 - counter50 + purchaseHistoryArr[i][3];
      VMCounter10  = VMCounter10 - counter10 + purchaseHistoryArr[i][4];
      console.log(`${counter500} ${counter100} ${counter50} ${counter10}`);
    }

  }

});