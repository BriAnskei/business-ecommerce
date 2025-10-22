import { ChangeEvent } from "react";
import { User, Mail, EyeOff, Eye, Lock } from "lucide-react";
import { SignUpFormInput } from "../../hooks/auth/autTypes";

interface SignUpFormProp {
  SignUpInput: SignUpFormInput;
  showPassword: boolean;
  onSignIn: () => void;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleRememberMe: (set: boolean) => void;
  toggleShowPassword: () => void;
  onSubmit: () => Promise<void>;
}

export default function SignUpForm({
  SignUpInput,
  showPassword,
  onSignIn,
  onChangeHandler,
  toggleRememberMe,
  toggleShowPassword,
  onSubmit,
}: SignUpFormProp) {
  return (
    <>
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-100"
        >
          Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={SignUpInput.name}
            onChange={onChangeHandler}
            placeholder="Enter your full name"
            className="w-full rounded-lg border-2 border-amber-200 
            dark:border-amber-800 bg-white dark:bg-gray-800 py-2 sm:py-2.5 md:py-3 
            pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4 text-sm sm:text-base text-gray-900 
            dark:text-white placeholder:text-amber-400 dark:placeholder:text-amber-600 
            outline-none focus:border-amber-700 dark:focus:border-amber-500 focus:ring-2
            focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-all"
          />
          <span className="absolute left-3 sm:left-3.5 md:left-4 top-1/2 -translate-y-1/2">
            <User
              size={16}
              className="sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px] text-amber-600 dark:text-amber-400"
            />
          </span>
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-100"
        >
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={SignUpInput.email}
            onChange={onChangeHandler}
            placeholder="Enter your email"
            className="w-full rounded-lg border-2 border-amber-200 
            dark:border-amber-800 bg-white dark:bg-gray-800 py-2 sm:py-2.5 md:py-3 
            pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4 text-sm sm:text-base text-gray-900 
            dark:text-white placeholder:text-amber-400 dark:placeholder:text-amber-600 
            outline-none focus:border-amber-700 dark:focus:border-amber-500 focus:ring-2
            focus:ring-amber-700/20 dark:focus:ring-amber-500/20 transition-all"
          />
          <span className="absolute left-3 sm:left-3.5 md:left-4 top-1/2 -translate-y-1/2">
            <Mail
              size={16}
              className="sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px] 
              text-amber-600 dark:text-amber-400"
            />
          </span>
        </div>
      </div>

      {/* Password Field */}
      <div>
        <label
          htmlFor="password"
          className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold 
          text-amber-900 dark:text-amber-100"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={SignUpInput.password}
            onChange={onChangeHandler}
            placeholder="Enter your password"
            className="w-full rounded-lg border-2 border-amber-200 
            dark:border-amber-800 bg-white dark:bg-gray-800 py-2 sm:py-2.5 md:py-3 
            pl-9 sm:pl-10 md:pl-11 pr-9 sm:pr-10 md:pr-11 text-sm sm:text-base 
            text-gray-900 dark:text-white placeholder:text-amber-400 
            dark:placeholder:text-amber-600 outline-none focus:border-amber-700 
            dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-700/20
            dark:focus:ring-amber-500/20 transition-all"
          />
          <span className="absolute left-3 sm:left-3.5 md:left-4 top-1/2 -translate-y-1/2">
            <Lock
              size={16}
              className="sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px] 
              text-amber-600 dark:text-amber-400"
            />
          </span>
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 sm:right-3.5 md:right-4 top-1/2
             -translate-y-1/2 text-amber-600
             hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-200
              transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff
                size={16}
                className="sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]"
              />
            ) : (
              <Eye
                size={16}
                className="sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]"
              />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <label className="flex cursor-pointer items-center group">
          <input
            type="checkbox"
            name="rememberMe"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded border-amber-300 text-amber-900 
            focus:ring-amber-700 dark:border-amber-700 dark:bg-gray-800
             dark:focus:ring-amber-500 cursor-pointer"
            onChange={(e) => toggleRememberMe(e.target.checked)}
          />
          <span
            className="ml-1.5 sm:ml-2 text-amber-900 dark:text-amber-100 
          group-hover:text-amber-700 dark:group-hover:text-amber-200
           transition-colors"
          >
            Remember me
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        className="w-full rounded-lg bg-gradient-to-r from-amber-800 
        to-amber-900 hover:from-amber-900 hover:to-amber-950 dark:from-amber-700
         dark:to-amber-800 dark:hover:from-amber-800 dark:hover:to-amber-900 
         py-2.5 sm:py-3 px-4 text-sm sm:text-base font-bold text-white transition-all 
         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        onClick={onSubmit}
      >
        Sign Up
      </button>

      {/* Toggle Login/Signup */}
      <div className="mt-4 sm:mt-5 md:mt-6 text-center">
        <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">
          Already have an account?{" "}
          <button
            className="font-bold text-amber-900 dark:text-amber-200 hover:underline
             transition-colors hover:text-amber-700 dark:hover:text-amber-100"
            type="button"
            onClick={onSignIn}
          >
            Sign In Here
          </button>
        </p>
      </div>
    </>
  );
}
