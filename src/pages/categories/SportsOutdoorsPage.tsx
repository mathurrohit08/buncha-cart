
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const SportsOutdoorsPage = () => {
  const { products, bannerImage } = getCategoryProducts("Sports & Outdoors");
  
  return (
    <CategoryPageTemplate 
      categoryName="Sports & Outdoors"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default SportsOutdoorsPage;
