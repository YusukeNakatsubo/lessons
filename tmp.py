# coding=utf-8
chipper_num = int(input())
encrypted_str = input()

decrypted_str = list()
for i in range(len(encrypted_str)):
    if (i + 1) % 2 == 1:  # 奇数
        tmp_chipper_num = chipper_num * -1
    else:
        tmp_chipper_num = chipper_num
    # 文字をUnicode値に変換する
    tmp_ord_num = ord(encrypted_str[i]) + tmp_chipper_num
    print(tmp_ord_num)
    if tmp_ord_num < ord('A'):
        decrypted_str.append(chr(ord('Z') - (ord('A') - tmp_ord_num - 1)))
    elif tmp_ord_num > ord('Z'):
        decrypted_str.append(chr(ord('A') + (tmp_ord_num - ord('Z') - 1)))
    else:
        decrypted_str.append(chr(tmp_ord_num))

print(''.join(decrypted_str))