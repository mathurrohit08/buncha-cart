
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const KitchenDiningPage = () => {
  const { products, bannerImage } = getCategoryProducts("Kitchen & Dining");
  
  return (
    <CategoryPageTemplate 
      categoryName="Kitchen & Dining"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default KitchenDiningPage;
