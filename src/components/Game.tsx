import React, { useState, useEffect, useRef } from 'react';
import GameBoard from './GameBoard';
import Leaderboard from './Leaderboard';
import { motion } from 'framer-motion';

interface Score {
  name: string;
  score: number;
}

const Game: React.FC = () => {
  const [tries, setTries] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const savedScore = localStorage.getItem('highScore');
    return savedScore ? parseInt(savedScore, 10) : 0;
  });
  const [gameId, setGameId] = useState(1);
  const [level, setLevel] = useState(1);
  const [maxTries, setMaxTries] = useState(level * 10);
  const [leaderboard, setLeaderboard] = useState<Score[]>(() => {
    const savedLeaderboard = localStorage.getItem('leaderboard');
    return savedLeaderboard ? JSON.parse(savedLeaderboard) : [];
  });
  const [isPaused, setIsPaused] = useState(false);

  const flipSoundRef = useRef<HTMLAudioElement>(null);
  const matchSoundRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setMaxTries(level * 10);
  }, [level]);

  useEffect(() => {
    if (gameWon) {
      if (tries < highScore || highScore === 0) {
        setHighScore(tries);
        localStorage.setItem('highScore', tries.toString());
      }
      const name = prompt('You won! Enter your name for the leaderboard:');
      if (name) {
        const newScore = { name, score: tries };
        const newLeaderboard = [...leaderboard, newScore]
          .sort((a, b) => a.score - b.score)
          .slice(0, 10);
        setLeaderboard(newLeaderboard);
        localStorage.setItem('leaderboard', JSON.stringify(newLeaderboard));
      }
    }
  }, [gameWon, tries, highScore, leaderboard]);

  useEffect(() => {
    if (tries >= maxTries && !gameWon) {
      setGameLost(true);
    }
  }, [tries, maxTries, gameWon]);

  const handleGameWin = () => {
    setGameWon(true);
  };

  const handleRestart = () => {
    setTries(0);
    setGameWon(false);
    setGameLost(false);
    setGameId(prevId => prevId + 1);
    if (gameWon) {
      setLevel(prevLevel => prevLevel + 1);
    }
  };

  const togglePause = () => {
    setIsPaused(prevPaused => !prevPaused);
  };

  const playFlipSound = () => {
    flipSoundRef.current?.play();
  };

  const playMatchSound = () => {
    matchSoundRef.current?.play();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <audio ref={flipSoundRef} src="/flip.mp3" />
      <audio ref={matchSoundRef} src="/match.mp3" />
      <motion.h1 
        className="text-4xl sm:text-5xl font-bold mb-8 text-shadow-lg text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Memory Match
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 text-xl justify-center">
        <p>Level: <span className="font-bold">{level}</span></p>
        <p>Tries: <span className="font-bold">{tries}</span></p>
        <p>Max Tries: <span className="font-bold">{maxTries}</span></p>
        <p>High Score: <span className="font-bold">{highScore}</span></p>
      </div>
      <div className="flex gap-4 mb-8 justify-center">
        <motion.button
          className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
          onClick={togglePause}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </motion.button>
      </div>
      {isPaused && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold text-white mb-4">Paused</h2>
            <motion.button
              className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
              onClick={togglePause}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </div>
        </motion.div>
      )}
      <div className="w-full max-w-2xl mx-auto">
        {gameWon ? (
          <motion.div 
            className="text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-4xl font-bold text-green-400 mb-4">You Won!</h2>
            <motion.button
              className="px-6 py-2 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Level
            </motion.button>
          </motion.div>
        ) : gameLost ? (
          <motion.div 
            className="text-center bg-gray-700 p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p className="text-6xl mb-4">😭</p>
            <h2 className="text-4xl font-bold text-red-400 mb-4">You Lost!</h2>
            <motion.button
              className="px-6 py-2 bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
          </motion.div>
        ) : (
          <GameBoard
            key={gameId}
            level={level}
            onGameWin={handleGameWin}
            setTries={setTries}
            isPaused={isPaused}
            playFlipSound={playFlipSound}
            playMatchSound={playMatchSound}
          />
        )}
      </div>
    </div>
  );
}

export default Game;