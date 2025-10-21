import AuthLayout from "./AuthLayout";

import SocialAuth from "./SocialAuth";
import SignInForm from "../../components/auth/SignInForm";

import useSignInValidation from "../../hooks/auth/useSignInValidation";

export const SignIn = () => {
  const {
    signInForm,
    showPassword,
    onSignUp,
    onChangeHandler,
    toggleRememberMe,
    toggleShowPassword,
    onSubmit,
    handleSocialLogin,
  } = useSignInValidation();

  return (
    <AuthLayout>
      {/* Card Content */}
      <div className="px-8 pt-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100">
            Sign in now
          </h2>
        </div>

        {/* Social Buttons */}
        <SocialAuth handleSocialLogin={handleSocialLogin} />
        {/* Divider */}
        <div className="mb-6 flex items-center">
          <div className="h-px flex-1 bg-amber-200 dark:bg-amber-800"></div>
          <span
            className="px-4 text-sm text-amber-700 dark:text-amber-300 
          font-medium"
          >
            Or continue with email
          </span>
          <div className="h-px flex-1 bg-amber-200 dark:bg-amber-800"></div>
        </div>
        {/* form */}
        <div className="space-y-4">
          <SignInForm
            onSubmit={onSubmit}
            onChangeHandler={onChangeHandler}
            onSignUp={onSignUp}
            signInInput={signInForm}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            toggleRememberMe={toggleRememberMe}
          />
        </div>
      </div>
    </AuthLayout>
  );
};
