
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

const NewArrivals = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const products = [
    {
      id: 1,
      name: "Modern Desk Lamp",
      price: 49.99,
      category: "Lighting",
      specs: ["Adjustable brightness", "Touch controls", "Energy-efficient LED", "5-year warranty"],
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 199.99,
      category: "Furniture",
      specs: ["Lumbar support", "Adjustable armrests", "Breathable mesh", "360° swivel"],
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a"
    },
    {
      id: 3,
      name: "Smart Home Hub",
      price: 129.99,
      category: "Electronics",
      specs: ["Voice control", "Compatible with 100+ devices", "Energy monitoring", "Custom routines"],
      image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7"
    },
    {
      id: 4,
      name: "Minimalist Wall Clock",
      price: 39.99,
      category: "Home Decor",
      specs: ["Silent mechanism", "12-inch diameter", "Scandinavian design", "Easy installation"],
      image: "https://images.unsplash.com/photo-1507138451611-3001135909fa"
    },
    {
      id: 5,
      name: "Ceramic Plant Pot",
      price: 24.99,
      category: "Home Decor",
      specs: ["Drainage hole", "6-inch diameter", "Hand-painted", "Indoor/outdoor use"],
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      category: "Electronics",
      specs: ["10-hour battery", "Waterproof IPX7", "360° sound", "Voice assistant compatible"],
      image: "https://images.unsplash.com/photo-1543085104-45744825cdea"
    },
    {
      id: 7,
      name: "Premium Coffee Maker",
      price: 149.99,
      category: "Kitchen",
      specs: ["Programmable timer", "10-cup capacity", "Built-in grinder", "Keep-warm function"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      id: 8,
      name: "Sustainable Bamboo Cutlery Set",
      price: 29.99,
      category: "Kitchen",
      specs: ["100% biodegradable", "Dishwasher safe", "Includes 16 pieces", "Travel case included"],
      image: "https://images.unsplash.com/photo-1553787499-6f9133922a9a"
    },
    {
      id: 9,
      name: "Wireless Charging Pad",
      price: 34.99,
      category: "Electronics",
      specs: ["15W fast charging", "Multi-device compatible", "LED indicator", "Anti-slip surface"],
      image: "https://images.unsplash.com/photo-1586941445525-d5d3ef8c75a9"
    },
    {
      id: 10,
      name: "Handwoven Throw Blanket",
      price: 59.99,
      category: "Home Decor",
      specs: ["100% cotton", "50x60 inches", "Machine washable", "Ethically produced"],
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5"
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
              <h1 className="text-4xl font-bold mb-3">New Arrivals</h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover our latest additions to elevate your home and lifestyle. Shop the newest trends and innovations.
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
                    <Badge className="absolute top-2 left-2 bg-green-500">New</Badge>
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
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(12)</span>
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

export default NewArrivals;
