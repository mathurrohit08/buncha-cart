
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const SmartHomePage = () => {
  const { products, bannerImage } = getCategoryProducts("Smart Home");
  
  return (
    <CategoryPageTemplate 
      categoryName="Smart Home"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default SmartHomePage;
