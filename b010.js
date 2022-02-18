// This is a code with a 70% pass rate.
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

  let passerPosition = 0,
      passerNumber   = Number(PASSER_PLAYER_NUMBER) - 1;
  if (PASSER_TEAM_NAME === 'A') passerPosition = TEAM_A_POSITION_ARR[passerNumber];
  else if (PASSER_TEAM_NAME === 'B') passerPosition = TEAM_B_POSITION_ARR[passerNumber];

  let offsideArr = [];
  if (PASSER_TEAM_NAME === 'A') {
    let newTeamBPositionArr = TEAM_B_POSITION_ARR.sort((a, b) => a - b);
    for (let i = 0; i < 11; i += 1) {
      if (TEAM_A_POSITION_ARR[i] > 55 && TEAM_A_POSITION_ARR[i] < 110 && TEAM_A_POSITION_ARR[i] > passerPosition && TEAM_A_POSITION_ARR[i] > newTeamBPositionArr[9]) {
        offsideArr.push(TEAM_A_POSITION_ARR[i]);
      }
    }
  } else if (PASSER_TEAM_NAME === 'B') {
    let newTeamAPositionArr = TEAM_A_POSITION_ARR.sort((a, b) => a - b);
    for (let i = 0; i < 11; i += 1) {
      if (TEAM_B_POSITION_ARR[i] < 55 && TEAM_B_POSITION_ARR[i] > 0 && TEAM_B_POSITION_ARR[i] < passerPosition && TEAM_B_POSITION_ARR[i] < newTeamAPositionArr[1]) {
        offsideArr.push(TEAM_B_POSITION_ARR[i]);
      }
    }
  }

  let resultArr = [];
  for (let i = 0; i < offsideArr.length; i += 1) {
    let index = 0;
    if (TEAM_A_POSITION_ARR.includes(offsideArr[i]) === true) {
      index = TEAM_A_POSITION_ARR.indexOf(offsideArr[i]) + 1;
      resultArr.push(index);
    }
    if (TEAM_B_POSITION_ARR.includes(offsideArr[i]) === true) {
      index = TEAM_B_POSITION_ARR.indexOf(offsideArr[i]) + 1;
      resultArr.push(index);
    }
  }

  if (resultArr.length !== 0) for (let i = 0; i < resultArr.length; i += 1) { console.log(resultArr[i]); }
  else console.log('None');

});