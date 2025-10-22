import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { createChangeHandler } from "../../utils/onChangeHanlder";
import { useUserContext } from "../../context/UserContext";
import { SignInFormInput } from "./autTypes";

const useSignInValidation = () => {
  const navigate = useNavigate();
  const { handleSingin, handleProvider } = useUserContext();

  const [signInForm, setSignInForm] = useState<SignInFormInput>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSignUp = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onChangeHandler = useCallback(
    createChangeHandler<SignInFormInput>(setSignInForm),
    []
  );

  const toggleRememberMe = useCallback((set: boolean) => {
    setSignInForm((data) => ({ ...data, rememberMe: set }));
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const onSubmit = useCallback(async () => {
    await handleSingin(signInForm);
  }, [signInForm]);

  const handleSocialLogin = (provider: "google" | "facebook") => {
    handleProvider("signin", provider);
  };

  return {
    signInForm,
    showPassword,
    onSignUp,
    onChangeHandler,
    toggleRememberMe,
    toggleShowPassword,
    onSubmit,
    handleSocialLogin,
  };
};

export default useSignInValidation;
