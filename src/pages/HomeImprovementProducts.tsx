
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Types for products
interface ProductSpec {
  name: string;
  value: string;
}

interface Product {
  id: number;
  name: string;
  specs: ProductSpec[];
  price: number;
  image: string;
  description: string;
}

// Products data
const tiles: Product[] = [
  {
    id: 1,
    name: "Ceramic Tiles",
    specs: [
      { name: "Size", value: "12x12 inches" },
      { name: "Finish", value: "Glossy" },
      { name: "Usage", value: "Walls, floors" },
      { name: "Durability", value: "Scratch-resistant" },
    ],
    price: 2.99,
    image: "https://images.unsplash.com/photo-1592078615290-f270dcf7acfc",
    description: "Classic ceramic tiles ideal for kitchen and bathroom applications.",
  },
  {
    id: 2,
    name: "Porcelain Tiles",
    specs: [
      { name: "Size", value: "24x24 inches" },
      { name: "Finish", value: "Matte" },
      { name: "Usage", value: "High-traffic areas" },
      { name: "Durability", value: "Waterproof, stain-resistant" },
    ],
    price: 4.99,
    image: "https://images.unsplash.com/photo-1559622214-f90d2e363cd1",
    description: "Durable porcelain tiles perfect for high-traffic areas in your home.",
  },
  {
    id: 3,
    name: "Mosaic Tiles",
    specs: [
      { name: "Size", value: "1x1 inch (sheets)" },
      { name: "Finish", value: "Glossy/Matte" },
      { name: "Usage", value: "Backsplashes, accent walls" },
      { name: "Durability", value: "Easy to clean" },
    ],
    price: 8.99,
    image: "https://images.unsplash.com/photo-1560748526-881455a4e421",
    description: "Decorative mosaic tiles to create beautiful patterns on walls and backsplashes.",
  },
  {
    id: 4,
    name: "Subway Tiles",
    specs: [
      { name: "Size", value: "3x6 inches" },
      { name: "Finish", value: "Glossy" },
      { name: "Usage", value: "Kitchens, bathrooms" },
      { name: "Durability", value: "Heat-resistant" },
    ],
    price: 3.49,
    image: "https://images.unsplash.com/photo-1574739782594-db4ead022697",
    description: "Classic rectangular tiles for timeless kitchen and bathroom designs.",
  },
  {
    id: 5,
    name: "Natural Stone Tiles",
    specs: [
      { name: "Size", value: "12x12 inches" },
      { name: "Finish", value: "Polished" },
      { name: "Usage", value: "Floors, walls" },
      { name: "Durability", value: "Unique patterns, durable" },
    ],
    price: 12.99,
    image: "https://images.unsplash.com/photo-1581789164394-810293cd79ce",
    description: "Natural stone tiles with unique patterns for elegant indoor spaces.",
  },
  {
    id: 6,
    name: "Glass Tiles",
    specs: [
      { name: "Size", value: "2x4 inches" },
      { name: "Finish", value: "Translucent" },
      { name: "Usage", value: "Backsplashes, showers" },
      { name: "Durability", value: "Non-porous, easy to clean" },
    ],
    price: 7.99,
    image: "https://images.unsplash.com/photo-1584792195019-7e371747acf5",
    description: "Elegant glass tiles to add a modern touch to your bathroom or kitchen.",
  },
  {
    id: 7,
    name: "Wood-Look Tiles",
    specs: [
      { name: "Size", value: "6x36 inches" },
      { name: "Finish", value: "Textured" },
      { name: "Usage", value: "Living rooms, bedrooms" },
      { name: "Durability", value: "Waterproof, scratch-resistant" },
    ],
    price: 5.99,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    description: "Tiles with wood appearance offering durability with classic wood aesthetics.",
  },
  {
    id: 8,
    name: "Hexagon Tiles",
    specs: [
      { name: "Size", value: "8x8 inches" },
      { name: "Finish", value: "Matte" },
      { name: "Usage", value: "Bathrooms, kitchens" },
      { name: "Durability", value: "Slip-resistant" },
    ],
    price: 6.49,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
    description: "Modern hexagonal tiles to create geometric patterns in bathrooms and kitchens.",
  },
  {
    id: 9,
    name: "Terracotta Tiles",
    specs: [
      { name: "Size", value: "12x12 inches" },
      { name: "Finish", value: "Rustic" },
      { name: "Usage", value: "Outdoor, indoor" },
      { name: "Durability", value: "Eco-friendly, heat-resistant" },
    ],
    price: 4.29,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
    description: "Traditional terracotta tiles ideal for indoor and outdoor spaces.",
  },
  {
    id: 10,
    name: "Metal Tiles",
    specs: [
      { name: "Size", value: "4x4 inches" },
      { name: "Finish", value: "Brushed" },
      { name: "Usage", value: "Accent walls, backsplashes" },
      { name: "Durability", value: "Rust-resistant" },
    ],
    price: 9.99,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    description: "Contemporary metal tiles for industrial-style accent walls and backsplashes.",
  },
];

