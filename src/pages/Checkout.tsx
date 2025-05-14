
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { CartItem, getCartCount, getCartTotal } from "@/components/header/CartMenu";
import { 
  calculateShippingCost, 
  estimateDistanceByZipCode, 
  STORE_ZIP_CODE, 
  ShippingTier, 
  shippingTiers, 
  countries, 
  getLocationFromZipCode 
} from "@/utils/shippingCalculator";

// Import the refactored components
import { ShippingAddressSection, Address } from "@/components/checkout/ShippingAddressSection";
import { PaymentSection } from "@/components/checkout/PaymentSection";
import { RelatedProducts } from "@/components/checkout/RelatedProducts";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { EmptyCart } from "@/components/checkout/EmptyCart";
import { ApplyCouponSection, Coupon } from "@/components/checkout/ApplyCouponSection";
import { OrderConfirmation } from "@/components/checkout/OrderConfirmation";

// Mock saved addresses
const savedAddresses: Address[] = [
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

// Suggested related products
const relatedProducts = [
  {
    id: 101,
    name: "Wireless Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1608050072262-7c4b66ed7ff8?auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 102,
    name: "Headphone Stand",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1612861437562-81302a47eff2?auto=format&fit=crop&w=500&h=350"
  },
  {
    id: 103,
    name: "Cable Organizer",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&h=350"
  }
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
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
  const [shippingTier, setShippingTier] = useState<ShippingTier | null>(null);
  const [selectedShippingTier, setSelectedShippingTier] = useState<ShippingTier | null>(null);
  const [showShippingOptions, setShowShippingOptions] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("United States");
  const [availableStates, setAvailableStates] = useState<{name: string, code: string}[]>([]);
  const [availableCities, setAvailableCities] = useState<{name: string, zipCodes: string[]}[]>([]);
  
  // New states for coupon functionality
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  
  // New state for order confirmation
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    total: number;
    date: Date;
    items: CartItem[];
    paymentMethod: string;
  } | null>(null);
  
  useEffect(() => {
    // Get cart items from localStorage on component mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    
    // Find selected address
    const selectedAddress = savedAddresses.find(addr => addr.id === selectedAddressId);
    if (selectedAddress) {
      // Calculate shipping tier based on distance
      const distance = estimateDistanceByZipCode(STORE_ZIP_CODE, selectedAddress.zipCode);
      const tier = calculateShippingCost(distance);
      setShippingTier(tier);
      setSelectedShippingTier(tier);
      setShowShippingOptions(true);
    }

    // Set available states based on default country
    const countryData = countries.find(c => c.name === selectedCountry);
    if (countryData) {
      setAvailableStates(countryData.states.map(s => ({name: s.name, code: s.code})));
    }
  }, [selectedAddressId, selectedCountry]);

  const handleAddToCart = (product: { id: number, name: string, price: number, image: string }) => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    };
    
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const shipping = selectedShippingTier?.cost || 0;
  
  // Apply coupon discount if available
  const discountAmount = appliedCoupon 
    ? (subtotal * (appliedCoupon.discount / 100)) 
    : 0;
  
  const total = subtotal + tax + shipping - discountAmount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // If zipCode is changed, recalculate shipping costs
    if (name === 'zipCode') {
      const distance = estimateDistanceByZipCode(STORE_ZIP_CODE, value);
      const tier = calculateShippingCost(distance);
      setShippingTier(tier);
      setSelectedShippingTier(tier);
      setShowShippingOptions(true);
      
      // Try to auto-detect location based on zip code
      const locationInfo = getLocationFromZipCode(value);
      if (locationInfo) {
        setFormData(prev => ({
          ...prev,
          city: locationInfo.city,
          state: locationInfo.state,
          country: locationInfo.country
        }));
      }
    }
  };

  const handleCountryChange = (value: string) => {
    setFormData(prev => ({ ...prev, country: value }));
    setSelectedCountry(value);
    
    // Reset state and city when country changes
    setFormData(prev => ({ ...prev, state: '', city: '', zipCode: '' }));
    
    // Update available states based on selected country
    const countryData = countries.find(c => c.name === value);
    if (countryData) {
      setAvailableStates(countryData.states.map(s => ({name: s.name, code: s.code})));
      setAvailableCities([]);
    }
    
    // Hide shipping options until zip code is entered
    setShowShippingOptions(false);
    setShippingTier(null);
    setSelectedShippingTier(null);
  };

  const handleStateChange = (value: string) => {
    setFormData(prev => ({ ...prev, state: value }));
    
    // Reset city and zip when state changes
    setFormData(prev => ({ ...prev, city: '', zipCode: '' }));
    
    // Update available cities based on selected state
    const countryData = countries.find(c => c.name === selectedCountry);
    if (countryData) {
      const stateData = countryData.states.find(s => s.name === value);
      if (stateData) {
        setAvailableCities(stateData.cities);
      }
    }
    
    // Hide shipping options until zip code is entered
    setShowShippingOptions(false);
    setShippingTier(null);
    setSelectedShippingTier(null);
  };

  const handleCityChange = (value: string) => {
    setFormData(prev => ({ ...prev, city: value }));
    
    // Reset zip when city changes
    setFormData(prev => ({ ...prev, zipCode: '' }));
    
    // Hide shipping options until zip code is entered
    setShowShippingOptions(false);
    setShippingTier(null);
    setSelectedShippingTier(null);
  };

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cartItems.map(item => 
      item.id === id 
        ? { 
            ...item, 
            quantity: Math.max(1, item.quantity + change) // Ensure quantity doesn't go below 1
          } 
        : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
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
      
      // Generate a random order ID
      const orderId = `ORD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      // Set order details
      setOrderDetails({
        orderId,
        total,
        date: new Date(),
        items: [...cartItems],
        paymentMethod: paymentMethod === 'credit' ? 'Credit Card' : 'PayPal'
      });
      
      // Show success message and order confirmation
      toast({
        title: "Payment successful!",
        description: "Your order has been processed and will be shipped soon.",
        className: "bg-green-600 text-white",
      });
      
      // Set order complete to show confirmation screen
      setOrderComplete(true);
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
      
      // Recalculate shipping based on the selected address
      const distance = estimateDistanceByZipCode(STORE_ZIP_CODE, selected.zipCode);
      const tier = calculateShippingCost(distance);
      setShippingTier(tier);
      setSelectedShippingTier(tier);
      setShowShippingOptions(true);
      
      // Show the map after selecting an address
      setShowMap(true);
    }
  };

  const resetNewAddressForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
    });
    setShowShippingOptions(false);
    setShippingTier(null);
    setSelectedShippingTier(null);
    setShowMap(false);
    
    // Set available states for default country
    const countryData = countries.find(c => c.name === "United States");
    if (countryData) {
      setAvailableStates(countryData.states.map(s => ({name: s.name, code: s.code})));
      setAvailableCities([]);
    }
  };
  
  const handleContinueShopping = () => {
    // Reset order flow
    setOrderComplete(false);
    setOrderDetails(null);
    
    // Navigate back to products
    window.location.href = "/products";
  };

  // Message for empty cart
  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16">
          <EmptyCart />
        </main>
        <Footer />
      </div>
    );
  }

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
            {orderComplete && orderDetails ? (
              <OrderConfirmation 
                orderDetails={orderDetails}
                coupon={appliedCoupon}
                onContinueShopping={handleContinueShopping}
              />
            ) : (
              <>
                <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left column - Form */}
                  <div className="lg:col-span-2">
                    {/* Apply Coupon Section */}
                    <ApplyCouponSection 
                      appliedCoupon={appliedCoupon}
                      setAppliedCoupon={setAppliedCoupon}
                    />
                    
                    {/* Shipping Address Section */}
                    <ShippingAddressSection 
                      addressMode={addressMode}
                      setAddressMode={setAddressMode}
                      savedAddresses={savedAddresses}
                      selectedAddressId={selectedAddressId}
                      setSelectedAddressId={setSelectedAddressId}
                      formData={formData}
                      setFormData={setFormData}
                      showMap={showMap}
                      setShowMap={setShowMap}
                      availableStates={availableStates}
                      availableCities={availableCities}
                      shippingTier={shippingTier}
                      setShippingTier={setShippingTier}
                      selectedShippingTier={selectedShippingTier}
                      setSelectedShippingTier={setSelectedShippingTier}
                      showShippingOptions={showShippingOptions}
                      setShowShippingOptions={setShowShippingOptions}
                      handleInputChange={handleInputChange}
                      handleCountryChange={handleCountryChange}
                      handleStateChange={handleStateChange}
                      handleCityChange={handleCityChange}
                      resetNewAddressForm={resetNewAddressForm}
                      selectAddress={selectAddress}
                    />

                    {/* Payment Section */}
                    <PaymentSection 
                      paymentMethod={paymentMethod}
                      setPaymentMethod={setPaymentMethod}
                      cardDetails={cardDetails}
                      handleCardDetailsChange={handleCardDetailsChange}
                      isProcessing={isProcessing}
                      handleSubmit={handleSubmit}
                      cartItems={cartItems}
                      selectedShippingTier={selectedShippingTier}
                    />
                    
                    {/* Related Products Section */}
                    <RelatedProducts 
                      products={relatedProducts} 
                      handleAddToCart={handleAddToCart} 
                    />
                  </div>

                  {/* Right column - Order summary */}
                  <div>
                    <OrderSummary 
                      cartItems={cartItems}
                      updateQuantity={updateQuantity}
                      removeItem={removeItem}
                      subtotal={subtotal}
                      tax={tax}
                      shipping={shipping}
                      total={total}
                      selectedShippingTier={selectedShippingTier}
                      appliedCoupon={appliedCoupon}
                      discountAmount={discountAmount}
                    />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
