
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Signup = () => {
  const [email, setEmail] = useState('');

  const handleSocialLogin = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // TODO: Implement authentication
  };

  const handleContinue = () => {
    console.log('Continue with email:', email);
    // TODO: Implement authentication logic
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-normal text-gray-900 mb-8">Create an account</h1>
        </div>

        {/* Main Form */}
        <div className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <Input
              id="email-input"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 text-base border-gray-300 rounded-md px-3 bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-400"
            />
          </div>

          <Button 
            id="continue-button"
            onClick={handleContinue}
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-full text-base font-medium transition-colors"
          >
            Continue
          </Button>
        </div>

        {/* Login link */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link 
              id="login-link"
              to="/login" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
          </div>
        </div>

        {/* Social Login Options */}
        <div className="space-y-3">
          <Button
            id="phone-signup-button"
            onClick={() => handleSocialLogin('Phone')}
            variant="outline"
            className="w-full h-12 border-gray-300 rounded-full text-base font-medium hover:bg-gray-50 transition-colors bg-white"
          >
            <Phone className="h-5 w-5 mr-3" />
            Continue with phone
          </Button>

          <Button
            id="google-signup-button"
            onClick={() => handleSocialLogin('Google')}
            variant="outline"
            className="w-full h-12 border-gray-300 rounded-full text-base font-medium hover:bg-gray-50 transition-colors bg-white"
          >
            <div className="w-5 h-5 mr-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            Continue with Google
          </Button>

          <Button
            id="microsoft-signup-button"
            onClick={() => handleSocialLogin('Microsoft')}
            variant="outline"
            className="w-full h-12 border-gray-300 rounded-full text-base font-medium hover:bg-gray-50 transition-colors bg-white"
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
            id="apple-signup-button"
            onClick={() => handleSocialLogin('Apple')}
            variant="outline"
            className="w-full h-12 border-gray-300 rounded-full text-base font-medium hover:bg-gray-50 transition-colors bg-white"
          >
            <div className="w-5 h-5 mr-3 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">🍎</span>
            </div>
            Continue with Apple
          </Button>
        </div>

        {/* Footer Links */}
        <div className="text-center pt-4">
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <Link to="#" className="hover:text-gray-700">Terms of Use</Link>
            <span>|</span>
            <Link to="#" className="hover:text-gray-700">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
