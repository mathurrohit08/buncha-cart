// Utility to generate random products for category pages
export type CategoryProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  longDescription: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  bestSeller?: boolean;
  new?: boolean;
  sale?: boolean;
  discount?: number;
};

// Array of high-quality product descriptions to use randomly
const productDescriptions = [
  "Experience unparalleled quality and performance with this premium product, designed to exceed your expectations and enhance your daily life.",
  "Meticulously crafted with the finest materials, this exceptional item combines elegant design with superior functionality for a truly remarkable experience.",
  "Discover innovation at its best with this cutting-edge product, featuring state-of-the-art technology and intuitive design for maximum satisfaction.",
  "Transform your routine with this high-performance solution, expertly engineered to deliver outstanding results with minimal effort.",
  "Elevate your experience with this sophisticated product, where luxurious quality meets practical convenience in perfect harmony."
];

const longDescriptions = [
  "This premium product represents the pinnacle of innovation and craftsmanship in its category. Every aspect has been carefully considered and perfected to provide an exceptional user experience that stands above the competition. From the thoughtfully designed features to the premium materials used in its construction, no detail has been overlooked. The result is a product that not only meets but exceeds industry standards, setting a new benchmark for quality and performance.",
  "Crafted with meticulous attention to detail, this product embodies the perfect balance of form and function. The sleek, contemporary design conceals a wealth of advanced features that work seamlessly together to enhance your experience. Built to last with high-quality, sustainable materials, this product represents both a wise investment and a responsible choice. Experience the difference that thoughtful design and superior craftsmanship can make in your daily life.",
  "Innovation meets practicality in this extraordinary product that's designed to revolutionize the way you approach everyday tasks. Leveraging cutting-edge technology and human-centered design principles, it offers an intuitive interface and powerful performance capabilities that adapt to your needs. Backed by extensive research and rigorous testing, this product delivers consistent, reliable results that will transform your expectations of what's possible."
];

const productFeatures = {
  "Books & Media": [
    "Premium quality pages that resist yellowing",
    "Eco-friendly recycled paper materials",
    "Font size optimized for comfortable reading",
    "Exclusive bonus digital content included",
    "Collectible edition with unique cover art"
  ],
  "Beauty & Personal Care": [
    "Paraben-free and cruelty-free formula",
    "Dermatologist tested for sensitive skin",
    "Natural ingredients with proven results",
    "Long-lasting performance for all-day wear",
    "Sustainable packaging made from recycled materials"
  ],
  "Kitchen & Dining": [
    "Dishwasher-safe for easy cleaning",
    "Premium food-grade materials",
    "Heat-resistant up to 450°F",
    "Scratch-resistant and durable construction",
    "Elegant design for both casual and formal settings"
  ],
  "Toys & Games": [
    "Educational design promoting cognitive development",
    "Made from non-toxic, child-safe materials",
    "Develops fine motor skills and creativity",
    "Suitable for multiple age groups",
    "Built to withstand years of enthusiastic play"
  ],
  "Health & Wellness": [
    "Scientifically formulated for maximum effectiveness",
    "Natural ingredients with no artificial additives",
    "Clinically tested and verified results",
    "Optimized absorption for better bioavailability",
    "Sustainable and eco-conscious production"
  ],
  "Smart Home": [
    "Voice-activated controls for hands-free operation",
    "Compatible with all major smart home ecosystems",
    "Energy-efficient design reduces power consumption",
    "Regular firmware updates for enhanced features",
    "Military-grade encryption for data security"
  ],
  "Office Supplies": [
    "Ergonomic design for comfortable extended use",
    "Premium materials for professional presentation",
    "Space-saving design for optimal desk organization",
    "Environmentally responsible manufacturing",
    "Designed for years of reliable service"
  ],
  "Automotive": [
    "Precision engineered for optimal performance",
    "Weather-resistant construction for all conditions",
    "Easy installation with included mounting hardware",
    "Rigorously tested for safety and reliability",
    "Energy-efficient operation reduces fuel consumption"
  ],
  "Jewelry": [
    "Ethically sourced materials and gemstones",
    "Handcrafted by skilled artisans",
    "Hypoallergenic metals for sensitive skin",
    "Includes certificate of authenticity",
    "Designed for everyday elegance and durability"
  ],
  "Tools & Home Improvement": [
    "Professional-grade construction for demanding jobs",
    "Ergonomic grip reduces hand fatigue",
    "Precision engineered for consistent results",
    "Versatile design handles multiple applications",
    "Backed by comprehensive manufacturer warranty"
  ],
  "Outdoor Living": [
    "Weather-resistant materials for year-round use",
    "UV-protected to prevent fading and deterioration",
    "Ergonomic design for enhanced comfort",
    "Easy assembly with minimal tools required",
    "Sustainable materials from responsible sources"
  ],
  "Tech Accessories": [
    "Compatible with all major device brands",
    "Fast charging technology saves time",
    "Durable construction for everyday use",
    "Sleek design complements modern devices",
    "Advanced protection against drops and impacts"
  ]
};

