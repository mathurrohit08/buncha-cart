
import { Button } from "@/components/ui/button";
import { Check, RefreshCw } from "lucide-react";

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
      <Button onClick={applyFilters} className="w-full flex items-center justify-center">
        <Check className="h-4 w-4 mr-2" />
        Apply Filters
      </Button>
      <Button variant="outline" onClick={resetFilters} className="w-full flex items-center justify-center">
        <RefreshCw className="h-4 w-4 mr-2" />
        Reset
      </Button>
    </div>
  );
};
