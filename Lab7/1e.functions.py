#A
# def min_of_four(a: int, b: int, c: int, d: int) -> int:
#     return min(a, b, c, d)

# a, b, c, d = map(int, input().split())

# print(min_of_four(a, b, c, d))


#B
# def power(a:float, b:int)->float:
#     return a**b

# a, b=map(float, input().split())
# b=int(b)

# print(power(a, b))

#C
def xor(x: int, y: int) -> int:
    return int((x or y) and not (x and y))
x, y = map(int, input().split())
print(xor(x, y))
