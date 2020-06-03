eventspath = "events.log"
with open(eventspath) as file:
    records = {}
    # index = 15
    for row in file:
        row = row.rstrip('\n').split(" ")
        print(row[2])






        # b = [j[0] for i in records for j in i.items()]
        # for k in list(set(b)):
        #     print("{0}: {1}".format(k, b.count(k))

        # records[row[2]] = 1
        # print(records)
        # break

    # d = [{"abc": "movies"}, {"abc": "sports"}, {"abc": "music"}, {"xyz": "music"}, {"pqr": "music"}, {"pqr": "movies"},
    #      {"pqr": "sports"}, {"pqr": "news"}, {"pqr": "sports"}]
    #
    # # fetch keys
    # b = [j[0] for i in d for j in i.items()]
    #
    # # print output
    # for k in list(set(b)):
    #     print("{0}: {1}".format(k, b.count(k))


#count user ID's
#print top 10