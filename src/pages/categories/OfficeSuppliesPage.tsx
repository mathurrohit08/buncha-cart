
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const OfficeSuppliesPage = () => {
  const { products, bannerImage } = getCategoryProducts("Office Supplies");
  
  return (
    <CategoryPageTemplate 
      categoryName="Office Supplies"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default OfficeSuppliesPage;
