export interface SignUpFormInput {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

// signin doesnt required nam, it requires remembeMe option
export interface SignInFormInput extends Omit<SignUpFormInput, "name"> {}
