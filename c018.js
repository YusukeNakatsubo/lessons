// This code has a 90% pass rate. why?
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
  const INPUT = [];
  for (let i = 0; i < lines.length; i += 1) {
    let tmp = lines[i].split(/\s/)
    tmp[1] = Number(tmp[1])
    INPUT.push(tmp)
  }
  //
  const RECIPE_COUNT = Number(INPUT[0][0]);
  const FOODSTUFF_COUNT = Number(INPUT[RECIPE_COUNT + 1][0]);
  //
  let RECIPE = [];
  for (let i = 0; i < RECIPE_COUNT; i += 1) {
    RECIPE.push(INPUT[i+1])
  }
  //
  let FOODSTUFF = [];
  for (let i = 0; i < FOODSTUFF_COUNT; i += 1) {
    let tmp = RECIPE_COUNT + 2;
    FOODSTUFF.push(INPUT[i+tmp])
  }
  //
  let standardValue = 10000;
  for (let i = 0; i < RECIPE_COUNT; i += 1) {
    let recipeTmp = RECIPE[i];
    for (let j = 0; j < FOODSTUFF_COUNT; j += 1) {
      let foodstuffTmp = FOODSTUFF[j];
      if (recipeTmp[0] === foodstuffTmp[0]) {
        if (Math.floor(foodstuffTmp[1] / recipeTmp[1]) < standardValue) {
          standardValue = Math.floor(foodstuffTmp[1] / recipeTmp[1]);
          console.log(standardValue);
        }
      }
    }
  }
  //
  if (standardValue === 10000) { standardValue = 0 }
  console.log(standardValue);
});