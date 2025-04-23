
import { ProductMenu } from "./ProductMenu";
import { CategoryMenu } from "./CategoryMenu";
import { NewArrivalsSubMenu, BestSellersSubMenu, DealsSubMenu } from "./NavSubMenus";

export const NavigationMenu = () => {
  return (
    <nav className="hidden lg:flex items-center justify-center">
      <div className="flex items-center justify-center space-x-8 w-[650px] mx-auto">
        <ProductMenu />
        <CategoryMenu />
        <NewArrivalsSubMenu />
        <BestSellersSubMenu />
        <DealsSubMenu />
      </div>
    </nav>
  );
};
