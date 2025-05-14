
import { Product } from "@/components/categories/CategoryPageTemplate";
import { generateProductsForCategory } from "./productGenerator";

// Cache for products to avoid regenerating them on each call
const productsCache: Record<string, { 
  products: Product[]; 
  bannerImage: string; 
}> = {};

// Banner images for each category
const categoryBanners: Record<string, string> = {
  "Electronics": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&h=300",
  "Fashion": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&h=300",
  "Home & Living": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&h=300",
  "Sports & Outdoors": "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&h=300",
  "Books & Media": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&h=300",
  "Beauty & Personal Care": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&h=300",
  "Kitchen & Dining": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&h=300",
  "Toys & Games": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&h=300",
  "Health & Wellness": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&h=300",
  "Smart Home": "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?auto=format&fit=crop&w=1200&h=300",
  "Office Supplies": "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&h=300",
  "Automotive": "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&h=300",
  "Jewelry": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&h=300",
  "Tools & Home Improvement": "https://images.unsplash.com/photo-1581244277943-fe4995638beb?auto=format&fit=crop&w=1200&h=300",
  "Outdoor Living": "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&h=300",
  "Tech Accessories": "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?auto=format&fit=crop&w=1200&h=300"
};

// Default banner image if specific one is not found
const defaultBannerImage = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&h=300";

/**
 * Get products for a specific category
 */
export const getCategoryProducts = (category: string) => {
  // Return cached products if available
  if (productsCache[category]) {
    return productsCache[category];
  }
  
  // Generate products for this category
  const products = generateProductsForCategory(category);
  const bannerImage = categoryBanners[category] || defaultBannerImage;
  
  // Cache the products
  productsCache[category] = { products, bannerImage };
  
  return { products, bannerImage };
};
