class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class CustomLinkedList {
    constructor(initialNode) {
        this.headNode = initalNode;
    }

    addNode(addedNode) {
        let currentNode = this.headNode;
        while(currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = addedNode;
    }

    printLinkedList() {
        let currentNode = this.headNode;
        while(currentNode.next != null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

let listOfNodes = [
    new CustomLinkedList(new Node(1)),
    new CustomLinkedList(new Node(2)),
    new CustomLinkedList(new Node(3)),
    new CustomLinkedList(new Node(4)),
    new CustomLinkedList(new Node(5)),
    new CustomLinkedList(new Node(6)),
];

