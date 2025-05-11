
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useProductImage } from "@/hooks/use-product-image";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridContentProps {
  activeType: string;
  products: Array<{
    name: string;
    image: string;
  }>;
  onCloseMenu: () => void;
}

// Image component with loading state
const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  // Use fallback categories based on product type
  const getFallbackByName = (name: string) => {
    if (name.toLowerCase().includes('laptop') || name.toLowerCase().includes('computer')) {
      return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
    } else if (name.toLowerCase().includes('phone') || name.toLowerCase().includes('mobile')) {
      return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350";  
    } else if (name.toLowerCase().includes('furniture') || name.toLowerCase().includes('chair')) {
      return "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&h=350";
    } else {
      return "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&h=350";
    }
  };
  
  const { imgSrc, isLoading } = useProductImage(src, getFallbackByName(alt));
  
  return (
    <>
      {isLoading && <Skeleton className="w-full h-full absolute inset-0" />}
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </>
  );
};

export const ProductGridContent = ({ activeType, products, onCloseMenu }: ProductGridContentProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeType}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg dark:text-white">{activeType}</h3>
          <Link 
            to={`/products/${activeType.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
            onClick={onCloseMenu}
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {products.slice(0, 6).map((product, index) => (
            <Link
              key={index}
              to={`/products/${activeType.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group"
              onClick={onCloseMenu}
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 relative">
                <ProductImage src={product.image} alt={product.name} />
              </div>
              <h4 className="mt-2 text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{product.name}</h4>
            </Link>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium dark:text-white">Featured Collection</h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">Explore our selection of top {activeType} products</p>
          </div>
          <Link 
            to={`/products/${activeType.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm bg-purple-600 hover:bg-purple-700 text-white dark:text-white px-3 py-1 rounded-md font-medium transition-colors featured-collection-button"
            onClick={onCloseMenu}
          >
            Shop Now
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
