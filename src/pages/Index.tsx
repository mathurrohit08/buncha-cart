
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Banner />
        <Categories />
        
        {/* Home Improvement Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909114-44e3e9399a2c" 
              alt="Home Improvement" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-3xl font-bold text-white mb-4">Browse Our Home Improvement Products</h2>
              <p className="text-white mb-6 max-w-2xl">
                Explore our extensive collection of tiles, flooring, cabinets, sinks, vanities, 
                and more for your renovation projects.
              </p>
              <Link to="/home-improvement">
                <Button size="lg">Shop Home Improvement</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
