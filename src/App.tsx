
import './App.css'
import Card from './components/Card.tsx';
import gameCard from './lib/gameCard.ts';
import CardDeck from './lib/CardDeck.ts';
import React, {useState} from "react";


const App = () => {
    const [hand, setHand] = useState<gameCard[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        setHand(dealtCards);
    }

    if (hand.length === 0) {
        return <button onClick={dealCards}>Deal the cards</button>
    }

    return (
        <div>
            <button onClick={dealCards}>Deal the cards</button>
            <div className="playingCards faceImages">
                {hand.map((card, index) => (
                    <span key={index} className={`card rank-${card.rank} ${card.suit}`}>
                        <span className="rank">{card.rank}</span>
                        <span className="suit">{card.suit}</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default App;
