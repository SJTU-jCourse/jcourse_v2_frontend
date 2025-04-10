import { OptCourseReviewRequest } from "@/models/dto.ts";
import { request } from "@/services/request";


export const optReviewContent = async (r: OptCourseReviewRequest) =>  {
  const resp = await request.post("/api/llm/review/opt", r)
  return resp.data
}

export const getCourseSummary = async (course_id: number) => {
  const resp = await request.get(`/api/llm/course/summary/${course_id}`)
  return resp.data
}