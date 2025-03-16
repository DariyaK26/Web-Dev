def make_bricks(small, big, goal):
  s=0
  while (big!=0 and s+5<=goal):
    big-=1
    s+=5
  if s+small<goal:
    return False
  else:
    return True
  
def lone_sum(a, b, c):
  if a==b and b==c:
    return 0
  elif a==b: 
    return c
  elif b==c:
    return a
  elif a==c:
    return b
  else:
    return a+b+c
    
    
def no_teen_sum(a, b, c):
  return f(a)+f(b)+f(c)
def f(n):
  if n>=13 and n<=19 and n!=15 and n!=16:
    return 0
  else:
    return n
  
def r(n):
  return 10*round(float(n/10))
def round_sum(a, b, c):
  return r(a)+r(b)+r(c)

print (round_sum(16,17,18))