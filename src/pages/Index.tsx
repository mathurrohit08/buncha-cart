
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { IndustryTrust } from "@/components/IndustryTrust";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HomeImprovement, SmartHome } from "@/components/home/PromotionalSections";
import { NewArrivalsAndBestSellers } from "@/components/home/NewArrivalsAndBestSellers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Banner />
        <Categories />
        <IndustryTrust />
        <FeaturedCollections />
        <FeaturedProducts />
        <HomeImprovement />
        <SmartHome />
        <NewArrivalsAndBestSellers />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
