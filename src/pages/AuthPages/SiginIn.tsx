import React, { useState, useEffect } from "react";
import { X, Mail, Lock, User, Eye, EyeOff, Sun, Moon } from "lucide-react";
import ThemeTogglerIcon from "../../components/common/ThemeTogglerIcon";

// Types
interface FormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

interface AuthSubmitData {
  mode: "login" | "signup";
  data: FormData;
}

interface AuthPageProps {
  onSubmit?: (data: AuthSubmitData) => void | Promise<void>;
  onSocialAuth?: (provider: "google" | "facebook") => void | Promise<void>;
  initialMode?: "login" | "signup";
}

const AuthPage: React.FC<AuthPageProps> = ({
  onSubmit,
  onSocialAuth,
  initialMode = "login",
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(initialMode === "login");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  // Initialize dark mode from system preference or saved preference
  useEffect(() => {
    const savedTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(savedTheme);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        mode: isLogin ? "login" : "signup",
        data: formData,
      });
    }
  };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    if (onSocialAuth) {
      onSocialAuth(provider);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", rememberMe: false });
    setShowPassword(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 
    via-amber-100 to-amber-50 dark:from-gray-950 dark:via-gray-900 
    dark:to-gray-950 transition-colors duration-300">
      {/* Dark Mode Toggle - Bottom Right */}

      <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
        <ThemeTogglerIcon claseName="fixed bottom-6 right-6 z-50 w-14 h-14 
        rounded-full bg-amber-900 dark:bg-amber-700 text-amber-50
         hover:bg-amber-800 dark:hover:bg-amber-600 shadow-lg hover:shadow-xl
          transition-all transform hover:scale-110 flex items-center justify-center" />
      </div>

      <div className="flex min-h-screen">
        {/* Right Side - Auth Form */}
        <div className="w-full flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-md">
            <div className=" bg-white dark:bg-gray-900 rounded-2xl shadow-2xl
             border-2 border-amber-100 dark:border-amber-900/30 overflow-hidden
              transition-colors duration-300">
              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-amber-700 via-amber-900 to-amber-700"></div>

              <div className="flex justify-center mt-8 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-700 
                  to-amber-900 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-7 h-7 text-amber-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                      PureMolasses
                    </div>
                    <div className="text-xs text-amber-700 dark:text-amber-300 -mt-1">
                      Traditional Filipino Quality
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-8 pt-8">
                {/* Header */}
                <div className="mb-6 text-center">
                  <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100">
                    {isLogin ? "Welcome Back" : "Join PureMolasses"}
                  </h2>
                  <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">
                    {isLogin
                      ? "Sign in to access your account"
                      : "Create an account to start shopping"}
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="mb-6 space-y-3">
                  <button
                    onClick={() => handleSocialLogin("google")}
                    className="flex w-full items-center justify-center gap-3 rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-800 px-4 py-3 hover:bg-amber-50 dark:hover:bg-gray-750 hover:border-amber-300 dark:hover:border-amber-700 transition-all shadow-sm"
                    type="button"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                        fill="#EB4335"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Continue with Google
                    </span>
                  </button>

                  <button
                    onClick={() => handleSocialLogin("facebook")}
                    className="flex w-full items-center justify-center gap-3 rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-800 px-4 py-3 hover:bg-amber-50 dark:hover:bg-gray-750 hover:border-amber-300 dark:hover:border-amber-700 transition-all shadow-sm"
                    type="button"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        fill="#1877F2"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Continue with Facebook
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="mb-6 flex items-center">
                  <div className="h-px flex-1 bg-amber-200 dark:bg-amber-800"></div>
                  <span className="px-4 text-sm text-amber-700 dark:text-amber-300 font-medium">
                    Or continue with email
                  </span>
                  <div className="h-px flex-1 bg-amber-200 dark:bg-amber-800"></div>
                </div>

                {/* Form */}

                <div className="space-y-4">
                  {/* Name Field (Signup Only) */}
                  {!isLogin && (
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-amber-900 dark:text-amber-100"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-800 py-3 pl-11 pr-4 text-gray-900 dark:text-white placeholder:text-amber-400 dark:placeholder:text-amber-600 outline-none focus:border-amber-700 dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-all"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2">
                          <User
                            size={18}
                            className="text-amber-600 dark:text-amber-400"
                          />
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-amber-900 dark:text-amber-100"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-800 py-3 pl-11 pr-4 text-gray-900 dark:text-white placeholder:text-amber-400 dark:placeholder:text-amber-600 outline-none focus:border-amber-700 dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-all"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2">
                        <Mail
                          size={18}
                          className="text-amber-600 dark:text-amber-400"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-semibold text-amber-900 dark:text-amber-100"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="w-full rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-800 py-3 pl-11 pr-11 text-gray-900 dark:text-white placeholder:text-amber-400 dark:placeholder:text-amber-600 outline-none focus:border-amber-700 dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-all"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2">
                        <Lock
                          size={18}
                          className="text-amber-600 dark:text-amber-400"
                        />
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-200 transition-colors"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  {isLogin && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex cursor-pointer items-center group">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                          className="h-4 w-4 rounded border-amber-300 text-amber-900 focus:ring-amber-700 dark:border-amber-700 dark:bg-gray-800 dark:focus:ring-amber-500 cursor-pointer"
                        />
                        <span className="ml-2 text-amber-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors">
                          Remember me
                        </span>
                      </label>
                      <button
                        type="button"
                        className="text-amber-800 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 hover:underline transition-colors font-medium"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full rounded-lg bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-950 dark:from-amber-700 dark:to-amber-800 dark:hover:from-amber-800 dark:hover:to-amber-900 p-3 font-bold text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isLogin
                      ? "Sign In to Your Account"
                      : "Create Your Account"}
                  </button>

                  {/* Toggle Login/Signup */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      {isLogin
                        ? "Don't have an account? "
                        : "Already have an account? "}
                      <button
                        onClick={switchMode}
                        className="font-bold text-amber-900 dark:text-amber-200 hover:underline transition-colors hover:text-amber-700 dark:hover:text-amber-100"
                        type="button"
                      >
                        {isLogin ? "Sign Up Now" : "Sign In Here"}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              {/* Trust Badge */}
              <div className="mt-3 p-5 border-t border-amber-100 dark:border-amber-900">
                <div className="flex items-center justify-center gap-2 text-xs text-amber-700 dark:text-amber-400">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">
                    Your information is secure with us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
