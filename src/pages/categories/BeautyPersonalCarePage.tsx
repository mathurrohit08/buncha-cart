
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const BeautyPersonalCarePage = () => {
  const { products, bannerImage } = getCategoryProducts("Beauty & Personal Care");
  
  return (
    <CategoryPageTemplate 
      categoryName="Beauty & Personal Care"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default BeautyPersonalCarePage;
