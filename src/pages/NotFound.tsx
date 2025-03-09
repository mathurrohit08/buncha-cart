
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Suggested pages
  const suggestedPages = [
    { name: "Home", path: "/", icon: Home },
    { name: "Products", path: "/all-products", icon: Search },
    { name: "New Arrivals", path: "/new-arrivals", icon: Search },
    { name: "Best Sellers", path: "/best-sellers", icon: Search },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="text-center pb-2">
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-red-50 dark:bg-red-900/20 rounded-full">
            <span className="text-6xl font-bold text-red-500 dark:text-red-400">404</span>
          </div>
          <CardTitle className="text-2xl font-bold">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="mt-6">
            <h3 className="font-medium mb-3 text-gray-800 dark:text-gray-200">You might be looking for:</h3>
            <div className="grid grid-cols-2 gap-3">
              {suggestedPages.map((page) => (
                <Link 
                  key={page.path} 
                  to={page.path}
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg flex flex-col items-center text-center transition-colors"
                >
                  <page.icon className="h-5 w-5 mb-1 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-6 pt-2">
          <Button asChild variant="outline" className="mr-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
