
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User, ShoppingCart, Heart, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Electronics",
    subcategories: ["Phones", "Laptops", "Tablets", "Accessories"],
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    name: "Fashion",
    subcategories: ["Men", "Women", "Kids", "Sport Wear"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    name: "Home & Living",
    subcategories: ["Furniture", "Decor", "Kitchen", "Garden"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
];

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

const cartItems = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [wishlistCount] = useState(1);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Store
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <HoverCard openDelay={0} closeDelay={100}>
              <HoverCardTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
                Categories
              </HoverCardTrigger>
              <HoverCardContent className="w-[500px] p-0" align="start">
                <div className="grid grid-cols-5 h-[400px]">
                  <div className="col-span-2 bg-gray-50 p-4">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="group"
                        onMouseEnter={() => setHoveredCategory(category.name)}
                      >
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white transition-colors cursor-pointer">
                          <span>{category.name}</span>
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-span-3 p-4">
                    {hoveredCategory && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {categories.find((c) => c.name === hoveredCategory)?.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            to={`/category/${sub.toLowerCase()}`}
                            className="block p-2 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {sub}
                          </Link>
                        ))}
                        <img
                          src={categories.find((c) => c.name === hoveredCategory)?.image}
                          alt={hoveredCategory}
                          className="w-full h-48 object-cover rounded-lg mt-4"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={0} closeDelay={100}>
              <HoverCardTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
                Products
              </HoverCardTrigger>
              <HoverCardContent className="w-[400px]" align="start">
                <div className="grid grid-cols-1 gap-4">
                  {productTypes.map((type) => (
                    <Link
                      key={type.name}
                      to={`/products/${type.name.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <img
                        src={type.image}
                        alt={type.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <span>{type.name}</span>
                    </Link>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center gap-2 p-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-gray-500">john@example.com</span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Button>

            <HoverCard openDelay={0} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" align="end">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">Total</span>
                      <span className="font-medium">${cartTotal.toFixed(2)}</span>
                    </div>
                    <Button className="w-full">Checkout</Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </header>
  );
};
