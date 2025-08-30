import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import LeaderboardPage from './components/LeaderboardPage';
import Update from './components/Update.tsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Layout>
  );
}

export default App;