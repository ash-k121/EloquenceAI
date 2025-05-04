import React, { createContext, useContext, useState, ReactNode } from 'react';

type TranslationStatus = 'idle' | 'recording' | 'translating' | 'processing' | 'completed';

interface AppContextType {
  fromLanguage: string;
  toLanguage: string;
  isLiveTranscription: boolean;
  transcriptionText: string;
  translationText: string;
  translationStatus: TranslationStatus;
  setFromLanguage: (lang: string) => void;
  setToLanguage: (lang: string) => void;
  toggleLiveTranscription: () => void;
  setTranscriptionText: (text: string) => void;
  setTranslationText: (text: string) => void;
  setTranslationStatus: (status: TranslationStatus) => void;
  startRecording: () => void;
  stopRecording: () => void;
  playTranslation: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [fromLanguage, setFromLanguage] = useState<string>('en-US');
  const [toLanguage, setToLanguage] = useState<string>('es-ES');
  const [isLiveTranscription, setIsLiveTranscription] = useState<boolean>(false);
  const [transcriptionText, setTranscriptionText] = useState<string>('');
  const [translationText, setTranslationText] = useState<string>('');
  const [translationStatus, setTranslationStatus] = useState<TranslationStatus>('idle');

  const toggleLiveTranscription = () => {
    setIsLiveTranscription(!isLiveTranscription);
    if (!isLiveTranscription) {
      // Would start recording if toggling on
      setTranslationStatus('recording');
    } else {
      // Would stop recording if toggling off
      setTranslationStatus('idle');
    }
  };

  const startRecording = () => {
    setTranslationStatus('recording');
    // Simulating recording
    setTimeout(() => {
      setTranscriptionText('This is a sample transcription text.');
      setTranslationStatus('translating');
      
      // Simulate translation
      setTimeout(() => {
        setTranslationText('Este es un texto de transcripción de muestra.');
        setTranslationStatus('completed');
      }, 1000);
    }, 2000);
  };

  const stopRecording = () => {
    setTranslationStatus('processing');
    // In a real app, this would stop the recording and process final results
  };

  const playTranslation = () => {
    if (translationText) {
      // In a real app, this would use the Web Speech API to play the translation
      console.log('Playing translation:', translationText);
    }
  };

  const value = {
    fromLanguage,
    toLanguage,
    isLiveTranscription,
    transcriptionText,
    translationText,
    translationStatus,
    setFromLanguage,
    setToLanguage,
    toggleLiveTranscription,
    setTranscriptionText,
    setTranslationText,
    setTranslationStatus,
    startRecording,
    stopRecording,
    playTranslation
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}