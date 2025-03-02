
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingCart, Filter, Star, ChevronDown, ChevronUp, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productTypes } from "@/components/header/ProductMenu";
import { categories } from "@/components/Categories";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/components/header/CartMenu";
import { addToWishlist, isInWishlist } from "@/components/header/WishlistButton";
import { QuickView } from "@/components/QuickView";

const ProductsPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Get all products from productTypes for display
  const allProducts = productTypes.flatMap(type => 
    type.products.map(product => ({
      ...product,
      type: type.name,
    }))
  );

  // Filter products by category if selected
  const filteredProducts = selectedCategory 
    ? allProducts.filter(product => product.type === selectedCategory)
    : allProducts;

  const handleAddToCart = (product: { name: string, image: string, type: string }) => {
    addToCart({
      name: product.name,
      price: (Math.random() * 300 + 50).toFixed(2),
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (product: { name: string, image: string, type: string }) => {
    addToWishlist({
      name: product.name,
      price: `$${(Math.random() * 300 + 50).toFixed(2)}`,
      image: product.image
    });
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold mb-4">All Products</h1>
              
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {categories.slice(0, 5).map((category) => (
                    <motion.div
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer"
                      onClick={() => navigate(`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`)}
                    >
                      <div className="relative h-36 rounded-lg overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="text-white font-medium">{category.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Shop by Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {productTypes.map((type) => (
                    <motion.div
                      key={type.name}
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer"
                      onClick={() => navigate(`/products/${type.name.toLowerCase().replace(/\s+/g, "-")}`)}
                    >
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img
                          src={type.image}
                          alt={type.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{type.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:hidden mb-4">
                <Button 
                  variant="outline" 
                  className="w-full flex justify-between items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <span className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </span>
                  {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
              
              <motion.div 
                className={`w-full lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} lg:block`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 sticky top-24">
                  <h3 className="font-medium text-lg mb-4">Filter By</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Collections</h4>
                    <div className="space-y-2">
                      <button 
                        className={`text-left w-full py-1 px-2 rounded text-sm ${!selectedCategory ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        All Products
                      </button>
                      {productTypes.map((type) => (
                        <button 
                          key={type.name}
                          className={`text-left w-full py-1 px-2 rounded text-sm ${selectedCategory === type.name ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                          onClick={() => setSelectedCategory(type.name)}
                        >
                          {type.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={`${product.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="relative">
                          <Link to={`/products/${product.type.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </Link>
                          <div className="absolute top-2 right-2 flex flex-col gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full"
                              onClick={() => handleAddToWishlist(product)}
                            >
                              <Heart className={`h-5 w-5 ${isInWishlist(product.name) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
                            </Button>
                            <QuickView product={product}>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full"
                              >
                                <Eye className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                              </Button>
                            </QuickView>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center mb-1">
                            <span className="text-xs font-medium text-purple-600 dark:text-purple-400">{product.type}</span>
                          </div>
                          <Link to={`/products/${product.type.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                            <h3 className="font-medium text-gray-900 dark:text-white mb-1 hover:text-purple-700 dark:hover:text-purple-400 transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(24)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900 dark:text-white">
                              ${(Math.random() * 300 + 50).toFixed(2)}
                            </span>
                            <Button 
                              size="sm" 
                              className="h-8"
                              onClick={() => handleAddToCart(product)}
                            >
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
