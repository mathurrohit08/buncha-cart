
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

const categories = [
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
      <HoverCardTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
        Categories
      </HoverCardTrigger>
      <HoverCardContent className="w-[500px] p-0" align="start">
        <div className="grid grid-cols-5 h-[400px]">
          <div className="col-span-2 bg-gray-50 p-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group"
                onMouseEnter={() => setHoveredCategory(category.name)}
              >
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white transition-colors cursor-pointer">
                  <span>{category.name}</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3 p-4">
            {hoveredCategory && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {categories
                  .find((c) => c.name === hoveredCategory)
                  ?.subcategories.map((sub) => (
                    <Link
                      key={sub}
                      to={`/category/${sub.toLowerCase()}`}
                      className="block p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                <img
                  src={
                    categories.find((c) => c.name === hoveredCategory)?.image
                  }
                  alt={hoveredCategory}
                  className="w-full h-48 object-cover rounded-lg mt-4"
                />
              </motion.div>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
