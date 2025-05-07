import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                Have questions about EloquenceAI? We're here to help. Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Mail size={20} className="text-blue-500 dark:text-blue-400 mr-3 mt-1 transition-colors duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white transition-colors duration-300">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">support@eloquence-ai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare size={20} className="text-blue-500 dark:text-blue-400 mr-3 mt-1 transition-colors duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white transition-colors duration-300">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Available 9am-5pm ET, Monday-Friday</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 border p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 border p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 border p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;