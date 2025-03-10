
import { useState } from "react";
import { User, Settings, LogOut, Package, Heart, ShoppingBag, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock user data - in a real app, this would come from your auth system
const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: null,
  isLoggedIn: true,
};

export const UserMenu = () => {
  const [user, setUser] = useState(mockUser);
  const { toast } = useToast();

  const handleLogin = () => {
    setUser({ ...mockUser, isLoggedIn: true });
    toast({
      title: "Logged in successfully",
      description: "Welcome back, John Doe!",
    });
  };

  const handleLogout = () => {
    setUser({ ...mockUser, isLoggedIn: false });
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-5 w-5" />
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {user.isLoggedIn ? (
          <>
            <div className="flex items-center gap-2 p-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
            </div>
            <DropdownMenuSeparator />
            <Link to="/profile">
              <DropdownMenuItem className="cursor-pointer">
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
            </Link>
            <Link to="/orders">
              <DropdownMenuItem className="cursor-pointer">
                <Package className="h-4 w-4 mr-2" />
                Orders
              </DropdownMenuItem>
            </Link>
            <Link to="/wishlist">
              <DropdownMenuItem className="cursor-pointer">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </DropdownMenuItem>
            </Link>
            <Link to="/cart">
              <DropdownMenuItem className="cursor-pointer">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart
              </DropdownMenuItem>
            </Link>
            <Link to="/settings">
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <div className="p-3 text-center">
              <h3 className="font-medium mb-1">Welcome</h3>
              <p className="text-xs text-gray-500 mb-3">Sign in to access your account</p>
              <Button onClick={handleLogin} className="w-full mb-2" size="sm">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <div className="text-xs mt-2">
                <span className="text-gray-500">Don't have an account? </span>
                <Link to="/register" className="text-primary hover:underline">
                  Register
                </Link>
              </div>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
