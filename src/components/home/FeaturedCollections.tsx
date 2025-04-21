
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { productTypes } from "@/components/header/data/productTypesData";

export const FeaturedCollections = () => {
  // Choose four featured collections to show
  const featuredCollections = productTypes.slice(0, 4);
  
  return (
    <div className="max-w-[1600px] mx-auto py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Featured Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {featuredCollections.map((collection) => (
          <motion.div
            key={collection.name}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <Link to={`/products/${collection.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="relative">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-40 sm:h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350";
                  }}
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{collection.name}</h3>
                  <p className="text-white text-xs sm:text-sm mb-3">Discover our {collection.name.toLowerCase()} collection</p>
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                    Shop Now
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6 sm:mt-8">
        <Link to="/all-products">
          <Button variant="outline" className="gap-2">
            View All Collections <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
