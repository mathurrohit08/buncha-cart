
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const AutomotivePage = () => {
  const { products, bannerImage } = getCategoryProducts("Automotive");
  
  return (
    <CategoryPageTemplate 
      categoryName="Automotive"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default AutomotivePage;
