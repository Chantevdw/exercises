#pseudo code
# 1. Isolate elements from list
# 2. Count elements occurance
# 3. Store element as key and occurance_number as value
# 4. Sort list

from collections import Counter

eventspath = "events.log"
with open(eventspath) as file:
    records = {}
    for row in file:
        row = row.rstrip('\n').split(" ")
        # print(row[2])
        #records[row[2]] = 1
        results = Counter(row[2]).most_common(10)
        print(results)

        # records = {x:row[2].count(x) for x in row[2]}
        # #print(records)
        # sorted_list = sorted(records.items(), key=lambda i:i[1], reverse=True)
        # # for y in sorted_list:
        # #     print(sorted_list[:11])
        # print(len(sorted_list))
        # #break
        #
        # # records[row[2]] = 1
        # # print(records)
        # # break



#count user ID's
#print top 10