'''
author: zhidl
Date: 2021-12-09 16:21:16
description: 
LastEditTime: 2021-12-16 16:59:20
'''
import turtle
# %%


def my_len(str):
    length = 0
    for c in str:
        length = length + 1
    return length


print(my_len('打卡好看的哈看哈'))

# %%


def nth_power(exponent):
    def aa(n):
        return exponent + n

    return aa


square = nth_power('2')

# 查看 __closure__ 的值
print(square.__closure__)

# %%


# add = lambda x, y: x + y
def add(x, y):
    return x + y


print(add(3, 4))

# %%


t = turtle.Pen()
for x in (36):
    # t.forward(x)
    print(x, 'x')
    # t.left(59)
# %%
