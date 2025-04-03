
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CategoryContentProps {
  categoryName: string;
  subcategories: string[];
  image: string;
  path: string;
  onCloseMenu: () => void;
}

export const CategoryContent = ({
  categoryName,
  subcategories,
  image,
  path,
  onCloseMenu
}: CategoryContentProps) => {
  return (
    <>
      {/* Subcategories Section */}
      <div className="sm:col-span-3 space-y-3 overflow-y-auto h-full pr-4">
        <h3 className="font-medium text-lg dark:text-white mb-4">{categoryName}</h3>
        <div className="grid grid-cols-2 gap-2">
          {subcategories.map((sub) => (
            <Link
              key={sub}
              to={`/category/${categoryName.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
              className="block p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors dark:text-gray-300 text-sm"
              onClick={onCloseMenu}
            >
              <motion.span
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {sub}
              </motion.span>
            </Link>
          ))}
        </div>
        
        <Link
          to={path || "#"}
          className="inline-block mt-4 text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
          onClick={onCloseMenu}
        >
          View All {categoryName} Products
        </Link>
      </div>
      
      {/* Image Section */}
      <div className="sm:col-span-2 overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <Link
            to={path || "#"}
            onClick={onCloseMenu}
          >
            <img
              src={image}
              alt={categoryName}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=300";
              }}
            />
          </Link>
        </div>
        <div className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <h4 className="font-medium text-sm mb-1 dark:text-white">Featured Products</h4>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Explore our selection of top {categoryName} products at great prices.
          </p>
        </div>
      </div>
    </>
  );
};
