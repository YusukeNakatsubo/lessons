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
  const INPUT = lines;
  const ENCRYPTION_COUNT = Number(INPUT[0]);
  const ENCRYPTION_LINE = INPUT[1];

  const DECRYPYION_LINE = [];
  for (let i = 0; i < ENCRYPTION_LINE.length; i += 1) {
    // even or odd
    let tmpNumber = 0;
    (i + 1) % 2 === 1 ? tmpNumber = ENCRYPTION_COUNT * - 1 : tmpNumber = ENCRYPTION_COUNT;
    // encode by unicode
    let tmpFromCharCode = ENCRYPTION_LINE[i].codePointAt() + tmpNumber;
    const TMP_A = 'A'.codePointAt();
    const TMP_Z = 'Z'.codePointAt();
    // tmpFromCharCode < TMP_A
    if (tmpFromCharCode < TMP_A) {
      // Counting from Z
      let tmpString = String.fromCodePoint(TMP_Z - (TMP_A - tmpFromCharCode - 1));
      DECRYPYION_LINE.push(tmpString);
    // tmpFromCharCode > TMP_Z
    } else if (tmpFromCharCode > TMP_Z) {
      // Counting from A
      let tmpString = String.fromCodePoint(TMP_A + (tmpFromCharCode - TMP_Z - 1));
      DECRYPYION_LINE.push(tmpString);
    } else {
    // others
      DECRYPYION_LINE.push(String.fromCodePoint(tmpFromCharCode));
    }
  }

  console.log(DECRYPYION_LINE.join(''));
});
