import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // أيقونة Google

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-128px)] bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white shadow-lg rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign in to your account</h2>
          <p className="text-gray-600 text-lg">Welcome back! Please login to continue.</p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password-for-login" className="sr-only">Password</label>
              <input
                id="password-for-login"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg border border-transparent bg-black py-3 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6">
          <button
            className="group relative flex w-full justify-center rounded-lg border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-black">
          Don’t have an account?{' '}
          <Link to="/signup" className="font-medium text-gray-600 hover:text-gray-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
