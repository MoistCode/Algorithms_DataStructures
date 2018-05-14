class Graph {
    constructor() {
        this.graph = {};
    }

    addEdge(startingVector, endingVector) {
        if (this.graph[startingVector] == undefined) {
            this.graph[startingVector] = [endingVector];
        } else {
            this.graph[startingVector].push(endingVector);
        }
    }

    breadthFirstSearch(startingVector) {
        let visited = {};
        let queue = [startingVector];
        let ordered_search = [];

        while (queue.length !== 0) {
            let currentVector = queue.shift();

            if (visited[currentVector] === undefined) {
                visited[currentVector] = true;
                ordered_search.push(currentVector);

                for(let i = 0; i < this.graph[currentVector].length; i++) {
                    queue.push(this.graph[currentVector][i]);
                }
            }
        }

        console.log(ordered_search);
    }
}

const graph = new Graph();

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);

graph.breadthFirstSearch(2);