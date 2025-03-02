
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
