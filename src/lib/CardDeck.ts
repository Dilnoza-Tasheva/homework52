import gameCard from './gameCard.ts';

class CardDeck {
        private deck: Card[] = [];
        private ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        private suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        constructor() {
            for (const suit of this.suits) {
                for (const rank of this.ranks) {
                    this.deck.push(new gameCard(rank, suit));
                }
            }
        }

    getCard(): gameCard {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): gameCard[] {
        const cards: gameCard[] = [];
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

