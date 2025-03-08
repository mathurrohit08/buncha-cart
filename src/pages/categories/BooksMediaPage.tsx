
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";
import { getCategoryProducts } from "@/utils/categoryProductsData";

const BooksMediaPage = () => {
  const { products, bannerImage } = getCategoryProducts("Books & Media");
  
  return (
    <CategoryPageTemplate 
      categoryName="Books & Media"
      products={products}
      bannerImage={bannerImage}
    />
  );
};

export default BooksMediaPage;
