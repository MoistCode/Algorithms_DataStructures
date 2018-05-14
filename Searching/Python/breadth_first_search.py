from collections import defaultdict

class Graph:

    def __init__(self):
        self.graph = defaultdict(list)

    def addEdge(self, u, v):
        self.graph[u].append(v)

    def BFS(self, s):
        visited = [False] * (len(self.graph))

        queue = []

        queue.append(s)
        visited[s] = True

        while queue:
            s = queue.pop(0)
            print(s)

            for i in self.graph[s]:
                if visited[i] == False:
                    queue.append(i) 
                    visited[i] = True
    
graph = Graph() 

graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(1, 2)
graph.addEdge(2, 0)
graph.addEdge(2, 3)
graph.addEdge(3, 3)

graph.BFS(2)