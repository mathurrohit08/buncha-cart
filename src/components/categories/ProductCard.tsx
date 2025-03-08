
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickView } from "@/components/QuickView";
import { addToCart } from "@/components/header/CartMenu";
import { addToWishlist, isInWishlist } from "@/components/header/WishlistButton";
import { useToast } from "@/hooks/use-toast";
import { CategoryProduct } from "@/utils/categoryProductsData";
import { useProductImage } from "@/hooks/use-product-image";

export const ProductCard = ({ product }: { product: CategoryProduct }) => {
  const { toast } = useToast();
  const { imgSrc } = useProductImage(product.image);
  const [isHovered, setIsHovered] = useState(false);

  // Helper to extract product type from name
  const getProductType = () => {
    const parts = product.name.split(' ');
    return parts.length > 1 ? parts[1] : 'Product';
  };

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      name: product.name,
      price: `$${product.price.toFixed(2)}`,
      image: product.image
    });
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.bestSeller && (
            <Badge className="bg-amber-500">Best Seller</Badge>
          )}
          {product.new && (
            <Badge className="bg-blue-500">New</Badge>
          )}
          {product.sale && (
            <Badge className="bg-red-500">Sale {product.discount}%</Badge>
          )}
        </div>
        <div className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full"
            onClick={handleAddToWishlist}
          >
            <Heart
              className={`h-5 w-5 ${
                isInWishlist(product.name) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'
              }`}
            />
          </Button>
          <QuickView product={{
            name: product.name,
            image: product.image,
            type: getProductType()
          }}>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full"
            >
              <Eye className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </QuickView>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <Link to={`#`} className="block">
          <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-1 hover:text-purple-700 dark:hover:text-purple-400 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center my-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : i < product.rating
                    ? 'fill-yellow-400 text-yellow-400 fill-[50%]'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            ({product.reviews})
          </span>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between">
            {product.sale ? (
              <div className="flex items-center space-x-2">
                <span className="font-medium text-lg text-gray-900 dark:text-white">
                  ${(product.price * (1 - product.discount! / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="font-medium text-lg text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
