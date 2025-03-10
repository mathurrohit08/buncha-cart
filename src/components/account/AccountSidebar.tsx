
import { NavLink } from "react-router-dom";
import { 
  User, Package, Heart, Settings, LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const AccountSidebar = () => {
  const { toast } = useToast();
  
  const handleLogout = () => {
    // In a real app, you would call your auth service logout method
    localStorage.removeItem("isLoggedIn");
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    
    // In a real app, you would redirect to home or login page
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <div className="space-y-1">
        <NavLink
          to="/account/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive 
                ? "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300" 
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`
          }
        >
          <User className="h-5 w-5" />
          <span>Profile</span>
        </NavLink>
        
        <NavLink
          to="/account/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive 
                ? "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300" 
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`
          }
        >
          <Package className="h-5 w-5" />
          <span>Orders</span>
        </NavLink>
        
        <NavLink
          to="/account/wishlist"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive 
                ? "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300" 
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`
          }
        >
          <Heart className="h-5 w-5" />
          <span>Wishlist</span>
        </NavLink>
        
        <NavLink
          to="/account/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive 
                ? "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300" 
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`
          }
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </NavLink>
        
        <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-500 hover:text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
