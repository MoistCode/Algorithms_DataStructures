dict = Hash.new { false }
arr_of_words = %w(lead load goad gold)
arr_of_words.each { |word| dict[word] = true }

