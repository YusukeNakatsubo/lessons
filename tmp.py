H,W = map(int,input().split())

G = [list(input())for i in range(H)]

init_y = 0
init_x = 0
for i in range(H):
    for j in range(W):
        if G[i][j] == 'S':
            init_y = i
            init_x = j
my_p = []
my_p.append([init_y,init_x])
while my_p:
    [y,x] = my_p.pop(0)
    if y > 0 and G[y - 1][x] == ".":
        G[y - 1][x] = "S"
        my_p.append([y - 1, x])
    if y < H - 1 and G[y + 1][x] == ".":
        G[y + 1][x] = "S"
        my_p.append([y + 1, x])
    if x > 0 and G[y][x - 1] == ".":
        G[y][x - 1] = "S"
        my_p.append([y, x - 1])
    if x < W - 1 and G[y][x + 1] == ".":
        G[y][x + 1] = "S"
        my_p.append([y, x + 1])

flag = False

for i in range(H):
    for j in range(W):
        if 'S' in G[0][j] or 'S' in G[i][0] or 'S' in G[H-1][j] or 'S' in G[i][W-1]:
            flag = True

if flag:
    print('YES')
else:
    print('NO')