const categoryNameToProducts: Record<string, { prefix: string, count: number, image: string }> = {
  "Books & Media": { 
    prefix: "Premium", 
    count: 20,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&h=400" 
  },
  "Beauty & Personal Care": { 
    prefix: "Luxury", 
    count: 20,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&h=400" 
  },
  "Kitchen & Dining": { 
    prefix: "Gourmet", 
    count: 20,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&h=400" 
  },
  "Toys & Games": { 
    prefix: "Interactive", 
    count: 20,
    image: "https://images.unsplash.com/photo-1584851082364-a8e7696deb22?auto=format&fit=crop&w=1200&h=400" 
  },
  "Health & Wellness": { 
    prefix: "Holistic", 
    count: 20,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&h=400" 
  },
  "Smart Home": { 
    prefix: "Intelligent", 
    count: 20,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&h=400" 
  },
  "Office Supplies": { 
    prefix: "Executive", 
    count: 20,
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&h=400" 
  },
  "Automotive": { 
    prefix: "Performance", 
    count: 20,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&h=400" 
  },
  "Jewelry": { 
    prefix: "Elegant", 
    count: 20,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&h=400" 
  },
  "Tools & Home Improvement": { 
    prefix: "Professional", 
    count: 20,
    image: "https://images.unsplash.com/photo-1581244277943-fe4995638beb?auto=format&fit=crop&w=1200&h=400" 
  },
  "Outdoor Living": { 
    prefix: "Durable", 
    count: 20,
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&h=400" 
  },
  "Tech Accessories": { 
    prefix: "Advanced", 
    count: 20,
    image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?auto=format&fit=crop&w=1200&h=400" 
  }
};

// Images for various categories - improved with high-quality, reliable images
const categoryImages: Record<string, string[]> = {
  "Books & Media": [
    "https://images.unsplash.com/photo-1495446815901-a6a2a5aee158?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&h=500"
  ],
  "Beauty & Personal Care": [
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1614159869126-0f06a742eecb?auto=format&fit=crop&w=500&h=500"
  ],
  "Kitchen & Dining": [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=500&h=500"
  ],
  "Toys & Games": [
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1536846511313-4b07b637b5c4?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&h=500"
  ],
  "Health & Wellness": [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&w=500&h=500"
  ],
  "Smart Home": [
    "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1567127631655-5f4a1fd61fa9?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1593124267547-44c42f5c8809?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1558089687-da392079298d?auto=format&fit=crop&w=500&h=500"
  ],
  "Office Supplies": [
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?auto=format&fit=crop&w=500&h=500"
  ],
  "Automotive": [
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1599256871679-6eb02b88e1d7?auto=format&fit=crop&w=500&h=500"
  ],
  "Jewelry": [
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=500&h=500"
  ],
  "Tools & Home Improvement": [
    "https://images.unsplash.com/photo-1581244277943-fe4995638beb?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1502068898238-f4d8eb9136f2?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1572281514407-8e0e19954c3b?auto=format&fit=crop&w=500&h=500"
  ],
  "Outdoor Living": [
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1595329088547-0d7a109b60d0?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?auto=format&fit=crop&w=500&h=500"
  ],
  "Tech Accessories": [
    "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=500&h=500",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&h=500"
  ]
};

