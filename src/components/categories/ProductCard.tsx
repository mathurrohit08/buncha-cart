
import { Heart, ShoppingCart, BarChart2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  tags: string[];
  brand: string;
  isNew?: boolean;
  isHot?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const {
    id,
    name,
    price,
    compareAtPrice,
    rating,
    reviewCount,
    image,
    category,
    isNew,
    isHot,
    isSale
  } = product;

  // Calculate discount percentage
  const discountPercentage = compareAtPrice
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  // Render stars for rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-${i}`} className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half-star" className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-star-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  // Default fallback image for products
  const fallbackImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&h=300";

  if (viewMode === 'list') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <Link to={`/products/${category.toLowerCase()}/${id}`}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
              </div>
            </Link>
            
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {isNew && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
              {isHot && <Badge className="bg-orange-500 hover:bg-orange-600">Hot</Badge>}
              {isSale && <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>}
              {compareAtPrice && <Badge className="bg-green-500 hover:bg-green-600">-{discountPercentage}%</Badge>}
            </div>

            <div className="absolute top-2 right-2">
              <Button size="icon" variant="secondary" className="rounded-full bg-white dark:bg-gray-700 h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-4 md:w-2/3 flex flex-col">
            <div className="mb-auto">
              <div className="flex items-center mb-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">{category}</span>
              </div>
              
              <Link to={`/products/${category.toLowerCase()}/${id}`} className="block mb-2">
                <h3 className="font-medium text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{name}</h3>
              </Link>
              
              <div className="flex items-center mb-3">
                {renderStars()}
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({reviewCount})</span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                This premium product offers exceptional quality and performance. Perfect for everyday use.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-baseline">
                <span className="text-lg font-bold text-gray-900 dark:text-white">${price.toFixed(2)}</span>
                {compareAtPrice && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">${compareAtPrice.toFixed(2)}</span>
                )}
              </div>
              
              <div className="flex items-center space-x-1">
                <Button size="sm" className="gap-1">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">Add to Cart</span>
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <BarChart2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative">
        <Link to={`/products/${category.toLowerCase()}/${id}`}>
          <div className="aspect-square overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImage;
              }}
            />
          </div>
        </Link>
        
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
          {isHot && <Badge className="bg-orange-500 hover:bg-orange-600">Hot</Badge>}
          {isSale && <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>}
          {compareAtPrice && <Badge className="bg-green-500 hover:bg-green-600">-{discountPercentage}%</Badge>}
        </div>

        <div className="absolute top-2 right-2">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/70 dark:bg-gray-700/70 h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex justify-center gap-1">
            <Button size="sm" className="gap-1">
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <BarChart2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          <span className="text-xs text-gray-500 dark:text-gray-400">{category}</span>
        </div>
        
        <Link to={`/products/${category.toLowerCase()}/${id}`} className="block mb-2">
          <h3 className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors line-clamp-1">{name}</h3>
        </Link>
        
        <div className="flex items-center mb-3">
          {renderStars()}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({reviewCount})</span>
        </div>
        
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-bold text-gray-900 dark:text-white">${price.toFixed(2)}</span>
            {compareAtPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">${compareAtPrice.toFixed(2)}</span>
            )}
          </div>
          
          <div className="md:hidden">
            <Button size="icon" className="h-8 w-8 rounded-full">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
