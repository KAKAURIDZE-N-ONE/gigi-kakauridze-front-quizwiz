import { verifyUserEmail as verifyUserEmailProps } from "@/types/emails";
import { authInstace } from "@/axiosInstances";
import {
  ForgotPassword,
  FormValues,
  FormValuesLogin,
  ResetPasswordApi,
} from "@/types/formFields";
import { UserTable } from "@/types/tables";

export async function logIn(data: FormValuesLogin): Promise<any> {
  await authInstace.get(`/sanctum/csrf-cookie`);

  const response = await authInstace.post(`/api/log-in`, data);

  console.log(response);
  return response;
}

export async function logOut() {
  const response = await authInstace.post("/api/log-out");

  return response;
}

export async function signUp(data: FormValues) {
  await authInstace.get(`/sanctum/csrf-cookie`);

  const response = await authInstace.post("/api/sign-up", data);

  return response.data;
}

export async function getUser(): Promise<UserTable> {
  const response = await authInstace.get<UserTable>(`/api/user`);

  return response.data;
}

export async function verifyUserEmail({
  id,
  hash,
  expires,
  signature,
}: verifyUserEmailProps) {
  console.log(id, hash, expires, signature);
  const response = await authInstace.get(
    `/api/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`
  );

  return response;
}

export async function forgotPassword({ email }: ForgotPassword) {
  await authInstace.get(`/sanctum/csrf-cookie`);

  const response = await authInstace.post(`/api/forgot-password`, { email });

  return response;
}

export async function resetPassword({
  email,
  token,
  newPassword: password,
  confirmPassword: password_confirmation,
}: ResetPasswordApi) {
  await authInstace.get("/sanctum/csrf-cookie");

  const response = await authInstace.post("/api/reset-password", {
    email,
    token,
    password,
    password_confirmation,
  });

  return response.data;
}
