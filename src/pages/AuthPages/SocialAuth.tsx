const SocialAuth = ({
  handleSocialLogin,
}: {
  handleSocialLogin: (param: "google" | "facebook") => void;
}) => {
  return (
    <>
      <div className="mb-6 space-y-3">
        <button
          onClick={() => handleSocialLogin("google")}
          className="flex w-full items-center justify-center gap-3 rounded-lg 
            border-2 border-amber-200 dark:border-amber-800 bg-white 
            dark:bg-gray-800 px-4 py-3 hover:bg-amber-50 dark:hover:bg-gray-750
             hover:border-amber-300 dark:hover:border-amber-700 transition-all
              shadow-sm"
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
          className="flex w-full items-center justify-center gap-3 rounded-lg
             border-2 border-amber-200 dark:border-amber-800 bg-white 
             dark:bg-gray-800 px-4 py-3 hover:bg-amber-50 dark:hover:bg-gray-750
              hover:border-amber-300 dark:hover:border-amber-700 transition-all shadow-sm"
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
    </>
  );
};

export default SocialAuth;
