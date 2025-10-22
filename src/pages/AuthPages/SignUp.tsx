import AuthLayout, { Divider, Header } from "./AuthLayout";
import SignUpForm from "../../components/auth/SignUpForm";
import SocialAuth from "./SocialAuth";
import useSignUpValidation from "../../hooks/auth/useSignUpValidation";

export const SignUp = () => {
  const {
    SignUpInput,
    showPassword,
    onSignIn,
    onChangeHandler,
    toggleRememberMe,
    toggleShowPassword,
    onSubmit,
    handleSocialSignUp,
  } = useSignUpValidation();

  return (
    <AuthLayout>
      {/* Card Content */}
      <div className="px-8 pt-8">
        <Header HeaderText="Sign up now" />

        <SocialAuth handleSocialLogin={handleSocialSignUp} />

        <Divider />
        {/* form */}
        <div className="space-y-4">
          <SignUpForm
            SignUpInput={SignUpInput}
            showPassword={showPassword}
            onSignIn={onSignIn}
            onChangeHandler={onChangeHandler}
            toggleRememberMe={toggleRememberMe}
            toggleShowPassword={toggleShowPassword}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </AuthLayout>
  );
};
