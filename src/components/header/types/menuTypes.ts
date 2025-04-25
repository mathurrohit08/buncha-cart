
export interface MenuItem {
  name: string;
  path: string;
  image?: string;
  description?: string;
}

export interface FeaturedItem extends MenuItem {
  image: string;
}
