import apiClient from "../api";

export const handleGetAllProducts = async (params: any) => {
  const response = await apiClient.get("/products", { params });
  return response;
};
