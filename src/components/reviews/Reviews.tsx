
import { useState, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { Button } from "@/components/ui/button";
import { CommentForm } from "./CommentForm";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Comment, Review } from "./types";
import { useToast } from "@/hooks/use-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      "The product is good overall, but there are a few areas that could be improved. The battery life isn't as long as advertised.",
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
  {
    id: 5,
    userName: "David Lee",
    rating: 5,
    date: "2023-04-22",
    title: "Exceptional Quality",
    content:
      "The build quality is exceptional. It feels premium and durable. Worth every penny!",
    helpful: 12,
    comments: [],
  },
  {
    id: 6,
    userName: "Jessica Chen",
    rating: 4,
    date: "2023-04-15",
    title: "Nearly Perfect",
    content:
      "Almost everything about this product is great. The only downside is the limited color options.",
    helpful: 7,
    comments: [],
  },
];

// Brand logos data
const brands = [
  { id: 1, name: "TechGuru", logo: "https://i.imgur.com/JDYfhnK.png", projects: 254 },
  { id: 2, name: "InnovateCorp", logo: "https://i.imgur.com/EgT3PGd.png", projects: 189 },
  { id: 3, name: "FutureTech", logo: "https://i.imgur.com/qYVZR64.png", projects: 321 },
  { id: 4, name: "GlobalTech", logo: "https://i.imgur.com/z0JEMnB.png", projects: 176 },
  { id: 5, name: "NextGen", logo: "https://i.imgur.com/12345.png", projects: 203 },
  { id: 6, name: "DigitalWave", logo: "https://i.imgur.com/HdKaA1M.png", projects: 145 },
  { id: 7, name: "SmartSolutions", logo: "https://i.imgur.com/pfnLkpW.png", projects: 257 },
  { id: 8, name: "TechElite", logo: "https://i.imgur.com/dSsZMSw.png", projects: 198 },
  { id: 9, name: "InnovateX", logo: "https://i.imgur.com/1lUbMDn.png", projects: 231 },
  { id: 10, name: "FuturePrime", logo: "https://i.imgur.com/7zJhbwS.png", projects: 164 },
];

export const Reviews = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [activeReviewId, setActiveReviewId] = useState<number | null>(null);
  const [showCommentForm, setShowCommentForm] = useState<Record<number, boolean>>({});
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Update slides per view based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="space-y-12 py-12">
      {/* Brands Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center dark:text-white">Trusted by Industry Leaders</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
          Over 2,000+ successful projects delivered across the globe with our premium partners
        </p>
        
        <div className="mt-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={slidesPerView < 5 ? slidesPerView : 5}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="py-4"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow h-32">
                  <div className="h-12 w-12 mb-3 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <img src={brand.logo} alt={brand.name} className="h-8 w-8 object-contain" onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/200x200?text=" + brand.name[0];
                    }} />
                  </div>
                  <p className="font-medium text-sm dark:text-white">{brand.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{brand.projects} Projects</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center dark:text-white">Customer Reviews</h2>

        <div className="mt-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            className="pb-12"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard
                  review={review}
                  onMarkHelpful={handleMarkHelpful}
                  onAddComment={(comment) => handleAddComment(review.id, comment)}
                  showCommentForm={showCommentForm[review.id] || false}
                  toggleCommentForm={() => toggleCommentForm(review.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
