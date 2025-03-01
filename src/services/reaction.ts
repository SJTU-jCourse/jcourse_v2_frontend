import { ReviewReactionProps } from "../models/model.ts";
import { request } from "./request.ts";

function useReviewReaction(reviewId: number, existsReaction: ReviewReactionProps, callback?: () => void) {
  const handleReaction = (reaction: string) => {
    const myReactionMap = new Map<string, number>(Object.entries(existsReaction.my_reactions));
    const existReactionId = myReactionMap.get(reaction)
    if (existReactionId) {
      deleteReaction(existReactionId).then(callback);
    }else{
      postReaction(reaction, reviewId).then(callback);
    }
  }

  return {
    handleReaction,
  }
}

const postReaction = async (reaction: string, reviewId: number)=>{
  const resp = await request.post("/api/review-reaction", {review_id: reviewId, reaction})
  return resp.data;
}

const deleteReaction = async (reactionId: number)=>{
  const resp = await request.delete(`/api/review-reaction/${reactionId}`)
  return resp.data;
}

export default useReviewReaction;