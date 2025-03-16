def double_char(str):
  s=""
  for i in str:
    s+=i*2
  return s

def count_hi(str):
  s=0
  for i in range (len(str)-1):
    if str[i:i+2]=="hi":
      s+=1
  return s

def end_other(a, b):
    a, b = a.lower(), b.lower()
    return a.endswith(b) or b.endswith(a)

def cat_dog(s):
    return s.count("cat") == s.count("dog")