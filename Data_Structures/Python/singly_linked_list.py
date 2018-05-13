class LinkedList:
    current_node = None;
    
    def __init__(self):
        self.head = None
        current_node = Node(self.head)

    @change_current_node
    def change_current_node(self):
        self.current_node.next = self

class Node:

    def __init__(self, data):
        self.data = data
        self.next = None
        LinkedList.change_current_node(self)


