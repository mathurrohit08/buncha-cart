
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const HomeLivingPage = () => {
  const { products, bannerImage } = getCategoryProducts("Home & Living");
  
  return (
    <CategoryPageTemplate 
      categoryName="Home & Living"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default HomeLivingPage;
