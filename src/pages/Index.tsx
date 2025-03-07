
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { productTypes } from "@/components/header/ProductMenu";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/components/header/CartMenu";

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

const Index = () => {
  const { toast } = useToast();
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  
  // Choose four featured collections to show
  const featuredCollections = productTypes.slice(0, 4);
  
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
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Banner />
        <Categories />
        
        {/* Featured Collections Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        {/* Featured Products Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4 bg-gray-50 dark:bg-gray-900/50">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Products</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Discover our most popular items selected just for you</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      className="w-full h-56 object-cover transition-transform duration-300 ease-in-out"
                      style={{transform: hoveredProductId === product.id ? 'scale(1.05)' : 'scale(1)'}}
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
          
          <div className="text-center mt-8">
            <Link to="/all-products">
              <Button className="gap-2">
                Explore All Products <ArrowRight className="h-4 w-4" />
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
        
        {/* New Arrivals & Best Sellers Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Arrivals */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <Link to="/new-arrivals">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
                  alt="New Arrivals" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">New Arrivals</h3>
                  <p className="text-white text-sm mb-4">Check out our latest products and be the first to get them</p>
                  <Button size="sm" variant="secondary" className="self-start">
                    View New Arrivals
                  </Button>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Best Sellers */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <Link to="/best-sellers">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86" 
                  alt="Best Sellers" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Best Sellers</h3>
                  <p className="text-white text-sm mb-4">Discover our most popular products that customers love</p>
                  <Button size="sm" variant="secondary" className="self-start">
                    View Best Sellers
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
