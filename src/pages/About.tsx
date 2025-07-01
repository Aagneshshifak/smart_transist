
import { Mail, Phone, Github, ExternalLink, Shield, Clock, Navigation, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import TimeThemeToggle from '../components/TimeThemeToggle';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

const About = () => {
  const { theme, isTransitioning } = useTimeBasedTheme();

  const features = [
    {
      icon: Navigation,
      title: 'Smart Navigation',
      description: 'Find optimal routes with real-time updates and precise directions.'
    },
    {
      icon: MapPin,
      title: 'Location Services',
      description: 'Discover nearby stops with accurate distance and timing information.'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get live arrival times and service alerts for informed travel decisions.'
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'Depend on accurate, up-to-date transit information whenever you need it.'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'day' ? 'bg-white text-black' : 'bg-black text-white'} ${isTransitioning ? 'opacity-95' : 'opacity-100'} transition-all duration-1000`}>
      <Navbar />
      <TimeThemeToggle />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-light mb-6 tracking-tight ${theme === 'day' ? 'text-black' : 'text-white'}`}>
            About Transport.
          </h1>
          <p className={`text-xl font-light mb-12 ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
            Your intelligent companion for navigating public transportation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-3xl p-12 mb-16 ${theme === 'day' ? 'bg-gray-50' : 'bg-gray-900'}`}>
            <h2 className={`text-3xl font-light mb-8 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
              Our Mission
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>
              Smart Public Transport Assistant is designed to make your daily commute easier and more efficient. 
              We provide real-time information about nearby stops, optimal route planning, and seamless navigation 
              through your city's public transportation network.
            </p>
            <p className={`text-lg leading-relaxed ${theme === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>
              Whether you're a daily commuter or exploring a new city, our app helps you navigate with confidence 
              and arrive at your destination on time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                  theme === 'day' ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                <div className={`w-12 h-12 mb-6 rounded-2xl flex items-center justify-center ${
                  theme === 'day' ? 'bg-blue-100' : 'bg-blue-900'
                }`}>
                  <feature.icon className={`h-6 w-6 ${theme === 'day' ? 'text-blue-600' : 'text-blue-400'}`} />
                </div>
                <h3 className={`text-xl font-medium mb-4 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${theme === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className={`rounded-3xl p-12 mb-16 ${theme === 'day' ? 'bg-gray-50' : 'bg-gray-900'}`}>
            <h2 className={`text-3xl font-light mb-8 text-center ${theme === 'day' ? 'text-black' : 'text-white'}`}>
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-4 rounded-2xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className={`text-sm font-medium ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
                    Email
                  </p>
                  <a 
                    href="mailto:smartransist@gmail.com" 
                    className={`text-lg hover:underline transition-colors ${
                      theme === 'day' ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
                    }`}
                  >
                    smartransist@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-4 rounded-2xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className={`text-sm font-medium ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
                    Mobile
                  </p>
                  <a 
                    href="tel:6379073107" 
                    className={`text-lg hover:underline transition-colors ${
                      theme === 'day' ? 'text-green-600 hover:text-green-700' : 'text-green-400 hover:text-green-300'
                    }`}
                  >
                    6379073107
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className={`rounded-3xl p-12 text-center ${theme === 'day' ? 'bg-gray-50' : 'bg-gray-900'}`}>
            <h2 className={`text-3xl font-light mb-8 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  theme === 'day' 
                    ? 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50' 
                    : 'bg-black border border-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="#" 
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  theme === 'day' 
                    ? 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50' 
                    : 'bg-black border border-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                <ExternalLink className="h-5 w-5" />
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
