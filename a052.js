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
        COUNT  = Number(DATA[0]),
        [A, B] = DATA[1].split(/\s/).map(Number),
        AB     = A + B;

  let resultArr = Array(COUNT).fill(1);
  let tmpArr = [-1];
  let aArr  = Array(COUNT).fill(0),
      bArr  = Array(COUNT).fill(0),
      abArr = Array(COUNT).fill(0);

  // Aのみ考える
  let indexA = 0;
  while (COUNT >= indexA) {
    if (indexA + (A - 1) < COUNT - 1) {
      aArr[indexA + (A - 1)] = 1;
    }
    else {
      let difference = COUNT - indexA;
      if (difference <= A || difference <= B) aArr[COUNT - 1] = 1; 
    }
    indexA += A;
    // console.log('Hey');
  }
  console.log(aArr);
  
  // Bのみ考える
  let indexB = 0;
  while (COUNT >= indexB) {
    if (indexB + (B - 1) < COUNT - 1) {
      bArr[indexB + (B - 1)] = 1;
    }
    else {
      let difference = COUNT - indexB;
      if (difference <= A || difference <= B) bArr[COUNT - 1] = 1; 
    }
    indexB += B;
    // console.log('Hey');
  }
  console.log(bArr);
     
  // ABのみ考える
  let indexAB = 0;
  while (COUNT >= indexAB) {
    if (indexAB + (AB - 1) < COUNT - 1) {
      abArr[indexAB + (AB - 1)] = 1;
    }
    else {
      let difference = COUNT - indexAB;
      if (difference <= A || difference <= B) abArr[COUNT - 1] = 1; 
    }
    indexAB += AB;
    // console.log('Hey');
  }
  console.log(abArr);

  for (let i = 0; i < COUNT; i += 1) {
    if (aArr[i] === 0 && bArr[i] === 0 && abArr[i] === 0) resultArr[i] = 0;
  }
//   console.log(resultArr);
  
  const result = resultArr.filter(el => el === 0).length;
  console.log(result);
     
});