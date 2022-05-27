# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
N,K=map(int, input().split())
al=[]
bl=[]
cl=[]
al_answer=[]
bl_answer=[]
cl_answer=[]

for i in range(N):
    al.append(int(input()))
for i in range(N):
    bl.append(int(input()))
for i in range(N):
    cl.append(int(input()))
    
for i in range(N-K+1):
    al_answer.append(sum(al[0+i:K+i])/K)
for i in range(N-K+1):
    bl_answer.append(sum(bl[0+i:K+i])/K)
for i in range(N-K+1):
    cl_answer.append(sum(cl[0+i:K+i])/K)

if min(al_answer)<min(bl_answer) and min(al_answer)<min(cl_answer):
    print('1')
elif min(bl_answer)<min(cl_answer) and min(bl_answer)<min(al_answer):
    print('2')
elif min(cl_answer)<min(al_answer) and min(cl_answer)<min(bl_answer):
    print('3')