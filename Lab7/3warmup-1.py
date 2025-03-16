def sleep_in(weekday, vacation):
    print (not weekday or vacation)


def monkey_trouble(a_smile, b_smile):
  return (a_smile == b_smile)

def sum_double(a, b):
  if (a==b):
    return(a*4)
  else:
    return(a+b)

def diff21(n):
  if (n>21):
    return((n-21)*2)
  else:
    return 21-n
  
def parrot_trouble(talking, hour):
  if ((hour>20 or hour<7) and talking):
    return(True)
  else:
    return(False)

def makes10(a, b):
  if (a+b==10 or a==10 or b==10):
    return True
  else:
    return False

def near_hundred(n):
  if (abs(n-100)<=10 or abs(n-200)<=10):
    return True
  else:
    return False

def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
  
def not_string(str):
  if len(str) >= 3 and str[:3] == "not":
    return str
  return "not " + str

def missing_char(str, n):
  s=str[:n]
  t=str[n+1:]
  return s+t

def front_back(str):
  if len(str) <= 1:
    return str
  
  mid = str[1:len(str)-1]  # can be written as str[1:-1]
  
  # last + mid + first
  return str[len(str)-1] + mid + str[0]

def front3(str):
  s=str[:3]
  return s*3
