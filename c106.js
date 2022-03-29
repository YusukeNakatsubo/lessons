// This is a code with a 80% pass rate.
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
        COUNT  = Number(INPUTS[0]),
        SCORE_ARR = INPUTS[1].split(/\s/).map(Number);

  let scoreArr  = SCORE_ARR.concat(),
      resultArr = SCORE_ARR.concat();

  const getMaxValue = (a, b) => Math.max(a, b);
  const replaceElement = (array, before, after) => {
    for(var i = 0; i < array.length; i+= 1){
      array[i] = String(array[i]).replace(before, after);
    }
    return array;
  }

  let maxValueGold  = scoreArr.reduce(getMaxValue);
  replaceElement(resultArr, maxValueGold, 'G');
  let goldArr = scoreArr.filter((el) => { return el === maxValueGold });

  let maxValueSilver,
      silverCompareArr = [];
  if (goldArr.length === 1) {
    silverCompareArr = scoreArr.filter((el) => { return el !== maxValueGold });
    maxValueSilver = silverCompareArr.reduce(getMaxValue);
    replaceElement(resultArr, maxValueSilver, 'S');
  }
  let silverArr = silverCompareArr.filter((el) => { return el === maxValueSilver });

  let maxValueBronze,
      bronzeCompareArr = [];
  if (goldArr.length === 1 && silverArr.length === 1) {
    bronzeCompareArr = silverCompareArr.filter((el) => { return el !== maxValueSilver });
    maxValueBronze = bronzeCompareArr.reduce(getMaxValue);
    replaceElement(resultArr, maxValueBronze, 'B');
  }

  for (let i = 0; i < COUNT; i += 1) {
    if (resultArr[i] === 'G' || resultArr[i] === 'S' || resultArr[i] === 'B') continue;
    else resultArr[i] = 'N';
  }

  console.log(resultArr.join('\n'));
});