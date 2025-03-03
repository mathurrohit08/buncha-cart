
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Truck, CreditCard, Info, Plus, Minus, Trash2, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LocationMap } from "@/components/checkout/LocationMap";

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

// Mock saved addresses
const savedAddresses = [
  {
    id: 1,
    name: "Home",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94103",
    country: "United States",
    default: true
  },
  {
    id: 2,
    name: "Work",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "456 Market St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "United States",
    default: false
  }
];

// Payment method options
const paymentMethods = [
  { id: "credit", name: "Credit Card", icon: "💳" },
  { id: "debit", name: "Debit Card", icon: "💳" },
  { id: "wire", name: "Wire Transfer", icon: "🏦" },
  { id: "googlepay", name: "Google Pay", icon: "🔵" },
  { id: "amazonpay", name: "Amazon Pay", icon: "📦" },
  { id: "netbanking", name: "Net Banking", icon: "🖥️" },
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
  const [addressMode, setAddressMode] = useState("saved"); // "saved" or "new"
  const [selectedAddressId, setSelectedAddressId] = useState(savedAddresses.find(addr => addr.default)?.id || 1);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });
  const [showMap, setShowMap] = useState(false);

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

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
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

  const selectAddress = (id: number) => {
    setSelectedAddressId(id);
    // You could also pre-fill the form with the selected address
    const selected = savedAddresses.find(addr => addr.id === id);
    if (selected) {
      setFormData({
        firstName: selected.firstName,
        lastName: selected.lastName,
        email: selected.email,
        address: selected.address,
        city: selected.city,
        state: selected.state,
        zipCode: selected.zipCode,
        country: selected.country,
      });
      
      // Show the map after selecting an address
      setShowMap(true);
    }
  };

  // Find the selected address for the map
  const selectedAddress = savedAddresses.find(addr => addr.id === selectedAddressId);

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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Shipping Information</h2>
                  
                  {/* Address Tabs */}
                  <Tabs 
                    value={addressMode} 
                    onValueChange={setAddressMode}
                    className="mb-6"
                  >
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="saved">Saved Addresses</TabsTrigger>
                      <TabsTrigger value="new">New Address</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="saved">
                      <div className="space-y-4">
                        {savedAddresses.map((address) => (
                          <div 
                            key={address.id}
                            className={`p-4 border rounded-md cursor-pointer transition-colors ${
                              selectedAddressId === address.id 
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                                : "border-gray-200 dark:border-gray-700"
                            }`}
                            onClick={() => selectAddress(address.id)}
                          >
                            <div className="flex justify-between">
                              <div className="flex gap-2 items-center">
                                <RadioGroup value={String(selectedAddressId)} onValueChange={(value) => selectAddress(Number(value))}>
                                  <RadioGroupItem 
                                    id={`address-${address.id}`} 
                                    value={String(address.id)}
                                    className="data-[state=checked]:border-primary"
                                  />
                                </RadioGroup>
                                <h3 className="font-medium dark:text-white">
                                  {address.name}
                                  {address.default && (
                                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded">
                                      Default
                                    </span>
                                  )}
                                </h3>
                              </div>
                              {selectedAddressId === address.id && (
                                <Check className="h-5 w-5 text-blue-500" />
                              )}
                            </div>
                            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                              <p>{address.firstName} {address.lastName}</p>
                              <p>{address.address}</p>
                              <p>{address.city}, {address.state} {address.zipCode}</p>
                              <p>{address.country}</p>
                            </div>
                          </div>
                        ))}
                        
                        <Button 
                          variant="outline" 
                          className="w-full mt-2 border-dashed"
                          onClick={() => setAddressMode("new")}
                        >
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Add New Address
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="new">
                      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      </form>
                    </TabsContent>
                  </Tabs>

                  {/* Location Map */}
                  {showMap && selectedAddress && (
                    <div className="mt-4 mb-6">
                      <h3 className="text-lg font-semibold mb-3 dark:text-white">Delivery Location</h3>
                      <div className="h-60 rounded-lg overflow-hidden">
                        <LocationMap 
                          address={`${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state} ${selectedAddress.zipCode}`} 
                          zipCode={selectedAddress.zipCode}
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-3 dark:text-white">Shipping Method</h3>
                  <div className="space-y-3 mb-6">
                    <RadioGroup value={shipping.id} onValueChange={(value) => {
                      const option = shippingOptions.find(opt => opt.id === value);
                      if (option) handleShippingChange(option);
                    }}>
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
                            <RadioGroupItem value={option.id} id={`shipping-${option.id}`} className="mr-3" />
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
                    </RadioGroup>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Payment Information</h2>
                  
                  <div className="mb-6">
                    <Label className="text-base mb-3 block">Select Payment Method</Label>
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-2 md:grid-cols-3 gap-3"
                    >
                      {paymentMethods.map((method) => (
                        <div 
                          key={method.id}
                          className={`flex items-center p-3 border rounded-md cursor-pointer ${
                            paymentMethod === method.id 
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <RadioGroupItem 
                            id={`payment-${method.id}`} 
                            value={method.id} 
                            className="mr-2"
                          />
                          <Label htmlFor={`payment-${method.id}`} className="flex items-center cursor-pointer">
                            <span className="text-xl mr-2">{method.icon}</span>
                            <span className="font-medium text-sm dark:text-white">{method.name}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Credit/Debit Card Form */}
                  {(paymentMethod === "credit" || paymentMethod === "debit") && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="XXXX XXXX XXXX XXXX"
                          value={cardDetails.cardNumber}
                          onChange={handleCardDetailsChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          placeholder="John Doe"
                          value={cardDetails.cardName}
                          onChange={handleCardDetailsChange}
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={cardDetails.expiryDate}
                            onChange={handleCardDetailsChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            type="password"
                            maxLength={4}
                            value={cardDetails.cvv}
                            onChange={handleCardDetailsChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Placeholder for other payment methods */}
                  {paymentMethod === "wire" && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                      <h4 className="font-medium mb-2 dark:text-white">Wire Transfer Instructions</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Please transfer the amount to the following bank account:
                      </p>
                      <div className="mt-2 space-y-1 text-sm">
                        <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Bank: </span>Global Bank</p>
                        <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Account Name: </span>StoreX Inc.</p>
                        <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Account Number: </span>XXXX-XXXX-XXXX-XXXX</p>
                        <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Routing Number: </span>XXXXXXXX</p>
                      </div>
                    </div>
                  )}
                  
                  {(paymentMethod === "googlepay" || paymentMethod === "amazonpay") && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                      <p className="text-center dark:text-white">
                        You'll be redirected to {paymentMethod === "googlepay" ? "Google Pay" : "Amazon Pay"} to complete your payment after you place your order.
                      </p>
                    </div>
                  )}

                  {paymentMethod === "netbanking" && (
                    <div className="p-4 space-y-4">
                      <Label htmlFor="bankSelect">Select Your Bank</Label>
                      <select 
                        id="bankSelect" 
                        className="w-full h-10 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-base"
                      >
                        <option value="">Select a bank</option>
                        <option value="bank1">Global Bank</option>
                        <option value="bank2">City Bank</option>
                        <option value="bank3">National Bank</option>
                        <option value="bank4">State Bank</option>
                      </select>
                    </div>
                  )}

                  <div className="p-4 mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-md mb-6 flex items-start gap-2">
                    <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      This is a demo checkout. No actual payment will be processed.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isProcessing}
                    onClick={handleSubmit}
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
