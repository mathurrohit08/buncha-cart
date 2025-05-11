
import { useState, useEffect } from 'react';

// Enhanced version with better fallbacks and error handling
export const useProductImage = (imageUrl: string, fallbackUrl: string = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350") => {
  const [imgSrc, setImgSrc] = useState('');  // Start with empty to show skeleton
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // List of common fallbacks by category
  const categoryFallbacks = {
    electronics: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350",
    furniture: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&h=350",
    clothing: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=500&h=350",
    books: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=500&h=350",
    jewelry: "https://images.unsplash.com/photo-1573408301835-d9903dbef1f7?auto=format&fit=crop&w=500&h=350"
  };

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    
    // Don't try to load empty URLs
    if (!imageUrl) {
      setImgSrc(fallbackUrl);
      setIsLoading(false);
      setHasError(true);
      return;
    }
    
    // Preload image
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      setImgSrc(imageUrl);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setImgSrc(fallbackUrl);
      setHasError(true);
      setIsLoading(false);
      console.log(`Image failed to load: ${imageUrl}, using fallback`);
    };
    
    // Set a timeout in case the image takes too long to load
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setImgSrc(fallbackUrl);
        setIsLoading(false);
        setHasError(true);
        console.log(`Image load timeout: ${imageUrl}, using fallback`);
      }
    }, 5000);
    
    return () => {
      img.onload = null;
      img.onerror = null;
      clearTimeout(timeoutId);
    };
  }, [imageUrl, fallbackUrl]);

  return { imgSrc, isLoading, hasError };
};
