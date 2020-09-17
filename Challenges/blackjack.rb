class Player
    attr_reader :name, :bankroll, :hand
    def initialize name, bankroll, hand
        @name = name
        @bankroll = bankroll
        @hand = []
    end
end

#create 2 players based on the Player class

human = Player.new "Human", [], 100
computer = Player.new "Computer", [], 1000

#create card class, couldn't figure out how to do it without suits, I guess I could iterate over one full set of 13 4 times but this seemed easier

class Card
    attr_reader :value, :suit
    def initialize value, suit
        @value = value
        @suit = suit
    end
end

#create the deck of 53

class Deck
    # attr_reader :values :suits :cards
    def initialize values, suits, cards
        @values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
        @suits = ["heart", "diamond", "club", "spade"]
        @cards = []
    end
    #Assign each a value    
    @values.each do |x|
        if x.class == Integer
            value = x
        elsif x == 'A'
            value = 11
        else
            value = 10
        end
        #create 4 sets of 13  by suits and push into cards array
        @suits.each do 
            @cards << Card.new
        end
    end
    @cards.shuffle!
end



#intro to player

p "Welcome to Blackjack, tell us your name to begin"
input = "gets.chomp"
p "Thanks, #{input}"

#get a new card

# def get_card (player)
#     new_card = Card.new value, suit
#     player.hand << new_card
# end


# get_card human
# p human.hand



    

