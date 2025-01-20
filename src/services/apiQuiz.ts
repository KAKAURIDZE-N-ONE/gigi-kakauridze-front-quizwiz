import { SelectedAnswersCombination } from "@/types";
import { authInstace, normalInstace } from "@/axios";

export async function getQuiz(id: string) {
  const response = await authInstace.get(`/api/quizzes/${id}`);

  return response.data;
}

export async function getQuizzesQuantity() {
  const response = await normalInstace.get("/api/quizzes/count");

  return response.data;
}

export async function getQuizzes({
  page,
  activeLevels,
  activeCategories,
  activeCompleted,
  activeSortBy,
  activeSortDirection,
  limit,
  except_id,
  search,
}: {
  page: number;
  activeLevels?: string[];
  activeCategories: string[];
  activeCompleted?: string[];
  activeSortBy?: string;
  activeSortDirection?: string;
  limit?: number;
  except_id?: number;
  search?: string | undefined;
}) {
  const params = new URLSearchParams();

  const transformedActiveCompleted = activeCompleted?.map((el) =>
    el === "1" ? "completed" : "not-completed"
  );

  params.append("page", String(page));

  if (activeLevels && activeLevels.length > 0) {
    params.append("levels", activeLevels.join(","));
  }

  if (activeCategories.length > 0) {
    params.append("categories", activeCategories.join(","));
  }

  if (
    activeCompleted &&
    activeCompleted.length > 0 &&
    transformedActiveCompleted
  ) {
    params.append("completed", transformedActiveCompleted.join(","));
  }

  if (activeSortBy) {
    params.append("sortBy", activeSortBy);
  }

  if (activeSortDirection) {
    params.append("direction", activeSortDirection);
  }

  if (limit) {
    params.append("limit", String(limit));
  }

  if (except_id) {
    params.append("except", String(except_id));
  }

  if (search) {
    params.append("search", search);
  }

  const response = await authInstace.get(`/api/quizzes?${params.toString()}`);

  return response.data;
}

export async function getLevels() {
  const response = await normalInstace.get("/api/levels");

  return response.data;
}

export async function submitQuiz({
  quizId,
  selectedAnswers,
  timer,
}: {
  quizId: number;
  selectedAnswers: SelectedAnswersCombination[];
  timer: number;
}) {
  const response = await authInstace.post(`/api/quizzes/${quizId}`, {
    selectedAnswers,
    timer,
  });

  return response;
}
