import React, { useEffect, useState } from 'react';
import { Mic, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import LanguageSelector from './LanguageSelector';
import TranscriptionBox from './TranscriptionBox';
import TranslationBox from './TranslationBox';

const LiveTranslation: React.FC = () => {
  const {
    fromLanguage,
    toLanguage,
    isLiveTranscription,
    transcriptionText,
    translationText,
    translationStatus,
    setFromLanguage,
    setToLanguage,
    toggleLiveTranscription,
    playTranslation
  } = useAppContext();

  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (translationStatus === 'recording') {
      setPulse(true);
    } else {
      setPulse(false);
    }
  }, [translationStatus]);

  const languageOptions = [
    { value: 'en-US', label: 'English' },
    { value: 'es-ES', label: 'Spanish' },
    { value: 'fr-FR', label: 'French' },
    { value: 'de-DE', label: 'German' },
    { value: 'it-IT', label: 'Italian' },
    { value: 'ja-JP', label: 'Japanese' },
    { value: 'ko-KR', label: 'Korean' },
    { value: 'zh-CN', label: 'Chinese (Simplified)' },
    { value: 'ru-RU', label: 'Russian' },
    { value: 'pt-BR', label: 'Portuguese' }
  ];

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:p-8">
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Real-Time Translation
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <LanguageSelector 
            label="From"
            value={fromLanguage}
            onChange={setFromLanguage}
            options={languageOptions}
          />
          <LanguageSelector 
            label="To"
            value={toLanguage}
            onChange={setToLanguage}
            options={languageOptions}
          />
        </motion.div>
        
        <motion.div 
          className="flex items-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative inline-block mr-3">
            <input
              type="checkbox"
              id="live-transcription"
              checked={isLiveTranscription}
              onChange={toggleLiveTranscription}
              className="sr-only"
            />
            <motion.label
              htmlFor="live-transcription"
              className={`block w-14 h-7 rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${
                isLiveTranscription ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute left-1 top-1 w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-300"
                animate={{ x: isLiveTranscription ? 28 : 0 }}
              />
            </motion.label>
          </div>
          <label htmlFor="live-transcription" className="text-sm font-medium text-gray-700 cursor-pointer">
            Live Transcription
          </label>
          
          <AnimatePresence>
            {translationStatus === 'recording' && (
              <motion.div
                className="ml-auto relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-ring" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <TranscriptionBox text={transcriptionText} />
        <TranslationBox text={translationText} onPlay={playTranslation} />
      </div>
    </motion.div>
  );
};

export default LiveTranslation;