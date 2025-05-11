
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useProductImage } from "@/hooks/use-product-image";
import { Skeleton } from "@/components/ui/skeleton";

interface MenuItem {
  name: string;
  path: string;
  image?: string;
  description?: string;
}

interface MegaMenuDropdownProps {
  title: string;
  items: MenuItem[];
  columnCount?: 2 | 3 | 4;
  featured?: MenuItem[];
}

// Image component with loading state
const MenuItemImage = ({ src, alt, isRounded = false }: { src: string; alt: string; isRounded?: boolean }) => {
  const { imgSrc, isLoading } = useProductImage(src);
  
  return (
    <div className={`relative w-full h-full ${isRounded ? 'rounded-full overflow-hidden' : ''}`}>
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img 
        src={imgSrc} 
        alt={alt} 
        className={`h-full w-full object-cover ${isRounded ? 'rounded-full' : ''}`}
      />
    </div>
  );
};

export const MegaMenuDropdown = ({
  title,
  items,
  columnCount = 3,
  featured = []
}: MegaMenuDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Function to get grid column class based on columnCount
  const getGridClass = () => {
    switch (columnCount) {
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-3";
      case 4: return "grid-cols-4";
      default: return "grid-cols-3";
    }
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="relative"
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors menu-item focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="dropdown-menu-fixed mega-menu border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 menu-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-6">
              <div className={`grid ${getGridClass()} gap-6 flex-grow`}>
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      {item.image && (
                        <div className="h-10 w-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <MenuItemImage src={item.image} alt={item.name} isRounded />
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.name}</h4>
                        {item.description && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {featured.length > 0 && (
                <div className="w-64 border-l border-gray-200 dark:border-gray-700 pl-6">
                  <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-4">Featured</h4>
                  <div className="space-y-4">
                    {featured.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block group"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.image && (
                          <div className="rounded-lg overflow-hidden mb-2 aspect-[4/3] relative">
                            <MenuItemImage src={item.image} alt={item.name} />
                          </div>
                        )}
                        <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {item.name}
                        </h5>
                        {item.description && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
