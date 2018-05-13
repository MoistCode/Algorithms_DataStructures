class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        this.headNode = new Node(null);
    };

    addNode(node) {
        let currentNode = this.headNode;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        };
        currentNode.next = node;
    };

    printLinkedList() {
        let currentNode = this.headNode;
        while (currentNode !== null) {
            console.log(currentNode);
            currentNode = currentNode.next;
        };
    };
};

llist = new LinkedList();
llist.addNode(new Node(1));
llist.addNode(new Node(2));
llist.addNode(new Node(3));
llist.addNode(new Node(4));
llist.printLinkedList();