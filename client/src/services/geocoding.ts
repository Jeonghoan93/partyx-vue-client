import api from "./api";

export async function getGeocodingCoordinates(
  address: string
): Promise<[number, number]> {
  try {
    const response = await api.post("/geocoding", { address });
    return response.data.coordinates;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
}
