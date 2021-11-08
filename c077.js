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
        [STUDENTS_COUNT, QUESTIONS_COUNT] = INPUTS[0].split(/\s/).map(Number),
        POINT = 100 / QUESTIONS_COUNT;
  for (let i = 0; i < STUDENTS_COUNT; i += 1) {
    let [days, answers] = INPUTS[i + 1].split(/\s/).map(Number);
    let studentPoint = POINT * answers;
    if (days >= 1 && days <= 9) {
      studentPoint = Math.floor(studentPoint * 0.8);
    } else if (days >= 10) {
      studentPoint = 0;
    }
    if (studentPoint >= 80) {
      console.log('A');
    } else if (studentPoint <= 79 && studentPoint >= 70) {
      console.log('B');
    } else if (studentPoint <= 69 && studentPoint >= 60) {
      console.log('C');
    } else if (studentPoint <= 59) {
      console.log('D');
    }
  }
});