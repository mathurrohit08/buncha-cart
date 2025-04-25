
import { MenuItem, FeaturedItem } from '../types/menuTypes';

export const dealsItems: MenuItem[] = [
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

export const dealsFeatured: FeaturedItem[] = [
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
