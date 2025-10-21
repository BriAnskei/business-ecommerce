import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

import { createChangeHandler } from "../../utils/onChangeHanlder";
import { FormData } from "./autTypes";

const useSignUpValidation = () => {
  const navigate = useNavigate();
  const [SignUpInput, setSignUpInput] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSignIn = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const onChangeHandler = useCallback(
    createChangeHandler<FormData>(setSignUpInput),
    []
  );

  const toggleRememberMe = useCallback((set: boolean) => {
    setSignUpInput((data) => ({ ...data, rememberMe: set }));
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const onSubmit = useCallback(async () => {
    console.log("onsubmit: ", SignUpInput);
  }, [SignUpInput]);

  const handleSocialSignUp = (povider: "google" | "facebook") => {};

  return {
    SignUpInput,
    showPassword,
    onSignIn,
    onChangeHandler,
    toggleRememberMe,
    toggleShowPassword,
    onSubmit,
    handleSocialSignUp,
  };
};

export default useSignUpValidation;
