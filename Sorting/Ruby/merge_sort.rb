def merge_sort(arr, &prc) 
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }
    return arr if (arr.length == 1 || arr.empty?)

    middle_idx = arr.length / 2
    left = merge_sort(arr.take(middle_idx), &prc)
    right = merge_sort(arr.drop(middle_idx), &prc)

    merge_sort_helper(left, right, &prc)
end 

def merge_sort_helper(arr_1, arr_2, &prc) 
    sorted_arr = [] 

    until (arr_1.empty? || arr_2.empty?)
        case (prc.call(arr_1[0], arr_2[0]))
        when -1
            sorted_arr.push(arr_1.shift)
        when 0
            sorted_arr.push(arr_1.shift)
            sorted_arr.push(arr_2.shift)
        when 1
            sorted_arr.push(arr_2.shift)
        end
    end

    arr_1.empty? ? sorted_arr += arr_2 : sorted_arr += arr_1

    return sorted_arr
end

arr = [4,6,2,3,4,7,-8,3,5,0,-6,-2,-4]

p merge_sort(arr)