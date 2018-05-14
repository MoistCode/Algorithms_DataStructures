from collections import defaultdict

class Graph:

    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, starting_vector, ending_vector):
        self.graph[starting_vector].append(ending_vector)

    def DFS_util(self, vector, visited):
        visited[vector] = True 
        print(vector)

        for vect in self.graph[vector]:
            if visited[vect] == False:
                self.DFS_util(vect, visited)

    def DFS(self, starting_vector):
        visited = [False] * (len(self.graph))
        self.DFS_util(starting_vector, visited)

graph = Graph() 
graph.add_edge(0, 1)
graph.add_edge(0, 2)
graph.add_edge(1, 2)
graph.add_edge(2, 0)
graph.add_edge(2, 3)
graph.add_edge(3, 3)

graph.DFS(2)