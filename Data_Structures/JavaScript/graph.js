class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class CustomLinkedList {
    constructor(initialNode) {
        this.headNode = initialNode;
    }

    addNode(addedNode) {
        let currentNode = this.headNode;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = addedNode;
    }

    printLinkedList() {
        let currentNode = this.headNode;
        while(currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log("======");
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

listOfNodes[0].addNode(new Node(2));
listOfNodes[0].addNode(new Node(4));
listOfNodes[0].addNode(new Node(6));

listOfNodes[1].addNode(new Node(1));
listOfNodes[1].addNode(new Node(5));
listOfNodes[1].addNode(new Node(6));

listOfNodes[2].addNode(new Node(1));

listOfNodes[3].addNode(new Node(1));
listOfNodes[3].addNode(new Node(5));

listOfNodes[4].addNode(new Node(2));
listOfNodes[4].addNode(new Node(4));

listOfNodes[5].addNode(new Node(1));
listOfNodes[5].addNode(new Node(2));

listOfNodes.forEach((linkedList) => {
    linkedList.printLinkedList();
});



