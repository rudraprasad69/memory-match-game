import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  value: string;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ value, isFlipped, onClick }) => {
  return (
    <motion.div
      className="w-24 h-36 rounded-lg shadow-lg cursor-pointer relative"
      onClick={onClick}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
    >
      <div className="absolute w-full h-full [backface-visibility:hidden] bg-gray-400 flex items-center justify-center rounded-lg">
        <span className="text-4xl">?</span>
      </div>
      <div
        className="absolute w-full h-full [backface-visibility:hidden] bg-white text-black flex items-center justify-center rounded-lg"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <span className="text-4xl">{value}</span>
      </div>
    </motion.div>
  );
};

export default Card;