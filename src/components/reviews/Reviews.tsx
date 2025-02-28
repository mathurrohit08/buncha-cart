
import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { Button } from "@/components/ui/button";
import { CommentForm } from "./CommentForm";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Comment, Review } from "./types";
import { useToast } from "@/hooks/use-toast";

// Mock reviews data
const initialReviews: Review[] = [
  {
    id: 1,
    userName: "Alex Johnson",
    rating: 5,
    date: "2023-05-15",
    title: "Absolutely Amazing!",
    content:
      "I'm extremely impressed with this product. The quality exceeded my expectations and the delivery was prompt. Highly recommend!",
    helpful: 24,
    comments: [
      {
        id: 101,
        user: "Sarah T.",
        comment: "I agree, it's fantastic! Did you get the black or white one?",
      },
      {
        id: 102,
        user: "Mike P.",
        comment: "How long did shipping take for you?",
      },
    ],
  },
  {
    id: 2,
    userName: "Emma Williams",
    rating: 4,
    date: "2023-05-10",
    title: "Great Value for Money",
    content:
      "This product offers excellent value. It has all the features I needed and works perfectly. The only minor issue is the setup was a bit complicated.",
    helpful: 15,
    comments: [
      {
        id: 103,
        user: "Jordan",
        comment: "Did you follow the manual? I found it pretty straightforward.",
      },
    ],
  },
  {
    id: 3,
    userName: "Ryan Davis",
    rating: 5,
    date: "2023-05-05",
    title: "Perfect Addition!",
    content:
      "This is exactly what I was looking for. The design is sleek and modern, and it fits perfectly with my existing setup.",
    helpful: 18,
    comments: [],
  },
  {
    id: 4,
    userName: "Sophia Miller",
    rating: 3,
    date: "2023-04-28",
    title: "Good but Not Perfect",
    content:
      "The product is good overall, but there are a few areas that could be improved. The battery life isn't as long as advertised, and the materials feel a bit cheap.",
    helpful: 9,
    comments: [
      {
        id: 104,
        user: "Customer Service",
        comment:
          "We're sorry to hear about your experience. Please contact our support team, and we'll help resolve these issues.",
      },
    ],
  },
];

export const Reviews = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [activeReviewId, setActiveReviewId] = useState<number | null>(null);
  const [showCommentForm, setShowCommentForm] = useState<Record<number, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2;

  // Calculate current reviews to display based on pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleMarkHelpful = (reviewId: number) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === reviewId
          ? { ...review, helpful: review.helpful + 1 }
          : review
      )
    );
    toast({
      title: "Thank you!",
      description: "You marked this review as helpful",
      variant: "default",
    });
  };

  const handleAddComment = (reviewId: number, newComment: string) => {
    if (!newComment.trim()) {
      toast({
        title: "Error",
        description: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }

    // Generate a simple ID (in a real app, this would come from the backend)
    const commentId = Date.now();

    const comment: Comment = {
      id: commentId,
      user: "You", // In a real app, this would be the logged-in user
      comment: newComment,
    };

    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === reviewId
          ? { ...review, comments: [...review.comments, comment] }
          : review
      )
    );

    // Hide the comment form after submission
    setShowCommentForm(prev => ({
      ...prev,
      [reviewId]: false
    }));

    toast({
      title: "Comment added",
      description: "Your comment has been added successfully",
      variant: "default",
    });
  };

  const toggleCommentForm = (reviewId: number) => {
    setShowCommentForm(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Customer Reviews</h2>

      <div className="space-y-6">
        {currentReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onMarkHelpful={handleMarkHelpful}
            onAddComment={(comment) => handleAddComment(review.id, comment)}
            showCommentForm={showCommentForm[review.id] || false}
            toggleCommentForm={() => toggleCommentForm(review.id)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className="h-8 w-8 px-0"
              >
                {page}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
