
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WishlistButton = () => {
  const wishlistCount = 1;

  return (
    <Button variant="ghost" size="icon" className="relative" aria-label="Wishlist">
      <Heart className="h-5 w-5" />
      {wishlistCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {wishlistCount}
        </span>
      )}
    </Button>
  );
};
