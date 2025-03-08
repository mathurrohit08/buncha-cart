
import { MegaMenuDropdown } from "./MegaMenuDropdown";

// New Arrivals SubMenu
export const NewArrivalsSubMenu = () => {
  const newArrivalsItems = [
    {
      name: "New in Tech",
      path: "/new-arrivals/tech",
      image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?auto=format&fit=crop&w=64&h=64",
      description: "Latest gadgets and accessories"
    },
    {
      name: "New in Home Decor",
      path: "/new-arrivals/home-decor",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=64&h=64",
      description: "Fresh home design products"
    },
    {
      name: "New in Kitchen",
      path: "/new-arrivals/kitchen",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=64&h=64",
      description: "Modern kitchen accessories"
    },
    {
      name: "New in Fashion",
      path: "/new-arrivals/fashion",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=64&h=64",
      description: "The latest in clothing and accessories"
    },
    {
      name: "New in Wellness",
      path: "/new-arrivals/wellness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=64&h=64",
      description: "Health and wellness innovations"
    },
    {
      name: "New in Office",
      path: "/new-arrivals/office",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=64&h=64",
      description: "Work and productivity tools"
    }
  ];

  const featured = [
    {
      name: "This Week's Highlights",
      path: "/new-arrivals/highlights",
      image: "https://images.unsplash.com/photo-1556910638-ded5b086c5ff?auto=format&fit=crop&w=300&h=200",
      description: "Our picks of the newest products"
    },
    {
      name: "Coming Soon",
      path: "/new-arrivals/upcoming",
      image: "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?auto=format&fit=crop&w=300&h=200",
      description: "Preview upcoming releases"
    }
  ];

  return (
    <MegaMenuDropdown
      title="New Arrivals"
      items={newArrivalsItems}
      columnCount={3}
      featured={featured}
    />
  );
};

// Best Sellers SubMenu
export const BestSellersSubMenu = () => {
  const bestSellersItems = [
    {
      name: "Tech Best Sellers",
      path: "/best-sellers/tech",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=64&h=64",
      description: "Our most popular tech products"
    },
    {
      name: "Home Favorites",
      path: "/best-sellers/home",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=64&h=64",
      description: "Customer-favorite home items"
    },
    {
      name: "Kitchen Essentials",
      path: "/best-sellers/kitchen",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=64&h=64",
      description: "Top-rated kitchen products"
    },
    {
      name: "Jewelry & Accessories",
      path: "/best-sellers/jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=64&h=64",
      description: "Best-selling jewelry pieces"
    },
    {
      name: "Beauty Favorites",
      path: "/best-sellers/beauty",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=64&h=64",
      description: "Best-selling beauty products"
    },
    {
      name: "Books & Media",
      path: "/best-sellers/books",
      image: "https://images.unsplash.com/photo-1495446815901-a6a2a5aee158?auto=format&fit=crop&w=64&h=64",
      description: "Most popular books and media"
    }
  ];

  const featured = [
    {
      name: "All-Time Bestsellers",
      path: "/best-sellers/all-time",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=300&h=200",
      description: "Our most loved products ever"
    },
    {
      name: "Rising Stars",
      path: "/best-sellers/trending",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&h=200",
      description: "Products quickly gaining popularity"
    }
  ];

  return (
    <MegaMenuDropdown
      title="Best Sellers"
      items={bestSellersItems}
      columnCount={3}
      featured={featured}
    />
  );
};

// Deals SubMenu
export const DealsSubMenu = () => {
  const dealsItems = [
    {
      name: "Flash Sales",
      path: "/deals/flash-sales",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=64&h=64",
      description: "Limited-time offers"
    },
    {
      name: "Clearance",
      path: "/deals/clearance",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=64&h=64",
      description: "Last chance items at deep discounts"
    },
    {
      name: "Bundle Deals",
      path: "/deals/bundles",
      image: "https://images.unsplash.com/photo-1612609232626-9e51b66360c7?auto=format&fit=crop&w=64&h=64",
      description: "Save more when you buy together"
    },
    {
      name: "Season Specials",
      path: "/deals/seasonal",
      image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=64&h=64",
      description: "Limited seasonal offers"
    },
    {
      name: "Outlet Store",
      path: "/deals/outlet",
      image: "https://images.unsplash.com/photo-1581244277943-fe4995638beb?auto=format&fit=crop&w=64&h=64",
      description: "Discounted home improvement items"
    },
    {
      name: "Buy One Get One",
      path: "/deals/bogo",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=64&h=64",
      description: "BOGO offers across categories"
    }
  ];

  const featured = [
    {
      name: "Deal of the Day",
      path: "/deals/deal-of-the-day",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=300&h=200",
      description: "New special offer each day"
    },
    {
      name: "Upcoming Promotions",
      path: "/deals/upcoming",
      image: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?auto=format&fit=crop&w=300&h=200",
      description: "Preview future sales events"
    }
  ];

  return (
    <MegaMenuDropdown
      title="Deals"
      items={dealsItems}
      columnCount={3}
      featured={featured}
    />
  );
};
