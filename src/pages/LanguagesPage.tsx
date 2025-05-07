import React from 'react';
import { Globe } from 'lucide-react';

const LanguagesPage: React.FC = () => {
  const languages = [
    { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹' },
    { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳' },
    { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺' },
    { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹' },
    { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <Globe size={24} className="text-blue-500 dark:text-blue-400 mr-3 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">Supported Languages</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((lang) => (
              <div 
                key={lang.code}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{lang.flag}</span>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white transition-colors duration-300">{lang.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{lang.native}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesPage;