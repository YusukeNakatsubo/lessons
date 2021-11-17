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
  const INPUTS = lines,
        [STUDENTS, RANK] = INPUTS[0].split(/\s/).map(Number);
  let englishScores  = [],
      japaneseScores = [],
      mathScores     = [];
  for (let i = 0; i < STUDENTS; i += 1) {
    let [englishScore, japaneseScore, mathScore] = INPUTS[i + 1].split(/\s/).map(Number);
    englishScores.push(englishScore);
    japaneseScores.push(japaneseScore);
    mathScores.push(mathScore);
  }
  const compareFunc = (a, b) => {
  if(a > b) {
      return 1;
    } else {
      return -1;
    }
  }
  const sortEnglishScores  = englishScores.sort(compareFunc),
        rankEnglishScore   = sortEnglishScores[RANK - 1],
        sortJapaneseScores = japaneseScores.sort(compareFunc),
        rankJapaneseScore  = sortJapaneseScores[RANK - 1],
        sortMathScores     = mathScores.sort(compareFunc),
        rankMathScore      = sortMathScores[RANK - 1];
  for (let i = 0; i < STUDENTS; i += 1) {
    let [englishScore, japaneseScore, mathScore] = INPUTS[i + 1].split(/\s/).map(Number);
    let counter = 0;
    if (rankEnglishScore >= englishScore) { counter += 1; }
    if (rankJapaneseScore >= japaneseScore) { counter += 1; }
    if (rankMathScore >= mathScore) { counter += 1; }
    console.log(counter);
  }
});