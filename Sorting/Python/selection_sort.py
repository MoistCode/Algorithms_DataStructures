import sys 
my_list = [64, 25, 12, 22, 11]

for i in range(len(my_list)):
    min_idx = i
    for j in range(i + 1, len(my_list)):
        if my_list[min_idx] > my_list[j]:
            min_idx = j 

    my_list[i], my_list[min_idx] = my_list[min_idx], my_list[i] 

for i in range(len(my_list)):
    print("%d" %my_list[i])