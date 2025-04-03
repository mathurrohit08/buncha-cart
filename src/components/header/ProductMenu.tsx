
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const productTypes = [
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    products: [
      { name: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb" },
      { name: "Smart Watch", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12" },
      { name: "Fitness Tracker", image: "https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0" },
      { name: "Portable Speaker", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1" },
      { name: "Tablet Pro", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0" },
      { name: "Smart Home Assistant", image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd" },
      { name: "Wireless Charger Pad", image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0" },
      { name: "Gaming Controller", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575" },
      { name: "Mechanical Keyboard", image: "https://images.unsplash.com/photo-1595225476071-63e937d3bac3" },
      { name: "VR Headset", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" },
    ]
  },
  {
    name: "Best Sellers",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    products: [
      { name: "Noise-Cancelling Headphones", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90" },
      { name: "Smartphone X", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
      { name: "Laptop Pro", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
      { name: "Gaming Console", image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42" },
      { name: "Digital Camera", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd" },
      { name: "4K Smart TV", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6" },
      { name: "Premium Coffee Maker", image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e" },
      { name: "Robot Vacuum", image: "https://images.unsplash.com/photo-1588154635325-5f0fa68f4578" },
      { name: "Smart Refrigerator", image: "https://images.unsplash.com/photo-1584269600511-34dcfc1b3c3a" },
      { name: "Air Purifier", image: "https://images.unsplash.com/photo-1551761429-8232f9f5955c" },
    ]
  },
  {
    name: "Deals",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    products: [
      { name: "Smart Home Hub", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8" },
      { name: "Robot Vacuum", image: "https://images.unsplash.com/photo-1582816063950-de40de40a860" },
      { name: "4K Monitor", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf" },
      { name: "Wireless Charger", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07" },
      { name: "Mesh WiFi System", image: "https://images.unsplash.com/photo-1602526429747-ac387a91d43b" },
      { name: "Bluetooth Soundbar", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d" },
      { name: "Electric Toothbrush", image: "https://images.unsplash.com/photo-1559591937-eebd4f6e7c8f" },
      { name: "Smart Doorbell", image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7" },
      { name: "Portable Power Bank", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5" },
      { name: "Fitness Subscription", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a" },
    ]
  },
  {
    name: "Home Improvement",
    image: "https://images.unsplash.com/photo-1556909114-44e3e9399a2c",
    products: [
      { name: "Kitchen Cabinets", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f" },
      { name: "Ceramic Tiles", image: "https://images.unsplash.com/photo-1592928038511-20202bdad1fd" },
      { name: "Wooden Flooring", image: "https://images.unsplash.com/photo-1573319434585-13fee50a2e52" },
      { name: "Bathroom Vanity", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a" },
      { name: "Kitchen Sinks", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1" },
      { name: "Smart Thermostat", image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7" },
      { name: "LED Lighting System", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89" },
      { name: "Modern Door Handles", image: "https://images.unsplash.com/photo-1613201171255-35ddc8958a66" },
      { name: "Patio Furniture Set", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
      { name: "Paint Collection", image: "https://images.unsplash.com/photo-1580745294621-58c9c5d2a4e5" },
    ]
  },
  {
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7",
    products: [
      { name: "Smart Light Bulbs", image: "https://images.unsplash.com/photo-1636818509290-3ad8bf7b4432" },
      { name: "Security Camera System", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509" },
      { name: "Smart Lock", image: "https://images.unsplash.com/photo-1563013544-08c7b84624a2" },
      { name: "Voice Assistant", image: "https://images.unsplash.com/photo-1543512214-318c7553f230" },
      { name: "Smart Plugs", image: "https://images.unsplash.com/photo-1544695975-c9cd5f54f1c1" },
      { name: "Smart Smoke Detector", image: "https://images.unsplash.com/photo-1611546191811-bec46600d2cf" },
      { name: "Water Leak Detector", image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0" },
      { name: "Smart Curtains", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f" },
    ]
  },
];

export const ProductMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState(productTypes[0].name);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Delay closing to prevent accidental close
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Products
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-[calc(100vw-2rem)] sm:w-[800px] border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-md z-50 mt-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 h-[450px] max-h-[70vh]">
              {/* Product Types Column */}
              <div className="sm:col-span-1 bg-gray-50 dark:bg-gray-900 p-4 overflow-y-auto h-full">
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white">Browse Products</h3>
                <div className="space-y-1">
                  <Link
                    to="/all-products"
                    className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors mb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium text-sm text-purple-800 dark:text-purple-300">All Products</span>
                    <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </Link>
                  
                  {productTypes.map((type) => (
                    <motion.div
                      key={type.name}
                      className={`cursor-pointer rounded-lg ${
                        activeType === type.name 
                          ? "bg-white dark:bg-gray-800" 
                          : "hover:bg-white/80 dark:hover:bg-gray-800/80"
                      }`}
                      onMouseEnter={() => setActiveType(type.name)}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between p-2 rounded-lg transition-colors">
                        <span className={`text-sm ${
                          activeType === type.name 
                            ? "text-purple-600 dark:text-purple-400 font-medium" 
                            : "dark:text-gray-300"
                        }`}>{type.name}</span>
                        <ChevronRight className={`h-4 w-4 ${
                          activeType === type.name 
                            ? "text-purple-600 dark:text-purple-400" 
                            : "opacity-0 group-hover:opacity-100 transition-opacity"
                        }`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="sm:col-span-3 p-4 h-full overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeType}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-lg dark:text-white">{activeType}</h3>
                      <Link 
                        to={`/products/${activeType.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        View All
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {productTypes
                        .find((type) => type.name === activeType)
                        ?.products.slice(0, 6).map((product, index) => (
                        <Link
                          key={index}
                          to={`/products/${activeType.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="group"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150";
                              }}
                            />
                          </div>
                          <h4 className="mt-2 text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{product.name}</h4>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium dark:text-white">Featured Collection</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Explore our selection of top {activeType} products</p>
                      </div>
                      <Link 
                        to={`/products/${activeType.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
