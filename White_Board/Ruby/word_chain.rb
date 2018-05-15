visited_words = Hash.new { false }
arr_of_words = %w(rode rods rubs robs cow code)


def word_chain(word, end_word, arr_of_words, visited_words)
    return [word] if word == end_word
    possible_words = []

    arr_of_words.each do |w|
        next if visited_words[w]
        counter = 0
        num_of_same_letters = 0
        until counter == w.length
            num_of_same_letters += 1 if w[counter] == word[counter]
            counter += 1
        end
        if num_of_same_letters == w.length - 1
            possible_words.push(w) 
            visited_words[w] = true
        end
    end

    possible_words.reduce([word]) { |acc, wrd| acc += word_chain(wrd, end_word, arr_of_words, visited_words) }
end

p word_chain('ruby', 'code', arr_of_words, visited_words)