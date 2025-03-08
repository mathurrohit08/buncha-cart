
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

// More realistic addresses from different states
export const savedAddresses = [
  {
    id: 1,
    name: "Home",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "123 Main St",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201",
    country: "United States",
    default: true
  },
  {
    id: 2,
    name: "Work",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "456 Market St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "United States",
    default: false
  },
  {
    id: 3,
    name: "Parents",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "789 Oak Drive",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    country: "United States",
    default: false
  },
  {
    id: 4,
    name: "Vacation Home",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "555 Beach Blvd",
    city: "Miami",
    state: "FL",
    zipCode: "33101",
    country: "United States",
    default: false
  },
  {
    id: 5,
    name: "International",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "42 Oxford Street",
    city: "London",
    state: "England",
    zipCode: "W1D 1LY",
    country: "United Kingdom",
    default: false
  }
];

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

// Extended country, state, and city data with related postal codes
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
          { name: "Brooklyn", zipCodes: ["11201", "11202", "11203", "11204", "11205"] },
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
          { name: "San Diego", zipCodes: ["92101", "92102", "92103", "92104", "92105"] },
          { name: "Sacramento", zipCodes: ["94203", "94204", "94205", "94206", "94207"] }
        ]
      },
      {
        name: "Texas",
        code: "TX",
        cities: [
          { name: "Houston", zipCodes: ["77001", "77002", "77003", "77004", "77005"] },
          { name: "Dallas", zipCodes: ["75201", "75202", "75203", "75204", "75205"] },
          { name: "Austin", zipCodes: ["73301", "73344", "78701", "78702", "78703"] },
          { name: "San Antonio", zipCodes: ["78201", "78202", "78203", "78204", "78205"] }
        ]
      },
      {
        name: "Florida",
        code: "FL",
        cities: [
          { name: "Miami", zipCodes: ["33101", "33102", "33103", "33104", "33105"] },
          { name: "Orlando", zipCodes: ["32801", "32802", "32803", "32804", "32805"] },
          { name: "Tampa", zipCodes: ["33601", "33602", "33603", "33604", "33605"] },
          { name: "Jacksonville", zipCodes: ["32201", "32202", "32203", "32204", "32205"] }
        ]
      },
      {
        name: "Illinois",
        code: "IL",
        cities: [
          { name: "Chicago", zipCodes: ["60601", "60602", "60603", "60604", "60605"] },
          { name: "Springfield", zipCodes: ["62701", "62702", "62703", "62704", "62705"] },
          { name: "Peoria", zipCodes: ["61601", "61602", "61603", "61604", "61605"] },
          { name: "Rockford", zipCodes: ["61101", "61102", "61103", "61104", "61105"] }
        ]
      },
      // Additional states
      {
        name: "Washington",
        code: "WA",
        cities: [
          { name: "Seattle", zipCodes: ["98101", "98102", "98103", "98104", "98105"] },
          { name: "Tacoma", zipCodes: ["98401", "98402", "98403", "98404", "98405"] },
          { name: "Spokane", zipCodes: ["99201", "99202", "99203", "99204", "99205"] },
          { name: "Olympia", zipCodes: ["98501", "98502", "98503", "98504", "98505"] }
        ]
      },
      {
        name: "Massachusetts",
        code: "MA",
        cities: [
          { name: "Boston", zipCodes: ["02108", "02109", "02110", "02111", "02112"] },
          { name: "Cambridge", zipCodes: ["02138", "02139", "02140", "02141", "02142"] },
          { name: "Worcester", zipCodes: ["01601", "01602", "01603", "01604", "01605"] },
          { name: "Springfield", zipCodes: ["01101", "01102", "01103", "01104", "01105"] }
        ]
      },
      {
        name: "Colorado",
        code: "CO",
        cities: [
          { name: "Denver", zipCodes: ["80201", "80202", "80203", "80204", "80205"] },
          { name: "Colorado Springs", zipCodes: ["80901", "80902", "80903", "80904", "80905"] },
          { name: "Boulder", zipCodes: ["80301", "80302", "80303", "80304", "80305"] },
          { name: "Fort Collins", zipCodes: ["80521", "80522", "80523", "80524", "80525"] }
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
          { name: "Hamilton", zipCodes: ["L8P 1N3", "L8P 2V6", "L8P 4S8", "L8S 1A2"] },
          { name: "Mississauga", zipCodes: ["L5B 2C9", "L5B 3C2", "L5B 4J2", "L5C 1T8"] }
        ]
      },
      {
        name: "British Columbia",
        code: "BC",
        cities: [
          { name: "Vancouver", zipCodes: ["V5K 0A1", "V5K 0A2", "V5K 0A5", "V5K 0A6"] },
          { name: "Victoria", zipCodes: ["V8V 1A1", "V8V 1B1", "V8V 1C5", "V8V 1L1"] },
          { name: "Kelowna", zipCodes: ["V1Y 1Z7", "V1Y 2A5", "V1Y 2C7", "V1Y 4A4"] },
          { name: "Surrey", zipCodes: ["V3T 1V1", "V3T 1Z2", "V3V 1A1", "V3V 3N9"] }
        ]
      },
      {
        name: "Quebec",
        code: "QC",
        cities: [
          { name: "Montreal", zipCodes: ["H2X 1Y2", "H2Y 1Z2", "H3B 2Y3", "H3B 3H1"] },
          { name: "Quebec City", zipCodes: ["G1R 1N3", "G1R 2J4", "G1R 4P6", "G1V 2M2"] },
          { name: "Laval", zipCodes: ["H7S 1L4", "H7S 2M5", "H7S 2N6", "H7T 1C8"] },
          { name: "Gatineau", zipCodes: ["J8P 1S2", "J8P 3T5", "J8T 1V2", "J8T 6H8"] }
        ]
      },
      {
        name: "Alberta",
        code: "AB",
        cities: [
          { name: "Calgary", zipCodes: ["T2P 1J9", "T2P 3C5", "T2P 5G3", "T3H 5H1"] },
          { name: "Edmonton", zipCodes: ["T5J 0N3", "T5J 1R7", "T5K 0L5", "T5K 2J6"] },
          { name: "Red Deer", zipCodes: ["T4N 0G1", "T4N 1M7", "T4N 3M6", "T4N 6V8"] },
          { name: "Lethbridge", zipCodes: ["T1J 0N9", "T1J 4P4", "T1K 2R3", "T1K 7G3"] }
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
          { name: "Birmingham", zipCodes: ["B1 1AA", "B1 1HQ", "B1 2ND", "B2 4QA"] },
          { name: "Liverpool", zipCodes: ["L1 0AA", "L2 2DP", "L3 5QF", "L4 0TH"] }
        ]
      },
      {
        name: "Scotland",
        code: "SCO",
        cities: [
          { name: "Edinburgh", zipCodes: ["EH1 1BB", "EH1 2NG", "EH2 1JE", "EH3 9SR"] },
          { name: "Glasgow", zipCodes: ["G1 1AD", "G1 1XN", "G2 1AL", "G2 2JZ"] },
          { name: "Aberdeen", zipCodes: ["AB10 1AA", "AB10 6RN", "AB11 5PS", "AB11 6LR"] },
          { name: "Dundee", zipCodes: ["DD1 1DB", "DD1 4QB", "DD3 6PW", "DD4 9FF"] }
        ]
      },
      {
        name: "Wales",
        code: "WLS",
        cities: [
          { name: "Cardiff", zipCodes: ["CF10 1EP", "CF10 2HQ", "CF10 3NB", "CF10 5AL"] },
          { name: "Swansea", zipCodes: ["SA1 1DP", "SA1 3LQ", "SA1 4PQ", "SA1 5DF"] },
          { name: "Newport", zipCodes: ["NP10 8QQ", "NP10 9LZ", "NP18 1AF", "NP20 2BP"] },
          { name: "Wrexham", zipCodes: ["LL11 1AF", "LL12 7YH", "LL13 8BY", "LL14 2WD"] }
        ]
      }
    ]
  },
  // Additional countries
  {
    name: "Australia",
    code: "AU",
    states: [
      {
        name: "New South Wales",
        code: "NSW",
        cities: [
          { name: "Sydney", zipCodes: ["2000", "2001", "2002", "2003", "2004"] },
          { name: "Newcastle", zipCodes: ["2300", "2301", "2302", "2303", "2304"] },
          { name: "Wollongong", zipCodes: ["2500", "2501", "2502", "2503", "2504"] },
          { name: "Byron Bay", zipCodes: ["2481", "2482", "2483", "2484", "2485"] }
        ]
      },
      {
        name: "Victoria",
        code: "VIC",
        cities: [
          { name: "Melbourne", zipCodes: ["3000", "3001", "3002", "3003", "3004"] },
          { name: "Geelong", zipCodes: ["3220", "3221", "3222", "3223", "3224"] },
          { name: "Ballarat", zipCodes: ["3350", "3351", "3352", "3353", "3354"] },
          { name: "Bendigo", zipCodes: ["3550", "3551", "3552", "3553", "3554"] }
        ]
      }
    ]
  },
  {
    name: "Germany",
    code: "DE",
    states: [
      {
        name: "Bavaria",
        code: "BY",
        cities: [
          { name: "Munich", zipCodes: ["80331", "80333", "80335", "80336", "80337"] },
          { name: "Nuremberg", zipCodes: ["90402", "90403", "90404", "90405", "90406"] },
          { name: "Augsburg", zipCodes: ["86150", "86152", "86153", "86154", "86156"] },
          { name: "Regensburg", zipCodes: ["93047", "93049", "93051", "93053", "93055"] }
        ]
      },
      {
        name: "Berlin",
        code: "BE",
        cities: [
          { name: "Berlin", zipCodes: ["10115", "10117", "10119", "10178", "10179"] }
        ]
      }
    ]
  },
  {
    name: "France",
    code: "FR",
    states: [
      {
        name: "Île-de-France",
        code: "IDF",
        cities: [
          { name: "Paris", zipCodes: ["75001", "75002", "75003", "75004", "75005"] },
          { name: "Versailles", zipCodes: ["78000", "78001", "78002", "78003", "78004"] }
        ]
      },
      {
        name: "Provence-Alpes-Côte d'Azur",
        code: "PACA",
        cities: [
          { name: "Nice", zipCodes: ["06000", "06100", "06200", "06300", "06400"] },
          { name: "Marseille", zipCodes: ["13001", "13002", "13003", "13004", "13005"] }
        ]
      }
    ]
  },
  {
    name: "Japan",
    code: "JP",
    states: [
      {
        name: "Tokyo",
        code: "TK",
        cities: [
          { name: "Shibuya", zipCodes: ["150-0002", "150-0011", "150-0012", "150-0013", "150-0031"] },
          { name: "Shinjuku", zipCodes: ["160-0001", "160-0004", "160-0005", "160-0006", "160-0007"] }
        ]
      },
      {
        name: "Osaka",
        code: "OS",
        cities: [
          { name: "Osaka City", zipCodes: ["530-0001", "530-0002", "530-0003", "530-0004", "530-0005"] },
          { name: "Sakai", zipCodes: ["590-0801", "590-0802", "590-0803", "590-0804", "590-0805"] }
        ]
      }
    ]
  },
  {
    name: "Brazil",
    code: "BR",
    states: [
      {
        name: "São Paulo",
        code: "SP",
        cities: [
          { name: "São Paulo City", zipCodes: ["01001-000", "01002-000", "01003-000", "01004-000", "01005-000"] },
          { name: "Campinas", zipCodes: ["13010-000", "13011-000", "13012-000", "13013-000", "13014-000"] }
        ]
      },
      {
        name: "Rio de Janeiro",
        code: "RJ",
        cities: [
          { name: "Rio de Janeiro City", zipCodes: ["20000-000", "20001-000", "20002-000", "20003-000", "20004-000"] },
          { name: "Niterói", zipCodes: ["24000-000", "24001-000", "24002-000", "24003-000", "24004-000"] }
        ]
      }
    ]
  },
  {
    name: "South Korea",
    code: "KR",
    states: [
      {
        name: "Seoul",
        code: "SL",
        cities: [
          { name: "Gangnam", zipCodes: ["06000", "06001", "06002", "06003", "06004"] },
          { name: "Myeongdong", zipCodes: ["04527", "04528", "04529", "04530", "04531"] }
        ]
      },
      {
        name: "Busan",
        code: "BS",
        cities: [
          { name: "Haeundae", zipCodes: ["48000", "48001", "48002", "48003", "48004"] },
          { name: "Seomyeon", zipCodes: ["47000", "47001", "47002", "47003", "47004"] }
        ]
      }
    ]
  },
  {
    name: "India",
    code: "IN",
    states: [
      {
        name: "Maharashtra",
        code: "MH",
        cities: [
          { name: "Mumbai", zipCodes: ["400001", "400002", "400003", "400004", "400005"] },
          { name: "Pune", zipCodes: ["411001", "411002", "411003", "411004", "411005"] }
        ]
      },
      {
        name: "Karnataka",
        code: "KA",
        cities: [
          { name: "Bangalore", zipCodes: ["560001", "560002", "560003", "560004", "560005"] },
          { name: "Mysore", zipCodes: ["570001", "570002", "570003", "570004", "570005"] }
        ]
      }
    ]
  }
];

export const findLocationByZipCode = (zipCode: string) => {
  for (const country of countries) {
    for (const state of country.states) {
      for (const cityItem of state.cities) {
        if (cityItem.zipCodes.includes(zipCode)) {
          return { country, state, city: cityItem };
        }
      }
    }
  }
  return null;
};

// Auto-detect method to get city and state from zip code
export const getLocationFromZipCode = (zipCode: string): { city: string, state: string, country: string } | null => {
  const location = findLocationByZipCode(zipCode);
  if (location) {
    return {
      city: location.city.name,
      state: location.state.name,
      country: location.country.name
    };
  }
  return null;
};
