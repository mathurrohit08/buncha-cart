
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

export const categories = [
  {
    name: "Electronics",
    subcategories: ["Phones", "Laptops", "Tablets", "Accessories"],
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    path: "/category/electronics"
  },
  {
    name: "Fashion",
    subcategories: ["Men", "Women", "Kids", "Sport Wear"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    path: "/category/fashion"
  },
  {
    name: "Home & Living",
    subcategories: ["Furniture", "Decor", "Kitchen", "Garden"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    path: "/category/home-living"
  },
  {
    name: "Books & Media",
    subcategories: ["Books", "E-Books", "Magazines", "Music", "Movies"],
    image: "https://images.unsplash.com/photo-1495446815901-a6a2a5aee158",
    path: "/books-media"
  },
  {
    name: "Beauty & Personal Care",
    subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances"],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    path: "/beauty-personal-care"
  },
  {
    name: "Kitchen & Dining",
    subcategories: ["Cookware", "Appliances", "Dinnerware", "Utensils"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    path: "/kitchen-dining"
  },
  {
    name: "Toys & Games",
    subcategories: ["Educational Toys", "Board Games", "Outdoor Games", "Collectibles"],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
    path: "/toys-games"
  },
  {
    name: "Health & Wellness",
    subcategories: ["Vitamins", "Fitness Equipment", "Personal Care", "Aromatherapy"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    path: "/health-wellness"
  },
  {
    name: "Smart Home",
    subcategories: ["Smart Speakers", "Security", "Lighting", "Appliances"],
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7",
    path: "/smart-home"
  },
  {
    name: "Office Supplies",
    subcategories: ["Stationery", "Furniture", "Organization", "Technology"],
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    path: "/office-supplies"
  },
  {
    name: "Automotive",
    subcategories: ["Interior", "Exterior", "Parts", "Electronics"],
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
    path: "/automotive"
  },
  {
    name: "Jewelry",
    subcategories: ["Necklaces", "Rings", "Earrings", "Watches"],
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    path: "/jewelry"
  },
  {
    name: "Tools & Home Improvement",
    subcategories: ["Power Tools", "Hand Tools", "Hardware", "Electrical"],
    image: "https://images.unsplash.com/photo-1581244277943-fe4995638beb",
    path: "/tools-home-improvement"
  },
  {
    name: "Outdoor Living",
    subcategories: ["Patio Furniture", "Gardening", "Grills", "Outdoor Decor"],
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    path: "/outdoor-living"
  },
  {
    name: "Tech Accessories",
    subcategories: ["Phone Cases", "Chargers", "Headphones", "Adapters"],
    image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0",
    path: "/tech-accessories"
  },
];

export const CategoryMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Use this to prevent menu from closing immediately when moving to submenu
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Delay closing to prevent accidental close
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Categories
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 w-[calc(100vw-2rem)] sm:w-[800px] p-0 border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-md z-50 mt-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-5 h-[450px] max-h-[70vh] overflow-hidden">
            {/* Categories Column */}
            <div className="sm:col-span-1 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto h-full">
              <h3 className="font-medium mb-3 text-gray-900 dark:text-white">Browse Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className={`group cursor-pointer rounded-lg ${
                      hoveredCategory === category.name 
                        ? "bg-white dark:bg-gray-800" 
                        : "hover:bg-white/80 dark:hover:bg-gray-800/80"
                    }`}
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onClick={() => setHoveredCategory(category.name)}
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg transition-colors">
                      <span className={`text-sm ${
                        hoveredCategory === category.name 
                          ? "text-purple-600 dark:text-purple-400 font-medium" 
                          : "dark:text-gray-300"
                      }`}>{category.name}</span>
                      <ChevronRight className={`h-4 w-4 ${
                        hoveredCategory === category.name 
                          ? "text-purple-600 dark:text-purple-400" 
                          : "opacity-0 group-hover:opacity-100 transition-opacity"
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Subcategories and Image Column */}
            <div className="sm:col-span-4 grid grid-cols-1 sm:grid-cols-5 p-4 h-full overflow-hidden">
              {hoveredCategory && (
                <>
                  {/* Subcategories Section */}
                  <div className="sm:col-span-3 space-y-3 overflow-y-auto h-full pr-4">
                    <h3 className="font-medium text-lg dark:text-white mb-4">{hoveredCategory}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories
                        .find((c) => c.name === hoveredCategory)
                        ?.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            to={`/category/${hoveredCategory.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors dark:text-gray-300 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub}
                          </Link>
                        ))}
                    </div>
                    
                    <Link
                      to={categories.find((c) => c.name === hoveredCategory)?.path || "#"}
                      className="inline-block mt-4 text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All {hoveredCategory} Products
                    </Link>
                  </div>
                  
                  {/* Image Section */}
                  <div className="sm:col-span-2 overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <Link
                        to={categories.find((c) => c.name === hoveredCategory)?.path || "#"}
                        onClick={() => setIsOpen(false)}
                      >
                        <img
                          src={categories.find((c) => c.name === hoveredCategory)?.image || ""}
                          alt={hoveredCategory}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 dark:text-white">Featured Products</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Explore our selection of top {hoveredCategory} products at great prices.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
