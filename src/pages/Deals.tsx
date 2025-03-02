
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

const Deals = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const deals = [
    {
      id: 1,
      name: "Premium Sofa",
      originalPrice: 999.99,
      salePrice: 799.99,
      discount: "20% OFF",
      category: "Furniture",
      specs: ["Stain-resistant fabric", "Solid wood frame", "Memory foam cushions", "5-year warranty"],
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25"
    },
    {
      id: 2,
      name: "Designer Chair",
      originalPrice: 299.99,
      salePrice: 239.99,
      discount: "20% OFF",
      category: "Furniture",
      specs: ["Ergonomic design", "Premium leather", "Adjustable height", "Swivel base"],
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237"
    },
    {
      id: 3,
      name: "Smart TV 55\"",
      originalPrice: 699.99,
      salePrice: 549.99,
      discount: "21% OFF",
      category: "Electronics",
      specs: ["4K Ultra HD", "Voice control", "Smart platform", "Dolby Vision"],
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6"
    },
    {
      id: 4,
      name: "Blender Pro",
      originalPrice: 159.99,
      salePrice: 99.99,
      discount: "38% OFF",
      category: "Kitchen",
      specs: ["1000W motor", "Multiple speed settings", "Dishwasher safe", "BPA-free"],
      image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054"
    },
    {
      id: 5,
      name: "Fitness Tracker",
      originalPrice: 129.99,
      salePrice: 89.99,
      discount: "31% OFF",
      category: "Electronics",
      specs: ["Heart rate monitoring", "Sleep tracking", "Water-resistant", "7-day battery"],
      image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e"
    },
    {
      id: 6,
      name: "Coffee Table",
      originalPrice: 249.99,
      salePrice: 179.99,
      discount: "28% OFF",
      category: "Furniture",
      specs: ["Solid oak", "Modern design", "Storage shelf", "Easy assembly"],
      image: "https://images.unsplash.com/photo-1499933374294-4584851497cc"
    },
    {
      id: 7,
      name: "Premium Knife Set",
      originalPrice: 199.99,
      salePrice: 149.99,
      discount: "25% OFF",
      category: "Kitchen",
      specs: ["Stainless steel", "15-piece set", "Self-sharpening", "Ergonomic handles"],
      image: "https://images.unsplash.com/photo-1593618661623-e7c20cd183c0"
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      originalPrice: 149.99,
      salePrice: 99.99,
      discount: "33% OFF",
      category: "Electronics",
      specs: ["Active noise cancellation", "24h battery life", "Water-resistant", "Touch controls"],
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46"
    },
    {
      id: 9,
      name: "Luxury Bedding Set",
      originalPrice: 179.99,
      salePrice: 129.99,
      discount: "28% OFF",
      category: "Home Decor",
      specs: ["100% cotton", "King size", "Hypoallergenic", "Machine washable"],
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    },
    {
      id: 10,
      name: "Smart Home Bundle",
      originalPrice: 349.99,
      salePrice: 249.99,
      discount: "29% OFF",
      category: "Electronics",
      specs: ["Smart speaker", "Video doorbell", "2 smart bulbs", "Smart plug"],
      image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7"
    }
  ];

  const categories = [...new Set(deals.map(deal => deal.category))];
  
  const filteredDeals = selectedCategory 
    ? deals.filter(deal => deal.category === selectedCategory)
    : deals;

  const handleAddToCart = (product: { name: string, salePrice: number, image: string }) => {
    addToCart({
      name: product.name,
      price: product.salePrice,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (product: { name: string, salePrice: number, image: string }) => {
    addToWishlist({
      name: product.name,
      price: product.salePrice,
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
              <h1 className="text-4xl font-bold mb-3">Special Deals</h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Limited-time offers on our best-selling products. Don't miss out on these incredible discounts!
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
              {filteredDeals.map((deal) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      {deal.discount}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full"
                      onClick={() => handleAddToWishlist(deal)}
                    >
                      <Heart className={`h-5 w-5 ${isInWishlist(deal.name) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="mb-1">
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400">{deal.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{deal.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(30+)</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {deal.specs[0]}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-red-600 dark:text-red-400">${deal.salePrice.toFixed(2)}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                          ${deal.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Button onClick={() => handleAddToCart(deal)}>
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

export default Deals;
