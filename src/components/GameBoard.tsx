import React, { useState, useEffect } from 'react';
import Card from './Card';

interface CardData {
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameBoardProps {
  level: number;
  onGameWin: () => void;
  setTries: React.Dispatch<React.SetStateAction<number>>;
  isPaused: boolean;
  playFlipSound: () => void;
  playMatchSound: () => void;
}

const generateCards = (level: number): CardData[] => {
  const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numPairs = level + 3;
  const selectedValues = cardValues.slice(0, numPairs);
  const cards: CardData[] = [];
  selectedValues.forEach(value => {
    cards.push({ value, isFlipped: false, isMatched: false });
    cards.push({ value, isFlipped: false, isMatched: false });
  });
  return cards;
};

const shuffleCards = (array: CardData[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameBoard: React.FC<GameBoardProps> = ({ level, onGameWin, setTries, isPaused, playFlipSound, playMatchSound }) => {
  const [cards, setCards] = useState(() => shuffleCards(generateCards(level)));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (isPaused || flippedCards.length === 2 || cards[index].isFlipped) {
      return;
    }
    playFlipSound();
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      onGameWin();
    }
  }, [cards, onGameWin]);

  useEffect(() => {
    if (flippedCards.length === 2 && !isPaused) {
      setTries(prevTries => prevTries + 1);
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        // Matched
        playMatchSound();
        const newCards = [...cards];
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
      } else {
        // Not matched
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstIndex].isFlipped = false;
          newCards[secondIndex].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards, setTries, isPaused, playMatchSound]);

  const numCols = Math.ceil(Math.sqrt(cards.length));

  return (
    <div className="bg-gray-800 p-4 rounded-3xl shadow-[0_0_30px_10px_rgba(168,85,247,0.5)]">
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))` }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            value={card.value}
            isFlipped={card.isFlipped}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;