import { Link } from "react-router-dom";
import { useProductImage } from "@/hooks/use-product-image";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";
import { Subcategory } from "./types/menuTypes";

interface CategoryContentProps {
  categoryName: string;
  subcategories: Subcategory[];
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
  // Get fallback image based on category name
  const getFallbackByCategory = (category: string) => {
    const fallbacks: Record<string, string> = {
      "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=500&h=350",
      "Fashion": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&h=350",
      "Home & Living": "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&h=350",
      "Sports & Outdoors": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=350",
      "Books & Media": "https://images.unsplash.com/photo-1495446815901-a6a2a5aee158?auto=format&fit=crop&w=500&h=350",
      "Beauty & Personal Care": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&h=350",
      "Health & Wellness": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=350"
    };
    
    return fallbacks[category] || "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&h=350";
  };
  
  const { imgSrc, isLoading } = useProductImage(image, getFallbackByCategory(categoryName));
  
  return (
    <div className="grid grid-cols-5 gap-4 w-full h-full">
      <div className="col-span-3 pr-4">
        <h3 className="font-medium text-lg mb-4 dark:text-white">{categoryName}</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.name}
              to={subcategory.path || path}
              className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
              onClick={onCloseMenu}
            >
              <span className="text-sm">{subcategory.name}</span>
              <ChevronRight className="h-3 w-3 ml-1 opacity-70" />
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link 
            to={path}
            className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline"
            onClick={onCloseMenu}
          >
            View All {categoryName}
          </Link>
        </div>
      </div>
      
      <div className="col-span-2 relative h-full overflow-hidden rounded-lg">
        {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}
        <Link to={path} onClick={onCloseMenu}>
          <div className="h-full w-full relative">
            <img
              src={imgSrc}
              alt={categoryName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
              <div className="p-4 text-white">
                <h4 className="font-bold text-lg">Explore {categoryName}</h4>
                <p className="text-sm text-white/80">Shop the collection</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
