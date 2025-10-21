import { ChangeEvent } from "react";
import { Mail, EyeOff, Eye, Lock } from "lucide-react";

import { SignInInput } from "../../hooks/auth/useSignInValidation";

interface SignInFormProp {
  onSubmit: () => Promise<void>;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSignUp: () => void;
  signInInput: SignInInput;
  showPassword: boolean;
  toggleShowPassword: () => void;
  toggleRememberMe: (param: boolean) => void;
}

export default function SignInForm({
  onSubmit,
  onChangeHandler,
  onSignUp,
  signInInput,
  showPassword,
  toggleShowPassword,
  toggleRememberMe,
}: SignInFormProp) {
  return (
    <>
      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-amber-900 
          dark:text-amber-100"
        >
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={signInInput.email}
            onChange={onChangeHandler}
            placeholder="Enter your email"
            className="w-full rounded-lg border-2 border-amber-200 
            dark:border-amber-800 bg-white dark:bg-gray-800 py-3 pl-11
             pr-4 text-gray-900 dark:text-white placeholder:text-amber-400
              dark:placeholder:text-amber-600 outline-none 
              focus:border-amber-700 dark:focus:border-amber-500 focus:ring-2
               focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-all"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Mail size={18} className="text-amber-600 dark:text-amber-400" />
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
            value={signInInput.password}
            onChange={onChangeHandler}
            placeholder="Enter your password"
            className="w-full rounded-lg border-2 border-amber-200 
            dark:border-amber-800 bg-white dark:bg-gray-800 py-3 pl-11 pr-11
             text-gray-900 dark:text-white placeholder:text-amber-400 
             dark:placeholder:text-amber-600 outline-none focus:border-amber-700 
             dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-700/20
              dark:focus:ring-amber-500/20 transition-all"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Lock size={18} className="text-amber-600 dark:text-amber-400" />
          </span>
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-600
             hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-200
              transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex cursor-pointer items-center group">
          <input
            type="checkbox"
            name="rememberMe"
            className="h-4 w-4 rounded border-amber-300 text-amber-900 
            focus:ring-amber-700 dark:border-amber-700 dark:bg-gray-800
             dark:focus:ring-amber-500 cursor-pointer"
            onChange={(e) => toggleRememberMe(e.target.checked)}
          />
          <span
            className="ml-2 text-amber-900 dark:text-amber-100 
          group-hover:text-amber-700 dark:group-hover:text-amber-200
           transition-colors"
          >
            Remember me
          </span>
        </label>
        <button
          type="button"
          className="text-amber-800 hover:text-amber-900 dark:text-amber-400
           dark:hover:text-amber-300 hover:underline transition-colors font-medium"
        >
          Forgot Password?
        </button>
      </div>

      {/* Submit Button */}
      <button
        className="w-full rounded-lg bg-gradient-to-r from-amber-800 
        to-amber-900 hover:from-amber-900 hover:to-amber-950 dark:from-amber-700
         dark:to-amber-800 dark:hover:from-amber-800 dark:hover:to-amber-900 
         p-3 font-bold text-white transition-all shadow-lg hover:shadow-xl transform 
         hover:-translate-y-0.5"
        onClick={onSubmit}
      >
        Sign In
      </button>

      {/* Toggle Login/Signup */}
      <div className="mt-6 text-center">
        <p className="text-sm text-amber-800 dark:text-amber-300">
          Don't have an account?
          <button
            className="font-bold text-amber-900 dark:text-amber-200 hover:underline
             transition-colors hover:text-amber-700 dark:hover:text-amber-100"
            type="button"
            onClick={onSignUp}
          >
            Sign In Now
          </button>
        </p>
      </div>
    </>
  );
}
