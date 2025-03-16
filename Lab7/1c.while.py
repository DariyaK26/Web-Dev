#A
# from math import sqrt
# a=int(input())
# i=1
# while(i<=a):
#     if (sqrt(i)==int(sqrt(i*1.0))):
#         print(i)
#     i+=1

#B
# a=int(input())
# i=2
# while(i<=a):
#     if a%i==0:
#         print(i)
#         break
#     i+=1

#C
# a=int(input())
# i=0
# while(i<=a):
#     if (2**i<=a):
#         print(2**i)
#     i+=1

#D

# a=int(input())
# i=0
# p=""
# while (i<=a):

#     if a!=2**i:
#         p="NO"
#     else:
#         p="YES"
#         break
#     i+=1
# print(p)

#E
a=int(input())
i=0
while(a>2**i):
    i+=1
print(i)