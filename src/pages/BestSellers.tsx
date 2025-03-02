
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/components/header/CartMenu";
import { addToWishlist, isInWishlist } from "@/components/header/WishlistButton";
import { Badge } from "@/components/ui/badge";

const BestSellers = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const products = [
    {
      id: 1,
      name: "Classic Table",
      price: 299.99,
      sales: "1.2k sold",
      category: "Furniture",
      specs: ["Solid oak wood", "72x36 inches", "Sleek modern design", "Assembly required"],
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    },
    {
      id: 2,
      name: "Modern Chair",
      price: 149.99,
      sales: "950 sold",
      category: "Furniture",
      specs: ["Ergonomic design", "Breathable fabric", "Adjustable height", "High-density foam"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 3,
      name: "Premium Headphones",
      price: 199.99,
      sales: "2.3k sold",
      category: "Electronics",
      specs: ["Noise cancellation", "40-hour battery", "Bluetooth 5.0", "Memory foam ear cups"],
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 4,
      name: "Stainless Steel Cookware Set",
      price: 249.99,
      sales: "800 sold",
      category: "Kitchen",
      specs: ["10-piece set", "Dishwasher safe", "Induction compatible", "Heat-resistant handles"],
      image: "https://images.unsplash.com/photo-1625610507124-e96e676e952d"
    },
    {
      id: 5,
      name: "Aromatherapy Diffuser",
      price: 59.99,
      sales: "1.5k sold",
      category: "Home Decor",
      specs: ["300ml capacity", "7 LED light colors", "Auto shut-off", "Ultrasonic technology"],
      image: "https://images.unsplash.com/photo-1616059117170-40ef45af7438"
    },
    {
      id: 6,
      name: "Smart Doorbell",
      price: 129.99,
      sales: "700 sold",
      category: "Electronics",
      specs: ["1080p HD video", "Two-way audio", "Motion detection", "Cloud storage"],
      image: "https://images.unsplash.com/photo-1558227740-32cbc98c66f4"
    },
    {
      id: 7,
      name: "Wool Area Rug",
      price: 179.99,
      sales: "620 sold",
      category: "Home Decor",
      specs: ["5x7 feet", "Hand-tufted", "100% New Zealand wool", "Stain-resistant"],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    },
    {
      id: 8,
      name: "Robot Vacuum Cleaner",
      price: 299.99,
      sales: "950 sold",
      category: "Appliances",
      specs: ["Smart mapping", "Voice control", "120-minute runtime", "HEPA filtration"],
      image: "https://images.unsplash.com/photo-1599360889420-da1afaba9edc"
    },
    {
      id: 9,
      name: "Memory Foam Mattress",
      price: 499.99,
      sales: "530 sold",
      category: "Furniture",
      specs: ["Queen size", "Cooling gel foam", "100-night trial", "10-year warranty"],
      image: "https://images.unsplash.com/photo-1631157826880-910fb68738c4"
    },
    {
      id: 10,
      name: "Indoor Plant Set",
      price: 89.99,
      sales: "1.1k sold",
      category: "Plants",
      specs: ["Set of 3 plants", "Decorative pots included", "Low maintenance", "Air purifying"],
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d324"
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

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

  const handleAddToWishlist = (product: { name: string, price: number, image: string }) => {
    addToWishlist({
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3">Best Sellers</h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our most popular products loved by customers. Quality and satisfaction guaranteed.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="rounded-full"
              >
                All
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-yellow-500">
                      {product.sales}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <Heart className={`h-5 w-5 ${isInWishlist(product.name) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="mb-1">
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400">{product.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(50+)</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {product.specs[0]}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      <Button onClick={() => handleAddToCart(product)}>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BestSellers;