const flooring: Product[] = [
  {
    id: 11,
    name: "Hardwood Flooring",
    specs: [
      { name: "Material", value: "Oak" },
      { name: "Finish", value: "Matte" },
      { name: "Thickness", value: "3/4 inch" },
      { name: "Usage", value: "Living rooms, bedrooms" },
    ],
    price: 9.99,
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    description: "Classic oak hardwood flooring for timeless elegance in your home.",
  },
  {
    id: 12,
    name: "Laminate Flooring",
    specs: [
      { name: "Material", value: "High-density fiberboard" },
      { name: "Finish", value: "Wood-look" },
      { name: "Thickness", value: "8mm" },
      { name: "Usage", value: "High-traffic areas" },
    ],
    price: 2.99,
    image: "https://images.unsplash.com/photo-1623722854078-dbd4eb3a5a59",
    description: "Affordable laminate flooring with authentic wood appearance.",
  },
  {
    id: 13,
    name: "Vinyl Flooring",
    specs: [
      { name: "Material", value: "PVC" },
      { name: "Finish", value: "Textured" },
      { name: "Thickness", value: "5mm" },
      { name: "Usage", value: "Kitchens, bathrooms" },
    ],
    price: 3.49,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d",
    description: "Water-resistant vinyl flooring perfect for wet areas in your home.",
  },
  {
    id: 14,
    name: "Carpet Flooring",
    specs: [
      { name: "Material", value: "Nylon" },
      { name: "Pile Height", value: "0.5 inches" },
      { name: "Finish", value: "Plush" },
      { name: "Usage", value: "Bedrooms, living rooms" },
    ],
    price: 4.99,
    image: "https://images.unsplash.com/photo-1578500351865-84804c920f79",
    description: "Soft and comfortable carpet for cozy living spaces and bedrooms.",
  },
  {
    id: 15,
    name: "Bamboo Flooring",
    specs: [
      { name: "Material", value: "Bamboo" },
      { name: "Finish", value: "Natural" },
      { name: "Thickness", value: "1/2 inch" },
      { name: "Usage", value: "Eco-friendly spaces" },
    ],
    price: 6.99,
    image: "https://images.unsplash.com/photo-1603883055407-968560f7522a",
    description: "Sustainable bamboo flooring for environmentally conscious homeowners.",
  },
  {
    id: 16,
    name: "Tile Flooring",
    specs: [
      { name: "Material", value: "Porcelain" },
      { name: "Finish", value: "Matte" },
      { name: "Size", value: "24x24 inches" },
      { name: "Usage", value: "Kitchens, bathrooms" },
    ],
    price: 5.49,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    description: "Durable porcelain tile flooring for high-moisture areas in your home.",
  },
  {
    id: 17,
    name: "Cork Flooring",
    specs: [
      { name: "Material", value: "Cork" },
      { name: "Finish", value: "Natural" },
      { name: "Thickness", value: "6mm" },
      { name: "Usage", value: "Quiet, eco-friendly spaces" },
    ],
    price: 5.99,
    image: "https://images.unsplash.com/photo-1578500351865-84804c920f79",
    description: "Comfortable cork flooring that absorbs sound and feels warm underfoot.",
  },
  {
    id: 18,
    name: "Concrete Flooring",
    specs: [
      { name: "Material", value: "Polished concrete" },
      { name: "Finish", value: "Smooth" },
      { name: "Usage", value: "Modern interiors" },
      { name: "Durability", value: "High" },
    ],
    price: 8.99,
    image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d",
    description: "Sleek and modern polished concrete flooring for contemporary spaces.",
  },
  {
    id: 19,
    name: "Rubber Flooring",
    specs: [
      { name: "Material", value: "Recycled rubber" },
      { name: "Finish", value: "Textured" },
      { name: "Thickness", value: "8mm" },
      { name: "Usage", value: "Gyms, playrooms" },
    ],
    price: 4.79,
    image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a",
    description: "Durable rubber flooring ideal for gym areas and children's playrooms.",
  },
  {
    id: 20,
    name: "Marble Flooring",
    specs: [
      { name: "Material", value: "Natural marble" },
      { name: "Finish", value: "Polished" },
      { name: "Size", value: "12x12 inches" },
      { name: "Usage", value: "Luxury spaces" },
    ],
    price: 19.99,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    description: "Luxurious natural marble flooring for elegant interior spaces.",
  },
];

