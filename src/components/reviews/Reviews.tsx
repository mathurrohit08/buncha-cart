
import { useState } from "react";
import { reviews as initialReviews, Review } from "./types";
import { ReviewCard } from "./ReviewCard";
import { Toaster } from "@/components/ui/sonner";

export const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  
  const handleAddComment = (reviewId: number, username: string, comment: string) => {
    setReviews(currentReviews => 
      currentReviews.map(review => {
        if (review.id === reviewId) {
          // Create a new comment
          const newComment = {
            id: review.comments.length + 1, // Simple ID generation
            user: username,
            comment: comment
          };
          
          // Return updated review with new comment
          return {
            ...review,
            comments: [...review.comments, newComment]
          };
        }
        return review;
      })
    );
  };
  
  return (
    <div className="bg-gray-900 text-white py-8 md:py-12">
      <Toaster position="top-center" />
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard 
              key={review.id} 
              review={review} 
              index={index} 
              onAddComment={handleAddComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
