
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface AttributeFilterProps {
  title: string;
  accordionValue: string;
  items: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

export const AttributeFilter = ({
  title,
  accordionValue,
  items,
  selectedItems,
  setSelectedItems
}: AttributeFilterProps) => {
  if (items.length === 0) return null;

  return (
    <AccordionItem value={accordionValue}>
      <AccordionTrigger className="text-base font-medium">{title}</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
          {items.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox 
                id={`${accordionValue}-${item}`} 
                checked={selectedItems.includes(item)} 
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedItems([...selectedItems, item]);
                  } else {
                    setSelectedItems(selectedItems.filter(i => i !== item));
                  }
                }} 
              />
              <label htmlFor={`${accordionValue}-${item}`} className="text-sm cursor-pointer">{item}</label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
