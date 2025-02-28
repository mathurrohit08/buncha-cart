
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingCart, Truck, Package, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description:
      "High-quality wireless headphones with noise cancellation technology.",
    specs: [
      "40mm drivers",
      "Bluetooth 5.0",
      "Active Noise Cancellation",
      "30-hour battery life",
    ],
    shipping: {
      pickup: true,
      delivery: true,
      estimatedDays: "2-3",
    },
  },
  // Add more products as needed
];

const Products = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${selectedProduct.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{selectedProduct.name}</h1>
                <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                  ${selectedProduct.price}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300">{selectedProduct.description}</p>

              <div>
                <h2 className="text-base md:text-lg font-bold mb-2">Specifications</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {selectedProduct.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-base md:text-lg font-bold mb-2">Shipping Information</h2>
                <div className="space-y-2">
                  {selectedProduct.shipping.pickup && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Package className="h-5 w-5 flex-shrink-0" />
                      <span>Pickup available</span>
                    </div>
                  )}
                  {selectedProduct.shipping.delivery && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Truck className="h-5 w-5 flex-shrink-0" />
                      <span>
                        Delivery in {selectedProduct.shipping.estimatedDays} days
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                
                <Link to="/checkout" className="w-full sm:flex-1">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
