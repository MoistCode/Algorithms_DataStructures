def permutation(myList, first_index = 0, last_index = len(myList) - 1):
    if first_index == last_index:
        print ''.join(str(myList))
    else:
        for i in xrange(first_index, last_index + 1):
            myList[first_index], myList[i] = myList[i], myList[first_index]
            permutation(myList, first_index + 1, last_index)
            myList[i], myList[first_index] = myList[first_index], myList[i]


permutation([1,2,3])