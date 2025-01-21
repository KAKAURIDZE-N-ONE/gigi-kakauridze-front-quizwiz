import { normalInstace } from "@/axiosInstances";

export async function getCategoriesLength() {
  const response = await normalInstace.get("api/categories/count");
  return response.data;
}

export async function getCategories() {
  const response = await normalInstace.get("/api/categories");

  return response.data;
}
