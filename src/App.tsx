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
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex flex-col">
          <Header />
          <div className="flex-grow pattern-grid-lg">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/video-call" element={<VideoCallPage />} />
              <Route path="/languages" element={<LanguagesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">EloquenceAI</h3>
                  <p className="text-gray-600">Breaking language barriers with real-time AI translation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/video-call" className="text-gray-600 hover:text-blue-600">Video Call</a></li>
                    <li><a href="/languages" className="text-gray-600 hover:text-blue-600">Languages</a></li>
                    <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">GitHub</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500">
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