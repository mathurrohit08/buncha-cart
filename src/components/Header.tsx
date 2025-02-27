
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./header/Logo";
import { CategoryMenu } from "./header/CategoryMenu";
import { ProductMenu } from "./header/ProductMenu";
import { UserMenu } from "./header/UserMenu";
import { WishlistButton } from "./header/WishlistButton";
import { CartMenu } from "./header/CartMenu";
import { ThemeToggle } from "./theme/ThemeToggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800">
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
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <CategoryMenu />
            <ProductMenu />
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <UserMenu />
            <WishlistButton />
            <CartMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
