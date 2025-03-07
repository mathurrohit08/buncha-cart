
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
  // This is a simplified mock implementation
  // In reality, you'd use a proper geocoding API
  if (!customerZip) return 0;
  
  const storeNum = parseInt(storeZip.substring(0, 3));
  const customerNum = parseInt(customerZip.substring(0, 3));
  
  // Simple mock calculation - difference in first 3 digits * 10 miles
  const difference = Math.abs(storeNum - customerNum);
  return difference * 10; 
};

// Store zip code
export const STORE_ZIP_CODE = "10001"; // New York

// Country data
export type Country = {
  name: string;
  code: string;
  states: State[];
};

export type State = {
  name: string;
  code: string;
  cities: City[];
};

export type City = {
  name: string;
  zipCodes: string[];
};

// Mock country, state, and city data with related postal codes
export const countries: Country[] = [
  {
    name: "United States",
    code: "US",
    states: [
      {
        name: "New York",
        code: "NY",
        cities: [
          { name: "New York City", zipCodes: ["10001", "10002", "10003", "10004", "10005"] },
          { name: "Buffalo", zipCodes: ["14201", "14202", "14203", "14204", "14205"] },
          { name: "Albany", zipCodes: ["12201", "12202", "12203", "12204", "12205"] }
        ]
      },
      {
        name: "California",
        code: "CA",
        cities: [
          { name: "Los Angeles", zipCodes: ["90001", "90002", "90003", "90004", "90005"] },
          { name: "San Francisco", zipCodes: ["94101", "94102", "94103", "94104", "94105"] },
          { name: "San Diego", zipCodes: ["92101", "92102", "92103", "92104", "92105"] }
        ]
      },
      {
        name: "Texas",
        code: "TX",
        cities: [
          { name: "Houston", zipCodes: ["77001", "77002", "77003", "77004", "77005"] },
          { name: "Dallas", zipCodes: ["75201", "75202", "75203", "75204", "75205"] },
          { name: "Austin", zipCodes: ["73301", "73344", "78701", "78702", "78703"] }
        ]
      }
    ]
  },
  {
    name: "Canada",
    code: "CA",
    states: [
      {
        name: "Ontario",
        code: "ON",
        cities: [
          { name: "Toronto", zipCodes: ["M5V 2A8", "M5V 2B5", "M5V 3G4", "M5V 3L9"] },
          { name: "Ottawa", zipCodes: ["K1P 1J1", "K1P 5G3", "K1P 6L2", "K2P 2G3"] },
          { name: "Hamilton", zipCodes: ["L8P 1N3", "L8P 2V6", "L8P 4S8", "L8S 1A2"] }
        ]
      },
      {
        name: "British Columbia",
        code: "BC",
        cities: [
          { name: "Vancouver", zipCodes: ["V5K 0A1", "V5K 0A2", "V5K 0A5", "V5K 0A6"] },
          { name: "Victoria", zipCodes: ["V8V 1A1", "V8V 1B1", "V8V 1C5", "V8V 1L1"] },
          { name: "Kelowna", zipCodes: ["V1Y 1Z7", "V1Y 2A5", "V1Y 2C7", "V1Y 4A4"] }
        ]
      }
    ]
  },
  {
    name: "United Kingdom",
    code: "UK",
    states: [
      {
        name: "England",
        code: "ENG",
        cities: [
          { name: "London", zipCodes: ["W1A 1AA", "E1 6AN", "EC1A 1BB", "SE1 0SW"] },
          { name: "Manchester", zipCodes: ["M1 1AA", "M1 1AH", "M1 2BS", "M1 3DG"] },
          { name: "Birmingham", zipCodes: ["B1 1AA", "B1 1HQ", "B1 2ND", "B2 4QA"] }
        ]
      },
      {
        name: "Scotland",
        code: "SCO",
        cities: [
          { name: "Edinburgh", zipCodes: ["EH1 1BB", "EH1 2NG", "EH2 1JE", "EH3 9SR"] },
          { name: "Glasgow", zipCodes: ["G1 1AD", "G1 1XN", "G2 1AL", "G2 2JZ"] },
          { name: "Aberdeen", zipCodes: ["AB10 1AA", "AB10 6RN", "AB11 5PS", "AB11 6LR"] }
        ]
      }
    ]
  }
];

export const findLocationByZipCode = (zipCode: string) => {
  for (const country of countries) {
    for (const state of country.states) {
      for (const city of city.cities) {
        if (city.zipCodes.includes(zipCode)) {
          return { country, state, city };
        }
      }
    }
  }
  return null;
};

// Auto-detect method to get city and state from zip code
export const getLocationFromZipCode = (zipCode: string): { city: string, state: string, country: string } | null => {
  for (const country of countries) {
    for (const state of country.states) {
      for (const city of state.cities) {
        if (city.zipCodes.includes(zipCode)) {
          return {
            city: city.name,
            state: state.name,
            country: country.name
          };
        }
      }
    }
  }
  return null;
};
