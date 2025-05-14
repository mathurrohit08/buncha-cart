
import { Product } from "@/components/categories/CategoryPageTemplate";

// Categories with their specific attributes
const categorySpecificDetails: Record<string, {
  images: string[];
  prefixes: string[];
  descriptions: string[];
  features: string[];
  specs: Record<string, string[]>;
}> = {
  "Electronics": {
    images: [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
    ],
    prefixes: ["Smart", "Ultra", "Pro", "Elite", "Next-Gen", "Advanced"],
    descriptions: [
      "Featuring cutting-edge technology that delivers exceptional performance",
      "Designed for tech enthusiasts who demand the very best",
      "The perfect blend of style, power, and innovation",
      "Experience technology like never before with this premium device"
    ],
    features: [
      "AI-powered processing", "4K Ultra HD display", "Fast charging technology",
      "Water and dust resistant", "Wireless connectivity", "Voice control"
    ],
    specs: {
      "Display": ["OLED", "LCD", "QLED", "Mini-LED", "Retina"],
      "Processor": ["Octa-core", "Hexa-core", "Quad-core", "Dual-core"],
      "Battery": ["5000mAh", "4500mAh", "4000mAh", "3500mAh"]
    }
  },
  "Fashion": {
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      "https://images.unsplash.com/photo-1589465885857-44edb59bbff2"
    ],
    prefixes: ["Designer", "Premium", "Classic", "Modern", "Luxury", "Stylish"],
    descriptions: [
      "Elevate your style with this must-have piece for your wardrobe",
      "Crafted with attention to detail and premium materials",
      "Perfect for both casual outings and special occasions",
      "A timeless addition to your fashion collection"
    ],
    features: [
      "Premium materials", "Sustainable production", "Hand-crafted details", 
      "All-season versatility", "Stain-resistant", "Wrinkle-free design"
    ],
    specs: {
      "Material": ["Cotton", "Silk", "Wool", "Polyester", "Linen", "Denim"],
      "Care": ["Machine washable", "Dry clean only", "Hand wash"],
      "Origin": ["Italy", "France", "USA", "Japan", "UK"]
    }
  },
  "Home & Living": {
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    ],
    prefixes: ["Luxury", "Handcrafted", "Artisan", "Contemporary", "Minimalist", "Vintage"],
    descriptions: [
      "Transform your living space with this elegantly designed piece",
      "Combines functionality and aesthetics for the modern home",
      "Crafted to enhance your home's comfort and style",
      "A perfect addition to any interior design scheme"
    ],
    features: [
      "Eco-friendly materials", "Space-saving design", "Multi-functional use", 
      "Easy to clean", "Durable construction", "Hypoallergenic"
    ],
    specs: {
      "Material": ["Solid wood", "Tempered glass", "Bamboo", "Steel", "Ceramic"],
      "Dimensions": ["Small", "Medium", "Large", "Custom"],
      "Assembly": ["Pre-assembled", "Easy assembly required", "Professional assembly recommended"]
    }
  },
  "Sports & Outdoors": {
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1530549387789-4c1017266635",
      "https://images.unsplash.com/photo-1535131749006-b7d58e7ffca4",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      "https://images.unsplash.com/photo-1562771379-eafdca7a02f8"
    ],
    prefixes: ["Professional", "All-Terrain", "Ultra-Light", "Performance", "Endurance", "Extreme"],
    descriptions: [
      "Engineered to enhance your performance in any condition",
      "Built for durability and comfort during intense activities",
      "Designed by athletes for athletes to maximize results",
      "The essential gear for outdoor enthusiasts"
    ],
    features: [
      "Weather-resistant", "Lightweight design", "Enhanced grip", 
      "Shock absorption", "Moisture-wicking", "Adjustable fit"
    ],
    specs: {
      "Material": ["Synthetic fiber", "Gore-Tex", "Nylon", "Breathable mesh", "Carbon fiber"],
      "Activity": ["Running", "Cycling", "Hiking", "Swimming", "Multi-sport"],
      "Technology": ["GPS tracking", "Heart rate monitor", "Motion sensors"]
    }
  },
  "Books & Media": {
    images: [
      "https://images.unsplash.com/photo-1495446815901-a6a2a5aee158",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc"
    ],
    prefixes: ["Bestselling", "Award-winning", "Limited Edition", "Classic", "Collector's", "First Edition"],
    descriptions: [
      "A captivating journey that will keep you engaged from start to finish",
      "Critically acclaimed and loved by readers worldwide",
      "An essential addition to any book lover's collection",
      "Immerse yourself in this compelling narrative"
    ],
    features: [
      "Exclusive content", "Author-signed", "Full-color illustrations", 
      "Companion digital version", "Discussion guide included", "Premium binding"
    ],
    specs: {
      "Format": ["Hardcover", "Paperback", "e-Book", "Audiobook", "Box set"],
      "Length": ["Short read", "Standard length", "Extended edition"],
      "Language": ["English", "Spanish", "French", "German", "Chinese"]
    }
  }
};

// Common items that can be used across multiple categories
const commonItems = {
  brands: [
    "Artisan", "NexTech", "PrimeSphere", "EliteWave", "Luminary", 
    "Zenith", "Harmony", "Pinnacle", "Aetherius", "Velocity"
  ],
  colors: [
    "Black", "White", "Silver", "Gold", "Blue", 
    "Red", "Green", "Purple", "Gray", "Brown"
  ],
  productTypes: [
    "Essential", "Premium", "Deluxe", "Standard", "Ultra", 
    "Professional", "Limited Edition", "Exclusive", "Signature", "Core"
  ],
  warranty: [
    "1-year limited warranty", "2-year manufacturer's warranty", "3-year extended warranty",
    "Lifetime warranty", "90-day warranty", "6-month warranty"
  ]
};

