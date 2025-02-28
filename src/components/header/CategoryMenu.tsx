
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
  },
  {
    name: "Fashion",
    subcategories: ["Men", "Women", "Kids", "Sport Wear"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    name: "Home & Living",
    subcategories: ["Furniture", "Decor", "Kitchen", "Garden"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
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
                <img
                  src={
                    categories.find((c) => c.name === hoveredCategory)?.image
                  }
                  alt={hoveredCategory}
                  className="w-full h-36 object-cover rounded-lg mt-4"
                />
              </motion.div>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
