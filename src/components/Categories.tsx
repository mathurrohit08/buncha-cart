
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    path: "/category/electronics"
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    path: "/category/fashion"
  },
  {
    id: 3,
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    path: "/category/home-living"
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    path: "/category/sports-outdoors"
  },
  {
    id: 5,
    name: "Books & Media",
    image: "https://images.unsplash.com/photo-1495446815901-a6a2a5aee158",
    path: "/books-media"
  },
  {
    id: 6,
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    path: "/beauty-personal-care"
  },
  {
    id: 7,
    name: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    path: "/kitchen-dining"
  },
  {
    id: 8,
    name: "Toys & Games",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
    path: "/toys-games"
  },
  {
    id: 9,
    name: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    path: "/health-wellness"
  },
  {
    id: 10,
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7",
    path: "/smart-home"
  },
  {
    id: 11,
    name: "Office Supplies",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    path: "/office-supplies"
  },
  {
    id: 12,
    name: "Automotive",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
    path: "/automotive"
  },
  {
    id: 13,
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    path: "/jewelry"
  },
  {
    id: 14,
    name: "Tools & Home Improvement",
    image: "https://images.unsplash.com/photo-1581244277943-fe4995638beb",
    path: "/tools-home-improvement"
  },
  {
    id: 15,
    name: "Outdoor Living",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    path: "/outdoor-living"
  },
  {
    id: 16,
    name: "Tech Accessories",
    image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0",
    path: "/tech-accessories"
  }
];

export const Categories = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative max-w-[1600px] mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-6"
        >
          {categories.map((category) => (
            <Link
              to={category.path}
              key={category.id}
              className="flex-none w-60 lg:w-72 snap-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      {/* View All Categories Button */}
      <div className="text-center mt-8">
        <Link 
          to="/products" 
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          View All Categories
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};
