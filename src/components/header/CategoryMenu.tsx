
import { useState } from "react";
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

  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Categories
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[calc(100vw-2rem)] sm:w-[500px] p-0 border dark:border-gray-700 bg-white dark:bg-gray-800 z-50" 
        align="start"
        sideOffset={8}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 h-[400px] max-h-[70vh]">
          <div className="sm:col-span-1 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onClick={() => setHoveredCategory(category.name)}
              >
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <span className="dark:text-gray-300 text-sm">{category.name}</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          <div className="sm:col-span-2 p-4 overflow-y-auto">
            {hoveredCategory && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <h3 className="font-medium dark:text-white text-sm mb-2">{hoveredCategory}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories
                    .find((c) => c.name === hoveredCategory)
                    ?.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to={`/category/${hoveredCategory.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors dark:text-gray-300 text-sm"
                      >
                        {sub}
                      </Link>
                    ))}
                </div>
                
                <Link
                  to={categories.find((c) => c.name === hoveredCategory)?.path || "#"}
                  className="block mt-4"
                >
                  <img
                    src={
                      categories.find((c) => c.name === hoveredCategory)?.image
                    }
                    alt={hoveredCategory}
                    className="w-full h-36 object-cover rounded-lg"
                  />
                  <div className="mt-2 text-sm text-center text-purple-600 dark:text-purple-400 font-medium">
                    View All {hoveredCategory} Products
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
