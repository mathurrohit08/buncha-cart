
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";
import { useEffect } from "react";

const SmartHomePage = () => {
  const { products, bannerImage } = getCategoryProducts("Smart Home");
  
  // Force image revalidation to fix loading issues
  useEffect(() => {
    // Create a cache busting query param
    const timestamp = new Date().getTime();
    
    // Preload banner image
    const preloadBannerImage = new Image();
    preloadBannerImage.src = `${bannerImage}?t=${timestamp}`;
    
    // Preload product images
    products.forEach(product => {
      const preloadImage = new Image();
      preloadImage.src = `${product.image}?t=${timestamp}`;
    });
  }, [products, bannerImage]);
  
  return (
    <CategoryPageTemplate 
      categoryName="Smart Home"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default SmartHomePage;
