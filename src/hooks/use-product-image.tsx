
import { useState, useEffect } from 'react';

export const useProductImage = (imageUrl: string, fallbackUrl: string = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350") => {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    
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
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl, fallbackUrl]);

  return { imgSrc, isLoading, hasError };
};
