class Node 
    attr_accessor :value, :next

    def initialize(value)
        @value = value
        @next = nil
    end

end

class LinkedList 
    attr_accessor :head_node, :current_node

    def initialize()
        @head_node = Node.new(nil)
    end

    def add_node(node)
        last_node = @head_node 
        until last_node.next.nil? 
            last_node = last_node.next
        end
        last_node.next = node
    end

    def print_all_nodes 
        current_node = @head_node 
        until current_node.nil?
            p current_node
            current_node = current_node.next
        end
    end

end

llist = LinkedList.new()
node1 = llist.add_node(Node.new(1))
node2 = llist.add_node(Node.new(2))
node3 = llist.add_node(Node.new(3))
llist.print_all_nodes

# current_node = LinkedList.head 
# until current_node.nil?
#     p current_node 
#     current_node = current_node.next
# end 