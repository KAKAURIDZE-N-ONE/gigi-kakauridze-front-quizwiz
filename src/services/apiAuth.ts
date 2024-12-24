import { UseFormProps } from "react-hook-form";
import { authInstace } from "../../axios";
import {
  FormValues,
  FormValuesLogin,
  verifyUserEmail as verifyUserEmailProps,
} from "@/types";
import { UserTable } from "@/types/tables";

export async function logIn(data: FormValuesLogin): Promise<any> {
  await authInstace.get(`/sanctum/csrf-cookie`);

  const response = await authInstace.post(`/api/log-in`, data);

  console.log(response);
  return response;
}

export async function signUp(data: FormValues) {
  try {
    await authInstace.get(`/sanctum/csrf-cookie`);

    const response = await authInstace.post("/api/sign-up", data);

    return response.data;
  } catch (error) {
    console.error("Error in register function:", error);
    throw error;
  }
}

export async function getUser(): Promise<UserTable> {
  try {
    const response = await authInstace.get<UserTable>(`/api/user`);

    return response.data;
  } catch (error) {
    console.error("User not found", error);
    throw new Error("Failed to fetch user data");
  }
}

// getUser();

export async function verifyUserEmail({
  id,
  hash,
  expires,
  signature,
}: verifyUserEmailProps) {
  try {
    const response = await authInstace.get(
      `/api/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`
    );

    if (response && response.data) {
      return response.data; // Return data if present
    }

    throw new Error("Verification failed: Invalid response");
  } catch (error) {
    console.error("User not found", error);
    throw new Error(
      "Verification failed: " +
        (error instanceof Error ? error.message : "Unknown error")
    );
  }
}
