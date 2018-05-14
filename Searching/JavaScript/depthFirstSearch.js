class Graph {
    constructor() {
        this.graph = {};
    }

    addEdge(starting_vector, ending_vector) {
        if(this.graph[starting_vector] == undefined) {
            this.graph[starting_vector] = [ending_vector];
        } else {
            this.graph[starting_vector].push(ending_vector);
        }
    }

    dfsUtil(vector, visited) {
        visited[vector] = true;
        console.log(vector);

        for(let i = 0; i < this.graph[vector].length; i++) {
            if(!visited[this.graph[vector][i]]) {
                this.dfsUtil(this.graph[vector][i], visited);
            }
        }
    }

    dfs(starting_vector) {
        let visited = {};
        this.dfsUtil(starting_vector, visited);
    }
}

graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);
graph.dfs(2);