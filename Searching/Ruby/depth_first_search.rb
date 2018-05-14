class Graph 
    def initialize 
        @graph = Hash.new { Array.new }
    end

    def add_edge(starting_vector,  ending_vector)
        @graph[starting_vector] += [ending_vector]
    end 

    def dfs(starting_vector)
        visited = Hash.new { false }
        dfs_util(starting_vector, visited)
    end 

    private 

    def dfs_util(vector, visited)
        visited[vector] = true
        puts vector

        @graph[vector].each do |v|
            dfs_util(v, visited) unless visited[v]
        end
    end
end

graph = Graph.new

graph.add_edge(0, 1)
graph.add_edge(0, 2)
graph.add_edge(1, 2)
graph.add_edge(2, 0)
graph.add_edge(2, 3)
graph.add_edge(3, 3)

graph.dfs(2)