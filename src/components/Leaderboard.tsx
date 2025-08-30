import React from 'react';

interface Score {
  name: string;
  score: number;
}

interface LeaderboardProps {
  scores: Score[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <div className="w-full max-w-md p-4 bg-gray-700 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Leaderboard</h2>
      {scores.length === 0 ? (
        <p className="text-center text-gray-400">No scores yet. Play a game to get on the leaderboard!</p>
      ) : (
        <ol className="list-none">
          {scores.map((score, index) => (
            <li key={index} className="mb-2">
              <div className="bg-gray-800 p-3 rounded-md flex justify-between items-center">
                <span>{score.name}</span>
                <span>{score.score}</span>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Leaderboard;