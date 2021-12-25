'''
author: zhidl
Date: 2021-12-10 11:16:15
description: 
LastEditTime: 2021-12-10 15:55:54
'''

# %%


class P:
    a = '789'

    def __init__(self, s):
        self.s = s

    def abc(self):
        self.cn()

    def cn(self):
        print(self, self.s)

    # 静态方法需要 staticmethod 来装饰
    @staticmethod
    def info(name):

        print(name)


p = P('123')
# p.abc()
# P.cn(p)

p.info('ccc')
P.info('zhidl')

# %%


# 描述符类
class revealAccess:
    def __init__(self, initval=None, name='var'):
        self.val = initval
        self.name = name

    def __get__(self, obj, objtype):
        print("Retrieving", obj, objtype)
        return self.val

    def __set__(self, obj, val):
        print("updating", self.name)
        self.val = val


class myClass:
    x = revealAccess(10, 'var x')
    y = 5


m = myClass()
# print(m.x)
# m.x = 20
print(m.x)

print(m.y)

# %%