// Generate a random number between min and max (inclusive)
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Select a random item from an array
const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Generate a random boolean with a specified probability
const getRandomBoolean = (probability = 0.5): boolean => {
  return Math.random() < probability;
};

// Generate a random product name
const generateProductName = (category: string): string => {
  const categoryDetails = categorySpecificDetails[category] || categorySpecificDetails["Electronics"];
  const prefix = getRandomItem(categoryDetails.prefixes);
  const brand = getRandomItem(commonItems.brands);
  const color = getRandomBoolean(0.7) ? `${getRandomItem(commonItems.colors)} ` : "";
  let type = "";
  
  switch (category) {
    case "Electronics":
      type = getRandomItem(["Smartphone", "Laptop", "Headphones", "Tablet", "Smartwatch", "Camera", "Speaker"]);
      break;
    case "Fashion":
      type = getRandomItem(["Jacket", "Dress", "Shoes", "Watch", "Handbag", "Sunglasses", "Shirt"]);
      break;
    case "Home & Living":
      type = getRandomItem(["Sofa", "Lamp", "Coffee Table", "Dining Set", "Bed Frame", "Armchair", "Bookshelf"]);
      break;
    case "Sports & Outdoors":
      type = getRandomItem(["Backpack", "Tent", "Running Shoes", "Fitness Tracker", "Yoga Mat", "Bike", "Kayak"]);
      break;
    case "Books & Media":
      type = getRandomItem(["Novel", "Cookbook", "Biography", "Vinyl Record", "Audiobook", "Art Book", "Magazine"]);
      break;
    default:
      type = getRandomItem(["Product", "Item", "Gadget", "Accessory"]);
  }
  
  return `${prefix} ${color}${type}`;
};

// Generate detailed product description
const generateProductDescription = (category: string, productName: string): string => {
  const categoryDetails = categorySpecificDetails[category] || categorySpecificDetails["Electronics"];
  const mainDescription = getRandomItem(categoryDetails.descriptions);
  const features = Array(getRandomInt(2, 4))
    .fill(0)
    .map(() => getRandomItem(categoryDetails.features));
  
  const uniqueFeaturesText = [...new Set(features)]
    .map(feature => `• ${feature}`)
    .join("\n");
    
  const brand = getRandomItem(commonItems.brands);
  const warranty = getRandomItem(commonItems.warranty);
  
  return `${mainDescription}. The ${productName} by ${brand} is designed to exceed your expectations and enhance your experience.

Key Features:
${uniqueFeaturesText}

Backed by our ${warranty} for your peace of mind. Experience the difference with this exceptional product today.`;
};

// Generate product specifications
const generateProductSpecs = (category: string): Record<string, string> => {
  const categoryDetails = categorySpecificDetails[category] || categorySpecificDetails["Electronics"];
  const specs: Record<string, string> = {};
  
  // Add some category-specific specs
  Object.keys(categoryDetails.specs).forEach(specKey => {
    specs[specKey] = getRandomItem(categoryDetails.specs[specKey]);
  });
  
  // Add some common specs
  specs["Brand"] = getRandomItem(commonItems.brands);
  specs["Model"] = `${specs["Brand"]}-${getRandomInt(1000, 9999)}`;
  specs["Color"] = getRandomItem(commonItems.colors);
  specs["Warranty"] = getRandomItem(commonItems.warranty);
  
  return specs;
};

// Function to generate a single product
export const generateProduct = (category: string, index: number): Product => {
  const name = generateProductName(category);
  const categoryDetails = categorySpecificDetails[category] || categorySpecificDetails["Electronics"];
  const basePrice = getRandomInt(50, 500);
  const isOnSale = getRandomBoolean(0.3);
  const isNew = getRandomBoolean(0.2);
  const isBestSeller = getRandomBoolean(0.15);
  
  const image = getRandomItem(categoryDetails.images);
  
  let compareAtPrice: number | undefined = undefined;
  let discount: number | undefined = undefined;
  
  if (isOnSale) {
    discount = getRandomInt(10, 40);
    compareAtPrice = basePrice;
    basePrice = Math.round(basePrice * (1 - discount / 100));
  }
  
  const longDescription = generateProductDescription(category, name);
  const specs = generateProductSpecs(category);
  const rating = getRandomInt(1, 10) / 2; // Generate rating between 0.5 and 5
  const reviewCount = getRandomInt(1, 100);
  
  // Extract features from the description
  const featuresMatch = longDescription.match(/• (.*?)(?=\n|$)/g);
  const features = featuresMatch 
    ? featuresMatch.map(f => f.replace('• ', '')) 
    : [];
  
  return {
    id: `${category}-${index}`,
    name,
    price: basePrice,
    compareAtPrice,
    rating,
    reviewCount,
    reviews: reviewCount,
    image,
    category,
    tags: [category, specs["Brand"], specs["Color"]],
    brand: specs["Brand"],
    isNew,
    isHot: isBestSeller,
    isSale: isOnSale,
    inStock: getRandomBoolean(0.9),
    discount,
    description: longDescription.split("\n\n")[0],
    features,
    longDescription,
    bestSeller: isBestSeller,
    sale: isOnSale,
    new: isNew
  };
};

// Function to generate multiple products for a category
export const generateProductsForCategory = (
  category: string,
  count: number = 50
): Product[] => {
  return Array(count)
    .fill(0)
    .map((_, index) => generateProduct(category, index));
};
