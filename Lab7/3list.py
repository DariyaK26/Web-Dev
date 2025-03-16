def first_last6(nums):
  if (nums[0]==6 or nums[-1]==6):
    return True
  else:
    return False

def make_pi():
    return [3, 1, 4]


def sum3(nums):
  s=0
  for i in nums:
    s+=i
  return s

def reverse3(nums):
    return nums[::-1]

def sum2(nums):
   return sum(nums[:2])


def make_ends(nums):
  return [nums[0], nums[-1]]
