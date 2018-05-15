class BinaryMinHeap
    attr_reader :store, :prc
  
    def initialize(&prc)
      @store = []
      @prc = prc
    end
  
    def count
      @store.length
    end
  
    def extract
      if count > 1
        @store[0], @store[-1] = @store[-1], @store[0]
        popped_value = @store.pop 
        BinaryMinHeap.heapify_down(@store, 0, @prc)
        return popped_value
      else 
        return @store.pop
      end
    end
    
    def peek
      return @store[0]
    end
    
    def push(val)
      @store.push(val)
      BinaryMinHeap.heapify_up(@store, count - 1, @prc)
    end
    
    public
    def self.child_indices(len, parent_index)
      children_indices = []
      left_child = (2 * parent_index) + 1
      right_child = (2 * parent_index) + 2
      children_indices.push(left_child) if left_child < len
      children_indices.push(right_child) if right_child < len
      return children_indices
    end
    
    def self.parent_index(child_index)
      parent_idx = -1
      
      if child_index.odd?
        parent_idx = (child_index - 1) / 2
      elsif child_index.even?
        parent_idx = (child_index - 2) / 2      
      end
      
      raise 'root has no parent' if parent_idx < 0
      return parent_idx
    end
    
    def self.heapify_down(array, parent_idx, len = array.length, &prc)
      len = len || array.length
      return array if len == 1
      return if (2 * parent_idx) + 1 >= len
      prc = prc || Proc.new { |el1, el2| el1 <=> el2 }
      children_indices = self.child_indices(len, parent_idx)
      return if children_indices.length == 0
  
      if children_indices.any? { |ci| prc.call(array[parent_idx], array[ci]) == 1 }
        if (children_indices.length == 1  && prc.call(array[parent_idx], array[children_indices[0]]) == -1 )
          array[parent_idx], array[children_indices[0]] = array[children_indices[0]], array[parent_idx]
          self.heapify_down(array, children_indices[0], &prc)
        elsif children_indices.length == 2  && (prc.call(array[children_indices[0]], array[children_indices[1]]) == -1)
          array[parent_idx], array[children_indices[0]] = array[children_indices[0]], array[parent_idx]
          self.heapify_down(array, children_indices[0], &prc)
        elsif children_indices.length == 2 && (prc.call(array[children_indices[0]], array[children_indices[1]]) == 1)
          array[parent_idx], array[children_indices[1]] = array[children_indices[1]], array[parent_idx]
          self.heapify_down(array, children_indices[1], &prc)
        else 
          array[parent_idx], array[children_indices[0]] = array[children_indices[0]], array[parent_idx]
          self.heapify_down(array, children_indices[0], &prc)
        end
      end
  
      array
    end
  
    def self.heapify_up(array, child_idx, len = array.length, &prc)
      return if child_idx == 0
      parent_idx = self.parent_index(child_idx)
      prc = prc || Proc.new { |el1, el2| el1 <=> el2 }
  
      if prc.call(array[parent_idx], array[child_idx]) == 1
        array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
        self.heapify_up(array, parent_idx, &prc)
      end
  
      array
    end
  
  end