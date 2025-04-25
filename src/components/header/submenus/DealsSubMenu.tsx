
import { MegaMenuDropdown } from "../MegaMenuDropdown";
import { dealsItems, dealsFeatured } from "../data/dealsData";

export const DealsSubMenu = () => {
  return (
    <MegaMenuDropdown
      title="Deals"
      items={dealsItems}
      columnCount={3}
      featured={dealsFeatured}
    />
  );
};
