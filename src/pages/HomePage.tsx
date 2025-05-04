import React from 'react';
import LiveTranslation from '../components/LiveTranscription';
import StatusPanel from '../components/StatusPanel';
import { motion } from 'framer-motion';
import { Globe2, Users, Zap, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Break Language Barriers with Real-Time AI Translation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience seamless communication across languages with our advanced AI-powered translation platform.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Video call"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EloquenceAI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers cutting-edge features to make global communication effortless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Globe2 className="w-6 h-6" />}
            title="100+ Languages"
            description="Support for over 100 languages with real-time translation capabilities."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Real-time Translation"
            description="Instant translation with minimal latency for smooth conversations."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Group Calls"
            description="Support for multi-participant video calls with live translation."
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="High Accuracy"
            description="Industry-leading translation accuracy powered by advanced AI."
          />
        </div>
      </div>

      {/* Main Translation Interface */}
      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LiveTranslation />
          </div>
          <div className="lg:col-span-1">
            <StatusPanel />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
            name="Sarah Johnson"
            role="Business Owner"
            text="EloquenceAI has transformed how we communicate with our international clients. The real-time translation is incredibly accurate."
          />
          <TestimonialCard
            image="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg"
            name="Mark Chen"
            role="Software Engineer"
            text="The API integration was seamless, and the translation quality exceeds our expectations. Highly recommended!"
          />
          <TestimonialCard
            image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
            name="Emily Rodriguez"
            role="Language Teacher"
            text="I use EloquenceAI in my virtual classrooms. It's an invaluable tool for teaching languages effectively."
          />
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="card p-6"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, role, text }) => {
  return (
    <motion.div
      className="card p-6"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{text}</p>
    </motion.div>
  );
};

export default HomePage;