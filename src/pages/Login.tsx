
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Welcome back</h1>
        </div>

        {/* Main Form */}
        <div className="space-y-6">
          {/* Country/Phone Section */}
          {authMethod === 'phone' ? (
            <>
              <div className="space-y-4">
                <Select value="India (+91)" onValueChange={() => {}}>
                  <SelectTrigger 
                    id="country-select"
                    className="w-full h-12 text-base border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800"
                  >
                    <SelectValue placeholder="India (+91)" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                    <SelectItem value="India (+91)">India (+91)</SelectItem>
                    <SelectItem value="USA (+1)">USA (+1)</SelectItem>
                    <SelectItem value="UK (+44)">UK (+44)</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Phone number
                  </span>
                  <Input
                    id="phone-input"
                    type="tel"
                    placeholder="+91"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full h-12 text-base border-gray-300 dark:border-gray-600 rounded-xl pl-3 pt-6 pb-2 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                Email address
              </span>
              <Input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 text-base border-gray-300 dark:border-gray-600 rounded-xl pl-3 pt-6 pb-2 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <Button 
            id="continue-button"
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
            <Link 
              id="signup-link"
              to="/signup" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
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
            <span className="px-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-medium">OR</span>
          </div>
        </div>

        {/* Social Login Options */}
        <div className="space-y-3">
          <Button
            id="email-login-button"
            onClick={handleEmailLogin}
            variant="outline"
            className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-gray-800"
          >
            <Mail className="h-5 w-5 mr-3" />
            Continue with email
          </Button>

          <Button
            id="google-login-button"
            onClick={() => handleSocialLogin('Google')}
            variant="outline"
            className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-gray-800"
          >
            <div className="w-5 h-5 mr-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            Continue with Google
          </Button>

          <Button
            id="microsoft-login-button"
            onClick={() => handleSocialLogin('Microsoft')}
            variant="outline"
            className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-gray-800"
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <div className="bg-red-500 w-1 h-1 rounded-sm"></div>
                <div className="bg-green-500 w-1 h-1 rounded-sm"></div>
                <div className="bg-blue-500 w-1 h-1 rounded-sm"></div>
                <div className="bg-yellow-500 w-1 h-1 rounded-sm"></div>
              </div>
            </div>
            Continue with Microsoft Account
          </Button>

          <Button
            id="apple-login-button"
            onClick={() => handleSocialLogin('Apple')}
            variant="outline"
            className="w-full h-12 border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-gray-800"
          >
            <div className="w-5 h-5 mr-3 bg-black dark:bg-white rounded-sm flex items-center justify-center">
              <span className="text-white dark:text-black text-xs font-bold">🍎</span>
            </div>
            Continue with Apple
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
