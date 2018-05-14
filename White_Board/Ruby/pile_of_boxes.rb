def pile_of_boxes(total_boxes, max_boxes, split_num)
    return 0 if total_boxes == 0
    return 1 if total_boxes <= max_boxes
    num_per_pile = total_boxes / split_num
    arr = []

    until arr.length == split_num || total_boxes == 0
        if total_boxes - num_per_pile == 1
            arr.push(num_per_pile + 1)
            total_boxes -= (num_per_pile + 1)
        elsif total_boxes - num_per_pile == -1
            arr.push(num_per_pile - 1)            
            total_boxes - (num_per_pile - 1)
        else
            arr.push(num_per_pile)            
            total_boxes - num_per_pile
        end
    end

    arr.inject(0) { |acc, sub_boxes| acc += pile_of_boxes(sub_boxes, max_boxes, split_num) }
end

p pile_of_boxes(11, 2, 2)