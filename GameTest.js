const expect = chai.expect
const assert = chai.assert

describe('Deck', () => {
    it ('#Should create a deck of 52 cards', () => {
        const deck = new Deck ();
        expect(deck.deck.length).to.equal(52);
    });

    it ('#Should shuffle the deck', () => {
        const deck = new Deck();
        const initialDeck = [...deck.deck];
        deck.shuffle();
        expect(deck.deck).not.to.equal(initialDeck);
    });
   
    it ('#Should deal 26 cards to each player', () => {
        const deck = new Deck();
        const [player1, player2] = deck.dealCards();
        expect(player1.length).to.equal (26);
        expect(player2.length).to.equal (26);
    });
});
   

//Start Game//

    describe('Game', () => {
    it('should play the game and declare the winner', () => {
        const game = new Game();
        game.playGame();
        
        // Access the winner variable from the Game instance
        const winner = game.player1Score > game.player2Score ? "Player 1" :
                       game.player1Score < game.player2Score ? "Player 2" :
                       "It's a tie!";

        expect(winner).to.not.equal("It's a tie!"); // Ensure it's not a tie
        expect(winner).to.be.oneOf(["Player 1", "Player 2"]); // Ensure winner is one of the players
    });
});


