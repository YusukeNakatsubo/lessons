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
  // 都市数
  const CITY_COUNT = lines[0]
  // 投稿場所,日時
  const POST_DATA = lines.slice(-1)[0]
  const GET_TIMESTAMP = POST_DATA.split(' ')
  const GET_TIME = GET_TIMESTAMP[1].split(':')
  const GET_HOUR = Number(GET_TIME[0])
  const GET_MINITE = GET_TIME[1]
  // 基準となる時差を取得
  const GET_STANDARD = POST_DATA.split(/\s/)
  const GET_CITY = GET_STANDARD[0]
  // 都市を取得
  const CITYS = []
  // 時差を取得
  const TIME_LAG = []
  for (let i = 1; i < lines.length - 1; i += 1) {
    let tmp = []
    tmp = lines[i].split(/\s/)
    CITYS.push(tmp[0])
    TIME_LAG.push(Number(tmp[1]))
  }
  const CITY_POSITION = CITYS.indexOf(GET_CITY) + 1
  const GET_STANDARD_CITY = lines[CITY_POSITION].split(/\s/)
  const STANDARD_TIME = Number(GET_STANDARD_CITY[1])
  // 時差を調整 // わからない...
  const CONVERT_TIME_LAG = []
  let tmp = 0
  for (let i = 0; i < TIME_LAG.length; i+= 1) {
    if (TIME_LAG[i] === STANDARD_TIME) {
      tmp = GET_HOUR
    } else if (Math.sign(TIME_LAG[i]) === 0) {
      tmp = GET_HOUR - STANDARD_TIME
    } else if (Math.sign(TIME_LAG[i]) === 1) {
      tmp = GET_HOUR + TIME_LAG[i]
      if (tmp > 24) { tmp -= STANDARD_TIME }
    } else if  (Math.sign(TIME_LAG[i]) === -1) {
      tmp = GET_HOUR - Math.abs(TIME_LAG[i])
      tmp = tmp - STANDARD_TIME
      if (tmp > 24) { tmp -= STANDARD_TIME }
    }
    tmp = String(tmp)
    if (tmp.length < 2) { tmp = `0${tmp}` }
    CONVERT_TIME_LAG.push(tmp)
  }
//   console.log(CONVERT_TIME_LAG)
  const POST_DATAS = []
  for (let i = 0; i < CONVERT_TIME_LAG.length; i+= 1) {
    let tmp = `${CONVERT_TIME_LAG[i]}:${GET_MINITE}` 
    POST_DATAS.push(tmp)
  }
  console.log(POST_DATAS.join('\n'))
});