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
  const [BOB, ALICE] = lines[0].split(/\s/).map(String);
  let bobScoreAry, aliceScoreAry;
  BOB === 100 ? bobScoreAry = [10, 0] : bobScoreAry = BOB.split('').map(Number);
  ALICE === 100 ? aliceScoreAry = [10, 0] : aliceScoreAry = ALICE.split('').map(Number);
  const BOB_SCORE   = bobScoreAry.reduce((a,b) => a + b);
        ALICE_SCORE = aliceScoreAry.reduce((a,b) => a + b);
  let bobScore   = String(BOB_SCORE);
      aliceScore = String(ALICE_SCORE);
  let bobResult  = bobScore.split('').map(Number);
      aliceResult = aliceScore.split('').map(Number);
  if (bobResult.length > 1) { bobResult.shift(); }
  if (aliceResult.length > 1) { aliceResult.shift(); }
  if (bobResult > aliceResult) {
    console.log('Bob');
  } else if (bobResult < aliceResult) {
    console.log('Alice');
  } else {
    console.log('Draw');
  }
});