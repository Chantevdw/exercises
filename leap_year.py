def is_leap(year):
    leap = False
    
    if year >= 1900 and year <= 10**10:
        # Leap Year Check
        if year % 4 == 0 and year % 100 != 0:
            return True   
        elif year % 400 == 0:
            return True
        # What happens when the control flow reaches here (after the "elif")?
    else:
        return leap

year = int(input())
print(is_leap(year))