const cabinets: Product[] = [
  {
    id: 21,
    name: "Shaker Cabinets",
    specs: [
      { name: "Material", value: "Solid wood" },
      { name: "Finish", value: "Painted" },
      { name: "Style", value: "Minimalist" },
      { name: "Usage", value: "Kitchens, bathrooms" },
    ],
    price: 199.99,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    description: "Classic shaker cabinets with clean lines for modern kitchens and bathrooms.",
  },
  {
    id: 22,
    name: "Flat-Panel Cabinets",
    specs: [
      { name: "Material", value: "MDF" },
      { name: "Finish", value: "Matte" },
      { name: "Style", value: "Modern" },
      { name: "Usage", value: "Contemporary spaces" },
    ],
    price: 149.99,
    image: "https://images.unsplash.com/photo-1556185781-a47769abb7ee",
    description: "Sleek flat-panel cabinets for a contemporary look in modern homes.",
  },
  {
    id: 23,
    name: "Raised-Panel Cabinets",
    specs: [
      { name: "Material", value: "Plywood" },
      { name: "Finish", value: "Stained" },
      { name: "Style", value: "Traditional" },
      { name: "Usage", value: "Classic interiors" },
    ],
    price: 229.99,
    image: "https://images.unsplash.com/photo-1556185779-a47769da7704",
    description: "Traditional raised-panel cabinets with detailed craftsmanship for classic homes.",
  },
  {
    id: 24,
    name: "Glass-Front Cabinets",
    specs: [
      { name: "Material", value: "Wood with glass" },
      { name: "Finish", value: "Glossy" },
      { name: "Style", value: "Elegant" },
      { name: "Usage", value: "Display storage" },
    ],
    price: 249.99,
    image: "https://images.unsplash.com/photo-1583845112203-29329902332e",
    description: "Elegant glass-front cabinets to showcase your fine dishware and collectibles.",
  },
  {
    id: 25,
    name: "Open Shelving Cabinets",
    specs: [
      { name: "Material", value: "Metal and wood" },
      { name: "Finish", value: "Natural" },
      { name: "Style", value: "Industrial" },
      { name: "Usage", value: "Modern kitchens" },
    ],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    description: "Industrial-style open shelving for displaying items in contemporary kitchens.",
  },
  {
    id: 26,
    name: "Custom Cabinets",
    specs: [
      { name: "Material", value: "Any (customizable)" },
      { name: "Finish", value: "Custom" },
      { name: "Style", value: "Personalized" },
      { name: "Usage", value: "Tailored spaces" },
    ],
    price: 399.99,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
    description: "Custom cabinets designed to your exact specifications and space requirements.",
  },
  {
    id: 27,
    name: "Pantry Cabinets",
    specs: [
      { name: "Material", value: "Plywood" },
      { name: "Finish", value: "Painted" },
      { name: "Style", value: "Functional" },
      { name: "Usage", value: "Storage solutions" },
    ],
    price: 279.99,
    image: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5",
    description: "Practical pantry cabinets with adjustable shelving for optimal food storage.",
  },
  {
    id: 28,
    name: "Corner Cabinets",
    specs: [
      { name: "Material", value: "Wood" },
      { name: "Finish", value: "Stained" },
      { name: "Style", value: "Space-saving" },
      { name: "Usage", value: "Small kitchens" },
    ],
    price: 189.99,
    image: "https://images.unsplash.com/photo-1609799693879-18282edbd105",
    description: "Space-efficient corner cabinets to maximize storage in compact kitchens.",
  },
  {
    id: 29,
    name: "Base Cabinets",
    specs: [
      { name: "Material", value: "Plywood" },
      { name: "Finish", value: "Matte" },
      { name: "Style", value: "Functional" },
      { name: "Usage", value: "Kitchen countertops" },
    ],
    price: 169.99,
    image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d",
    description: "Sturdy base cabinets providing support for countertops with storage below.",
  },
  {
    id: 30,
    name: "Wall Cabinets",
    specs: [
      { name: "Material", value: "MDF" },
      { name: "Finish", value: "Glossy" },
      { name: "Style", value: "Sleek" },
      { name: "Usage", value: "Over-counter storage" },
    ],
    price: 149.99,
    image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77",
    description: "Upper wall cabinets with various height options for convenient storage access.",
  },
];

