
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const productTypes = [
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    products: [
      { name: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb" },
      { name: "Smart Watch", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12" },
      { name: "Fitness Tracker", image: "https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0" },
      { name: "Portable Speaker", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1" },
      { name: "Tablet Pro", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0" },
    ]
  },
  {
    name: "Best Sellers",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    products: [
      { name: "Noise-Cancelling Headphones", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90" },
      { name: "Smartphone X", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
      { name: "Laptop Pro", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
      { name: "Gaming Console", image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42" },
      { name: "Digital Camera", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd" },
    ]
  },
  {
    name: "Deals",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    products: [
      { name: "Smart Home Hub", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8" },
      { name: "Robot Vacuum", image: "https://images.unsplash.com/photo-1582816063950-de40de40a860" },
      { name: "4K Monitor", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf" },
      { name: "Wireless Charger", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07" },
      { name: "Mesh WiFi System", image: "https://images.unsplash.com/photo-1602526429747-ac387a91d43b" },
    ]
  },
];

export const ProductMenu = () => {
  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        Products
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[calc(100vw-2rem)] sm:w-[400px] border dark:border-gray-700 bg-white dark:bg-gray-800 z-50" 
        align="start"
        sideOffset={8}
      >
        <div className="grid grid-cols-1 gap-4 max-h-[70vh] overflow-y-auto">
          {productTypes.map((type) => (
            <div key={type.name} className="space-y-3">
              <Link
                to={`/products/${type.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-4 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <span className="font-medium dark:text-gray-300">{type.name}</span>
              </Link>
              
              <div className="grid grid-cols-2 gap-2 pl-4">
                {type.products.map((product, index) => (
                  <Link
                    key={index}
                    to={`/products/${type.name.toLowerCase().replace(/\s+/g, "-")}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded text-sm transition-colors"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded mb-1"
                      />
                      <span className="text-xs text-center dark:text-gray-400">{product.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
