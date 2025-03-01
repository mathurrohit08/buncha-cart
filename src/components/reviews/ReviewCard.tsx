
import { useState } from "react";
import { ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommentItem } from "./CommentItem";
import { CommentForm } from "./CommentForm";
import { Review } from "./types";

interface ReviewCardProps {
  review: Review;
  onMarkHelpful: (reviewId: number) => void;
  onAddComment: (comment: string) => void;
  showCommentForm: boolean;
  toggleCommentForm: () => void;
}

export const ReviewCard = ({
  review,
  onMarkHelpful,
  onAddComment,
  showCommentForm,
  toggleCommentForm
}: ReviewCardProps) => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    onAddComment(comment);
    setComment("");
  };

  // Generate star rating
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-sm dark:text-white">{review.title}</h3>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex">{renderStars()}</div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              {review.userName}
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onMarkHelpful(review.id)}
          className="flex items-center gap-1 text-xs h-7 px-2"
        >
          <ThumbsUp className="w-3 h-3" />
          <span>{review.helpful}</span>
        </Button>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-xs mb-3 line-clamp-3">{review.content}</p>

      {review.comments.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-3 mb-3 max-h-24 overflow-y-auto">
          <h4 className="font-medium text-white text-xs mb-2">Comments ({review.comments.length})</h4>
          <div className="space-y-2">
            {review.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto pt-2">
        {!showCommentForm ? (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleCommentForm}
            className="text-xs flex items-center gap-1 h-7 px-2"
          >
            <MessageSquare className="w-3 h-3" />
            Add Comment
          </Button>
        ) : (
          <CommentForm 
            value={comment} 
            onChange={setComment} 
            onSubmit={handleCommentSubmit} 
            onCancel={toggleCommentForm}
          />
        )}
      </div>
    </div>
  );
};
