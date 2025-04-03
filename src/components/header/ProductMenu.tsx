
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productTypes } from "./data/productTypesData";
import { ProductMenuItem } from "./ProductMenuItem";
import { ProductGridContent } from "./ProductGridContent";

export const ProductMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState(productTypes[0].name);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const activeTypeData = productTypes.find((type) => type.name === activeType);

  return (
    <div 
      className="relative"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Products
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 transform -translate-x-1/2 w-[800px] border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-md z-50 mt-2 mega-menu"
            style={{ maxHeight: '80vh', overflow: 'auto' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 h-[450px] max-h-[70vh]">
              {/* Product Types Column */}
              <div className="sm:col-span-1 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto h-full">
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white">Browse Products</h3>
                <div className="space-y-1">
                  <Link
                    to="/all-products"
                    className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors mb-2"
                    onClick={handleCloseMenu}
                  >
                    <span className="font-medium text-sm text-purple-800 dark:text-purple-300">All Products</span>
                    <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </Link>
                  
                  {productTypes.map((type) => (
                    <ProductMenuItem
                      key={type.name}
                      name={type.name}
                      isActive={activeType === type.name}
                      onMouseEnter={() => setActiveType(type.name)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="sm:col-span-3 p-4 h-full overflow-y-auto">
                {activeTypeData && (
                  <ProductGridContent
                    activeType={activeType}
                    products={activeTypeData.products}
                    onCloseMenu={handleCloseMenu}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
