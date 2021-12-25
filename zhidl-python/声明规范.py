'''
author: zhidl
Date: 2021-12-04 22:52:37
description: 声明规范
LastEditTime: 2021-12-05 12:32:01
'''


# 由字符 A-Za-z_数字组成，第一个字符不能是数字；
# 不可用保留字
# 单下划线开头 如_width 不能直接访问的类属性；
# 双下划线开头 表示类的私有成员
# 双下划线开头结尾；是专用标识符

# 关键字 
'''
>>> import keyword
>>> keyword.kwlist

['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

'''


# %%
