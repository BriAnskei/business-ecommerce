import AuthLayout, { Divider, Header } from "./AuthLayout";
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
        <Header HeaderText="Sign in now" />

        {/* Social Buttons */}
        <SocialAuth handleSocialLogin={handleSocialLogin} />
        {/* Divider */}
        <Divider />
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
