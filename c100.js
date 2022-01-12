// 全然解けない、発想の転換が必要そう...
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
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
        [MUSIC_LIST, OWNERSHIP_TIME_HOUR, OWNERSHIP_TIME_MINUTE] = INPUTS[0].split(/\s/).map(Number);
  let playableTime = OWNERSHIP_TIME_HOUR * 60 + OWNERSHIP_TIME_MINUTE,
      musicTimeList = [];
  // 組み合わせを生成する 
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
    let [tmpMusicHour, tmpMusicMinute] = INPUTS[i + 1].split(/\s/).map(Number),
        tmpMusicTime = tmpMusicHour * 60 + tmpMusicMinute;
    musicTimeList.push(tmpMusicTime);
  }
  // 組み合わせの中から最大値を探す
  let resultTime = [musicTimeList];
  for (let i = 2; i <= MUSIC_LIST; i += 1) {
    let tmpCombination = combinationFunc(musicTimeList, i);
        tmpResultTime = [];
    for (let j = 0; j < tmpCombination.length; j += 1) {
      let tmpSumTime = sumFunc(tmpCombination[j]);
      if(tmpSumTime <= playableTime) tmpResultTime.push(tmpSumTime);
    }
    resultTime.push(tmpResultTime);
  }
  // 空配列を除き配列の要素数を出力する
  let result = [];
  for (let i = 0; i < resultTime.length ; i += 1) {
    if (resultTime[i].length !== 0) result.push(resultTime[i]);
  }
  console.log(result.length);
});