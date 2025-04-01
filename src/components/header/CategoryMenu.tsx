
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CategoryMenuItem } from "./CategoryMenuItem";
import { CategoryContent } from "./CategoryContent";
import { categories } from "./data/categoriesData";

export { categories } from "./data/categoriesData";

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
                  <CategoryMenuItem 
                    key={category.name}
                    name={category.name}
                    isHovered={hoveredCategory === category.name}
                    onHover={() => setHoveredCategory(category.name)}
                    onClick={() => setHoveredCategory(category.name)}
                  />
                ))}
              </div>
            </div>
            
            {/* Subcategories and Image Column */}
            <div className="sm:col-span-4 grid grid-cols-1 sm:grid-cols-5 p-4 h-full overflow-hidden">
              {hoveredCategory && (
                <>
                  {categories
                    .filter(c => c.name === hoveredCategory)
                    .map(category => (
                      <CategoryContent 
                        key={category.name}
                        categoryName={category.name}
                        subcategories={category.subcategories}
                        image={category.image}
                        path={category.path}
                        onCloseMenu={() => setIsOpen(false)}
                      />
                    ))
                  }
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
