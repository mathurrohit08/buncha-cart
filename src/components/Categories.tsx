
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    id: 3,
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
  },
  {
    id: 5,
    name: "Books & Media",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    id: 6,
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
  },
  {
    id: 7,
    name: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  },
  {
    id: 8,
    name: "Toys & Games",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
  },
  {
    id: 9,
    name: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
  {
    id: 10,
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7",
  },
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
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-4"
        >
          {categories.map((category) => (
            <Link
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={category.id}
              className="flex-none w-72 snap-start"
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
    </div>
  );
};
