
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

// Improved distance estimation between zip codes
// Uses a more realistic algorithm based on zip code differences
export const estimateDistanceByZipCode = (storeZip: string, customerZip: string): number => {
  if (!customerZip) return 0;
  
  // For US zip codes
  if (customerZip.length === 5 && /^\d+$/.test(customerZip)) {
    const storeNum = parseInt(storeZip.substring(0, 3));
    const customerNum = parseInt(customerZip.substring(0, 3));
    
    // More realistic calculation with regional multipliers
    const difference = Math.abs(storeNum - customerNum);
    
    // Adjust distance based on first digit (region)
    const regionMultiplier = Math.abs(parseInt(storeZip[0]) - parseInt(customerZip[0])) + 1;
    return difference * 12 * regionMultiplier; 
  }
  
  // For international or other format postal codes
  // Use a simpler calculation based on string comparison
  let distance = 0;
  for (let i = 0; i < Math.min(storeZip.length, customerZip.length); i++) {
    distance += Math.abs(storeZip.charCodeAt(i) - customerZip.charCodeAt(i));
  }
  
  // Make sure international shipping is appropriately high
  return Math.max(distance * 5, 800);
};

// Store zip code (Empire State Building, NY)
export const STORE_ZIP_CODE = "10001";
export const STORE_ADDRESS = "Empire State Building, 20 W 34th St, New York, NY 10001, USA";
