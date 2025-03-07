
export type ShippingTier = {
  minMiles: number;
  maxMiles: number;
  cost: number;
  description: string;
};

export const shippingTiers: ShippingTier[] = [
  { minMiles: 0, maxMiles: 50, cost: 0, description: "Free Shipping (0-50 miles)" },
  { minMiles: 51, maxMiles: 200, cost: 49, description: "Standard Shipping (51-200 miles)" },
  { minMiles: 201, maxMiles: 300, cost: 99, description: "Express Shipping (201-300 miles)" },
  { minMiles: 301, maxMiles: 500, cost: 249, description: "Premium Shipping (301-500 miles)" },
  { minMiles: 501, maxMiles: 1000, cost: 999, description: "Long Distance Shipping (501-1000 miles)" },
  { minMiles: 1001, maxMiles: Infinity, cost: 1499, description: "International Shipping (1000+ miles)" }
];

export const calculateShippingCost = (distanceInMiles: number): ShippingTier => {
  const tier = shippingTiers.find(
    tier => distanceInMiles >= tier.minMiles && distanceInMiles <= tier.maxMiles
  );
  
  return tier || shippingTiers[shippingTiers.length - 1];
};

// Simple function to estimate distance between zip codes
// In a real application, this would use a geocoding API
export const estimateDistanceByZipCode = (storeZip: string, customerZip: string): number => {
  // This is a very simplified mock implementation
  // In reality, you'd use a proper geocoding API
  const storeNum = parseInt(storeZip.substring(0, 3));
  const customerNum = parseInt(customerZip.substring(0, 3));
  
  // Simple mock calculation - difference in first 3 digits * 10 miles
  const difference = Math.abs(storeNum - customerNum);
  return difference * 10; 
};

// Store zip code
export const STORE_ZIP_CODE = "10001"; // New York