const sinks: Product[] = [
  {
    id: 31,
    name: "Undermount Sink",
    specs: [
      { name: "Material", value: "Stainless steel" },
      { name: "Size", value: "30x18 inches" },
      { name: "Finish", value: "Brushed" },
      { name: "Usage", value: "Kitchens" },
    ],
    price: 199.99,
    image: "https://images.unsplash.com/photo-1615474634824-f4a7562178df",
    description: "Modern undermount sink that provides a seamless countertop appearance.",
  },
  {
    id: 32,
    name: "Farmhouse Sink",
    specs: [
      { name: "Material", value: "Fireclay" },
      { name: "Size", value: "36x20 inches" },
      { name: "Finish", value: "Glossy" },
      { name: "Usage", value: "Rustic kitchens" },
    ],
    price: 349.99,
    image: "https://images.unsplash.com/photo-1556911073-38141963c9e0",
    description: "Classic farmhouse sink with exposed front for rustic kitchen designs.",
  },
  {
    id: 33,
    name: "Drop-In Sink",
    specs: [
      { name: "Material", value: "Granite" },
      { name: "Size", value: "33x22 inches" },
      { name: "Finish", value: "Matte" },
      { name: "Usage", value: "Modern kitchens" },
    ],
    price: 249.99,
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab",
    description: "Easy-to-install drop-in sink with a contemporary granite finish.",
  },
  {
    id: 34,
    name: "Bar Sink",
    specs: [
      { name: "Material", value: "Stainless steel" },
      { name: "Size", value: "15x15 inches" },
      { name: "Finish", value: "Polished" },
      { name: "Usage", value: "Wet bars" },
    ],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    description: "Compact bar sink ideal for entertainment areas and wet bars.",
  },
  {
    id: 35,
    name: "Pedestal Sink",
    specs: [
      { name: "Material", value: "Porcelain" },
      { name: "Size", value: "20x18 inches" },
      { name: "Finish", value: "Glossy" },
      { name: "Usage", value: "Bathrooms" },
    ],
    price: 179.99,
    image: "https://images.unsplash.com/photo-1620626011879-2c29c04ada5c",
    description: "Space-saving pedestal sink with classic styling for bathrooms.",
  },
  {
    id: 36,
    name: "Vessel Sink",
    specs: [
      { name: "Material", value: "Glass" },
      { name: "Size", value: "16x16 inches" },
      { name: "Finish", value: "Translucent" },
      { name: "Usage", value: "Modern bathrooms" },
    ],
    price: 219.99,
    image: "https://images.unsplash.com/photo-1507130669-2ebb5fce9669",
    description: "Contemporary vessel sink that sits above the counter for a designer look.",
  },
  {
    id: 37,
    name: "Wall-Mounted Sink",
    specs: [
      { name: "Material", value: "Ceramic" },
      { name: "Size", value: "24x18 inches" },
      { name: "Finish", value: "Matte" },
      { name: "Usage", value: "Small bathrooms" },
    ],
    price: 159.99,
    image: "https://images.unsplash.com/photo-1584622786178-cbc926d8ccc5",
    description: "Space-efficient wall-mounted sink ideal for compact bathroom spaces.",
  },
  {
    id: 38,
    name: "Double Bowl Sink",
    specs: [
      { name: "Material", value: "Stainless steel" },
      { name: "Size", value: "36x22 inches" },
      { name: "Finish", value: "Brushed" },
      { name: "Usage", value: "Kitchens" },
    ],
    price: 279.99,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    description: "Practical double bowl sink for separating washing and food preparation tasks.",
  },
  {
    id: 39,
    name: "Corner Sink",
    specs: [
      { name: "Material", value: "Acrylic" },
      { name: "Size", value: "24x24 inches" },
      { name: "Finish", value: "Glossy" },
      { name: "Usage", value: "Space-saving kitchens" },
    ],
    price: 149.99,
    image: "https://images.unsplash.com/photo-1576675784201-0e142b423952",
    description: "Space-efficient corner sink designed for kitchens with limited counter space.",
  },
  {
    id: 40,
    name: "Apron Sink",
    specs: [
      { name: "Material", value: "Cast iron" },
      { name: "Size", value: "30x20 inches" },
      { name: "Finish", value: "Enamel" },
      { name: "Usage", value: "Farmhouse kitchens" },
    ],
    price: 329.99,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa",
    description: "Durable cast iron apron sink with timeless appeal for farmhouse-style kitchens.",
  },
];

