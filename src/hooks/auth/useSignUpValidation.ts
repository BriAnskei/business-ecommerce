import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

import { createChangeHandler } from "../../utils/onChangeHanlder";
import { useUserContext } from "../../context/UserContext";
import { SignUpFormInput } from "./autTypes";

const useSignUpValidation = () => {
  const { handleProvider, handleSignUp } = useUserContext();
  const navigate = useNavigate();
  const [SignUpInput, setSignUpInput] = useState<SignUpFormInput>({
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
    createChangeHandler<SignUpFormInput>(setSignUpInput),
    []
  );

  const toggleRememberMe = useCallback((set: boolean) => {
    setSignUpInput((data) => ({ ...data, rememberMe: set }));
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const onSubmit = useCallback(async () => {
    await handleSignUp(SignUpInput);
  }, [SignUpInput]);

  const handleSocialSignUp = async (povider: "google" | "facebook") => {
    await handleProvider("signup", povider);
  };

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
