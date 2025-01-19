export type FormValuesLogin = {
  email: string;
  password: string;
  remember: boolean;
};

export type FormValues = {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export type ForgotPassword = {
  email: string;
};

export type ResetPasswordForm = {
  newPassword: string;
  confirmPassword: string;
};

export type ResetPasswordApi = {
  newPassword: string;
  confirmPassword: string;
  email: string;
  token: string;
};
