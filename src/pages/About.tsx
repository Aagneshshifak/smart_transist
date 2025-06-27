
import { Mail, Phone, Github, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#cce0ff] to-white dark:from-[#0a192f] dark:to-[#1c1c3a] transition-all duration-300 ease-in-out">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Smart Transit
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-100 max-w-2xl mx-auto transition-colors duration-300">
            Your intelligent companion for navigating public transportation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Smart Public Transport Assistant is designed to make your daily commute easier and more efficient. 
              We provide real-time information about nearby stops, optimal route planning, and seamless navigation 
              through your city's public transportation network.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Whether you're a daily commuter or exploring a new city, our app helps you navigate with confidence 
              and arrive at your destination on time.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Find nearby bus and train stops
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Plan optimal routes between destinations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Real-time arrival information
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Offline map support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Multi-modal transportation options
              </li>
            </ul>
          </Card>
        </div>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                <a 
                  href="mailto:smartransist@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  smartransist@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Mobile</p>
                <a 
                  href="tel:6379073107" 
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                >
                  6379073107
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Connect With Us</h2>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Website</span>
            </a>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default About;
