
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface CommentFormProps {
  reviewId: number;
  onAddComment: (reviewId: number, username: string, comment: string) => void;
}

export const CommentForm = ({ reviewId, onAddComment }: CommentFormProps) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !comment.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate a small delay like a network request
    setTimeout(() => {
      onAddComment(reviewId, username, comment);
      setUsername("");
      setComment("");
      setIsSubmitting(false);
      toast.success("Comment added successfully!");
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <h4 className="text-xs font-medium text-gray-400">Add a comment</h4>
      <Input
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-700/50 border-gray-700 text-white text-xs placeholder:text-gray-500"
      />
      <Input
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-gray-700/50 border-gray-700 text-white text-xs placeholder:text-gray-500"
      />
      <Button 
        type="submit" 
        variant="secondary" 
        className="w-full text-xs bg-gray-700 hover:bg-gray-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Add Comment"}
      </Button>
    </form>
  );
};
