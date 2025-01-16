import { authInstace } from "../../axios";
import { verifyUserEmail as verifyUserEmailProps } from "@/types/emails";
import {
  ForgotPassword,
  FormValues,
  FormValuesLogin,
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
