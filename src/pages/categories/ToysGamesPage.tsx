
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const ToysGamesPage = () => {
  const { products, bannerImage } = getCategoryProducts("Toys & Games");
  
  return (
    <CategoryPageTemplate 
      categoryName="Toys & Games"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default ToysGamesPage;
