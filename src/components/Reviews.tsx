
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "Amazing product! Exactly what I was looking for. The quality is outstanding.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "Great value for money. Shipping was fast and the product exceeded my expectations.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment:
      "Excellent customer service and the product quality is superb. Highly recommend!",
  },
];

export const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ y: 0 }}
              animate={
                isPaused
                  ? { y: 0 }
                  : {
                      y: [0, index % 2 === 0 ? 20 : -20, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">{review.comment}</p>
              <p className="font-medium">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
