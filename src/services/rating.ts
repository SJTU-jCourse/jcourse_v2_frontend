import { request } from "@/services/request.ts";
import { RatingRequest } from "@/models/dto.ts";


export const createRating = async (r: RatingRequest) => {
  const resp = await request.post("/api/rating", r)
  return resp.data
}