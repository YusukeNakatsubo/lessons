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
  const FOODSTUFF_COUNT = RECIPE_COUNT + 1;
  //
  const RECIPE = [];
  for (let i = 0; i < RECIPE_COUNT; i += 1) {
    RECIPE.push(INPUT[i+1])
  }
  // RECIPE = Object.assign(...RECIPE.map(([k,v]) => ({[k]:v})))
  console.log(RECIPE)
  const FOODSTUFF = [];
  for (let i = 0; i < FOODSTUFF_COUNT; i += 1) {
    let tmp = RECIPE_COUNT + 2;
    FOODSTUFF.push(INPUT[i+tmp])
  }
  // FOODSTUFF = Object.assign(...FOODSTUFF.map(([k,v]) => ({[k]:v})))
  console.log(FOODSTUFF)
  //
  const FOOD_COUNT = [];
  for (let i = 0; i < RECIPE.length; i += 1) {
    for (let j = 0; j < FOODSTUFF.length; i += 1) {
      // わからん。。。
      // if (RECIPE[i][0] !== FOODSTUFF[j][0]) {
      //   break;
      // } else if (RECIPE[i][0] === FOODSTUFF[j][0] || RECIPE[i][1] < ){

      // }
    }
  }
  if (FOOD_COUNT.length === 0) { FOOD_COUNT = 0; }
});