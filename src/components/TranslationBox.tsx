import React from 'react';
import { Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TranslationBoxProps {
  text: string;
  onPlay: () => void;
}

const TranslationBox: React.FC<TranslationBoxProps> = ({ text, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center mb-2">
        <Volume2 size={16} className="text-purple-600 mr-2" />
        <h3 className="text-sm font-medium text-gray-700">Translation</h3>
      </div>
      <motion.div 
        className="bg-purple-50 border border-purple-100 rounded-lg p-4 min-h-[120px] mb-4 relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <AnimatePresence mode="wait">
          {text ? (
            <motion.p
              key="translation"
              className="text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {text}
            </motion.p>
          ) : (
            <motion.p
              key="placeholder"
              className="text-gray-400 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Translation will appear here...
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      
      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlay}
          disabled={!text}
          className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
            text 
              ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-purple-200' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Volume2 size={18} className="mr-2" />
          Play Translation
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TranslationBox;