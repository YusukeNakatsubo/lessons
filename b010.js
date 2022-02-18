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
        [PASSER_TEAM_NAME, PASSER_PLAYER_NUMBER] = INPUTS[0].split(/\s/),
        TEAM_A_POSITION_ARR = INPUTS[1].split(/\s/).map(Number),
        TEAM_B_POSITION_ARR = INPUTS[2].split(/\s/).map(Number);

  let passerNumber   = Number(PASSER_PLAYER_NUMBER) - 1,
      passTeamArr    = TEAM_A_POSITION_ARR,
      enemyTeamArr   = TEAM_B_POSITION_ARR,
      maxNumber      = 110,
      minNumber      = 55;
  if (PASSER_TEAM_NAME === 'B') {
    passTeamArr  = TEAM_B_POSITION_ARR,
    enemyTeamArr = TEAM_A_POSITION_ARR,
    maxNumber    = 55,
    minNumber    = 0;
  }

  let passerPosition     = passTeamArr[passerNumber],
      newTeamPositionArr = enemyTeamArr.sort((a, b) => a - b),
      counter            = 0;
  for (let i = 0; i < 11; i += 1) {
    if (PASSER_TEAM_NAME === 'A') {
      if (passTeamArr[i] >= minNumber && passTeamArr[i] <= maxNumber && passTeamArr[i] > passerPosition && passTeamArr[i] > newTeamPositionArr[9]) {
        console.log(i + 1);
        counter += 1;
      }
    } else if (PASSER_TEAM_NAME === 'B') {
      if (passTeamArr[i] <= maxNumber && passTeamArr[i] >= minNumber && passTeamArr[i] < passerPosition && passTeamArr[i] < newTeamPositionArr[1]) {
        console.log(i + 1);
        counter += 1;
      }
    }
  }
  if (counter === 0) console.log('None');

});