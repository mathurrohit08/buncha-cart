
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Truck, CreditCard, Info, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 199.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

// Shipping options
const shippingOptions = [
  { id: "standard", name: "Standard Shipping", price: 5.99, days: "5-7" },
  { id: "express", name: "Express Shipping", price: 12.99, days: "2-3" },
  { id: "nextday", name: "Next Day Delivery", price: 19.99, days: "1" },
];

const Checkout = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });
  const [shipping, setShipping] = useState(shippingOptions[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax + shipping.price;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingChange = (option: typeof shippingOptions[0]) => {
    setShipping(option);
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { 
              ...item, 
              quantity: Math.max(1, item.quantity + change) // Ensure quantity doesn't go below 1
            } 
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
      variant: "default",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment successful!",
        description: "Your order has been processed and will be shipped soon.",
        className: "bg-green-600 text-white",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column - Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Shipping Information</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 dark:text-white">Shipping Method</h3>
                    <div className="space-y-3 mb-6">
                      {shippingOptions.map((option) => (
                        <div
                          key={option.id}
                          className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
                            shipping.id === option.id
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => handleShippingChange(option)}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                                shipping.id === option.id
                                  ? "border-blue-500 dark:border-blue-400"
                                  : "border-gray-400 dark:border-gray-600"
                              }`}
                            >
                              {shipping.id === option.id && (
                                <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium dark:text-white">{option.name}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {option.days} business days
                              </p>
                            </div>
                          </div>
                          <p className="font-medium dark:text-white">${option.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-3 dark:text-white">Payment Information</h3>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md mb-6 flex items-start gap-2">
                      <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        This is a demo checkout. No actual payment will be processed.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Complete Purchase
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Right column - Order summary */}
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium dark:text-white">{item.name}</h3>
                          <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span>{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 ml-auto text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </p>
                          <p className="font-medium dark:text-white mt-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                      <span className="font-medium dark:text-white">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                      <span className="font-medium dark:text-white">
                        ${shipping.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tax</span>
                      <span className="font-medium dark:text-white">
                        ${tax.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between text-lg font-bold">
                    <span className="dark:text-white">Total</span>
                    <span className="dark:text-white">${total.toFixed(2)}</span>
                  </div>

                  <div className="mt-6 flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Truck className="h-4 w-4 mr-2" />
                    <span>
                      Estimated delivery: {shipping.days} business days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