// Product subtypes by category - unchanged
const productTypes = {
  "Books & Media": [
    "Book", "Audiobook", "E-Reader", "Magazine", "Vinyl Record", 
    "Digital Media", "Educational Course", "Art Book", "Cookbook", 
    "Journal", "Calendar", "Album", "Movie", "Documentary", "Series", 
    "Music Collection", "Limited Edition", "Signed Copy", "Box Set", "Graphic Novel"
  ],
  "Beauty & Personal Care": [
    "Moisturizer", "Serum", "Cleanser", "Exfoliator", "Mask", 
    "Hair Treatment", "Body Lotion", "Perfume", "Makeup Set", 
    "Brush Collection", "Spa Kit", "Shaving Kit", "Nail Care", "Sunscreen", 
    "Anti-Aging Cream", "Hair Styling Tool", "Bath Set", "Massage Tool", "Skincare Bundle", "Fragrance Set"
  ],
  "Kitchen & Dining": [
    "Cookware Set", "Knife Set", "Dinnerware", "Blender", "Food Processor", 
    "Coffee Maker", "Espresso Machine", "Bakeware", "Utensil Set", 
    "Serving Platter", "Wine Glasses", "Cutting Board", "Mixing Bowls", "Dutch Oven", 
    "Air Fryer", "Slow Cooker", "Tea Kettle", "Juicer", "Storage Container Set", "Kitchen Gadget"
  ],
  "Toys & Games": [
    "Educational Toy", "Board Game", "Building Set", "Action Figure", "Doll", 
    "Remote Control Vehicle", "Puzzle", "Art Set", "Science Kit", 
    "Outdoor Game", "Plush Toy", "Card Game", "Electronic Game", "Musical Toy", 
    "Costume", "Ride-On Toy", "Strategy Game", "Collectible", "STEM Kit", "Activity Set"
  ],
  "Health & Wellness": [
    "Fitness Tracker", "Yoga Mat", "Vitamin Supplement", "Massage Gun", "Essential Oil Set", 
    "Meditation Cushion", "Water Purifier", "Air Purifier", "Resistance Bands", 
    "Fitness Equipment", "Sleep Aid", "Herbal Supplement", "Therapy Light", "Digital Scale", 
    "Acupressure Mat", "Wellness Journal", "Hydration System", "Posture Corrector", "Foot Massager", "Health Monitor"
  ],
  "Smart Home": [
    "Smart Speaker", "Security Camera", "Smart Thermostat", "Smart Light Bulb", "Smart Lock", 
    "Video Doorbell", "Smart Plug", "Robot Vacuum", "Smart Display", 
    "Smart Switch", "Home Assistant Hub", "Smart Appliance", "Security System", "Smart Curtain Controller", 
    "Smart Mirror", "Climate Sensor", "Voice Controller", "Smart Remote", "Smart Garden System", "Energy Monitor"
  ],
  "Office Supplies": [
    "Ergonomic Chair", "Standing Desk", "Desk Organizer", "Premium Pen Set", "Notebook", 
    "Document Scanner", "Label Maker", "Filing System", "Desk Lamp", 
    "Wireless Keyboard", "Ergonomic Mouse", "Planner", "Whiteboard", "Stationery Set", 
    "Paper Shredder", "Desk Accessory", "Briefcase", "Laptop Stand", "Business Card Holder", "Meeting Room Display"
  ],
  "Automotive": [
    "Car Cleaning Kit", "Dashboard Camera", "Tire Pressure Monitor", "Car Seat Cover", "Floor Mats", 
    "Emergency Kit", "Car Charger", "GPS Navigation", "Bluetooth Adapter", 
    "Car Organizer", "Backup Camera", "Jump Starter", "Air Compressor", "Car Cover", 
    "Performance Part", "Audio System", "Cargo Organizer", "Sun Shade", "Engine Treatment", "Phone Mount"
  ],
  "Jewelry": [
    "Diamond Necklace", "Gold Bracelet", "Silver Earrings", "Gemstone Ring", "Watch", 
    "Pendant", "Cufflinks", "Anklet", "Brooch", 
    "Jewelry Box", "Charm", "Wedding Band", "Engagement Ring", "Birthstone Jewelry", 
    "Pearls", "Statement Piece", "Artisan Jewelry", "Men's Collection", "Vintage Design", "Crystal Accessory"
  ],
  "Tools & Home Improvement": [
    "Power Drill", "Tool Set", "Ladder", "Pressure Washer", "Lawn Mower", 
    "Paint Sprayer", "Smart Lock", "Ceiling Fan", "Light Fixture", 
    "Thermometer", "Garden Tools", "Storage Solution", "Work Bench", "Hand Tools", 
    "Safety Equipment", "Measuring Tool", "Electrical Kit", "Plumbing Tools", "Home Security System", "Workshop Organizer"
  ],
  "Outdoor Living": [
    "Patio Furniture", "Grill", "Fire Pit", "Outdoor Lighting", "Hammock", 
    "Garden Planter", "Pool Accessory", "Deck Box", "Outdoor Rug", 
    "Umbrella", "Lawn Game", "Bird Feeder", "Outdoor Speaker", "Cooler", 
    "Camping Equipment", "Outdoor Heater", "Porch Swing", "Garden Statue", "Weather Station", "Outdoor Kitchen"
  ],
  "Tech Accessories": [
    "Wireless Earbuds", "Phone Case", "Power Bank", "Charging Station", "Laptop Sleeve", 
    "Bluetooth Speaker", "Smart Watch Band", "Camera Lens", "Memory Card", 
    "Stylus Pen", "VR Headset", "Gaming Accessory", "Tripod", "Wireless Charger", 
    "Screen Protector", "USB Hub", "Keyboard Cover", "Tablet Stand", "Cable Organizer", "Travel Adapter"
  ]
};

