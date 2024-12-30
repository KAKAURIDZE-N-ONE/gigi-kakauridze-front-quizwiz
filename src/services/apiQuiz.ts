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
  activeSortBy?: string,
  activeDirection?: string
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

  if (activeDirection) {
    params.append("direction", activeDirection);
  }

  const response = await authInstace.get(`/api/quizzes?${params.toString()}`);

  return response.data;
}

export async function getCategories() {
  const response = await normalInstace.get("/api/categories");

  return response.data;
}

export async function getLevels() {
  const response = await normalInstace.get("/api/levels");

  return response.data;
}
