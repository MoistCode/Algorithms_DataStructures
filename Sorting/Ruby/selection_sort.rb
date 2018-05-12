def selection_sort(arr) 
    (arr.length - 1).times do |i|
        min_idx = i
        (i...arr.length).times do |j|
            if arr[min_idx] > arr[j] 
                min_idx = j 
            end
        end
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    end
end

arr = [64, 25, 12, 22, 11]
p selection_sort(arr)