const vanities: Product[] = [
  {
    id: 41,
    name: "Single Sink Vanity",
    specs: [
      { name: "Material", value: "Wood" },
      { name: "Size", value: "36x21 inches" },
      { name: "Finish", value: "Painted" },
      { name: "Usage", value: "Bathrooms" },
    ],
    price: 399.99,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    description: "Classic single sink vanity with storage for standard bathroom spaces.",
  },
  {
    id: 42,
    name: "Double Sink Vanity",
    specs: [
      { name: "Material", value: "MDF" },
      { name: "Size", value: "60x22 inches" },
      { name: "Finish", value: "Stained" },
      { name: "Usage", value: "Master bathrooms" },
    ],
    price: 649.99,
    image: "https://images.unsplash.com/photo-1569597970193-2d8a980f752f",
    description: "Spacious double sink vanity ideal for master bathrooms and shared spaces.",
  },
  {
    id: 43,
    name: "Floating Vanity",
    specs: [
      { name: "Material", value: "Plywood" },
      { name: "Size", value: "48x20 inches" },
      { name: "Finish", value: "Matte" },
      { name: "Usage", value: "Modern bathrooms" },
    ],
    price: 499.99,
    image: "https://images.unsplash.com/photo-1603072388139-565853992816",
    description: "Contemporary wall-mounted vanity for a sleek, space-enhancing bathroom design.",
  },
  {
    id: 44,
    name: "Corner Vanity",
    specs: [
      { name: "Material", value: "Wood" },
      { name: "Size", value: "32x32 inches" },
      { name: "Finish", value: "Glossy" },
      { name: "Usage", value: "Small bathrooms" },
    ],
    price: 349.99,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    description: "Space-saving corner vanity designed for small bathroom layouts.",
  },
  {
    id: 45,
    name: "Wall-Mounted Vanity",
    specs: [
      { name: "Material", value: "Metal and wood" },
      { name: "Size", value: "24x18 inches" },
      { name: "Finish", value: "Brushed" },
      { name: "Usage", value: "Compact spaces" },
    ],
    price: 299.99,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    description: "Modern wall-hung vanity that creates visual space in compact bathrooms.",
  },
  {
    id: 46,
    name: "Freestanding Vanity",
    specs: [
      { name: "Material", value: "Solid wood" },
      { name: "Size", value: "48x22 inches" },
      { name: "Finish", value: "Natural" },
      { name: "Usage", value: "Traditional bathrooms" },
    ],
    price: 549.99,
    image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    description: "Classic freestanding vanity with furniture-style design for traditional bathrooms.",
  },
  {
    id: 47,
    name: "Vessel Sink Vanity",
    specs: [
      { name: "Material", value: "Glass and wood" },
      { name: "Size", value: "36x21 inches" },
      { name: "Finish", value: "Glossy" },
      { name: "Usage", value: "Modern bathrooms" },
    ],
    price: 449.99,
    image: "https://images.unsplash.com/photo-1604014438553-872dfe2bb908",
    description: "Stylish vanity designed specifically for vessel sink installation.",
  },
  {
    id: 48,
    name: "Medicine Cabinet Vanity",
    specs: [
      { name: "Material", value: "Wood and mirror" },
      { name: "Size", value: "30x24 inches" },
      { name: "Finish", value: "Painted" },
      { name: "Usage", value: "Functional storage" },
    ],
    price: 379.99,
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9",
    description: "Practical vanity with integrated medicine cabinet for additional storage space.",
  },
  {
    id: 49,
    name: "Custom Vanity",
    specs: [
      { name: "Material", value: "Customizable" },
      { name: "Size", value: "Any" },
      { name: "Finish", value: "Custom" },
      { name: "Usage", value: "Tailored bathrooms" },
    ],
    price: 799.99,
    image: "https://images.unsplash.com/photo-1564540583246-934409427276",
    description: "Custom-built vanity tailored to your specific bathroom layout and style preferences.",
  },
  {
    id: 50,
    name: "Antique Vanity",
    specs: [
      { name: "Material", value: "Reclaimed wood" },
      { name: "Size", value: "42x22 inches" },
      { name: "Finish", value: "Distressed" },
      { name: "Usage", value: "Vintage bathrooms" },
    ],
    price: 599.99,
    image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1",
    description: "Vintage-inspired vanity with distressed finish for a charming bathroom aesthetic.",
  },
];

