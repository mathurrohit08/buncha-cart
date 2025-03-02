
import { useState } from "react";
import { X, ShoppingCart, Star, Heart, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/components/header/CartMenu";
import { addToWishlist, isInWishlist } from "@/components/header/WishlistButton";
import { Link } from "react-router-dom";

interface QuickViewProps {
  product: {
    name: string;
    image: string;
    type: string;
  };
  children: React.ReactNode;
}

export const QuickView = ({ product, children }: QuickViewProps) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  // Generate a deterministic price based on the product name
  const getProductPrice = (name: string) => {
    const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return (hash % 300 + 99.99).toFixed(2);
  };
  
  const productPrice = getProductPrice(product.name);
  
  // Generate specs based on product name
  const generateSpecs = (name: string) => {
    if (name.includes("Headphones") || name.includes("Earbuds")) {
      return [
        "Bluetooth 5.0 connectivity",
        "Active Noise Cancellation",
        "Up to 30-hour battery life",
      ];
    } else if (name.includes("Speaker")) {
      return [
        "360° sound technology",
        "Bluetooth and WiFi connectivity",
        "Voice assistant compatible",
      ];
    } else if (name.includes("Watch") || name.includes("Tracker")) {
      return [
        "Heart rate and sleep monitoring",
        "Water resistant up to 50m",
        "GPS tracking",
      ];
    } else {
      return [
        "Premium design and build quality",
        "1-year manufacturer warranty",
        "Energy efficient operation",
      ];
    }
  };
  
  const specs = generateSpecs(product.name);
  
  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: parseFloat(productPrice),
      image: product.image,
      quantity: quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    addToWishlist({
      name: product.name,
      price: productPrice,
      image: product.image
    });
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          
          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  {product.type}
                </span>
                <h2 className="text-2xl font-bold mt-1 mb-2">{product.name}</h2>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(24)</span>
                </div>
              </div>
              <DialogClose className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                <X className="h-5 w-5" />
              </DialogClose>
            </div>
            
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">${productPrice}</p>
            
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Experience premium quality with the {product.name}. Designed for maximum performance and user satisfaction.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 pl-1 mb-4">
                {specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Package className="h-4 w-4 flex-shrink-0" />
                <span>Pickup available at select locations</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Truck className="h-4 w-4 flex-shrink-0" />
                <span>Free delivery on orders over $50</span>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <span className="mr-4">Quantity:</span>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                <button 
                  className="px-3 py-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 py-1">{quantity}</span>
                <button 
                  className="px-3 py-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full sm:flex-1"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleAddToWishlist}
              >
                <Heart className={`mr-2 h-5 w-5 ${isInWishlist(product.name) ? 'fill-red-500 text-red-500' : ''}`} />
                Wishlist
              </Button>
            </div>
            
            <div className="mt-4 text-center">
              <Link 
                to={`/products/${product.type.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                View full details
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
