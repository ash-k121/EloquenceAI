import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import VideoCallPage from './pages/VideoCallPage';
import LanguagesPage from './pages/LanguagesPage';
import ContactPage from './pages/ContactPage';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 flex flex-col transition-colors duration-300">
          <Header />
          <div className="flex-grow pattern-grid-lg">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/video-call" element={<VideoCallPage />} />
              <Route path="/languages" element={<LanguagesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8 mt-auto transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">EloquenceAI</h3>
                  <p className="text-gray-600 dark:text-gray-400">Breaking language barriers with real-time AI translation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/video-call" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Video Call</a></li>
                    <li><a href="/languages" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Languages</a></li>
                    <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Twitter</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">GitHub</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
                <p>&copy; {new Date().getFullYear()} EloquenceAI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;