
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const HealthWellnessPage = () => {
  const { products, bannerImage } = getCategoryProducts("Health & Wellness");
  
  return (
    <CategoryPageTemplate 
      categoryName="Health & Wellness"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default HealthWellnessPage;
