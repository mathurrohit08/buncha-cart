
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const ToolsHomeImprovementPage = () => {
  const { products, bannerImage } = getCategoryProducts("Tools & Home Improvement");
  
  return (
    <CategoryPageTemplate 
      categoryName="Tools & Home Improvement"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default ToolsHomeImprovementPage;
