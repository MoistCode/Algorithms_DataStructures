class MinHeap 
    attr_accessor :heap, :size

    def initialize 
        @heap = {}
        @size = 0
    end

    def insert(k)
        @heap[@size] = k
        heapify_up(@size)
        @size += 1
    end

    def delete(k)

    end

    def get_min()

    end

    private

    def heapify_up

    end

    def heapify_down 
        
    end

    def get_parent(k)

    end

    def get_left_child(k)
        left_child_key = (2 * k) + 1
    end

    def get_right_child(k)
        right_child_key = (2 * k) + 2
    end

end