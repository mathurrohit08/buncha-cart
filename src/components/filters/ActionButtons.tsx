
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  applyFilters: () => void;
  resetFilters: () => void;
}

export const ActionButtons = ({
  applyFilters,
  resetFilters
}: ActionButtonsProps) => {
  return (
    <div className="pt-4 space-y-2">
      <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
      <Button variant="outline" onClick={resetFilters} className="w-full">Reset</Button>
    </div>
  );
};
