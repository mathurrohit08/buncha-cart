import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingCart, Truck, Package, Heart, Star, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { productTypes } from "@/components/header/ProductMenu";
import { addToCart } from "@/components/header/CartMenu";
import { addToWishlist, isInWishlist } from "@/components/header/WishlistButton";

const Products = () => {
  const { toast } = useToast();
  const { productType, productName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productTypeData = productTypes.find(
    type => type.name.toLowerCase().replace(/\s+/g, "-") === productType
  );

  const product = productName 
    ? productTypeData?.products.find(
        p => p.name.toLowerCase().replace(/\s+/g, "-") === productName
      )
    : null;

  const productsToShow = !productName && productTypeData 
    ? productTypeData.products 
    : [];

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
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
    }
  };

  const handleAddToWishlist = (product: { name: string, image: string }) => {
    addToWishlist({
      name: product.name,
      price: getProductPrice(product.name),
      image: product.image
    });
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  const getProductPrice = (name: string) => {
    const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return (hash % 300 + 99.99).toFixed(2);
  };

  const generateSpecs = (name: string) => {
    if (name.includes("Headphones") || name.includes("Earbuds")) {
      return [
        "Bluetooth 5.0 connectivity",
        "Active Noise Cancellation",
        "Up to 30-hour battery life",
        "Water and sweat resistant (IPX4)",
        "Built-in microphone for calls"
      ];
    } else if (name.includes("Speaker")) {
      return [
        "360° sound technology",
        "Bluetooth and WiFi connectivity",
        "Voice assistant compatible",
        "10-hour battery life",
        "Waterproof design (IPX7)"
      ];
    } else if (name.includes("Watch") || name.includes("Tracker")) {
      return [
        "Heart rate and sleep monitoring",
        "Water resistant up to 50m",
        "GPS tracking",
        "Smartphone notifications",
        "Up to 7-day battery life"
      ];
    } else if (name.includes("Laptop") || name.includes("Tablet")) {
      return [
        "Intel Core i7 / Apple M1 processor",
        "16GB RAM, 512GB SSD",
        "13.3-inch Retina display",
        "10-hour battery life",
        "Backlit keyboard"
      ];
    } else {
      return [
        "Premium design and build quality",
        "1-year manufacturer warranty",
        "Energy efficient operation",
        "Intuitive user interface",
        "Multiple color options available"
      ];
    }
  };

  const relatedProducts = product 
    ? productTypeData?.products.filter(p => p.name !== product.name).slice(0, 4) 
    : [];

  if (!productTypeData) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Category Not Found</h1>
            <p className="mb-8">Sorry, we couldn't find the product category you're looking for.</p>
            <Link to="/all-products">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!productName) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-[1600px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <Link to="/all-products" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to all products
                </Link>
                <h1 className="text-3xl font-bold">{productTypeData.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Browse our selection of {productTypeData.name.toLowerCase()}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsToShow.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <div className="relative">
                        <Link to={`/products/${productType}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
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
                        <Link to={`/products/${productType}/${product.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
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
                            ${getProductPrice(product.name)}
                          </span>
                          <Button 
                            size="sm" 
                            className="h-8"
                            onClick={() => {
                              addToCart({
                                name: product.name,
                                price: parseFloat(getProductPrice(product.name)),
                                image: product.image,
                                quantity: 1
                              });
                              
                              toast({
                                title: "Added to cart",
                                description: `${product.name} has been added to your cart.`,
                              });
                            }}
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
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16 max-w-[1600px] mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
            <Link to={`/products/${productType}`}>
              <Button>Browse {productTypeData.name}</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const productPrice = getProductPrice(product.name);
  const specs = generateSpecs(product.name);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="mb-8">
            <Link to={`/products/${productType}`} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to {productTypeData.name}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <div 
                  className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === product.image ? 'border-purple-500' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                {[...Array(3)].map((_, index) => (
                  <div 
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === `${product.image}?v=${index+1}` ? 'border-purple-500' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(`${product.image}?v=${index+1}`)}
                  >
                    <img src={product.image} alt={`${product.name} view ${index+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{productTypeData.name}</span>
                </div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center my-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">4.0 (24 reviews)</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                  ${productPrice}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                The {product.name} offers exceptional quality and performance, with cutting-edge features that enhance your daily experience. Designed with both functionality and style in mind, this product is the perfect addition to your tech collection.
              </p>

              <div>
                <h2 className="text-lg font-bold mb-2">Specifications</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Package className="h-5 w-5 flex-shrink-0" />
                    <span>Pickup available at select locations</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Truck className="h-5 w-5 flex-shrink-0" />
                    <span>
                      Free delivery on orders over $50
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
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

                <div className="flex flex-col sm:flex-row gap-3">
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
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <Heart className={`mr-2 h-5 w-5 ${isInWishlist(product.name) ? 'fill-red-500 text-red-500' : ''}`} />
                    Wishlist
                  </Button>
                  
                  <Link to="/checkout" className="w-full sm:flex-1">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        addToCart({
                          name: product.name,
                          price: parseFloat(productPrice),
                          image: product.image,
                          quantity: quantity
                        });
                      }}
                    >
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Free 30-day returns and a 1-year limited warranty included with this purchase.
                </p>
              </div>
            </motion.div>
          </div>

          {relatedProducts && relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <div className="relative">
                        <Link to={`/products/${productType}/${relatedProduct.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full"
                          onClick={() => handleAddToWishlist(relatedProduct)}
                        >
                          <Heart className={`h-5 w-5 ${isInWishlist(relatedProduct.name) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
                        </Button>
                      </div>
                      <div className="p-4">
                        <Link to={`/products/${productType}/${relatedProduct.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1 hover:text-purple-700 dark:hover:text-purple-400 transition-colors">
                            {relatedProduct.name}
                          </h3>
                        </Link>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            ${getProductPrice(relatedProduct.name)}
                          </span>
                          <Button 
                            size="sm"
                            onClick={() => {
                              addToCart({
                                name: relatedProduct.name,
                                price: parseFloat(getProductPrice(relatedProduct.name)),
                                image: relatedProduct.image,
                                quantity: 1
                              });
                              
                              toast({
                                title: "Added to cart",
                                description: `${relatedProduct.name} has been added to your cart.`,
                              });
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
