
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
      {
        id: 6,
        user: "Frank Miller",
        comment: "Agreed! The shipping was super fast too.",
      },
      {
        id: 7,
        user: "Grace Wong",
        comment: "I've already recommended it to all my friends.",
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
      {
        id: 6,
        user: "Katie Reynolds",
        comment: "The customer service was very responsive.",
      },
      {
        id: 7,
        user: "Leo Martinez",
        comment: "Perfect for what I needed.",
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
      {
        id: 6,
        user: "Peter Johnson",
        comment: "The quality exceeded my expectations.",
      },
      {
        id: 7,
        user: "Quinn Adams",
        comment: "Five stars all the way!",
      },
    ],
  },
  {
    id: 4,
    name: "Sarah Williams",
    rating: 5,
    comment:
      "The product design is innovative and elegant. Functionality is top-notch and it's very user-friendly.",
    comments: [
      {
        id: 1,
        user: "Ryan Clark",
        comment: "The design really stands out from competitors.",
      },
      {
        id: 2,
        user: "Sophie Turner",
        comment: "I love how intuitive it is to use!",
      },
      {
        id: 3,
        user: "Thomas Hill",
        comment: "Very sleek and modern design.",
      },
      {
        id: 4,
        user: "Uma Patel",
        comment: "Exactly what I was looking for in terms of aesthetics.",
      },
      {
        id: 5,
        user: "Victor Nguyen",
        comment: "My friends all want one after seeing mine!",
      },
    ],
  },
  {
    id: 5,
    name: "Robert Chen",
    rating: 4,
    comment:
      "Reliable product with great features. The battery life is impressive and it's very durable.",
    comments: [
      {
        id: 1,
        user: "Wendy Rogers",
        comment: "I've dropped it multiple times and not a scratch!",
      },
      {
        id: 2,
        user: "Xavier Lopez",
        comment: "The battery lasts even longer than advertised.",
      },
      {
        id: 3,
        user: "Yasmine Ali",
        comment: "Perfect for my daily use needs.",
      },
      {
        id: 4,
        user: "Zach Turner",
        comment: "Very impressed with the build quality.",
      },
      {
        id: 5,
        user: "Amy Wilson",
        comment: "Great value compared to other options.",
      },
    ],
  },
  {
    id: 6,
    name: "Emily Parker",
    rating: 5,
    comment:
      "Outstanding product! The attention to detail is incredible. Would definitely purchase again.",
    comments: [
      {
        id: 1,
        user: "Brandon Scott",
        comment: "The craftsmanship is exceptional.",
      },
      {
        id: 2,
        user: "Chloe Davis",
        comment: "Even better in person than in the photos.",
      },
      {
        id: 3,
        user: "Dylan Martin",
        comment: "I'm already thinking about buying a second one.",
      },
      {
        id: 4,
        user: "Emma Thompson",
        comment: "Absolutely perfect, no complaints at all.",
      },
      {
        id: 5,
        user: "Felix White",
        comment: "So glad I made this purchase!",
      },
    ],
  },
];

// Border colors for the animated borders
const borderColors = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-teal-500",
  "from-yellow-500 to-red-500",
  "from-green-500 to-blue-500",
  "from-pink-500 to-orange-500",
  "from-indigo-500 to-purple-500",
];

export const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Function to get a border color based on index
  const getBorderColor = (index: number) => {
    return borderColors[index % borderColors.length];
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="relative rounded-lg overflow-hidden"
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
              {/* Animated border */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${getBorderColor(index)} rounded-lg`}
                animate={{
                  background: [
                    `linear-gradient(0deg, ${getBorderColor(index)})`,
                    `linear-gradient(90deg, ${getBorderColor(index)})`,
                    `linear-gradient(180deg, ${getBorderColor(index)})`,
                    `linear-gradient(270deg, ${getBorderColor(index)})`,
                    `linear-gradient(360deg, ${getBorderColor(index)})`
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Content with slight inset to show border */}
              <div className="bg-gray-800 m-[3px] p-6 rounded-lg relative z-10 h-full">
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
                
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-none">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
