import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Update: React.FC = () => {
  const [updateStatus, setUpdateStatus] = useState('Checking for updates...');
  const navigate = useNavigate();

  useEffect(() => {
    const checkForUpdates = () => {
      setUpdateStatus('Checking for updates...');
      setTimeout(() => {
        setUpdateStatus('You are on the latest version.');
      }, 2000);
    };

    checkForUpdates();
  }, []);

  const handleClose = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 relative">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Update</h2>
        <p className="text-gray-600">{updateStatus}</p>
        <button 
          onClick={() => setUpdateStatus('Checking for updates...')}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Check for Updates
        </button>
      </div>
    </div>
  );
};

export default Update;
