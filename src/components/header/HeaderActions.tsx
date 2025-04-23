
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";
import { WishlistButton } from "./WishlistButton";
import { CompareButton } from "./CompareButton";
import { CartMenu } from "./CartMenu";
import { UserMenu } from "./UserMenu";

interface HeaderActionsProps {
  searchOpen: boolean;
  onSearchToggle: () => void;
}

export const HeaderActions = ({ searchOpen, onSearchToggle }: HeaderActionsProps) => {
  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        size="icon"
        className="mr-2"
        onClick={onSearchToggle}
      >
        {searchOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Search className="h-5 w-5" />
        )}
      </Button>
      <ThemeToggle />
      <div className="hidden md:flex items-center space-x-1">
        <WishlistButton />
        <CompareButton />
        <CartMenu />
        <UserMenu />
      </div>
    </div>
  );
};
