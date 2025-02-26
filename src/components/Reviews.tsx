
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "Amazing product! Exactly what I was looking for. The quality is outstanding.",
    comments: [
      {
        id: 1,
        user: "Alice Smith",
        comment: "I agree! The quality is really impressive.",
      },
      {
        id: 2,
        user: "Bob Johnson",
        comment: "Just ordered one after reading this review!",
      },
      {
        id: 3,
        user: "Carol White",
        comment: "The customer service is great too!",
      },
      {
        id: 4,
        user: "David Brown",
        comment: "Best purchase I've made this year.",
      },
      {
        id: 5,
        user: "Eva Green",
        comment: "Highly recommend to everyone!",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "Great value for money. Shipping was fast and the product exceeded my expectations.",
    comments: [
      {
        id: 1,
        user: "Frank Miller",
        comment: "Fast shipping indeed!",
      },
      {
        id: 2,
        user: "Grace Lee",
        comment: "Worth every penny.",
      },
      {
        id: 3,
        user: "Henry Wilson",
        comment: "The packaging was excellent.",
      },
      {
        id: 4,
        user: "Iris Chen",
        comment: "Will buy again!",
      },
      {
        id: 5,
        user: "Jack Thompson",
        comment: "Great experience overall.",
      },
    ],
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment:
      "Excellent customer service and the product quality is superb. Highly recommend!",
    comments: [
      {
        id: 1,
        user: "Karen Davis",
        comment: "The support team is amazing!",
      },
      {
        id: 2,
        user: "Liam Murphy",
        comment: "Quick response to all my questions.",
      },
      {
        id: 3,
        user: "Maria Garcia",
        comment: "Perfect experience from start to finish.",
      },
      {
        id: 4,
        user: "Noah Taylor",
        comment: "Exactly as described.",
      },
      {
        id: 5,
        user: "Olivia Martin",
        comment: "Can't wait to order more!",
      },
    ],
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
              <p className="font-medium mb-6">{review.name}</p>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-400">Comments</h4>
                {review.comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3 bg-gray-700/50 p-3 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">{comment.user}</p>
                      <p className="text-sm text-gray-400">{comment.comment}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
