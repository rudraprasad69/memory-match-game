import React, { useState, useEffect } from 'react';
import Leaderboard from './Leaderboard';

interface Score {
  name: string;
  score: number;
}

const LeaderboardPage: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<Score[]>([]);

  useEffect(() => {
    const savedLeaderboard = localStorage.getItem('leaderboard');
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <Leaderboard scores={leaderboard} />
    </div>
  );
};

export default LeaderboardPage;
