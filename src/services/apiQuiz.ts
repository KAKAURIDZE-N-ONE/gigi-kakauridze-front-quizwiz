import { authInstace, normalInstace } from "../../axios";

export async function getQuizzes(
  page: number,
  {
    activeLevels,
    activeCategories,
    activeCompleted,
  }: {
    activeLevels: string[];
    activeCategories: string[];
    activeCompleted: string[];
  },
  activeSortBy: string
) {
  const params = new URLSearchParams();

  const transformedActiveCompleted = activeCompleted.map((el) =>
    el === "1" ? "completed" : "not-completed"
  );
  params.append("page", String(page));

  if (activeLevels.length > 0) {
    params.append("levels", activeLevels.join(","));
  }
  if (activeCategories.length > 0) {
    params.append("categories", activeCategories.join(","));
  }
  if (activeCompleted.length > 0) {
    params.append("completed", transformedActiveCompleted.join(","));
  }
  if (activeSortBy) {
    params.append("sortBy", activeSortBy);
  }

  try {
    const response = await authInstace.get(`/api/quizzes?${params.toString()}`);

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

export async function getLevels() {
  try {
    const response = await normalInstace.get("/api/levels");

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
