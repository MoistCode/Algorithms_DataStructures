def pile_of_boxes(total_boxes, max_boxes, split_num)
    return 0 if total_boxes == 0
    return 1 if total_boxes <= max_boxes
    num_per_pile = total_boxes / split_num
    current_num_of_boxes = total_boxes
    arr = []

    until current_num_of_boxes == 0
        if current_num_of_boxes - num_per_pile == (num_per_pile + 1)
            arr.push(num_per_pile)
            arr.push(num_per_pile + 1)
            current_num_of_boxes = 0
        elsif current_num_of_boxes - num_per_pile == (num_per_pile - 1)
            arr.push(num_per_pile)
            arr.push(num_per_pile - 1)
            current_num_of_boxes = 0
        else
            arr.push(num_per_pile)
            current_num_of_boxes -= num_per_pile
        end
    end

    arr.reduce(0) { |acc, sub_boxes| acc += pile_of_boxes(sub_boxes, max_boxes, split_num) }
end

# p pile_of_boxes(11, 2, 2)
# p pile_of_boxes(100, 1, 3)
# p pile_of_boxes(64, 2, 4)
# p pile_of_boxes(64, 2, 3)