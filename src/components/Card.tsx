import React from 'react';

interface CardProps {
    rank: '2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'J'|'Q'|'K'|'A';
    suit: 'diams'|'hearts'|'clubs'|'spades';
}


const Card: React.FC<CardProps> = ({rank, suit}) => {

    const suitsObj = (
        suit === 'diams' ? '♦':
            suit === 'hearts' ? '♥':
                suit === 'clubs' ? '♣':
                    '♠');

    const cardClass = `card ${rank} ${suit}`;

    return (
        <span className ={cardClass}>
          <span className="rank">{rank}</span>
          <span className="suit">{suitsObj}</span>
      </span>
    );
};

export default Card;