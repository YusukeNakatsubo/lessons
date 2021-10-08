// This is a code with a 20% pass rate. Why?
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
  const INPUTS       = lines[0].split(/\s/).map(Number),
        PAGE_NUMBER = INPUTS[0],
        PAGE_SIZE    = INPUTS[1],
        PAGE_SHOW    = INPUTS[2];
  let pageCount = 0;
  PAGE_NUMBER % PAGE_SIZE !== 0 ? pageCount = Math.floor(PAGE_NUMBER / PAGE_SIZE) + 1 : pageCount = Math.floor(PAGE_NUMBER / PAGE_SIZE);
  let result = [];
  if (PAGE_SHOW > pageCount) {
    console.log('none');
  } else {
    for (let i = 0; i < PAGE_SIZE; i += 1) {
      let tmpNumber = PAGE_SHOW - 1;
      let tmpString;
      if (i >= 9) {
        let tmp = String(i+1).split('');
        tmpString = `${PAGE_SHOW}${tmp[1]};`
      } else {
        tmpString = `${tmpNumber}${i+1};`
      }
      result.push(Number(tmpString));
    }
    console.log(result.join(' '));
  }
});

n,s,p=map(int, input().split())
lst=[_ for _ in range(1,n+1)]
lst=lst[s*(p-1):s*(p-1)+s]
if len(lst)>0:
    l=map(str,lst)
    s=' '.join(l)
    print(s)
elif len(lst)==0:
    print('none')