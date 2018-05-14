class Graph 
    def initialize 
        @graph = Hash.new { Array.new }
    end

    def add_edge(starting_vector, ending_vector)
        @graph[starting_vector] += [ending_vector]
    end

    def breadth_first_search(starting_vector)
        visited = Hash.new { false }

        queue = [starting_vector] + @graph[starting_vector]
        final_arr = []

        until queue.empty?
            current_vector = queue.shift

            if visited[current_vector] == false
                final_arr << current_vector
                visited[current_vector] = true
                queue += @graph[current_vector]
            end
        end

        puts final_arr
    end
end

graph = Graph.new

graph.add_edge(0, 1)
graph.add_edge(0, 2)
graph.add_edge(1, 2)
graph.add_edge(2, 0)
graph.add_edge(2, 3)
graph.add_edge(3, 3)

graph.breadth_first_search(2)