
import { useState } from "react";
import { User, ShoppingCart, LogOut, LogIn, Heart, Package, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // For demo purposes, we'll just set isLoggedIn to true
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    
    toast({
      title: "Logged in successfully",
      description: "Welcome back!",
    });
  };
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    
    // Redirect to home if on an account page
    if (window.location.pathname.startsWith("/account")) {
      navigate("/");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {isLoggedIn ? (
          <>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="/account/profile" className="w-full cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/account/orders" className="w-full cursor-pointer">
                  <Package className="mr-2 h-4 w-4" />
                  <span>Orders</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/account/wishlist" className="w-full cursor-pointer">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Wishlist</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/checkout" className="w-full cursor-pointer">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span>Cart</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/account/settings" className="w-full cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogin} className="cursor-pointer">
              <LogIn className="mr-2 h-4 w-4" />
              <span>Log in</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogin} className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Sign up</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
