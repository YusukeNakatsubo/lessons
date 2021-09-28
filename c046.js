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
  const INPUT        = lines;
        MEMBER_COUNT = Number(INPUT[0]),
        MEMBERS      = INPUT[1].split(/\s/),
        BOOK_COUNT   = Number(INPUT[0]);
  //
  let bookList = [];
  for (let i = 3; i < INPUT.length; i += 1) {
    let tmp = INPUT[i].split(/\s/);
    let obj = {};
    obj['personName'] = tmp[0];
    obj['bookPrice'] = Number(tmp[1]);
    bookList.push(obj);
  }
  //
  let memberList = [];
  for (let i = 0; i < MEMBER_COUNT; i += 1) {
    let obj = {};
    obj['personName'] = MEMBERS[i];
    obj['bookPrice'] = 0;
    memberList.push(obj);
  }
  //
  for (let i = 0; i < memberList.length; i += 1) {
    for (let j = 0; j < bookList.length; j += 1) {
      if (memberList[i]['personName'] === bookList[j]['personName']) {
        memberList[i]['bookPrice'] += bookList[j]['bookPrice'];
      }
    }
  }
  //
  let bookListRank = []
  let sortTarget = 'bookPrice';
  bookListRank = memberList.sort((a, b) => b[sortTarget] - a[sort_target]);
  //
  for (let rank in bookListRank) {
    console.log(bookListRank[rank]['personName']);
  }
});