const HomeImprovementProducts = () => {
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  const renderProducts = (products: Product[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
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
            <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg dark:text-white">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
              {product.description}
            </p>
            
            <div className="mt-2">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    <Info className="h-3 w-3 mr-1" /> Specifications
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Product Specifications</h4>
                    <div className="text-sm space-y-1">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">{spec.name}:</span>
                          <span className="font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
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
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-16 pb-16">
        {/* Banner */}
        <div className="relative h-[200px] md:h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1556909114-44e3e9399a2c"
            alt="Home Improvement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Home Improvement Products</h1>
              <p className="text-xl text-white mt-2">Everything you need for your renovation projects</p>
            </div>
          </div>
        </div>

        {/* Products Tabs */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="tiles" className="space-y-8">
            <TabsList className="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0">
              <TabsTrigger value="tiles">Tiles</TabsTrigger>
              <TabsTrigger value="flooring">Flooring</TabsTrigger>
              <TabsTrigger value="cabinets">Cabinets</TabsTrigger>
              <TabsTrigger value="sinks">Sinks</TabsTrigger>
              <TabsTrigger value="vanities">Vanities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tiles" className="pt-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Tile Products</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our selection of premium tiles for kitchens, bathrooms, and decorative spaces.
              </p>
              {renderProducts(tiles)}
            </TabsContent>
            
            <TabsContent value="flooring" className="pt-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Flooring Options</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover our range of high-quality flooring solutions for every room in your home.
              </p>
              {renderProducts(flooring)}
            </TabsContent>
            
            <TabsContent value="cabinets" className="pt-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Kitchen & Bathroom Cabinets</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Beautiful and functional cabinets to maximize your storage space.
              </p>
              {renderProducts(cabinets)}
            </TabsContent>
            
            <TabsContent value="sinks" className="pt-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Kitchen & Bathroom Sinks</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Premium sinks for your kitchen and bathroom renovation projects.
              </p>
              {renderProducts(sinks)}
            </TabsContent>
            
            <TabsContent value="vanities" className="pt-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Bathroom Vanities</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stylish and practical bathroom vanities for every home design style.
              </p>
              {renderProducts(vanities)}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeImprovementProducts;
