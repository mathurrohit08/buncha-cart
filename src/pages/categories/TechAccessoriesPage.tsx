
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const TechAccessoriesPage = () => {
  const { products, bannerImage } = getCategoryProducts("Tech Accessories");
  
  return (
    <CategoryPageTemplate 
      categoryName="Tech Accessories"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default TechAccessoriesPage;
