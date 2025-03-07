
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Truck, CreditCard, Info, Plus, Minus, Trash2, PlusCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LocationMap } from "@/components/checkout/LocationMap";
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
import { Link } from "react-router-dom";

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

// Suggested related products
const relatedProducts = [
  {
    id: 101,
    name: "Wireless Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1608050072262-7c4b66ed7ff8"
  },
  {
    id: 102,
    name: "Headphone Stand",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1612861437562-81302a47eff2"
  },
  {
    id: 103,
    name: "Cable Organizer",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
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
  const total = subtotal + tax + shipping;

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

  // Find the selected address for the map
  const selectedAddress = savedAddresses.find(addr => addr.id === selectedAddressId);

  // Message for empty cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h1 className="text-2xl font-bold mb-2 dark:text-white">Your cart is empty</h1>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/all-products">
                <Button className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
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
            <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column - Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Shipping Information</h2>
                  
                  {/* Address Tabs */}
                  <Tabs 
                    value={addressMode} 
                    onValueChange={(value) => {
                      setAddressMode(value);
                      if (value === "new") {
                        resetNewAddressForm();
                      }
                    }}
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
                          onClick={() => {
                            setAddressMode("new");
                            resetNewAddressForm();
                          }}
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
                          <Label htmlFor="country">Country</Label>
                          <Select 
                            value={formData.country} 
                            onValueChange={handleCountryChange}
                          >
                            <SelectTrigger className="w-full mt-1">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {countries.map(country => (
                                  <SelectItem key={country.code} value={country.name}>
                                    {country.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="state">State/Province</Label>
                          <Select 
                            value={formData.state} 
                            onValueChange={handleStateChange}
                            disabled={availableStates.length === 0}
                          >
                            <SelectTrigger className="w-full mt-1">
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {availableStates.map(state => (
                                  <SelectItem key={state.code} value={state.name}>
                                    {state.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Select 
                            value={formData.city} 
                            onValueChange={handleCityChange}
                            disabled={availableCities.length === 0}
                          >
                            <SelectTrigger className="w-full mt-1">
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {availableCities.map(city => (
                                  <SelectItem key={city.name} value={city.name}>
                                    {city.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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

                  {/* Show shipping options only after a valid zip code is provided */}
                  {showShippingOptions && (
                    <>
                      <h3 className="text-lg font-semibold mb-3 dark:text-white">Shipping Method</h3>
                      
                      {shippingTier && (
                        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
                          <p className="flex items-center text-blue-700 dark:text-blue-300">
                            <Truck className="h-5 w-5 mr-2" />
                            Based on your location, we recommend: <span className="font-medium ml-1">{shippingTier.description}</span>
                          </p>
                        </div>
                      )}
                      
                      <RadioGroup 
                        value={selectedShippingTier?.description || ""} 
                        onValueChange={(value) => {
                          const tier = shippingTiers.find(t => t.description === value);
                          if (tier) setSelectedShippingTier(tier);
                        }}
                        className="space-y-3 mb-6"
                      >
                        {shippingTiers.map((tier) => (
                          <div
                            key={tier.description}
                            className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
                              selectedShippingTier?.description === tier.description
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400"
                                : "border-gray-200 dark:border-gray-700"
                            }`}
                            onClick={() => setSelectedShippingTier(tier)}
                          >
                            <div className="flex items-center">
                              <RadioGroupItem 
                                value={tier.description} 
                                id={`shipping-${tier.minMiles}-${tier.maxMiles}`} 
                                className="mr-3"
                              />
                              <div>
                                <p className="font-medium dark:text-white">{tier.description}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {tier.minMiles}-{tier.maxMiles === Infinity ? '∞' : tier.maxMiles} miles away
                                </p>
                              </div>
                            </div>
                            <p className="font-medium dark:text-white">
                              {tier.cost === 0 ? 'FREE' : `$${tier.cost.toFixed(2)}`}
                            </p>
                          </div>
                        ))}
                      </RadioGroup>
                    </>
                  )}
                </div>

                {/* Payment Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Payment Information</h2>
                  
                  <div className="mb-6">
                    <Label className="text-base mb-3 block">Select Payment Method</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <RadioGroup 
                        value={paymentMethod} 
                        onValueChange={setPaymentMethod}
                        className="w-full grid grid-cols-2 md:grid-cols-3 gap-3"
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
                            <Label htmlFor={`payment-${method.id}`} className="flex items-center cursor-pointer w-full">
                              <span className="text-xl mr-2">{method.icon}</span>
                              <span className="font-medium text-sm dark:text-white">{method.name}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
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
                        <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Account Name: </span>DesignStore Inc.</p>
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
                      <Select>
                        <SelectTrigger id="bankSelect" className="w-full">
                          <SelectValue placeholder="Select a bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank1">Global Bank</SelectItem>
                          <SelectItem value="bank2">City Bank</SelectItem>
                          <SelectItem value="bank3">National Bank</SelectItem>
                          <SelectItem value="bank4">State Bank</SelectItem>
                        </SelectContent>
                      </Select>
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
                    disabled={isProcessing || cartItems.length === 0 || !selectedShippingTier}
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
                
                {/* Related Products Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">You May Also Like</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedProducts.map((product) => (
                      <div key={product.id} className="border rounded-md p-3 flex flex-col items-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-24 h-24 object-cover rounded mb-2"
                        />
                        <h3 className="font-medium text-sm mb-1 dark:text-white">{product.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">${product.price.toFixed(2)}</p>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column - Order summary */}
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Order Summary</h2>
                  
                  {cartItems.length > 0 ? (
                    <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto pr-2 scrollbar-none">
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
                  ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 py-6">
                      Your cart is empty
                    </p>
                  )}

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
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
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

                  {selectedShippingTier && (
                    <div className="mt-6 flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Truck className="h-4 w-4 mr-2" />
                      <span>
                        {selectedShippingTier.description}
                      </span>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <Link to="/all-products" className="text-blue-600 hover:underline text-sm flex items-center">
                      <ArrowRight className="h-4 w-4 mr-1" /> Continue Shopping
                    </Link>
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
