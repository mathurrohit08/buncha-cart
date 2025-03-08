
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const OutdoorLivingPage = () => {
  const { products, bannerImage } = getCategoryProducts("Outdoor Living");
  
  return (
    <CategoryPageTemplate 
      categoryName="Outdoor Living"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default OutdoorLivingPage;
