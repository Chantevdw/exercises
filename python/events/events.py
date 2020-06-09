#pseudo code
# 1. Isolate elements from list
# 2. Count elements occurance
# 3. Store element as key and occurance_number as value
# 4. Sort list

from collections import Counter

with open("data/events.log", 'r', ) as file:
    valid_records = {}

    for row in file:

        row = row.rstrip('\n').split(" ")
        #Check is entry exists. If no add record
        #if already exists add entry +1
        if not row[2] in valid_records:
            valid_records[row[2]] = 1

        else:
            valid_records[row[2]] += 1

    # top = sorted(valid_records.items(), key=lambda x: x[1], reverse=True)[:10]
    #Count entries
    counted_valid_records = Counter(valid_records)
    #Sort Entries
    top10 = counted_valid_records.most_common(10)

    print(top10)