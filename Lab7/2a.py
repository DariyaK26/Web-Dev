# #1
# if __name__ == '__main__':
#     n = int(input())
#     for i in range(0, n):
#         print(i**2)

# #2
# if __name__ == '__main__':
#     a = int(input())
#     b = int(input())
#     print(a//b)
#     print(a/b)

# #3
# if __name__ == '__main__':
#     n = int(input())
#     for i in range(1, n+1):
#         print(i, end="")

#4

# n = int(input()) 
# scores = list(map(int, input().split()))  
# max_score = max(scores)
# runner_up_scores = [score for score in scores if score != max_score]
# runner_up_score = max(runner_up_scores)
# print(runner_up_score)



#5
a=int(input())
if (a%2==1 or (a%2==0 and a>=6 and a<=20)):
    print("Weird")
else:
    print("Not Weird")

#6
a = int(input())
b = int(input())
print(a+b)
print(a-b)
print(a*b)

#7
if __name__ == '__main__':
    n = int(input())
    student_marks = {}

    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores

    query_name = input()
    avg_score = sum(student_marks[query_name]) / len(student_marks[query_name])
    print(f"{avg_score:.2f}")


#8
def print_full_name(first, last):
    print("Hello", first_name, last_name+"! You just delved into python.")

if __name__ == '__main__':
    first_name = input()
    last_name = input()
    print_full_name(first_name, last_name)

#9
if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    result = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]

    print(result)

#10
if __name__ == '__main__':
    students = []

    
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    
    second_lowest = sorted(set(score for _, score in students))[1]

   
    names = sorted([name for name, score in students if score == second_lowest])

    
    for name in names:
        print(name)

