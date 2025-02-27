
import { motion } from "framer-motion";
import { Review, getBorderColor } from "./types";
import { CommentItem } from "./CommentItem";
import { CommentForm } from "./CommentForm";

interface ReviewCardProps {
  review: Review;
  index: number;
  onAddComment: (reviewId: number, username: string, comment: string) => void;
}

export const ReviewCard = ({ review, index, onAddComment }: ReviewCardProps) => {
  return (
    <motion.div
      key={review.id}
      className="relative rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
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
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content with slight inset to show border */}
      <div className="bg-gray-800 m-[2px] p-4 md:p-5 rounded-lg relative z-10 h-full">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300 text-sm mb-3 line-clamp-3">{review.comment}</p>
        <p className="font-medium text-sm mb-4">{review.name}</p>
        
        <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2 scrollbar-none">
          <h4 className="text-xs font-medium text-gray-400">Comments</h4>
          {review.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
        
        <CommentForm reviewId={review.id} onAddComment={onAddComment} />
      </div>
    </motion.div>
  );
};
