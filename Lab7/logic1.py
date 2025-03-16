def cigar_party(cigars, is_weekend):
  if is_weekend:
    return (cigars>=40)
  else:
    return (cigars>=40 and cigars<=60)


def date_fashion(you, date):
  if you<=2 or date<=2:
    return 0
  elif you>=8 or date>=8:
    return 2
  else:
    return 1

def caught_speeding(speed, is_birthday):
  if is_birthday:
    if speed<=65:
      return 0
    elif speed>85:
      return 2
    else:
      return 1
  else:
    if speed<=60:
      return 0
    elif speed>80:
      return 2
    else:
      return 1
      
def sorta_sum(a, b):
  if a+b>=10 and a+b<20:
    return 20
  else:
    return a+b
      
def love6(a, b):
  if a==6 or b==6 or a+b==6 or abs(a-b)==6:
    return True
  else:
    return False

def in1to10(n, outside_mode):
  if outside_mode:
    if n<10 and n>1:
      return False
    else:
      return True
  else:
    if n<=10 and n>=1:
      return True
    else:
      return False
    

