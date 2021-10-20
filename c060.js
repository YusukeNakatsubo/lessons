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
        [WORD_COUNT, PAGE_MAX_COUNT, PAGE_NUMBER] = INPUTS[0].split(/\s/).map(Number),
        WORDS = INPUTS[1].split(/\s/).map(String);
  let basicDictionary = WORDS.sort();
  let newDictionary = [];
  for (let i = 0; i < WORD_COUNT; i += 1) {
    if (basicDictionary.length === 0) { break; }
    newDictionary.push(basicDictionary.slice(0, PAGE_MAX_COUNT));
    basicDictionary.splice(0, PAGE_MAX_COUNT);
  }
  for (let word of newDictionary[PAGE_NUMBER - 1]) {
     console.log(word);
  }
});