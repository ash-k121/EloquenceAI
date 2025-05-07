<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mt-8 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-lg overflow-hidden border border-blue-300 dark:border-blue-700"
>
  <div className="p-4 flex items-center justify-between">
    <h4 className="text-lg font-semibold text-blue-900 dark:text-white">Try the Streamlit Demo</h4>
    <a
      href="http://localhost:8501"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-blue-600 dark:text-blue-300 underline hover:text-blue-800 dark:hover:text-white transition"
    >
      Open in New Tab ↗
    </a>
  </div>

  <div className="w-full h-[500px] bg-white dark:bg-gray-900">
    <iframe
      src="http://localhost:8501"
      title="Streamlit Demo"
      className="w-full h-full border-0"
      loading="lazy"
    ></iframe>
  </div>
</motion.div>
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
        
      </div>

      


      

      {/* Streamlit Embed Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-lg overflow-hidden border border-blue-300 dark:border-blue-700"
      >
        <div className="p-4 flex items-center justify-between">
          <h4 className="text-lg font-semibold text-blue-900 dark:text-white">Try the Streamlit Demo</h4>
          <a
            href="http://localhost:8501"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-300 underline hover:text-blue-800 dark:hover:text-white transition"
          >
            Open in New Tab ↗
          </a>
        </div>

        <div className="w-full h-[500px] bg-white dark:bg-gray-900">
          <iframe
            src="http://localhost:8501"
            title="Streamlit Demo"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveTranscription;
