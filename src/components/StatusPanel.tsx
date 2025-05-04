import React from 'react';
import { Mic, Volume2, RefreshCw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const StatusPanel: React.FC = () => {
  const { translationStatus } = useAppContext();

  return (
    <motion.div 
      className="card h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-6 md:p-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Translation Status</h2>
        
        <div className="space-y-6">
          <StatusItem 
            icon={<Mic size={18} />}
            label="Recording"
            active={translationStatus === 'recording'}
          />
          
          <StatusItem 
            icon={<RefreshCw size={18} />}
            label="Processing"
            active={translationStatus === 'processing' || translationStatus === 'translating'}
          />
          
          <StatusItem 
            icon={<Volume2 size={18} />}
            label="Ready for playback"
            active={translationStatus === 'completed'}
          />
        </div>
      </div>
    </motion.div>
  );
};

interface StatusItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const StatusItem: React.FC<StatusItemProps> = ({ icon, label, active }) => {
  return (
    <motion.div 
      className={`flex items-center p-4 rounded-lg transition-colors duration-200 ${
        active ? 'bg-blue-50' : 'bg-gray-50'
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`p-2 rounded-full mr-3 ${
        active ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-400'
      }`}>
        <motion.div
          animate={{ 
            rotate: label === 'Processing' && active ? 360 : 0,
            scale: active ? [1, 1.1, 1] : 1
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 0.2 }
          }}
        >
          {icon}
        </motion.div>
      </div>
      <span className={`font-medium ${active ? 'text-gray-900' : 'text-gray-500'}`}>
        {label}
      </span>
      {active && (
        <motion.div 
          className="ml-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default StatusPanel;