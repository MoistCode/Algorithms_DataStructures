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
        console.log("====================================");
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

let listOfNodes = [
    new CustomLinkedList(node1),
    new CustomLinkedList(node2),
    new CustomLinkedList(node3),
    new CustomLinkedList(node4),
    new CustomLinkedList(node5),
    new CustomLinkedList(node6),
];

listOfNodes[0].addNode(node2);
listOfNodes[0].addNode(node4);
listOfNodes[0].addNode(node6);

listOfNodes[1].addNode(node1);
listOfNodes[1].addNode(node5);
listOfNodes[1].addNode(node6);

listOfNodes[2].addNode(node3);

listOfNodes[3].addNode(node1);
listOfNodes[3].addNode(node5);

listOfNodes[4].addNode(node1);
listOfNodes[4].addNode(node5);

listOfNodes[5].addNode(node1);
listOfNodes[5].addNode(node2);

