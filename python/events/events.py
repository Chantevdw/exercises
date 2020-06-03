eventspath = "events.log"
with open(eventspath) as file:
    records = {}
    index = 10
    for row in file:
        row = row.rstrip('\n').split(" ")
        # print(row[2])
        records[row[2]] = 1
        #records = row.count('8')
        records = {x:row[2].count(x) for x in row[2]}
        #print(records)
        sorted_list = sorted(records.items(), key=lambda i:i[1], reverse=True)
        # for y in sorted_list:
        #     print(sorted_list[:11])
        print(len(sorted_list))
        #break

        # records[row[2]] = 1
        # print(records)
        # break



#count user ID's
#print top 10