'''
author: zhidl
Date: 2021-12-04 22:57:30
description: 类型
LastEditTime: 2021-12-06 17:46:56
'''
'''
int 整数类型 正整数 负整数 0
float 小数
complex 复数类型
str 字符串
bool 布尔类型
dict 字典
dict_keys
dict_values
dict_items
'''
'''
二进制  由 0b 0B开头
八进制  由 0o 0O开头  oct()
十六进制 由 0x 0X开头 hex()
'''

# %%
s = 'zhidl'
num = '''
    111
    222 %
    333
    '''
b1 = bytes('12打卡好', encoding='UTF-8')
b2 = b'http://c.biancheng.net/python/'
b3 = '你瞅啥'.encode("UTF-8")
print(b3, 'b1')

# %%
b5 = "C语言中文网8岁了".encode('UTF-8')
str1 = b5.decode('UTF-8')
print("str1: ", str1)

# %%
print(type(True))
# %%
a = int(input('nichoush'))
b = int(input('bbb'))
print(a + b)

# %%
age = 8
print("C语言中文网已经%d岁了！" % 122, )
# %%
a = 'aaa'
b = 'bbbb'
c = 'cccc'
print('%s%s1111%s' % (a, b, c))

# %%
f = open("demo.txt", "w")  # 打开文件以便写入
print('沧海月明珠有泪', file=f)
print('蓝回日暖玉生烟', file=f)
f.close()

# %%
