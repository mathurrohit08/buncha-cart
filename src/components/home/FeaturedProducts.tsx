
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/components/header/CartMenu";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Designer Desk Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    category: "Home & Living"
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505843490578-27c843271fd1",
    category: "Furniture"
  }
];

export const FeaturedProducts = () => {
  const { toast } = useToast();
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const handleAddToCart = (product: { name: string, price: number, image: string }) => {
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

  return (
    <div className="max-w-[1600px] mx-auto py-8 sm:py-12 px-4 bg-gray-50 dark:bg-gray-900/50">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Featured Products</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base mb-6 sm:mb-8">
        Discover our most popular items selected just for you
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            whileHover={{ y: -5 }}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="relative">
              <Link to={`/products/${product.category.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 ease-in-out"
                  style={{transform: hoveredProductId === product.id ? 'scale(1.05)' : 'scale(1)'}}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
                  }}
                />
              </Link>
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform transition-transform duration-300 ${
                  hoveredProductId === product.id ? 'translate-y-0' : 'translate-y-full opacity-0'
                }`}
              >
                <Button 
                  className="w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < 4 ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(24)</span>
              </div>
              <Link to={`/products/${product.category.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1 hover:text-purple-700 dark:hover:text-purple-400 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{product.category}</p>
              <p className="font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-6 sm:mt-8">
        <Link to="/all-products">
          <Button className="gap-2">
            Explore All Products <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
