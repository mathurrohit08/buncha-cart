
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./hooks/use-theme";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import Products from "./pages/Products";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NewArrivals from "./pages/NewArrivals";
import BestSellers from "./pages/BestSellers";
import Deals from "./pages/Deals";
import ReturnPolicy from "./pages/ReturnPolicy";
import Shipping from "./pages/Shipping";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Returns from "./pages/Returns";
import Careers from "./pages/Careers";
import HomeImprovementProducts from "./pages/HomeImprovementProducts";
import BooksMediaPage from "./pages/categories/BooksMediaPage";
import BeautyPersonalCarePage from "./pages/categories/BeautyPersonalCarePage";
import KitchenDiningPage from "./pages/categories/KitchenDiningPage";
import ToysGamesPage from "./pages/categories/ToysGamesPage";
import HealthWellnessPage from "./pages/categories/HealthWellnessPage";
import SmartHomePage from "./pages/categories/SmartHomePage";
import OfficeSuppliesPage from "./pages/categories/OfficeSuppliesPage";
import AutomotivePage from "./pages/categories/AutomotivePage";
import JewelryPage from "./pages/categories/JewelryPage";
import ToolsHomeImprovementPage from "./pages/categories/ToolsHomeImprovementPage";
import OutdoorLivingPage from "./pages/categories/OutdoorLivingPage";
import TechAccessoriesPage from "./pages/categories/TechAccessoriesPage";

// Import new missing pages
import ApplyForCredit from "./pages/ApplyForCredit";
import BulkSale from "./pages/BulkSale";
import DistributorRegistration from "./pages/DistributorRegistration";
import AffiliateProgram from "./pages/AffiliateProgram";
import Accessibility from "./pages/Accessibility";
import Blog from "./pages/Blog";
import Warranty from "./pages/Warranty";

// Import account pages
import Profile from "./pages/account/Profile";
import Orders from "./pages/account/Orders";
import Wishlist from "./pages/account/Wishlist";
import Settings from "./pages/account/Settings";
import AccountLayout from "./pages/account/AccountLayout";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="store-ui-theme">
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/category/:categoryName/:subcategory" element={<CategoryPage />} />
              <Route path="/products/:productType" element={<Products />} />
              <Route path="/products/:productType/:productName" element={<Products />} />
              <Route path="/all-products" element={<ProductsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/home-improvement" element={<HomeImprovementProducts />} />
              <Route path="/books-media" element={<BooksMediaPage />} />
              <Route path="/beauty-personal-care" element={<BeautyPersonalCarePage />} />
              <Route path="/kitchen-dining" element={<KitchenDiningPage />} />
              <Route path="/toys-games" element={<ToysGamesPage />} />
              <Route path="/health-wellness" element={<HealthWellnessPage />} />
              <Route path="/smart-home" element={<SmartHomePage />} />
              <Route path="/office-supplies" element={<OfficeSuppliesPage />} />
              <Route path="/automotive" element={<AutomotivePage />} />
              <Route path="/jewelry" element={<JewelryPage />} />
              <Route path="/tools-home-improvement" element={<ToolsHomeImprovementPage />} />
              <Route path="/outdoor-living" element={<OutdoorLivingPage />} />
              <Route path="/tech-accessories" element={<TechAccessoriesPage />} />
              
              {/* Add missing footer page routes */}
              <Route path="/apply-for-credit" element={<ApplyForCredit />} />
              <Route path="/bulk-sale" element={<BulkSale />} />
              <Route path="/distributor-registration" element={<DistributorRegistration />} />
              <Route path="/affiliate-program" element={<AffiliateProgram />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/warranty" element={<Warranty />} />
              
              {/* Account pages */}
              <Route path="/account" element={<AccountLayout />}>
                <Route index element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="orders" element={<Orders />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
