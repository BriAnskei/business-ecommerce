  import { EyeOff, Eye } from "lucide-react";
  import { useState } from "react";
  import { Link } from "react-router";
  import AuthLayout from "./AuthLayout";

  export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const handleSubmit = () => {
      if (!acceptTerms) {
        alert("Please accept the Terms of Service and Privacy Policy");
        return;
      }
      console.log("Sign Up:", formData);
      // Add your sign-up logic here
    };

    const handleSocialAuth = (provider: any) => {
      console.log("Auth with:", provider);
      // Add your social auth logic here
    };

    return (
      <AuthLayout>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Create Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Join PureMolasses today
          </p>
        </div>

        {/* Social Auth Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSocialAuth("google")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              Continue with Google
            </span>
          </button>

          <button
            onClick={() => handleSocialAuth("facebook")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              Continue with Facebook
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
              Or sign up with email
            </span>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-amber-900 dark:focus:border-amber-600 dark:bg-gray-800 dark:text-white transition-colors"
              placeholder="Juan Dela Cruz"
            />
          </div>

          <div>
            <label
              htmlFor="signup-email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="signup-email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-amber-900 dark:focus:border-amber-600 dark:bg-gray-800 dark:text-white transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="signup-password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-amber-900 dark:focus:border-amber-600 dark:bg-gray-800 dark:text-white transition-colors pr-12"
                placeholder="Create a strong password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Must be at least 8 characters
            </p>
          </div>

          {/* Terms & Privacy */}
          <div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 mt-1 text-amber-900 border-gray-300 rounded focus:ring-amber-900 dark:border-gray-700 dark:bg-gray-800"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-semibold text-amber-900 hover:text-amber-800 dark:text-amber-600 dark:hover:text-amber-500"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-amber-900 hover:text-amber-800 dark:text-amber-600 dark:hover:text-amber-500"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 dark:bg-amber-700 dark:hover:bg-amber-600 transition-colors shadow-md"
          >
            Create Account
          </button>
        </div>

        {/* Sign In Link */}
        <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-semibold text-amber-900 hover:text-amber-800 dark:text-amber-600 dark:hover:text-amber-500"
          >
            Sign in
          </Link>
        </p>
      </AuthLayout>
    );
  };
