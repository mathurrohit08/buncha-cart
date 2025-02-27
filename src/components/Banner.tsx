
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Banner 1",
  },
  {
    id: 2,
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    alt: "Video Banner",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Banner 2",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Banner 3",
  },
];

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    // Reset video playback when switching slides
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log("Video autoplay prevented:", err));
    }

    const timer = setTimeout(nextSlide, banners[currentSlide].type === 'video' ? 30000 : 5000);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div
      className="relative w-full max-w-[1600px] h-[300px] md:h-[450px] mx-auto overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {banners[currentSlide].type === "image" ? (
            <img
              src={banners[currentSlide].src}
              alt={banners[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={banners[currentSlide].src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
