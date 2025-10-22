import React, { createContext, useContext, useState } from "react";
import { SignInFormInput, SignUpFormInput } from "../hooks/auth/autTypes";

type UserType = {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
  cartProducts: [];
  preferredTheme: "dark" | "white";
};

type UserContextType = {
  user: UserType | undefined;
  token: string | undefined;
  handleSingin: (data: SignInFormInput) => Promise<void>;
  handleSignUp: (data: SignUpFormInput) => Promise<void>;
  handleProvider: (
    type: "signin" | "signup",
    provider: "google" | "facebook"
  ) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);

  const handleSingin = async (data: SignInFormInput) => {
    //
  };

  const handleSignUp = async (data: SignUpFormInput) => {
    //
  };

  const handleProvider = async (
    type: "signin" | "signup",
    provider: "google" | "facebook"
  ) => {
    //
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        handleSingin,
        handleSignUp,
        handleProvider,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
