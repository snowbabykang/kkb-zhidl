'''
author: zhidl
Date: 2021-12-09 15:56:47
description: 
LastEditTime: 2021-12-09 16:21:07
'''

# %%
mathmark = int(input())
# 断言数学考试分数是否位于正常范围内
assert 0 <= mathmark <= 100
# 只有当 mathmark 位于 [0,100]范围内，程序才会继续执行
print("数学考试分数为：", mathmark)
# %%
age = int(input("请输入你的年龄："))
if age < 12:
    print("婴幼儿")
elif age >= 12 and age < 18:
    print("青少年")
elif age >= 18 and age < 30:
    print("成年人")
elif age >= 30 and age < 50:
    pass
else:
    print("老年人")

# %%

num = 1
while num < 5:
    print('num=', num)
    num += 1
print('ppp')
# %%
add = "http://c.biancheng.net/python/"
# for循环，遍历 add 字符串
for ch in add:
    print(ch)

# %%
