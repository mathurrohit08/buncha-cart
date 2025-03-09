
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface AvailabilityFilterProps {
  showInStock: boolean;
  setShowInStock: (show: boolean) => void;
  showOnSale: boolean;
  setShowOnSale: (show: boolean) => void;
  showNew: boolean;
  setShowNew: (show: boolean) => void;
  showBestSellers: boolean;
  setShowBestSellers: (show: boolean) => void;
}

export const AvailabilityFilter = ({
  showInStock,
  setShowInStock,
  showOnSale,
  setShowOnSale,
  showNew,
  setShowNew,
  showBestSellers,
  setShowBestSellers
}: AvailabilityFilterProps) => {
  return (
    <AccordionItem value="availability">
      <AccordionTrigger className="text-base font-medium">Availability</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="in-stock" 
              checked={showInStock} 
              onCheckedChange={(checked) => setShowInStock(checked as boolean)} 
            />
            <label htmlFor="in-stock" className="text-sm cursor-pointer">In Stock Only</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="on-sale" 
              checked={showOnSale} 
              onCheckedChange={(checked) => setShowOnSale(checked as boolean)} 
            />
            <label htmlFor="on-sale" className="text-sm cursor-pointer">On Sale</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="new-arrivals" 
              checked={showNew} 
              onCheckedChange={(checked) => setShowNew(checked as boolean)} 
            />
            <label htmlFor="new-arrivals" className="text-sm cursor-pointer">New Arrivals</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="best-sellers" 
              checked={showBestSellers} 
              onCheckedChange={(checked) => setShowBestSellers(checked as boolean)} 
            />
            <label htmlFor="best-sellers" className="text-sm cursor-pointer">Best Sellers</label>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