export const getCategoryProducts = (categoryName: string): { products: CategoryProduct[], bannerImage: string } => {
  const category = categoryNameToProducts[categoryName];
  if (!category) {
    return { products: [], bannerImage: "" };
  }
  
  const products: CategoryProduct[] = [];
  const productSubtypes = productTypes[categoryName] || [];
  const categoryFeatures = productFeatures[categoryName] || [];
  const images = categoryImages[categoryName] || [];
  
  for (let i = 1; i <= category.count; i++) {
    const randomSubtype = productSubtypes[i % productSubtypes.length];
    const randomDescription = productDescriptions[i % productDescriptions.length];
    const randomLongDescription = longDescriptions[i % longDescriptions.length];
    const randomImage = images[i % images.length];
    
    // Select 3 random features from the category's feature list
    const randomFeatures = [...categoryFeatures]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    const price = Math.floor(Math.random() * 300) + 29.99;
    const rating = (3 + Math.random() * 2).toFixed(1);
    const reviews = Math.floor(Math.random() * 200) + 5;
    
    // Randomly assign promotional tags
    const isBestSeller = i % 7 === 0;
    const isNew = i % 5 === 0;
    const isSale = i % 6 === 0;
    const discount = isSale ? Math.floor(Math.random() * 30) + 10 : 0;
    
    products.push({
      id: i,
      name: `${category.prefix} ${randomSubtype} ${i}`,
      price: parseFloat(price.toFixed(2)),
      description: randomDescription,
      features: randomFeatures,
      longDescription: randomLongDescription,
      image: randomImage,
      rating: parseFloat(rating),
      reviews: reviews,
      inStock: Math.random() > 0.1, // 90% chance of being in stock
      bestSeller: isBestSeller,
      new: isNew,
      sale: isSale,
      discount: discount
    });
  }
  
  return { 
    products, 
    bannerImage: category.image 
  };
};
