import { normalInstace } from "@/axiosInstances";

export async function getFooterData() {
  const response = await normalInstace.get("/api/footer");

  return response.data;
}
