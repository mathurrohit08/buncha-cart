
import { MegaMenuDropdown } from "../MegaMenuDropdown";
import { newArrivalsItems, newArrivalsFeatured } from "../data/newArrivalsData";

export const NewArrivalsSubMenu = () => {
  return (
    <MegaMenuDropdown
      title="New Arrivals"
      items={newArrivalsItems}
      columnCount={3}
      featured={newArrivalsFeatured}
    />
  );
};
