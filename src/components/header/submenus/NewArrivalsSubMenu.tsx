
import { MegaMenuDropdown } from "../MegaMenuDropdown";

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
