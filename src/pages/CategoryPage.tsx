
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock categories data with subcategories
const categories = {
  electronics: {
    name: "Electronics",
    banner: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    subcategories: {
      phones: {
        name: "Phones",
        products: [
          {
            id: 1,
            name: "Smartphone Pro",
            price: 999.99,
            image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
            description: "The latest flagship smartphone with advanced features.",
          },
          {
            id: 2,
            name: "Budget Phone",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
            description: "Affordable smartphone with great value for money.",
          },
          {
            id: 3,
            name: "Foldable Phone",
            price: 1499.99,
            image: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b",
            description: "Innovative foldable display for enhanced productivity.",
          },
        ],
      },
      laptops: {
        name: "Laptops",
        products: [
          {
            id: 4,
            name: "Ultrabook Pro",
            price: 1299.99,
            image: "https://images.unsplash.com/photo-1593642702909-dec73df255d7",
            description: "Thin and light laptop with powerful performance.",
          },
          {
            id: 5,
            name: "Gaming Laptop",
            price: 1799.99,
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
            description: "High-performance laptop designed for gaming enthusiasts.",
          },
          {
            id: 6,
            name: "Business Laptop",
            price: 999.99,
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
            description: "Reliable laptop for business professionals.",
          },
        ],
      },
      tablets: {
        name: "Tablets",
        products: [
          {
            id: 7,
            name: "Pro Tablet",
            price: 799.99,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
            description: "Professional tablet with stylus support for creative work.",
          },
          {
            id: 8,
            name: "Mini Tablet",
            price: 399.99,
            image: "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df",
            description: "Compact tablet perfect for reading and entertainment.",
          },
        ],
      },
      accessories: {
        name: "Accessories",
        products: [
          {
            id: 9,
            name: "Wireless Earbuds",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
            description: "Premium wireless earbuds with noise cancellation.",
          },
          {
            id: 10,
            name: "Smart Watch",
            price: 249.99,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
            description: "Feature-packed smartwatch with health monitoring.",
          },
        ],
      },
    },
  },
  fashion: {
    name: "Fashion",
    banner: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    subcategories: {
      men: {
        name: "Men",
        products: [
          {
            id: 11,
            name: "Classic Suit",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
            description: "Elegant suit for formal occasions.",
          },
          {
            id: 12,
            name: "Casual Shirt",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388",
            description: "Comfortable shirt for everyday wear.",
          },
        ],
      },
      women: {
        name: "Women",
        products: [
          {
            id: 13,
            name: "Summer Dress",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
            description: "Lightweight dress perfect for summer days.",
          },
          {
            id: 14,
            name: "Designer Handbag",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
            description: "Stylish handbag to complement any outfit.",
          },
        ],
      },
      kids: {
        name: "Kids",
        products: [
          {
            id: 15,
            name: "Children's Playset",
            price: 39.99,
            image: "https://images.unsplash.com/photo-1522771930-78848d9293e8",
            description: "Comfortable and durable clothing for active kids.",
          },
          {
            id: 16,
            name: "Kids Shoes",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a",
            description: "Stylish yet practical shoes for growing feet.",
          },
        ],
      },
      "sport-wear": {
        name: "Sport Wear",
        products: [
          {
            id: 17,
            name: "Running Shoes",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1562183241-b937e95585b6",
            description: "High-performance shoes designed for runners.",
          },
          {
            id: 18,
            name: "Yoga Set",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
            description: "Comfortable yoga clothing for maximum flexibility.",
          },
        ],
      },
    },
  },
  "home-living": {
    name: "Home & Living",
    banner: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    subcategories: {
      furniture: {
        name: "Furniture",
        products: [
          {
            id: 19,
            name: "Ergonomic Chair",
            price: 249.99,
            image: "https://images.unsplash.com/photo-1592078615290-f270dcf7acfc",
            description: "Comfortable office chair designed for long work sessions.",
          },
          {
            id: 20,
            name: "Coffee Table",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1611486212355-d276af4581c0",
            description: "Stylish coffee table for your living room.",
          },
        ],
      },
      decor: {
        name: "Decor",
        products: [
          {
            id: 21,
            name: "Wall Art Set",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1582228306291-ca543cec67f7",
            description: "Beautiful art pieces to enhance your wall space.",
          },
          {
            id: 22,
            name: "Decorative Pillows",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1593853963597-371b48073a59",
            description: "Set of decorative pillows to accent your furniture.",
          },
        ],
      },
      kitchen: {
        name: "Kitchen",
        products: [
          {
            id: 23,
            name: "Chef's Knife Set",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1593618998160-e34014e67546",
            description: "Professional-grade knife set for cooking enthusiasts.",
          },
          {
            id: 24,
            name: "Smart Blender",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a",
            description: "High-powered blender with smart features for perfect results.",
          },
        ],
      },
      garden: {
        name: "Garden",
        products: [
          {
            id: 25,
            name: "Garden Tool Set",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
            description: "Essential tools for maintaining your garden.",
          },
          {
            id: 26,
            name: "Outdoor Furniture Set",
            price: 499.99,
            image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
            description: "Durable and stylish furniture for outdoor spaces.",
          },
        ],
      },
    },
  },
};

const CategoryPage = () => {
  const { categoryName, subCategory } = useParams();
  const { toast } = useToast();

  // Convert category name to format used in data object
  const categoryKey = categoryName?.toLowerCase().replace(/\s+/g, "-");
  const category = categoryKey ? categories[categoryKey as keyof typeof categories] : null;

  // Get subcategory if specified, otherwise use first subcategory
  const getSubcategoryProducts = () => {
    if (!category) return [];

    if (subCategory && category.subcategories[subCategory as keyof typeof category.subcategories]) {
      return category.subcategories[subCategory as keyof typeof category.subcategories].products;
    }

    // If no subcategory specified, use first subcategory
    const firstSubcategoryKey = Object.keys(category.subcategories)[0];
    return category.subcategories[firstSubcategoryKey as keyof typeof category.subcategories].products;
  };

  const getSubcategoryName = () => {
    if (!category) return "";

    if (subCategory && category.subcategories[subCategory as keyof typeof category.subcategories]) {
      return category.subcategories[subCategory as keyof typeof category.subcategories].name;
    }

    // If no subcategory specified, use first subcategory
    const firstSubcategoryKey = Object.keys(category.subcategories)[0];
    return category.subcategories[firstSubcategoryKey as keyof typeof category.subcategories].name;
  };

  const products = getSubcategoryProducts();

  const handleAddToCart = (product: any) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (product: any) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Category not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-16 pb-16">
        {/* Banner */}
        <div className="relative h-[200px] md:h-[300px]">
          <img
            src={category.banner}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{category.name}</h1>
              {subCategory && (
                <p className="text-xl text-white mt-2">{getSubcategoryName()}</p>
              )}
            </div>
          </div>
        </div>

        {/* Subcategory navigation */}
        <div className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-4 overflow-x-auto">
            <div className="flex space-x-4">
              {Object.entries(category.subcategories).map(([key, subcategory]) => (
                <a
                  key={key}
                  href={`/category/${categoryKey}/${key}`}
                  className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                    subCategory === key
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {subcategory.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">
            {getSubcategoryName()} Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-red-500">New</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="font-bold text-lg mt-2 dark:text-white">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex mt-4 gap-2">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1"
                      size="sm"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleAddToWishlist(product)}
                      className="shrink-0"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
