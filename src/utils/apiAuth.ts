import axios from "axios";
import { FormValues } from "../components/SignUpModalBody";
import { FormValuesLogin } from "../components/SignInModalBody";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export async function logIn(data: FormValuesLogin): Promise<any> {
  await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
    withCredentials: true,
  });

  const { token } = data;
  console.log(token);
  return;

  const response = await axios.post("http://127.0.0.1:8000/api/log-in", data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  });

  console.log(response);
}

export async function signUp(data: FormValues) {
  try {
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });

    const response = await axios.post(
      "http://127.0.0.1:8000/api/sign-up",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error in register function:", error);
    throw error;
  }
}

export async function getUser() {
  try {
    const user = await axios.get("http://127.0.0.1:8000/api/user", {
      withCredentials: true,
    });
  } catch (error) {
    console.error("User not found", error);
  }
}
