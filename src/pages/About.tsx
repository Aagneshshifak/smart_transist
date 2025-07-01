
import { Mail, Phone, Github, ExternalLink, Shield, Clock, Navigation, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';

const About = () => {
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
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-black">
            About Transport.
          </h1>
          <p className="text-xl font-light mb-12 text-gray-600">
            Your intelligent companion for navigating public transportation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-12 mb-16 bg-gray-50">
            <h2 className="text-3xl font-light mb-8 text-black">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Smart Public Transport Assistant is designed to make your daily commute easier and more efficient. 
              We provide real-time information about nearby stops, optimal route planning, and seamless navigation 
              through your city's public transportation network.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Whether you're a daily commuter or exploring a new city, our app helps you navigate with confidence 
              and arrive at your destination on time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl transition-all duration-300 hover:scale-105 bg-gray-50 hover:bg-gray-100"
              >
                <div className="w-12 h-12 mb-6 rounded-2xl flex items-center justify-center bg-blue-100">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-black">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="rounded-3xl p-12 mb-16 bg-gray-50">
            <h2 className="text-3xl font-light mb-8 text-center text-black">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-4 rounded-2xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Email
                  </p>
                  <a 
                    href="mailto:smartransist@gmail.com" 
                    className="text-lg hover:underline transition-colors text-blue-600 hover:text-blue-700"
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
                  <p className="text-sm font-medium text-gray-500">
                    Mobile
                  </p>
                  <a 
                    href="tel:6379073107" 
                    className="text-lg hover:underline transition-colors text-green-600 hover:text-green-700"
                  >
                    6379073107
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="rounded-3xl p-12 text-center bg-gray-50">
            <h2 className="text-3xl font-light mb-8 text-black">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
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
