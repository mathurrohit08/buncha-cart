
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Comment } from "./types";

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <motion.div
      key={comment.id}
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-start gap-2 bg-gray-700/50 p-2 rounded-lg"
    >
      <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
        <User className="w-3 h-3 text-gray-300" />
      </div>
      <div>
        <p className="text-xs font-medium text-gray-300">{comment.user}</p>
        <p className="text-xs text-gray-400">{comment.comment}</p>
      </div>
    </motion.div>
  );
};
