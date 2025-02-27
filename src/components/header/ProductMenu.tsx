
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const productTypes = [
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    name: "Best Sellers",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    name: "Deals",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
  },
];

export const ProductMenu = () => {
  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Products
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[calc(100vw-2rem)] sm:w-[400px] border dark:border-gray-700 bg-white dark:bg-gray-800" 
        align="start"
      >
        <div className="grid grid-cols-1 gap-4">
          {productTypes.map((type) => (
            <Link
              key={type.name}
              to={`/products/${type.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-4 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <img
                src={type.image}
                alt={type.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <span className="dark:text-gray-300">{type.name}</span>
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
