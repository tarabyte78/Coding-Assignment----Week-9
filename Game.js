
// Create Deck //

class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(`${value} of ${suit}`);
            }
        }
    }
// Shuffle Deck //

    shuffle() {
        let { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    }
//Deal 26 Cards to each Player from a Deck of 52 cards.

    dealCards() {
        this.shuffle(); // Shuffle the deck before dealing
        let halfwayThroughDeck = Math.ceil(this.deck.length / 2);
        return [this.deck.slice(0, halfwayThroughDeck), this.deck.slice(halfwayThroughDeck)];
    }
    }

    
//Start Game//

    class Game {
        constructor() {
            this.deck1 = new Deck();
            [this.player1, this.player2] = this.deck1.dealCards();
            this.player1Score = 0;
            this.player2Score = 0;
            this.turn = 0;
        }

//Iterate through the turns where each Player plays a Card.
    
    playTurn() {
        let card1 = this.player1[this.turn];
        let card2 = this.player2[this.turn];

        console.log("Player 1's card:", card1);
        console.log("Player 2's card:", card2);

        let value1 = this.getValue(card1);
        let value2 = this.getValue(card2);

//The Player who played the higher card is awarded a point.

        if (value1 > value2) {
            this.player1Score++;
            console.log ("Player 1 Wins This Round");
        }
        else if (value2 > value1) {
            this.player2Score++;
            console.log ("Player 2 Wins This Round");
        } else {
            console.log ("It's a Tie") //Ties result in zero points for both Players.
        } 
        this.turn++;    
    }

//Assign a value to the cards to determine winner of each round//
    
    getValue(card) {
        let cardValue = card.split(' ')[0];
        switch (cardValue) {
            case 'Ace':
                return 14;
            case 'King':
                return 13;
            case 'Queen':
                return 12;
            case 'Jack':
                return 11;
            default:
                return parseInt(cardValue);
        }
    }

//Start playing the game//

    playGame () {
        while (this.turn < this.player1.length) {
            this.playTurn(); }

            this.displayScore();
            this.declareWinner();
        }
    

//After all cards have been played, display the score and declare the winner.//

    displayScore() {
        console.log ("Player 1's Score:", this.player1Score); 
        console.log ("Player 2's Score:", this.player2Score);
    }

    declareWinner() {
        if (this.player1Score > this.player2Score) {
            console.log("Player 1 wins the game!");
        } else if (this.player1Score < this.player2Score) {
            console.log("Player 2 wins the game!");
        } else {
            console.log("It's a tie!");
        }
    }
}

    let game = new Game ();
    game.playGame ();
    
    
