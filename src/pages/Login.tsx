
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bus, Mail, Apple, Microsoft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Login = () => {
  const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('phone');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // TODO: Implement authentication
  };

  const handleContinue = () => {
    if (authMethod === 'phone') {
      console.log('Continue with phone:', countryCode + phoneNumber);
    } else {
      console.log('Continue with email:', email);
    }
    // TODO: Implement authentication logic
  };

  const handleEmailLogin = () => {
    setAuthMethod('email');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
      <Navbar />
      
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-black dark:bg-white p-3 rounded-lg">
              <Bus className="h-8 w-8 text-white dark:text-black" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h1>
        </div>

        <div className="space-y-6">
          {/* Phone/Email Input Section */}
          <div className="space-y-4">
            {authMethod === 'phone' ? (
              <>
                <div className="space-y-2">
                  <Select value="India (+91)" onValueChange={() => {}}>
                    <SelectTrigger className="w-full h-12 text-base border-gray-300 dark:border-gray-600 rounded-xl">
                      <SelectValue placeholder="India (+91)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India (+91)">India (+91)</SelectItem>
                      <SelectItem value="USA (+1)">USA (+1)</SelectItem>
                      <SelectItem value="UK (+44)">UK (+44)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    Phone number
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full h-12 text-base border-gray-300 dark:border-gray-600 rounded-xl pl-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 text-base border-gray-300 dark:border-gray-600 rounded-xl pl-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <Button 
              onClick={handleContinue}
              className="w-full h-12 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-black text-white rounded-xl text-base font-medium transition-colors"
            >
              Continue
            </Button>
          </div>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Sign up
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-black text-gray-500 dark:text-gray-400 font-medium">OR</span>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="space-y-3">
            <Button
              onClick={handleEmailLogin}
              variant="outline"
              className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail className="h-5 w-5 mr-3" />
              Continue with email
            </Button>

            <Button
              onClick={() => handleSocialLogin('Google')}
              variant="outline"
              className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-5 h-5 mr-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              Continue with Google
            </Button>

            <Button
              onClick={() => handleSocialLogin('Microsoft')}
              variant="outline"
              className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Microsoft className="h-5 w-5 mr-3 text-blue-600" />
              Continue with Microsoft Account
            </Button>

            <Button
              onClick={() => handleSocialLogin('Apple')}
              variant="outline"
              className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Apple className="h-5 w-5 mr-3" />
              Continue with Apple
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
          >
            <span>← Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Login;
