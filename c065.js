// This is a code with a 50% pass rate.
// I don't know what caused it. ...
const INPUT = lines;
const ENCRYPTION_COUNT = Number(INPUT[0]);
const ENCRYPTION_LINE = INPUT[1];
//
const STANDARD_LINE = String.fromCharCode(...Array.from({length: 26}, (_,i) => 'A'.charCodeAt(0) + i));
//
const TMP_ENCRYPTION_LINE = ENCRYPTION_LINE.split('');
const DECRYPYION_LINE = [];
for (let i = 0; i < TMP_ENCRYPTION_LINE.length; i += 1) {
  let tmp = STANDARD_LINE.indexOf(TMP_ENCRYPTION_LINE[i]);
  while (tmp < 26) {
    if (tmp < 26 ) { break; }
    tmp -= 26;
  }
  if (i % 2 === 0) {
    tmp -= ENCRYPTION_COUNT;
    if (tmp < 0) { tmp += 26; }
  } else if (i % 2 !== 0) {
    tmp += ENCRYPTION_COUNT;
    if (tmp > 26) { tmp -= 26}
  }
  DECRYPYION_LINE.push(STANDARD_LINE[tmp])
}
//
console.log(DECRYPYION_LINE.join(''));