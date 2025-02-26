
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Deals = () => {
  const deals = [
    {
      id: 1,
      name: "Premium Sofa",
      originalPrice: "$999.99",
      salePrice: "$799.99",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      id: 2,
      name: "Designer Chair",
      originalPrice: "$299.99",
      salePrice: "$239.99",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold text-center mb-12">Special Deals</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deals.map((deal) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {deal.discount}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-semibold">{deal.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-semibold">{deal.salePrice}</span>
                      <span className="text-gray-400 line-through text-sm">
                        {deal.originalPrice}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
