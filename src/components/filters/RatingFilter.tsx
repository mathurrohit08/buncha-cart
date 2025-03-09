
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star } from "lucide-react";

interface RatingFilterProps {
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
}

export const RatingFilter = ({
  selectedRating,
  setSelectedRating
}: RatingFilterProps) => {
  return (
    <AccordionItem value="rating">
      <AccordionTrigger className="text-base font-medium">Rating</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-1">
          {[4, 3, 2, 1].map((rating) => (
            <div 
              key={rating} 
              className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedRating === rating ? 'bg-gray-100 dark:bg-gray-700' : ''
              }`}
              onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
            >
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm">{rating}+ stars</span>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
