// ランタイムエラーで突破できない.発想の転換が必要そう...
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
        [MUSIC_LIST, OWNERSHIP_TIME_MINUTE, OWNERSHIP_TIME_SECOND] = INPUTS[0].split(/\s/).map(Number);
  let playableTime = OWNERSHIP_TIME_MINUTE * 60 + OWNERSHIP_TIME_SECOND,
      musicTimeList = [];
  // 組み合わせを生成する -> 再帰関数によりランタイムエラーが発生？
  const combinationFunc = (number, factor) => {
    let answer = [];
    if (number.length < factor) return [];
    if (factor === 1) {
      for (let i = 0; i < number.length; i += 1) {
        answer[i] = [number[i]];
      }
    } else {
      for (let i = 0; i < number.length - factor + 1; i += 1) {
        let row = combinationFunc(number.slice(i + 1), factor - 1);
        for (let j = 0; j < row.length; j += 1) {
          answer.push([number[i]].concat(row[j]));
        }
      }
    }
    return answer;
  }
  const sumFunc = (targetAry) => targetAry.reduce((a, b) => a + b, 0);
  for (let i = 0; i < MUSIC_LIST; i += 1) {
    let [tmpMusicMinute, tmpMusicSecond] = INPUTS[i + 1].split(/\s/).map(Number),
        tmpMusicTime = tmpMusicMinute * 60 + tmpMusicSecond;
    musicTimeList.push(tmpMusicTime);
  }
  // 組み合わせの中から最大値を探す
  let resultTime = [musicTimeList];
  for (let i = 2; i <= MUSIC_LIST; i += 1) {
    let tmpCombination = combinationFunc(musicTimeList, i);
        tmpResultTime = [];
    for (let j = 0; j < tmpCombination.length; j += 1) {
      let tmpSumTime = sumFunc(tmpCombination[j]);
      // 演奏時間を超える値は除外
      if (tmpSumTime <= playableTime) tmpResultTime.push(tmpSumTime)
    }
    if (tmpResultTime.length === 0) break;
    resultTime.push(tmpResultTime);
  }
  console.log(resultTime.length);
});