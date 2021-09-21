// This is a code with a 100% pass rate.
const INPUT = lines;
const ENCRYPTION_COUNT = Number(INPUT[0]);
const ENCRYPTION_LINE = INPUT[1];
//
const DECRYPYION_LINE = [];
for (let i = 0; i < ENCRYPTION_LINE.length; i += 1) {
  let tmp = 0;
  if ((i + 1) % 2 === 1) { // odd
    tmp = ENCRYPTION_COUNT * -1;
  } else { // even
    tmp = ENCRYPTION_COUNT;
  }
  // encode by unicode
  let tmpFromCharCode = ENCRYPTION_LINE[i].codePointAt() + tmp;
  const TMP_A = 'A'.codePointAt();
  const TMP_Z = 'Z'.codePointAt();
  // tmpFromCharCode < TMP_A
  if (tmpFromCharCode < TMP_A) {
    // Counting from Z
    let tmp = String.fromCodePoint(TMP_Z - (TMP_A - tmpFromCharCode - 1));
    DECRYPYION_LINE.push(tmp)
  // tmpFromCharCode > TMP_Z
  } else if (tmpFromCharCode > TMP_Z) {
    // Counting from A
    let tmp = String.fromCodePoint(TMP_A + (tmpFromCharCode - TMP_Z - 1));
    DECRYPYION_LINE.push(tmp)
  } else {
  // others
    DECRYPYION_LINE.push(String.fromCodePoint(tmpFromCharCode))
  }
}
//
console.log(DECRYPYION_LINE.join(''));