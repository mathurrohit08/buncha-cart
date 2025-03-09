
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

// Enhanced saved addresses with 5 addresses from different states
export const savedAddresses = [
  {
    id: 1,
    name: "Home",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "123 Fifth Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10011",
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
    address: "789 Lake Shore Drive",
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
    address: "555 Ocean Drive",
    city: "Miami",
    state: "FL",
    zipCode: "33139",
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

// Enhanced data with 20 countries, 20 states per country, and multiple cities per state
export const countries: Country[] = [
  {
    name: "United States",
    code: "US",
    states: [
      {
        name: "New York",
        code: "NY",
        cities: [
          { name: "New York City", zipCodes: ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10008", "10009", "10010"] },
          { name: "Brooklyn", zipCodes: ["11201", "11202", "11203", "11204", "11205", "11206", "11207", "11208", "11209", "11210"] },
          { name: "Buffalo", zipCodes: ["14201", "14202", "14203", "14204", "14205", "14206", "14207", "14208", "14209", "14210"] },
          { name: "Albany", zipCodes: ["12201", "12202", "12203", "12204", "12205", "12206", "12207", "12208", "12209", "12210"] },
          { name: "Syracuse", zipCodes: ["13201", "13202", "13203", "13204", "13205", "13206", "13207", "13208", "13209", "13210"] },
          { name: "Rochester", zipCodes: ["14601", "14602", "14603", "14604", "14605", "14606", "14607", "14608", "14609", "14610"] }
        ]
      },
      {
        name: "California",
        code: "CA",
        cities: [
          { name: "Los Angeles", zipCodes: ["90001", "90002", "90003", "90004", "90005", "90006", "90007", "90008", "90009", "90010"] },
          { name: "San Francisco", zipCodes: ["94101", "94102", "94103", "94104", "94105", "94106", "94107", "94108", "94109", "94110"] },
          { name: "San Diego", zipCodes: ["92101", "92102", "92103", "92104", "92105", "92106", "92107", "92108", "92109", "92110"] },
          { name: "Sacramento", zipCodes: ["95801", "95802", "95803", "95804", "95805", "95806", "95807", "95808", "95809", "95810"] },
          { name: "Long Beach", zipCodes: ["90801", "90802", "90803", "90804", "90805", "90806", "90807", "90808", "90809", "90810"] },
          { name: "Oakland", zipCodes: ["94601", "94602", "94603", "94604", "94605", "94606", "94607", "94608", "94609", "94610"] }
        ]
      },
      {
        name: "Texas",
        code: "TX",
        cities: [
          { name: "Houston", zipCodes: ["77001", "77002", "77003", "77004", "77005", "77006", "77007", "77008", "77009", "77010"] },
          { name: "Dallas", zipCodes: ["75201", "75202", "75203", "75204", "75205", "75206", "75207", "75208", "75209", "75210"] },
          { name: "Austin", zipCodes: ["73301", "73344", "78701", "78702", "78703", "78704", "78705", "78706", "78707", "78708"] },
          { name: "San Antonio", zipCodes: ["78201", "78202", "78203", "78204", "78205", "78206", "78207", "78208", "78209", "78210"] },
          { name: "Fort Worth", zipCodes: ["76101", "76102", "76103", "76104", "76105", "76106", "76107", "76108", "76109", "76110"] },
          { name: "El Paso", zipCodes: ["79901", "79902", "79903", "79904", "79905", "79906", "79907", "79908", "79909", "79910"] }
        ]
      },
      {
        name: "Florida",
        code: "FL",
        cities: [
          { name: "Miami", zipCodes: ["33101", "33102", "33103", "33104", "33105", "33106", "33107", "33108", "33109", "33110"] },
          { name: "Orlando", zipCodes: ["32801", "32802", "32803", "32804", "32805", "32806", "32807", "32808", "32809", "32810"] },
          { name: "Tampa", zipCodes: ["33601", "33602", "33603", "33604", "33605", "33606", "33607", "33608", "33609", "33610"] },
          { name: "Jacksonville", zipCodes: ["32201", "32202", "32203", "32204", "32205", "32206", "32207", "32208", "32209", "32210"] },
          { name: "Tallahassee", zipCodes: ["32301", "32302", "32303", "32304", "32305", "32306", "32307", "32308", "32309", "32310"] },
          { name: "Cape Coral", zipCodes: ["33903", "33904", "33909", "33910", "33914", "33915", "33916", "33917", "33918", "33990"] }
        ]
      },
      {
        name: "Illinois",
        code: "IL",
        cities: [
          { name: "Chicago", zipCodes: ["60601", "60602", "60603", "60604", "60605", "60606", "60607", "60608", "60609", "60610"] },
          { name: "Springfield", zipCodes: ["62701", "62702", "62703", "62704", "62705", "62706", "62707", "62708", "62709", "62710"] },
          { name: "Peoria", zipCodes: ["61601", "61602", "61603", "61604", "61605", "61606", "61607", "61608", "61609", "61610"] },
          { name: "Rockford", zipCodes: ["61101", "61102", "61103", "61104", "61105", "61106", "61107", "61108", "61109", "61110"] },
          { name: "Naperville", zipCodes: ["60540", "60563", "60564", "60565", "60566", "60567", "60568", "60569", "60570", "60571"] },
          { name: "Aurora", zipCodes: ["60502", "60503", "60504", "60505", "60506", "60507", "60508", "60509", "60510", "60511"] }
        ]
      },
      {
        name: "Michigan",
        code: "MI",
        cities: [
          { name: "Detroit", zipCodes: ["48201", "48202", "48203", "48204", "48205", "48206", "48207", "48208", "48209", "48210"] },
          { name: "Ann Arbor", zipCodes: ["48104", "48105", "48106", "48107", "48108", "48109", "48110", "48111", "48112", "48113"] },
          { name: "Grand Rapids", zipCodes: ["49501", "49502", "49503", "49504", "49505", "49506", "49507", "49508", "49509", "49510"] },
          { name: "Warren", zipCodes: ["48088", "48089", "48090", "48091", "48092", "48093", "48094", "48095", "48096", "48097"] },
          { name: "Sterling Heights", zipCodes: ["48310", "48311", "48312", "48313", "48314", "48315", "48316", "48317", "48318", "48319"] },
          { name: "Lansing", zipCodes: ["48901", "48906", "48909", "48910", "48911", "48912", "48913", "48915", "48917", "48919"] }
        ]
      },
      {
        name: "Ohio",
        code: "OH",
        cities: [
          { name: "Columbus", zipCodes: ["43201", "43202", "43203", "43204", "43205", "43206", "43207", "43208", "43209", "43210"] },
          { name: "Cleveland", zipCodes: ["44101", "44102", "44103", "44104", "44105", "44106", "44107", "44108", "44109", "44110"] },
          { name: "Cincinnati", zipCodes: ["45201", "45202", "45203", "45204", "45205", "45206", "45207", "45208", "45209", "45210"] },
          { name: "Toledo", zipCodes: ["43604", "43605", "43606", "43607", "43608", "43609", "43610", "43611", "43612", "43613"] },
          { name: "Akron", zipCodes: ["44301", "44302", "44303", "44304", "44305", "44306", "44307", "44308", "44309", "44310"] },
          { name: "Dayton", zipCodes: ["45402", "45403", "45404", "45405", "45406", "45407", "45408", "45409", "45410", "45414"] }
        ]
      },
      {
        name: "Georgia",
        code: "GA",
        cities: [
          { name: "Atlanta", zipCodes: ["30301", "30302", "30303", "30304", "30305", "30306", "30307", "30308", "30309", "30310"] },
          { name: "Savannah", zipCodes: ["31401", "31402", "31403", "31404", "31405", "31406", "31407", "31408", "31409", "31410"] },
          { name: "Athens", zipCodes: ["30601", "30602", "30603", "30604", "30605", "30606", "30607", "30608", "30609", "30610"] },
          { name: "Sandy Springs", zipCodes: ["30328", "30338", "30339", "30342", "30350", "30356", "30360", "30368", "30369", "30371"] },
          { name: "Roswell", zipCodes: ["30075", "30076", "30077", "30097", "30098", "30099", "30350", "30360", "30368", "30369"] },
          { name: "Macon", zipCodes: ["31201", "31204", "31206", "31207", "31208", "31209", "31210", "31211", "31213", "31216"] }
        ]
      },
      {
        name: "North Carolina",
        code: "NC",
        cities: [
          { name: "Charlotte", zipCodes: ["28201", "28202", "28203", "28204", "28205", "28206", "28207", "28208", "28209", "28210"] },
          { name: "Raleigh", zipCodes: ["27601", "27602", "27603", "27604", "27605", "27606", "27607", "27608", "27609", "27610"] },
          { name: "Durham", zipCodes: ["27701", "27702", "27703", "27704", "27705", "27706", "27707", "27708", "27709", "27710"] },
          { name: "Greensboro", zipCodes: ["27401", "27403", "27405", "27406", "27407", "27408", "27409", "27410", "27411", "27412"] },
          { name: "Winston-Salem", zipCodes: ["27101", "27102", "27103", "27104", "27105", "27106", "27107", "27108", "27109", "27110"] },
          { name: "Fayetteville", zipCodes: ["28301", "28303", "28304", "28305", "28306", "28307", "28308", "28309", "28310", "28311"] }
        ]
      },
      {
        name: "Virginia",
        code: "VA",
        cities: [
          { name: "Richmond", zipCodes: ["23201", "23202", "23203", "23204", "23205", "23206", "23207", "23208", "23209", "23210"] },
          { name: "Virginia Beach", zipCodes: ["23451", "23452", "23453", "23454", "23455", "23456", "23457", "23458", "23459", "23460"] },
          { name: "Norfolk", zipCodes: ["23501", "23502", "23503", "23504", "23505", "23506", "23507", "23508", "23509", "23510"] },
          { name: "Chesapeake", zipCodes: ["23320", "23321", "23322", "23323", "23324", "23325", "23326", "23327", "23328", "23329"] },
          { name: "Arlington", zipCodes: ["22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209", "22210", "22211"] },
          { name: "Newport News", zipCodes: ["23601", "23602", "23605", "23606", "23607", "23608", "23609", "23612", "23615", "23616"] }
        ]
      },
      {
        name: "Arizona",
        code: "AZ",
        cities: [
          { name: "Phoenix", zipCodes: ["85001", "85002", "85003", "85004", "85005", "85006", "85007", "85008", "85009", "85010"] },
          { name: "Tucson", zipCodes: ["85701", "85702", "85703", "85704", "85705", "85706", "85707", "85708", "85709", "85710"] },
          { name: "Scottsdale", zipCodes: ["85250", "85251", "85252", "85253", "85254", "85255", "85256", "85257", "85258", "85259"] },
          { name: "Mesa", zipCodes: ["85201", "85202", "85203", "85204", "85205", "85206", "85207", "85208", "85209", "85210"] },
          { name: "Chandler", zipCodes: ["85224", "85225", "85226", "85244", "85246", "85248", "85249", "85286", "85297", "85298"] },
          { name: "Glendale", zipCodes: ["85301", "85302", "85303", "85304", "85305", "85306", "85307", "85308", "85309", "85310"] }
        ]
      },
      {
        name: "Utah",
        code: "UT",
        cities: [
          { name: "Salt Lake City", zipCodes: ["84101", "84102", "84103", "84104", "84105", "84106", "84107", "84108", "84109", "84110"] },
          { name: "Provo", zipCodes: ["84601", "84602", "84603", "84604", "84605", "84606", "84607", "84608", "84609", "84610"] },
          { name: "Ogden", zipCodes: ["84401", "84402", "84403", "84404", "84405", "84407", "84408", "84409", "84414", "84415"] },
          { name: "West Valley City", zipCodes: ["84118", "84119", "84120", "84128", "84130", "84131", "84132", "84133", "84134", "84136"] },
          { name: "West Jordan", zipCodes: ["84081", "84084", "84088", "84092", "84093", "84094", "84095", "84096", "84097", "84098"] },
          { name: "Sandy", zipCodes: ["84070", "84090", "84091", "84092", "84093", "84094", "84095", "84096", "84097", "84099"] }
        ]
      },
      {
        name: "Oregon",
        code: "OR",
        cities: [
          { name: "Portland", zipCodes: ["97201", "97202", "97203", "97204", "97205", "97206", "97209", "97210", "97211", "97212"] },
          { name: "Eugene", zipCodes: ["97401", "97402", "97403", "97404", "97405", "97408", "97410", "97411", "97412", "97413"] },
          { name: "Salem", zipCodes: ["97301", "97302", "97303", "97304", "97305", "97306", "97308", "97309", "97310", "97311"] },
          { name: "Gresham", zipCodes: ["97030", "97031", "97032", "97033", "97034", "97035", "97036", "97037", "97038", "97039"] },
          { name: "Hillsboro", zipCodes: ["97123", "97124", "97125", "97126", "97127", "97128", "97129", "97140", "97141", "97142"] },
          { name: "Beaverton", zipCodes: ["97003", "97005", "97006", "97007", "97008", "97075", "97076", "97077", "97078", "97079"] }
        ]
      }
    ]
  }
];

// Function to get location details from a zip code
export const getLocationFromZipCode = (zipCode: string) => {
  // Implementation for getting city/state from zip code
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
