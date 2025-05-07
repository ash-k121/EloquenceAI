import React from 'react';
import { Wifi, Headphones, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const StatusPanel: React.FC = () => {
  const statuses = [
    { 
      id: 1, 
      icon: <Wifi className="text-green-500" />, 
      label: 'Connection', 
      status: 'Strong',
      color: 'text-green-600 dark:text-green-400',
      detail: '45 ms ping'
    },
    { 
      id: 2, 
      icon: <Headphones className="text-green-500" />, 
      label: 'Audio', 
      status: 'Clear',
      color: 'text-green-600 dark:text-green-400',
      detail: 'High quality'
    },
    { 
      id: 3, 
      icon: <Zap className="text-green-500" />, 
      label: 'Translation', 
      status: 'Ready',
      color: 'text-green-600 dark:text-green-400',
      detail: 'Low latency'
    },
    { 
      id: 4, 
      icon: <Clock className="text-blue-500" />, 
      label: 'Session', 
      status: '00:00:00',
      color: 'text-blue-600 dark:text-blue-400',
      detail: 'Time elapsed'
    },
  ];

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Status</h3>
      
      <div className="space-y-4">
        {statuses.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: item.id * 0.1 }}
            className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
          >
            <div className="flex items-center">
              <div className="p-2 bg-white dark:bg-gray-700 rounded-md mr-3 transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </h4>
                <p className={`text-xs ${item.color}`}>{item.detail}</p>
              </div>
            </div>
            <div className={`text-sm font-semibold ${item.color}`}>
              {item.status}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Server Status
        </h4>
        <div className="flex items-center">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-300">
            <div 
              className="bg-green-500 h-2.5 rounded-full" 
              style={{width: '95%'}}
            ></div>
          </div>
          <span className="ml-2 text-sm text-green-600 dark:text-green-400">95%</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          All systems operational
        </p>
      </div>
    </div>
  );
};

export default StatusPanel;