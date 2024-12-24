import { authInstace, normalInstace } from "../../axios";

export async function getQuizzes(page: number) {
  try {
    const response = await authInstace.get(`/api/quizzes?page=${page}`);

    return response.data;
  } catch (error) {
    console.error("User not found", error);
    throw new Error("Failed to fetch user data");
  }
}

export async function getCategories() {
  try {
    const response = await normalInstace.get("/api/categories");

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
