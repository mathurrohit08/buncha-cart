
import { useState } from "react";
import { reviews } from "./types";
import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
  const [isPaused] = useState(false);
  
  return (
    <div className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
