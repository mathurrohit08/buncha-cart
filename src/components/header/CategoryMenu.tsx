
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryMenuItem } from "./CategoryMenuItem";
import { CategoryContent } from "./CategoryContent";
import { categories } from "./data/categoriesData";

export const CategoryMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
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
    // Set default active category when menu opens
    if (isOpen && !hoveredCategory && categories.length > 0) {
      setHoveredCategory(categories[0].name);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, hoveredCategory]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div 
      className="relative"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors menu-item">
        Categories
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="dropdown-menu-fixed w-[800px] border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-md z-50 mt-2 mega-menu"
            style={{ maxHeight: '80vh', overflow: 'auto' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-5 h-[450px]">
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
                <AnimatePresence mode="wait">
                  {hoveredCategory && (
                    <motion.div
                      key={hoveredCategory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="col-span-5 h-full flex"
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
