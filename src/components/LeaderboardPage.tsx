import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Leaderboard from './Leaderboard';

interface Score {
  name: string;
  score: number;
}

const LeaderboardPage: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<Score[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedLeaderboard = localStorage.getItem('leaderboard');
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <Leaderboard scores={leaderboard} onClose={handleClose} />
    </div>
  );
};

export default LeaderboardPage;
