import axios from "axios";
import { authInstace } from "../../axios";
import { FormValues, FormValuesLogin } from "@/types";

export async function logIn(data: FormValuesLogin): Promise<any> {
  await authInstace.get(`/sanctum/csrf-cookie`);

  const response = await authInstace.post(`/api/log-in`, data);

  console.log(response);
}

export async function signUp(data: FormValues) {
  try {
    await authInstace.get(`/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    const response = await authInstace.post("/api/sign-up", data, {
      withCredentials: true,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error in register function:", error);
    throw error;
  }
}

export async function getUser() {
  try {
    const user = await authInstace.get(`/api/user`);

    console.log(user);
  } catch (error) {
    console.error("User not found", error);
  }
}
