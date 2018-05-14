class Graph 
    def initialize 
        @graph = Hash.new { Array.new }
    end

    def add_edge(starting_vector, ending_vector)
        @graph[starting] += [ending_vector]
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
            end
        end

        return final_arr
    end
end