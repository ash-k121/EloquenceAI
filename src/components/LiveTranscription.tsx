import React, { useState } from 'react';
import { Mic, MicOff, Play, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const LiveTranscription: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Chinese' },
  ];
  
  const toggleListening = () => {
    setIsListening(!isListening);
  };
  
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Live Translation</h3>
        <div className="flex gap-2">
          <select
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
          <Languages size={20} className="text-gray-500 dark:text-gray-400" />
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <p className="text-gray-700 dark:text-gray-300">
          {isListening 
            ? "I'm listening now. Speak clearly into your microphone..." 
            : "Press the microphone button to start real-time translation."}
        </p>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-100 dark:border-blue-800/30 transition-colors duration-300">
        <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">Translation</h4>
        <p className="text-gray-800 dark:text-gray-200 italic">
          {isListening 
            ? "Translating your speech..." 
            : "Translation will appear here..."}
        </p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleListening}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
            isListening 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          } transition-colors duration-300`}
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          <span>{isListening ? 'Stop' : 'Start'}</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          <Play size={20} />
          <span>Demo</span>
        </motion.button>
      </div>
    </div>
  );
};

export default LiveTranscription;