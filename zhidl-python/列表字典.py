'''
author: zhidl
Date: 2021-12-05 13:20:58
LastEditTime: 2021-12-09 15:56:35
'''
'''
列表 list
元组 tuple
字典 dict
集合 set

列表元组都可以通过索引方式访问，列表可以修改，元组不可修改，
字典dict 集合 set存储数据都是无需，字典元素用 key-value形式保存；
'''

# %%
str = "C语言中文网"
print(str[0], "==", str[-6])
print(str[5], "==", str[-1])
# %% 序列切片
# sname[start : end : step]
str = '123456789'
print(str * 2)

l1 = [None] * 5
print(l1, len(l1))
# %%
st = '123abc'
l2 = [1, 3, 4, 2]
tup = ('t1', 't2')
print(
    'abc' in st,
    len(st),  # 长度
    max(st),  # 最大值
    min(st),  # 最小值
    list(st),  # 转换为列表
    str(l2),  # 序列化转字符串
    sum(l2),  # 计算元素和
    sorted(l2),  # 排序
    # reversed(st),
    enumerate(l2))
# %%
tup = ('t1', 't2')  # 元组
dict1 = {'a': 100, 'b': 42, 'c': 9}
ran = range(0, 5)  # 区间

Ldict1 = list(dict1)
print(
    list(tup),
    list(dict1),
    Ldict1[:2],  # 切片访问
    list(ran),
    Ldict1[:2] + list(ran),  # 拼接数组 相当于 concat
)
# %%
l1 = [1, 2, 3, 2, 2]
# 改变原数组的方法 append extend insert del
# l1.append(4,5,6);
# l1.extend((4,5));
# l1.insert(0,4);
# del 删除某个元素
# del l1[1:3]
# l1.pop(1);
# 根据value 值删除
# l1.remove(2);
# 清空
# l1.clear()

# 查找数组索引
# index(obj, start, end)
# 统计元素在列表中出现的次数
# l1.count(2)

print(l1.count(2))
# %%

# %%
# dictname = dict.fromkeys(list，value=None)
cc = dict.fromkeys(['a', 'b', 'c'], 11)
print(cc)
# %%

print(dict([
    ('a', 1),
    ('b', 2),
]), dict((('a', 1), ('b', 2), ('c', 3))), dict((['two', 1], ['one', 2])),
      dict([['two', 'ccc'], ['three', 'fff']]))

# %%

dict2 = {'a': 1}
dict2['b'] = 333
dict2['a'] = 123
print(dict2, 'c' in dict2, type(dict2))

# %%
dict3 = {'a': 1, 'b': 2, 'c': 3, 'e': [1, 2, 3]}
a = dict3.keys()
# print(a, list(dict3.items()), dict3.values());

cc = dict3.setdefault('a')

# dict3.popitem()
dict4 = dict3.copy()

print(
    'dict3',
    dict3,
    # dict3,
    'dict4',
    # dict4
    cc
)
# for k, v in dict3.items():
#     print(k, v, '---')

# %%

