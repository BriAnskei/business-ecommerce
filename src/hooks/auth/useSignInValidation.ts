import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

import { createChangeHandler } from "../../utils/onChangeHanlder";
import { FormData } from "./autTypes";

export interface SignInInput extends Omit<FormData, "name"> {}

const useSignInValidation = () => {
  const navigate = useNavigate();
  const [signInForm, setSignInForm] = useState<SignInInput>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSignUp = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onChangeHandler = useCallback(
    createChangeHandler<SignInInput>(setSignInForm),
    []
  );

  const toggleRememberMe = useCallback((set: boolean) => {
    setSignInForm((data) => ({ ...data, rememberMe: set }));
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const onSubmit = useCallback(async () => {
    console.log("onsubmit: ", signInForm);
  }, [signInForm]);

  const handleSocialLogin = (povider: "google" | "facebook") => {};

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
