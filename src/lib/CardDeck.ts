import Card from './Card';

class CardDeck {
    constructor(private deck: Card[]) {
        this.deck = [];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        for (const suit of this.suit) {
            for (const rank of this.rank) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            if (this.deck.length === 0) {
                throw new Error('No more cards left in the deck');
            } else {
                cards.push(this.getCard());
            }
        }
        return cards;
    }
}

export default CardDeck;

