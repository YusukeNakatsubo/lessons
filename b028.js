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
  const DATA = lines,
        [memberCount, groupCount, messageCount] = DATA[0].split(/\s/).map(Number);

  let groupArr = [];
  if (groupCount !== 0) {
    for (let i = 0; i < groupCount; i += 1) {
      groupArr.push(DATA[i + 1].split(/\s/).map(Number));
    }
  }

  let messageLogArr = [];
  for (let i = 0; i < memberCount; i += 1) {
    messageLogArr.push([]);
  }

  for (let i = 0; i < messageCount; i += 1) {
    let tmpMessage = DATA[i + 1 + groupCount].split(/\s/);
    if (tmpMessage[1] === '0' && tmpMessage[0] !== tmpMessage[2]) {
      messageLogArr[tmpMessage[0] - 1].push(tmpMessage[3]);
      messageLogArr[tmpMessage[2] - 1].push(tmpMessage[3]);
    }
    if (tmpMessage[1] === '1') {
      for (let j = 1; j <= groupArr[tmpMessage[2] - 1][0]; j += 1) {
        let tmpMember = groupArr[tmpMessage[2] - 1][j] - 1;
        messageLogArr[tmpMember].push(tmpMessage[3]);
      }
    }
  }

  for (let i = 0; i < memberCount; i += 1) {
     let tmpMessageLog = messageLogArr[i];
     for (let j = 0; j < tmpMessageLog.length; j += 1) {
       console.log(tmpMessageLog[j]);
     }
     if (i !== memberCount - 1) console.log('--');
  }

});