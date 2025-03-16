def string_times(str, n):
  return n*str

def front_times(str, n):
  return n*str[:3]

def string_bits(str):
  res=""
  for i in range(0,len(str)):
    if i%2==0:
      res=res+str[i]
  return res

def string_splosion(str):
  res=""
  for i in range (len(str)):
    res+=str[:i+1]
  return res

def last2(str):
  if len(str) < 2:
    return 0
  last=str[-2:]
  s=0
  for i in range(len(str)-2):
    sub=str[i:i+2]
    if sub==last:
      s+=1
  return s

def array_count9(nums):
  s=0
  for i in nums:
    if i==9:
      s+=1
  return s


def array_front9(nums):
  end=len(nums)
  if end>4:
    end=4
  for i in range(end):
    if nums[i] ==9:
      return True
  return False

def array123(nums):
  for i in range (0, len(nums)-2):
    if (nums[i]==1 and nums[i+1]==2 and nums[i+2]==3):
      return True
  return False

def string_match(a, b):
  s=min(len(a), len(b))
  c=0
  for i in range(s-1):
    asu=a[i:i+2]
    bsu=b[i:i+2]
    if asu==bsu:
      c+=1
  return c
      
  

