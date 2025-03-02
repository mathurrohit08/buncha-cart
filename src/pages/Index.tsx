
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { productTypes } from "@/components/header/ProductMenu";

const Index = () => {
  // Choose three featured collections to show
  const featuredCollections = productTypes.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Banner />
        <Categories />
        
        {/* Featured Collections Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{collection.name}</h3>
                      <p className="text-white text-sm mb-3">Discover our {collection.name.toLowerCase()} collection</p>
                      <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/all-products">
              <Button variant="outline" className="gap-2">
                View All Collections <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Home Improvement Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909114-44e3e9399a2c" 
              alt="Home Improvement" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Browse Our Home Improvement Products</h2>
              <p className="text-white mb-6 max-w-2xl">
                Explore our extensive collection of tiles, flooring, cabinets, sinks, vanities, 
                and more for your renovation projects.
              </p>
              <Link to="/home-improvement">
                <Button size="lg" className="px-8 py-6 text-base font-medium">Shop Home Improvement</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Smart Home Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055e2dae1d7" 
              alt="Smart Home" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Transform Your Home with Smart Technology</h2>
              <p className="text-white mb-6 max-w-2xl">
                Discover our collection of smart home devices that make your life easier, safer, and more comfortable.
              </p>
              <Link to="/products/smart-home">
                <Button size="lg" className="px-8 py-6 text-base font-medium">Shop Smart Home</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
