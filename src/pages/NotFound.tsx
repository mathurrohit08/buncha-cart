
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search, AlertTriangle, HelpCircle, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Suggested pages with improved images and descriptions
  const suggestedPages = [
    { 
      name: "Home", 
      path: "/", 
      icon: Home,
      description: "Return to our homepage to explore featured products and deals" 
    },
    { 
      name: "Products", 
      path: "/all-products", 
      icon: Search,
      description: "Browse our complete catalog of products" 
    },
    { 
      name: "New Arrivals", 
      path: "/new-arrivals", 
      icon: Search,
      description: "Check out our latest products and innovations" 
    },
    { 
      name: "Best Sellers", 
      path: "/best-sellers", 
      icon: Search,
      description: "See what other customers are loving right now" 
    },
  ];

  // FAQ content for 404 page
  const faqItems = [
    {
      question: "Why am I seeing this page?",
      answer: "You've tried to access a page that doesn't exist or has been moved. This could be due to a mistyped URL, an outdated link, or content that has been relocated."
    },
    {
      question: "What should I do now?",
      answer: "You can return to our homepage, use the navigation menu to find what you're looking for, or check out one of our suggested pages below."
    },
    {
      question: "How can I find what I was looking for?",
      answer: "Try using the search function in the header, or browse through our categories to locate similar products or information."
    },
    {
      question: "Was this product discontinued?",
      answer: "If you were looking for a specific product that you can't find, it might have been discontinued or replaced with a newer model. Browse our New Arrivals section for the latest products."
    },
    {
      question: "How can I contact customer support?",
      answer: "If you need assistance finding a specific product or have questions about our website, please visit our Contact page or use the support information below."
    }
  ];

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (800) 123-4567",
      description: "Available Mon-Fri, 9am-5pm EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@example.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: "123 Commerce St, New York, NY",
      description: "Open daily 10am-8pm"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-5xl shadow-lg border-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <CardHeader className="text-center md:text-left pb-2">
              <div className="w-24 h-24 mx-auto md:mx-0 mb-4 flex items-center justify-center bg-red-50 dark:bg-red-900/20 rounded-full">
                <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400" />
              </div>
              <CardTitle className="text-3xl font-bold">Page Not Found</CardTitle>
            </CardHeader>
            <CardContent className="md:text-left">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
              </p>
              
              <Tabs defaultValue="faq" className="w-full mt-6">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                </TabsList>
                <TabsContent value="faq" className="space-y-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {faqItems.map((item, index) => (
                      <div key={index} className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">{item.question}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="contact" className="space-y-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                    Get in Touch
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-3">
                          <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{item.title}</h4>
                          <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{item.details}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center md:justify-start pt-2">
              <Button asChild variant="default" className="mr-2">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </CardFooter>
          </div>
          
          <div className="bg-purple-50 dark:bg-gray-800 p-6">
            <h3 className="font-medium mb-4 text-gray-800 dark:text-gray-200">You might be looking for:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {suggestedPages.map((page) => (
                <Link 
                  key={page.path} 
                  to={page.path}
                  className="p-4 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg flex flex-col items-start text-left transition-colors shadow-sm"
                >
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-2">
                      <page.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-medium">{page.name}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{page.description}</p>
                </Link>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h4 className="font-medium mb-2">Still can't find what you need?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Our customer service team is here to help you navigate our site and find what you're looking for.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-medium mb-2">Popular Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link 
                  to="/category/electronics"
                  className="p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm"
                >
                  Electronics
                </Link>
                <Link 
                  to="/category/fashion"
                  className="p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm"
                >
                  Fashion
                </Link>
                <Link 
                  to="/category/home-living"
                  className="p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm"
                >
                  Home & Living
                </Link>
                <Link 
                  to="/category/beauty-personal-care"
                  className="p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm"
                >
                  Beauty & Personal Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
