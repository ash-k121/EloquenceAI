import React from 'react';
import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';

interface TranscriptionBoxProps {
  text: string;
}

const TranscriptionBox: React.FC<TranscriptionBoxProps> = ({ text }) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center mb-2">
        <Mic size={16} className="text-blue-600 mr-2" />
        <h3 className="text-sm font-medium text-gray-700">Transcription</h3>
      </div>
      <motion.div 
        className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[100px] relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {text ? (
          <motion.p 
            className="text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.p>
        ) : (
          <motion.p 
            className="text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Speak to see transcription...
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TranscriptionBox;