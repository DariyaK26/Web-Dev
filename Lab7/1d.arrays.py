#A
# a=int(input())
# arr=list(map(int, input().split()))
# print(*arr[::2])

#B
# a=int(input())
# arr=list(map(int, input().split()))
# for i in arr:
#     if i%2==0:
#         print(i)

#C
# a=int(input())
# s=0
# arr=list(map(int, input().split()))
# for i in arr:
#     if i>0:
#         s+=1
# print(s)

#D
# a=int(input())
# s=0
# arr=list(map(int, input().split()))
# for i in range (1, len(arr)):
#     if (arr[i]>arr[i-1]):
#         s+=1
# print(s)

#E
# a=int(input())
# arr=list(map(int, input().split()))
# for i in range (1, len(arr)):
#     if (arr[i]>0 and arr[i-1]<0 or arr[i]<0 and arr[i-1]>0):
#         s="NO"
#     else:
#         s="YES"
#         break
# print(s)

#F
# a=int(input())
# s=0
# arr=list(map(int, input().split()))
# for i in range (1, len(arr)-1):
#     if (arr[i]>arr[i-1] and arr[i]>arr[i+1]):
#         s+=1
# print(s)

#G
a=int(input())
s=0
arr=list(map(int, input().split()))
for i in range(a // 2):
    arr[i], arr[a - i - 1] = arr[a - i - 1], arr[i]
print(*arr)
