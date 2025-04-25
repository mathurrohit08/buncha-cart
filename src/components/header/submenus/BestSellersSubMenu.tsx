
import { MegaMenuDropdown } from "../MegaMenuDropdown";
import { bestSellersItems, bestSellersFeatured } from "../data/bestSellersData";

export const BestSellersSubMenu = () => {
  return (
    <MegaMenuDropdown
      title="Best Sellers"
      items={bestSellersItems}
      columnCount={3}
      featured={bestSellersFeatured}
    />
  );
};
