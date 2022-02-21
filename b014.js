// b014
// let X = 3;
// let Y = 3;
// let Z = 3;
// X は立体の奥行きを、Y は立体の横幅を、Z は立体の高さを表す整数
const INPUTS = lines,
      [X, Y, Z] = INPUTS[0].split(/\s/).map(Number);

const cubicArr = Array(Y).fill(Array(Z).fill('.'));
console.log(cubicArr);
// [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']]

// 各 (x,y,z) は '#' または '.' からなる一文字で、
// この文字が '#' のときはセル (x,y,z) が立体に含まれることを、'.' のときはセル (x,y,z) が立体に含まれないことを意味します。

// Z軸
for (let k = 0; k < Z; k += 1) {
  // X軸
  for (let i = 0; i < X; i += 1) {
    // '--' を除く
    let tmp = INPUTS[i + 1];
    // Y軸
    for (let j = 0; j < Y; j += 1) {
      if (tmp[j] === '#') cubicArr[k][j] = '#';
      console.log(cubicArr);
    }
  }
}
// console.log(cubicArr);

X,Y,Z=list(map(int,input().split()))
m=[['.' for j in range(Y)] for i in range(Z)]
print(m)

for k in range(Z):
    for i in range(X):
        n=input()
        for j in range(Y):
            if n[j]=='#':
                m[k][j]='#'
    l=input()
print(m)

for i in reversed(range(Z)):
    l=map(str,m[i])
    s=''.join(l)
    print(s)
