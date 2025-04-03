
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductFiltersSidebar } from './ProductFiltersSidebar';
import { ProductCard } from './ProductCard';
import { SortOptionsMenu } from './SortOptionsMenu';
import { ViewOptionsMenu } from './ViewOptionsMenu';

interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  tags: string[];
  brand: string;
  isNew?: boolean;
  isHot?: boolean;
  isSale?: boolean;
}

interface CategoryPageTemplateProps {
  categoryName: string;
  products: Product[];
  bannerImage?: string;
}

export function CategoryPageTemplate({ categoryName, products, bannerImage }: CategoryPageTemplateProps) {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = React.useState<string>('featured');

  // Fallback image for banner if it fails to load
  const defaultBannerImage = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&h=300";

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Banner */}
      <div className="relative h-[200px] md:h-[300px] mb-8 rounded-lg overflow-hidden">
        <img 
          src={bannerImage || defaultBannerImage} 
          alt={categoryName}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = defaultBannerImage;
          }}
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          <Button 
            variant="outline" 
            className="bg-white hover:bg-gray-100 text-gray-900 mb-4 self-start"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{categoryName}</h1>
          <p className="text-white/80 mt-2">
            {products.length} products
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <ProductFiltersSidebar />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort and View Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-xl font-semibold">{categoryName} Products</h2>
            <div className="flex items-center space-x-2">
              <SortOptionsMenu 
                value={sortOption}
                onValueChange={setSortOption}
              />
              <ViewOptionsMenu 
                value={viewMode}
                onValueChange={setViewMode as (value: string) => void}
              />
            </div>
          </div>

          {/* Products */}
          {products.length > 0 ? (
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your filters or check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
