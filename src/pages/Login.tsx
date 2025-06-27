
import { Link } from 'react-router-dom';
import { Bus, User, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Login = () => {
  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // TODO: Implement Firebase authentication
  };

  const handleGuestLogin = () => {
    console.log('Continue as guest');
    // TODO: Implement guest login logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#cce0ff] to-white dark:from-[#0a192f] dark:to-[#1c1c3a]">
      <Navbar />
      
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 p-4 rounded-full transition-colors">
              <Bus className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-gray-700 dark:text-slate-100">Sign in to access your Smart Transit account</p>
        </div>

        <Card className="mb-6">
          <div className="space-y-4">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span>Continue with Google</span>
            </button>

            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">f</span>
              </div>
              <span>Continue with Facebook</span>
            </button>

            <button
              onClick={() => handleSocialLogin('Twitter')}
              className="w-full flex items-center justify-center space-x-3 bg-black hover:bg-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">𝕏</span>
              </div>
              <span>Continue with X (Twitter)</span>
            </button>
          </div>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <button
            onClick={handleGuestLogin}
            className="w-full flex items-center justify-center space-x-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            <User className="h-5 w-5" />
            <span>Continue as Guest</span>
          </button>
        </Card>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            By signing in, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>← Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Login;
