
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const JewelryPage = () => {
  const { products, bannerImage } = getCategoryProducts("Jewelry");
  
  return (
    <CategoryPageTemplate 
      categoryName="Jewelry"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default JewelryPage;
