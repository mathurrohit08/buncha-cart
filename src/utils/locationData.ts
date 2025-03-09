
// Country data with 10 countries, each with 10 states and multiple cities
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

// Enhanced data with 10 countries, 10 states per country, and multiple cities per state
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
          { name: "Buffalo", zipCodes: ["14201", "14202", "14203", "14204", "14205"] }
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
      },
      {
        name: "Florida",
        code: "FL",
        cities: [
          { name: "Miami", zipCodes: ["33101", "33102", "33103", "33104", "33105"] },
          { name: "Orlando", zipCodes: ["32801", "32802", "32803", "32804", "32805"] },
          { name: "Tampa", zipCodes: ["33601", "33602", "33603", "33604", "33605"] }
        ]
      },
      {
        name: "Illinois",
        code: "IL",
        cities: [
          { name: "Chicago", zipCodes: ["60601", "60602", "60603", "60604", "60605"] },
          { name: "Springfield", zipCodes: ["62701", "62702", "62703", "62704", "62705"] },
          { name: "Peoria", zipCodes: ["61601", "61602", "61603", "61604", "61605"] }
        ]
      },
      {
        name: "Michigan",
        code: "MI",
        cities: [
          { name: "Detroit", zipCodes: ["48201", "48202", "48203", "48204", "48205"] },
          { name: "Ann Arbor", zipCodes: ["48104", "48105", "48106", "48107", "48108"] },
          { name: "Grand Rapids", zipCodes: ["49501", "49502", "49503", "49504", "49505"] }
        ]
      },
      {
        name: "Ohio",
        code: "OH",
        cities: [
          { name: "Columbus", zipCodes: ["43201", "43202", "43203", "43204", "43205"] },
          { name: "Cleveland", zipCodes: ["44101", "44102", "44103", "44104", "44105"] },
          { name: "Cincinnati", zipCodes: ["45201", "45202", "45203", "45204", "45205"] }
        ]
      },
      {
        name: "Georgia",
        code: "GA",
        cities: [
          { name: "Atlanta", zipCodes: ["30301", "30302", "30303", "30304", "30305"] },
          { name: "Savannah", zipCodes: ["31401", "31402", "31403", "31404", "31405"] },
          { name: "Athens", zipCodes: ["30601", "30602", "30603", "30604", "30605"] }
        ]
      },
      {
        name: "North Carolina",
        code: "NC",
        cities: [
          { name: "Charlotte", zipCodes: ["28201", "28202", "28203", "28204", "28205"] },
          { name: "Raleigh", zipCodes: ["27601", "27602", "27603", "27604", "27605"] },
          { name: "Durham", zipCodes: ["27701", "27702", "27703", "27704", "27705"] }
        ]
      },
      {
        name: "Virginia",
        code: "VA",
        cities: [
          { name: "Richmond", zipCodes: ["23201", "23202", "23203", "23204", "23205"] },
          { name: "Virginia Beach", zipCodes: ["23451", "23452", "23453", "23454", "23455"] },
          { name: "Norfolk", zipCodes: ["23501", "23502", "23503", "23504", "23505"] }
        ]
      }
    ]
  },
  {
    name: "United Kingdom",
    code: "GB",
    states: [
      {
        name: "England",
        code: "ENG",
        cities: [
          { name: "London", zipCodes: ["E1 6AN", "EC1A 1BB", "SW1A 0AA", "W1A 0AX", "NW1 5TH"] },
          { name: "Manchester", zipCodes: ["M1 1AE", "M2 5BQ", "M3 3EB", "M4 1HN", "M5 3EQ"] },
          { name: "Birmingham", zipCodes: ["B1 1BB", "B2 4QA", "B3 3HN", "B4 7ET", "B5 5JH"] }
        ]
      },
      {
        name: "Scotland",
        code: "SCT",
        cities: [
          { name: "Edinburgh", zipCodes: ["EH1 1BB", "EH2 2BY", "EH3 9SR", "EH4 1AJ", "EH5 2HD"] },
          { name: "Glasgow", zipCodes: ["G1 1XW", "G2 2JJ", "G3 8ND", "G4 0BA", "G5 0QD"] },
          { name: "Aberdeen", zipCodes: ["AB10 1XG", "AB11 5PS", "AB12 3FG", "AB15 4YU", "AB16 7PL"] }
        ]
      },
      {
        name: "Wales",
        code: "WLS",
        cities: [
          { name: "Cardiff", zipCodes: ["CF10 1EP", "CF11 9LJ", "CF14 3UZ", "CF15 7JT", "CF23 9AF"] },
          { name: "Swansea", zipCodes: ["SA1 1NW", "SA2 0AT", "SA3 5AS", "SA4 3JQ", "SA5 4EA"] },
          { name: "Newport", zipCodes: ["NP10 8QQ", "NP11 7BH", "NP12 1DP", "NP18 2AW", "NP19 4RB"] }
        ]
      },
      {
        name: "Northern Ireland",
        code: "NIR",
        cities: [
          { name: "Belfast", zipCodes: ["BT1 1LT", "BT2 7BA", "BT3 9EJ", "BT4 3FT", "BT5 5ED"] },
          { name: "Derry", zipCodes: ["BT47 6AA", "BT48 6DQ", "BT49 0SR", "BT51 3RP", "BT52 1SA"] },
          { name: "Newry", zipCodes: ["BT34 1DG", "BT35 6AL", "BT30 6LR", "BT31 9NN", "BT32 3RF"] }
        ]
      },
      {
        name: "Yorkshire",
        code: "YRK",
        cities: [
          { name: "Leeds", zipCodes: ["LS1 1BA", "LS2 7EY", "LS3 1AB", "LS6 2NP", "LS7 3PB"] },
          { name: "York", zipCodes: ["YO1 7HU", "YO10 5DD", "YO23 1BB", "YO24 4HF", "YO26 5RW"] },
          { name: "Sheffield", zipCodes: ["S1 2BJ", "S2 4SU", "S3 8GB", "S6 3RQ", "S7 2BX"] }
        ]
      },
      {
        name: "East Anglia",
        code: "EAN",
        cities: [
          { name: "Norwich", zipCodes: ["NR1 3QP", "NR2 1TH", "NR3 2QL", "NR4 6QH", "NR5 0DR"] },
          { name: "Cambridge", zipCodes: ["CB1 1PT", "CB2 3BJ", "CB3 0FA", "CB4 1ZB", "CB5 8JL"] },
          { name: "Ipswich", zipCodes: ["IP1 1QJ", "IP2 8RE", "IP3 9QR", "IP4 1AD", "IP5 2QL"] }
        ]
      },
      {
        name: "South West",
        code: "SWE",
        cities: [
          { name: "Bristol", zipCodes: ["BS1 5TY", "BS2 0FT", "BS3 4ND", "BS4 3BH", "BS5 7TR"] },
          { name: "Plymouth", zipCodes: ["PL1 1BA", "PL2 1RT", "PL3 4QX", "PL4 7ED", "PL5 3RL"] },
          { name: "Exeter", zipCodes: ["EX1 1BA", "EX2 4SG", "EX3 0JF", "EX4 3PW", "EX5 1DA"] }
        ]
      },
      {
        name: "East Midlands",
        code: "EMD",
        cities: [
          { name: "Nottingham", zipCodes: ["NG1 2DL", "NG2 7QP", "NG3 5GH", "NG4 1AL", "NG5 2FE"] },
          { name: "Leicester", zipCodes: ["LE1 6RH", "LE2 2PP", "LE3 0BG", "LE4 5DR", "LE5 0HA"] },
          { name: "Derby", zipCodes: ["DE1 2QR", "DE3 0BG", "DE4 3SA", "DE5 8DR", "DE6 1GH"] }
        ]
      },
      {
        name: "North West",
        code: "NWE",
        cities: [
          { name: "Liverpool", zipCodes: ["L1 8JQ", "L2 2DP", "L3 5QF", "L4 3SQ", "L5 6PQ"] },
          { name: "Blackpool", zipCodes: ["FY1 4PU", "FY2 0JW", "FY3 8NR", "FY4 5DJ", "FY5 3TG"] },
          { name: "Preston", zipCodes: ["PR1 2AP", "PR2 1AL", "PR3 0GP", "PR4 1DJ", "PR5 4JA"] }
        ]
      },
      {
        name: "South East",
        code: "SEE",
        cities: [
          { name: "Brighton", zipCodes: ["BN1 1AF", "BN2 0EW", "BN3 1GH", "BN41 1WF", "BN42 4AT"] },
          { name: "Southampton", zipCodes: ["SO14 0AH", "SO15 5QF", "SO16 7HP", "SO17 3SH", "SO18 2JX"] },
          { name: "Reading", zipCodes: ["RG1 1DB", "RG2 0SX", "RG4 5BY", "RG5 3JH", "RG6 1WG"] }
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
          { name: "Toronto", zipCodes: ["M5V 2T6", "M5H 2N2", "M4W 1A8", "M5J 2S1", "M5S 1K5"] },
          { name: "Ottawa", zipCodes: ["K1P 5J6", "K1A 0A6", "K2P 0A4", "K1Z 7T3", "K1Y 4W1"] },
          { name: "Hamilton", zipCodes: ["L8P 1A1", "L8R 3H1", "L8S 1A2", "L8L 6K1", "L8N 1B9"] }
        ]
      },
      {
        name: "Quebec",
        code: "QC",
        cities: [
          { name: "Montreal", zipCodes: ["H2Y 1C6", "H3A 1X9", "H2Z 1A4", "H3B 2Y3", "H3C 5H7"] },
          { name: "Quebec City", zipCodes: ["G1R 3Y7", "G1V 2M2", "G1K 7P4", "G2B 1C2", "G1L 1A6"] },
          { name: "Gatineau", zipCodes: ["J8X 2K1", "J8Y 6W2", "J8Z 1S5", "J8T 6J3", "J9A 1L2"] }
        ]
      },
      {
        name: "British Columbia",
        code: "BC",
        cities: [
          { name: "Vancouver", zipCodes: ["V5K 0A1", "V5Y 1V4", "V6B 5Z6", "V6E 1M3", "V6G 1A2"] },
          { name: "Victoria", zipCodes: ["V8V 3K4", "V8W 1W9", "V8X 1W2", "V8Z 3H5", "V8N 1M5"] },
          { name: "Kelowna", zipCodes: ["V1Y 1Z3", "V1W 3C6", "V1X 7W5", "V1P 1P4", "V1V 1Y8"] }
        ]
      },
      {
        name: "Alberta",
        code: "AB",
        cities: [
          { name: "Calgary", zipCodes: ["T2P 1J9", "T2R 0S8", "T2N 4V5", "T2T 0C9", "T3A 5K9"] },
          { name: "Edmonton", zipCodes: ["T5J 0N3", "T5K 2J5", "T5G 1X5", "T5H 3Y9", "T5J 4A2"] },
          { name: "Red Deer", zipCodes: ["T4N 0N6", "T4P 3R2", "T4R 1R2", "T4S 2L4", "T4N 1L5"] }
        ]
      },
      {
        name: "Manitoba",
        code: "MB",
        cities: [
          { name: "Winnipeg", zipCodes: ["R3C 0B9", "R3B 1G4", "R3M 2K7", "R2C 3T2", "R2M 0T1"] },
          { name: "Brandon", zipCodes: ["R7A 0N2", "R7B 0H9", "R7C 1A3", "R7A 2X1", "R7B 2C1"] },
          { name: "Steinbach", zipCodes: ["R5G 0H6", "R5G 1B8", "R5G 1T6", "R5G 0C8", "R5G 1R3"] }
        ]
      },
      {
        name: "Saskatchewan",
        code: "SK",
        cities: [
          { name: "Regina", zipCodes: ["S4P 3Y2", "S4R 1C8", "S4S 3R7", "S4T 1A5", "S4V 2Z9"] },
          { name: "Saskatoon", zipCodes: ["S7K 0J5", "S7H 0A6", "S7J 0A9", "S7M 1P3", "S7N 3R3"] },
          { name: "Moose Jaw", zipCodes: ["S6H 0B4", "S6J 1L5", "S6K 3H5", "S6H 7Y2", "S6J 0A9"] }
        ]
      },
      {
        name: "Nova Scotia",
        code: "NS",
        cities: [
          { name: "Halifax", zipCodes: ["B3J 1Z2", "B3H 4R2", "B3K 5X5", "B3L 2C2", "B3M 3A2"] },
          { name: "Sydney", zipCodes: ["B1P 6K6", "B1S 1A1", "B1L 1A3", "B1N 3K7", "B1P 5T1"] },
          { name: "Dartmouth", zipCodes: ["B2V 1A9", "B2W 4E6", "B2X 1R5", "B2Y 3Z2", "B3A 1T6"] }
        ]
      },
      {
        name: "New Brunswick",
        code: "NB",
        cities: [
          { name: "Saint John", zipCodes: ["E2L 0B1", "E2M 5B3", "E2P 1H7", "E2J 2K9", "E2K 3Y2"] },
          { name: "Moncton", zipCodes: ["E1C 0H4", "E1A 8X4", "E1G 1A7", "E1E 4C5", "E1C 8J9"] },
          { name: "Fredericton", zipCodes: ["E3A 0G3", "E3B 1A7", "E3C 0B4", "E3A 9X2", "E3B 5C8"] }
        ]
      },
      {
        name: "Newfoundland and Labrador",
        code: "NL",
        cities: [
          { name: "St. John's", zipCodes: ["A1A 1A1", "A1B 2C3", "A1C 4E5", "A1E 6G7", "A1H 1J2"] },
          { name: "Corner Brook", zipCodes: ["A2H 6J1", "A2H 1E5", "A2H 2N3", "A2H 3P5", "A2H 4R7"] },
          { name: "Mount Pearl", zipCodes: ["A1N 1W3", "A1N 2X4", "A1N 3Y5", "A1N 4Z6", "A1N 5A7"] }
        ]
      },
      {
        name: "Prince Edward Island",
        code: "PE",
        cities: [
          { name: "Charlottetown", zipCodes: ["C1A 1A1", "C1A 2B3", "C1A 3C4", "C1A 4D5", "C1A 5E6"] },
          { name: "Summerside", zipCodes: ["C1N 1B1", "C1N 2C2", "C1N 3D3", "C1N 4E4", "C1N 5F5"] },
          { name: "Stratford", zipCodes: ["C1B 1A1", "C1B 1A2", "C1B 1A3", "C1B 1A4", "C1B 1A5"] }
        ]
      }
    ]
  },
  {
    name: "Australia",
    code: "AU",
    states: [
      {
        name: "New South Wales",
        code: "NSW",
        cities: [
          { name: "Sydney", zipCodes: ["2000", "2010", "2020", "2030", "2040"] },
          { name: "Newcastle", zipCodes: ["2300", "2302", "2304", "2305", "2306"] },
          { name: "Wollongong", zipCodes: ["2500", "2502", "2505", "2506", "2508"] }
        ]
      },
      {
        name: "Victoria",
        code: "VIC",
        cities: [
          { name: "Melbourne", zipCodes: ["3000", "3001", "3002", "3003", "3004"] },
          { name: "Geelong", zipCodes: ["3214", "3215", "3216", "3217", "3218"] },
          { name: "Ballarat", zipCodes: ["3350", "3351", "3352", "3353", "3354"] }
        ]
      },
      {
        name: "Queensland",
        code: "QLD",
        cities: [
          { name: "Brisbane", zipCodes: ["4000", "4001", "4005", "4006", "4007"] },
          { name: "Gold Coast", zipCodes: ["4207", "4208", "4209", "4210", "4211"] },
          { name: "Cairns", zipCodes: ["4868", "4869", "4870", "4871", "4872"] }
        ]
      },
      {
        name: "Western Australia",
        code: "WA",
        cities: [
          { name: "Perth", zipCodes: ["6000", "6003", "6004", "6005", "6006"] },
          { name: "Fremantle", zipCodes: ["6160", "6161", "6162", "6163", "6164"] },
          { name: "Bunbury", zipCodes: ["6230", "6231", "6232", "6233", "6236"] }
        ]
      },
      {
        name: "South Australia",
        code: "SA",
        cities: [
          { name: "Adelaide", zipCodes: ["5000", "5001", "5005", "5006", "5007"] },
          { name: "Mount Gambier", zipCodes: ["5290", "5291", "5292", "5293", "5294"] },
          { name: "Whyalla", zipCodes: ["5600", "5601", "5602", "5603", "5604"] }
        ]
      },
      {
        name: "Tasmania",
        code: "TAS",
        cities: [
          { name: "Hobart", zipCodes: ["7000", "7001", "7004", "7005", "7007"] },
          { name: "Launceston", zipCodes: ["7248", "7249", "7250", "7251", "7252"] },
          { name: "Devonport", zipCodes: ["7310", "7315", "7316", "7317", "7318"] }
        ]
      },
      {
        name: "Northern Territory",
        code: "NT",
        cities: [
          { name: "Darwin", zipCodes: ["0800", "0801", "0810", "0811", "0812"] },
          { name: "Alice Springs", zipCodes: ["0870", "0871", "0872", "0873", "0874"] },
          { name: "Katherine", zipCodes: ["0850", "0851", "0852", "0853", "0854"] }
        ]
      },
      {
        name: "Australian Capital Territory",
        code: "ACT",
        cities: [
          { name: "Canberra", zipCodes: ["2600", "2601", "2602", "2603", "2604"] },
          { name: "Queanbeyan", zipCodes: ["2620", "2621", "2622", "2623", "2624"] },
          { name: "Jervis Bay", zipCodes: ["2540", "2541", "2542", "2543", "2544"] }
        ]
      },
      {
        name: "Queensland Central",
        code: "QLC",
        cities: [
          { name: "Rockhampton", zipCodes: ["4700", "4701", "4702", "4703", "4704"] },
          { name: "Mackay", zipCodes: ["4740", "4741", "4742", "4743", "4744"] },
          { name: "Gladstone", zipCodes: ["4680", "4681", "4682", "4683", "4684"] }
        ]
      },
      {
        name: "Queensland North",
        code: "QLN",
        cities: [
          { name: "Townsville", zipCodes: ["4810", "4811", "4812", "4813", "4814"] },
          { name: "Mount Isa", zipCodes: ["4825", "4826", "4827", "4828", "4829"] },
          { name: "Charters Towers", zipCodes: ["4820", "4821", "4822", "4823", "4824"] }
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
          { name: "Nuremberg", zipCodes: ["90402", "90403", "90408", "90409", "90411"] },
          { name: "Augsburg", zipCodes: ["86150", "86152", "86153", "86154", "86156"] }
        ]
      },
      {
        name: "North Rhine-Westphalia",
        code: "NW",
        cities: [
          { name: "Cologne", zipCodes: ["50667", "50668", "50670", "50672", "50674"] },
          { name: "Düsseldorf", zipCodes: ["40210", "40211", "40212", "40213", "40215"] },
          { name: "Dortmund", zipCodes: ["44135", "44137", "44139", "44141", "44143"] }
        ]
      },
      {
        name: "Berlin",
        code: "BE",
        cities: [
          { name: "Berlin", zipCodes: ["10115", "10117", "10119", "10178", "10179"] },
          { name: "Potsdam", zipCodes: ["14467", "14469", "14471", "14473", "14478"] },
          { name: "Spandau", zipCodes: ["13581", "13583", "13585", "13587", "13589"] }
        ]
      },
      {
        name: "Hamburg",
        code: "HH",
        cities: [
          { name: "Hamburg", zipCodes: ["20095", "20097", "20099", "20144", "20146"] },
          { name: "Bergedorf", zipCodes: ["21029", "21031", "21033", "21035", "21037"] },
          { name: "Altona", zipCodes: ["22765", "22767", "22769", "22761", "22763"] }
        ]
      },
      {
        name: "Lower Saxony",
        code: "NI",
        cities: [
          { name: "Hanover", zipCodes: ["30159", "30161", "30163", "30165", "30167"] },
          { name: "Brunswick", zipCodes: ["38100", "38102", "38104", "38106", "38108"] },
          { name: "Osnabrück", zipCodes: ["49074", "49076", "49078", "49080", "49082"] }
        ]
      },
      {
        name: "Hesse",
        code: "HE",
        cities: [
          { name: "Frankfurt", zipCodes: ["60306", "60308", "60310", "60311", "60313"] },
          { name: "Wiesbaden", zipCodes: ["65183", "65185", "65187", "65189", "65191"] },
          { name: "Kassel", zipCodes: ["34117", "34119", "34121", "34123", "34125"] }
        ]
      },
      {
        name: "Saxony",
        code: "SN",
        cities: [
          { name: "Dresden", zipCodes: ["01067", "01069", "01097", "01099", "01109"] },
          { name: "Leipzig", zipCodes: ["04103", "04105", "04107", "04109", "04129"] },
          { name: "Chemnitz", zipCodes: ["09111", "09112", "09113", "09114", "09116"] }
        ]
      },
      {
        name: "Baden-Württemberg",
        code: "BW",
        cities: [
          { name: "Stuttgart", zipCodes: ["70173", "70174", "70176", "70178", "70180"] },
          { name: "Karlsruhe", zipCodes: ["76131", "76133", "76135", "76137", "76139"] },
          { name: "Heidelberg", zipCodes: ["69115", "69117", "69120", "69123", "69124"] }
        ]
      },
      {
        name: "Rhineland-Palatinate",
        code: "RP",
        cities: [
          { name: "Mainz", zipCodes: ["55116", "55118", "55120", "55122", "55124"] },
          { name: "Koblenz", zipCodes: ["56068", "56070", "56072", "56073", "56075"] },
          { name: "Trier", zipCodes: ["54290", "54292", "54293", "54294", "54295"] }
        ]
      },
      {
        name: "Schleswig-Holstein",
        code: "SH",
        cities: [
          { name: "Kiel", zipCodes: ["24103", "24105", "24106", "24107", "24109"] },
          { name: "Lübeck", zipCodes: ["23552", "23554", "23556", "23558", "23560"] },
          { name: "Flensburg", zipCodes: ["24937", "24939", "24941", "24943", "24944"] }
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
          { name: "Versailles", zipCodes: ["78000", "78180", "78350", "78430", "78440"] },
          { name: "Saint-Denis", zipCodes: ["93200", "93210", "93400", "93000", "93120"] }
        ]
      },
      {
        name: "Provence-Alpes-Côte d'Azur",
        code: "PACA",
        cities: [
          { name: "Marseille", zipCodes: ["13001", "13002", "13003", "13004", "13005"] },
          { name: "Nice", zipCodes: ["06000", "06100", "06200", "06300", "06400"] },
          { name: "Cannes", zipCodes: ["06400", "06150", "06110", "06250", "06310"] }
        ]
      },
      {
        name: "Auvergne-Rhône-Alpes",
        code: "ARA",
        cities: [
          { name: "Lyon", zipCodes: ["69001", "69002", "69003", "69004", "69005"] },
          { name: "Grenoble", zipCodes: ["38000", "38100", "38700", "38500", "38600"] },
          { name: "Clermont-Ferrand", zipCodes: ["63000", "63100", "63170", "63800", "63370"] }
        ]
      },
      {
        name: "Nouvelle-Aquitaine",
        code: "NAQ",
        cities: [
          { name: "Bordeaux", zipCodes: ["33000", "33100", "33200", "33300", "33400"] },
          { name: "Biarritz", zipCodes: ["64200", "64210", "64220", "64240", "64250"] },
          { name: "Limoges", zipCodes: ["87000", "87100", "87110", "87170", "87200"] }
        ]
      },
      {
        name: "Occitanie",
        code: "OCC",
        cities: [
          { name: "Toulouse", zipCodes: ["31000", "31100", "31200", "31300", "31400"] },
          { name: "Montpellier", zipCodes: ["34000", "34070", "34080", "34090", "34170"] },
          { name: "Perpignan", zipCodes: ["66000", "66100", "66260", "66270", "66280"] }
        ]
      },
      {
        name: "Hauts-de-France",
        code: "HDF",
        cities: [
          { name: "Lille", zipCodes: ["59000", "59160", "59130", "59110", "59200"] },
          { name: "Amiens", zipCodes: ["80000", "80080", "80090", "80090", "80080"] },
          { name: "Calais", zipCodes: ["62100", "62230", "62231", "62232", "62340"] }
        ]
      },
      {
        name: "Grand Est",
        code: "GES",
        cities: [
          { name: "Strasbourg", zipCodes: ["67000", "67100", "67200", "67080", "67300"] },
          { name: "Reims", zipCodes: ["51100", "51350", "51430", "51520", "51370"] },
          { name: "Metz", zipCodes: ["57000", "57050", "57070", "57100", "57130"] }
        ]
      },
      {
        name: "Pays de la Loire",
        code: "PDL",
        cities: [
          { name: "Nantes", zipCodes: ["44000", "44100", "44200", "44300", "44400"] },
          { name: "Angers", zipCodes: ["49000", "49100", "49220", "49240", "49124"] },
          { name: "Le Mans", zipCodes: ["72000", "72100", "72190", "72230", "72650"] }
        ]
      },
      {
        name: "Bretagne",
        code: "BRE",
        cities: [
          { name: "Rennes", zipCodes: ["35000", "35200", "35700", "35740", "35760"] },
          { name: "Brest", zipCodes: ["29200", "29280", "29820", "29850", "29860"] },
          { name: "Quimper", zipCodes: ["29000", "29900", "29950", "29500", "29700"] }
        ]
      },
      {
        name: "Normandie",
        code: "NOR",
        cities: [
          { name: "Rouen", zipCodes: ["76000", "76100", "76130", "76140", "76420"] },
          { name: "Caen", zipCodes: ["14000", "14200", "14280", "14320", "14760"] },
          { name: "Le Havre", zipCodes: ["76600", "76610", "76620", "76700", "76620"] }
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
          { name: "Shinjuku", zipCodes: ["160-0022", "160-0023", "162-0065", "162-0845", "163-0401"] },
          { name: "Shibuya", zipCodes: ["150-0002", "150-0041", "150-0043", "151-0051", "151-0053"] },
          { name: "Minato", zipCodes: ["105-0001", "105-0004", "105-0011", "105-0013", "106-0032"] }
        ]
      },
      {
        name: "Osaka",
        code: "OS",
        cities: [
          { name: "Osaka City", zipCodes: ["530-0001", "530-0002", "530-0003", "530-0004", "530-0005"] },
          { name: "Sakai", zipCodes: ["590-0000", "590-0001", "590-0002", "590-0004", "590-0005"] },
          { name: "Takatsuki", zipCodes: ["569-0000", "569-0803", "569-0804", "569-0805", "569-0811"] }
        ]
      },
      {
        name: "Kyoto",
        code: "KY",
        cities: [
          { name: "Kyoto City", zipCodes: ["600-8008", "600-8009", "600-8023", "600-8073", "600-8104"] },
          { name: "Uji", zipCodes: ["611-0002", "611-0011", "611-0021", "611-0027", "611-0031"] },
          { name: "Kameoka", zipCodes: ["621-0008", "621-0018", "621-0028", "621-0029", "621-0036"] }
        ]
      },
      {
        name: "Hokkaido",
        code: "HK",
        cities: [
          { name: "Sapporo", zipCodes: ["060-0001", "060-0002", "060-0003", "060-0004", "060-0005"] },
          { name: "Hakodate", zipCodes: ["040-0001", "040-0002", "040-0003", "040-0004", "040-0005"] },
          { name: "Asahikawa", zipCodes: ["070-0031", "070-0032", "070-0033", "070-0034", "070-0035"] }
        ]
      },
      {
        name: "Fukuoka",
        code: "FU",
        cities: [
          { name: "Fukuoka City", zipCodes: ["810-0001", "810-0002", "810-0003", "810-0004", "810-0005"] },
          { name: "Kitakyushu", zipCodes: ["800-0001", "800-0002", "800-0003", "800-0025", "803-0801"] },
          { name: "Kurume", zipCodes: ["830-0001", "830-0002", "830-0003", "830-0004", "830-0005"] }
        ]
      },
      {
        name: "Aichi",
        code: "AI",
        cities: [
          { name: "Nagoya", zipCodes: ["460-0001", "460-0002", "460-0003", "460-0004", "460-0008"] },
          { name: "Toyota", zipCodes: ["471-0027", "471-0028", "471-0029", "471-0031", "471-0033"] },
          { name: "Toyohashi", zipCodes: ["440-0001", "440-0002", "440-0003", "440-0004", "440-0005"] }
        ]
      },
      {
        name: "Kanagawa",
        code: "KN",
        cities: [
          { name: "Yokohama", zipCodes: ["220-0004", "220-0005", "220-0011", "220-0012", "220-0021"] },
          { name: "Kawasaki", zipCodes: ["210-0001", "210-0002", "210-0003", "210-0004", "210-0005"] },
          { name: "Sagamihara", zipCodes: ["252-0001", "252-0002", "252-0003", "252-0004", "252-0005"] }
        ]
      },
      {
        name: "Hyogo",
        code: "HY",
        cities: [
          { name: "Kobe", zipCodes: ["650-0001", "650-0002", "650-0003", "650-0004", "650-0005"] },
          { name: "Himeji", zipCodes: ["670-0001", "670-0002", "670-0003", "670-0011", "670-0012"] },
          { name: "Nishinomiya", zipCodes: ["662-0001", "662-0002", "662-0003", "662-0004", "662-0811"] }
        ]
      },
      {
        name: "Hiroshima",
        code: "HR",
        cities: [
          { name: "Hiroshima City", zipCodes: ["730-0001", "730-0002", "730-0003", "730-0004", "730-0005"] },
          { name: "Fukuyama", zipCodes: ["720-0001", "720-0017", "720-0031", "720-0044", "720-0056"] },
          { name: "Kure", zipCodes: ["737-0001", "737-0002", "737-0003", "737-0004", "737-0811"] }
        ]
      },
      {
        name: "Miyagi",
        code: "MG",
        cities: [
          { name: "Sendai", zipCodes: ["980-0001", "980-0002", "980-0003", "980-0004", "980-0005"] },
          { name: "Ishinomaki", zipCodes: ["986-0001", "986-0002", "986-0003", "986-0004", "986-0005"] },
          { name: "Shiogama", zipCodes: ["985-0001", "985-0002", "985-0003", "985-0006", "985-0012"] }
        ]
      }
    ]
  },
  {
    name: "Italy",
    code: "IT",
    states: [
      {
        name: "Lazio",
        code: "LAZ",
        cities: [
          { name: "Rome", zipCodes: ["00118", "00119", "00120", "00121", "00122"] },
          { name: "Viterbo", zipCodes: ["01100", "01010", "01018", "01030", "01033"] },
          { name: "Latina", zipCodes: ["04100", "04010", "04011", "04012", "04013"] }
        ]
      },
      {
        name: "Lombardy",
        code: "LOM",
        cities: [
          { name: "Milan", zipCodes: ["20121", "20122", "20123", "20124", "20125"] },
          { name: "Bergamo", zipCodes: ["24121", "24122", "24123", "24124", "24125"] },
          { name: "Brescia", zipCodes: ["25121", "25122", "25123", "25124", "25125"] }
        ]
      },
      {
        name: "Campania",
        code: "CAM",
        cities: [
          { name: "Naples", zipCodes: ["80121", "80122", "80123", "80124", "80125"] },
          { name: "Salerno", zipCodes: ["84121", "84122", "84123", "84124", "84125"] },
          { name: "Caserta", zipCodes: ["81100", "81020", "81030", "81040", "81050"] }
        ]
      },
      {
        name: "Veneto",
        code: "VEN",
        cities: [
          { name: "Venice", zipCodes: ["30121", "30122", "30123", "30124", "30125"] },
          { name: "Verona", zipCodes: ["37121", "37122", "37123", "37124", "37125"] },
          { name: "Padua", zipCodes: ["35121", "35122", "35123", "35124", "35125"] }
        ]
      },
      {
        name: "Sicily",
        code: "SIC",
        cities: [
          { name: "Palermo", zipCodes: ["90121", "90122", "90123", "90124", "90125"] },
          { name: "Catania", zipCodes: ["95121", "95122", "95123", "95124", "95125"] },
          { name: "Messina", zipCodes: ["98121", "98122", "98123", "98124", "98125"] }
        ]
      },
      {
        name: "Piedmont",
        code: "PIE",
        cities: [
          { name: "Turin", zipCodes: ["10121", "10122", "10123", "10124", "10125"] },
          { name: "Novara", zipCodes: ["28100", "28066", "28069", "28074", "28078"] },
          { name: "Asti", zipCodes: ["14100", "14010", "14020", "14030", "14040"] }
        ]
      },
      {
        name: "Apulia",
        code: "PUG",
        cities: [
          { name: "Bari", zipCodes: ["70121", "70122", "70123", "70124", "70125"] },
          { name: "Taranto", zipCodes: ["74121", "74122", "74123", "74124", "74125"] },
          { name: "Lecce", zipCodes: ["73100", "73010", "73020", "73030", "73040"] }
        ]
      },
      {
        name: "Emilia-Romagna",
        code: "EMR",
        cities: [
          { name: "Bologna", zipCodes: ["40121", "40122", "40123", "40124", "40125"] },
          { name: "Parma", zipCodes: ["43121", "43122", "43123", "43124", "43125"] },
          { name: "Rimini", zipCodes: ["47921", "47922", "47923", "47924", "47900"] }
        ]
      },
      {
        name: "Tuscany",
        code: "TOS",
        cities: [
          { name: "Florence", zipCodes: ["50121", "50122", "50123", "50124", "50125"] },
          { name: "Pisa", zipCodes: ["56121", "56122", "56123", "56124", "56125"] },
          { name: "Siena", zipCodes: ["53100", "53011", "53012", "53013", "53014"] }
        ]
      },
      {
        name: "Calabria",
        code: "CAL",
        cities: [
          { name: "Reggio Calabria", zipCodes: ["89121", "89122", "89123", "89124", "89125"] },
          { name: "Catanzaro", zipCodes: ["88100", "88021", "88023", "88025", "88027"] },
          { name: "Cosenza", zipCodes: ["87100", "87010", "87020", "87030", "87040"] }
        ]
      }
    ]
  },
  {
    name: "Spain",
    code: "ES",
    states: [
      {
        name: "Madrid",
        code: "MAD",
        cities: [
          { name: "Madrid City", zipCodes: ["28001", "28002", "28003", "28004", "28005"] },
          { name: "Alcalá de Henares", zipCodes: ["28801", "28802", "28803", "28804", "28805"] },
          { name: "Getafe", zipCodes: ["28901", "28902", "28903", "28904", "28905"] }
        ]
      },
      {
        name: "Catalonia",
        code: "CAT",
        cities: [
          { name: "Barcelona", zipCodes: ["08001", "08002", "08003", "08004", "08005"] },
          { name: "Girona", zipCodes: ["17001", "17002", "17003", "17004", "17005"] },
          { name: "Tarragona", zipCodes: ["43001", "43002", "43003", "43004", "43005"] }
        ]
      },
      {
        name: "Andalusia",
        code: "AND",
        cities: [
          { name: "Seville", zipCodes: ["41001", "41002", "41003", "41004", "41005"] },
          { name: "Málaga", zipCodes: ["29001", "29002", "29003", "29004", "29005"] },
          { name: "Granada", zipCodes: ["18001", "18002", "18003", "18004", "18005"] }
        ]
      },
      {
        name: "Valencia",
        code: "VAL",
        cities: [
          { name: "Valencia City", zipCodes: ["46001", "46002", "46003", "46004", "46005"] },
          { name: "Alicante", zipCodes: ["03001", "03002", "03003", "03004", "03005"] },
          { name: "Elche", zipCodes: ["03201", "03202", "03203", "03204", "03205"] }
        ]
      },
      {
        name: "Galicia",
        code: "GAL",
        cities: [
          { name: "Santiago", zipCodes: ["15701", "15702", "15703", "15704", "15705"] },
          { name: "Vigo", zipCodes: ["36201", "36202", "36203", "36204", "36205"] },
          { name: "A Coruña", zipCodes: ["15001", "15002", "15003", "15004", "15005"] }
        ]
      },
      {
        name: "Basque Country",
        code: "PVA",
        cities: [
          { name: "Bilbao", zipCodes: ["48001", "48002", "48003", "48004", "48005"] },
          { name: "San Sebastián", zipCodes: ["20001", "20002", "20003", "20004", "20005"] },
          { name: "Vitoria", zipCodes: ["01001", "01002", "01003", "01004", "01005"] }
        ]
      },
      {
        name: "Castile and León",
        code: "CYL",
        cities: [
          { name: "Valladolid", zipCodes: ["47001", "47002", "47003", "47004", "47005"] },
          { name: "Salamanca", zipCodes: ["37001", "37002", "37003", "37004", "37005"] },
          { name: "León", zipCodes: ["24001", "24002", "24003", "24004", "24005"] }
        ]
      },
      {
        name: "Canary Islands",
        code: "CAN",
        cities: [
          { name: "Las Palmas", zipCodes: ["35001", "35002", "35003", "35004", "35005"] },
          { name: "Santa Cruz", zipCodes: ["38001", "38002", "38003", "38004", "38005"] },
          { name: "Telde", zipCodes: ["35200", "35210", "35212", "35213", "35214"] }
        ]
      },
      {
        name: "Castilla-La Mancha",
        code: "CLM",
        cities: [
          { name: "Toledo", zipCodes: ["45001", "45002", "45003", "45004", "45005"] },
          { name: "Ciudad Real", zipCodes: ["13001", "13002", "13003", "13004", "13005"] },
          { name: "Albacete", zipCodes: ["02001", "02002", "02003", "02004", "02005"] }
        ]
      },
      {
        name: "Murcia",
        code: "MUR",
        cities: [
          { name: "Murcia City", zipCodes: ["30001", "30002", "30003", "30004", "30005"] },
          { name: "Cartagena", zipCodes: ["30201", "30202", "30203", "30204", "30205"] },
          { name: "Lorca", zipCodes: ["30800", "30813", "30815", "30817", "30820"] }
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
          { name: "Campinas", zipCodes: ["13010-000", "13020-000", "13030-000", "13040-000", "13050-000"] },
          { name: "Santos", zipCodes: ["11010-000", "11020-000", "11030-000", "11040-000", "11050-000"] }
        ]
      },
      {
        name: "Rio de Janeiro",
        code: "RJ",
        cities: [
          { name: "Rio de Janeiro City", zipCodes: ["20010-000", "20020-000", "20030-000", "20040-000", "20050-000"] },
          { name: "Niterói", zipCodes: ["24020-000", "24030-000", "24040-000", "24050-000", "24060-000"] },
          { name: "Petrópolis", zipCodes: ["25610-000", "25620-000", "25630-000", "25640-000", "25650-000"] }
        ]
      },
      {
        name: "Minas Gerais",
        code: "MG",
        cities: [
          { name: "Belo Horizonte", zipCodes: ["30110-000", "30120-000", "30130-000", "30140-000", "30150-000"] },
          { name: "Uberlândia", zipCodes: ["38400-000", "38405-000", "38410-000", "38415-000", "38420-000"] },
          { name: "Juiz de Fora", zipCodes: ["36010-000", "36020-000", "36030-000", "36040-000", "36050-000"] }
        ]
      },
      {
        name: "Bahia",
        code: "BA",
        cities: [
          { name: "Salvador", zipCodes: ["40010-000", "40020-000", "40030-000", "40040-000", "40050-000"] },
          { name: "Feira de Santana", zipCodes: ["44001-000", "44002-000", "44003-000", "44004-000", "44005-000"] },
          { name: "Vitória da Conquista", zipCodes: ["45000-000", "45010-000", "45020-000", "45030-000", "45040-000"] }
        ]
      },
      {
        name: "Rio Grande do Sul",
        code: "RS",
        cities: [
          { name: "Porto Alegre", zipCodes: ["90010-000", "90020-000", "90030-000", "90040-000", "90050-000"] },
          { name: "Caxias do Sul", zipCodes: ["95010-000", "95020-000", "95030-000", "95040-000", "95050-000"] },
          { name: "Pelotas", zipCodes: ["96010-000", "96020-000", "96030-000", "96040-000", "96050-000"] }
        ]
      },
      {
        name: "Paraná",
        code: "PR",
        cities: [
          { name: "Curitiba", zipCodes: ["80010-000", "80020-000", "80030-000", "80040-000", "80050-000"] },
          { name: "Londrina", zipCodes: ["86010-000", "86020-000", "86030-000", "86040-000", "86050-000"] },
          { name: "Maringá", zipCodes: ["87010-000", "87020-000", "87030-000", "87040-000", "87050-000"] }
        ]
      },
      {
        name: "Pernambuco",
        code: "PE",
        cities: [
          { name: "Recife", zipCodes: ["50010-000", "50020-000", "50030-000", "50040-000", "50050-000"] },
          { name: "Olinda", zipCodes: ["53010-000", "53020-000", "53030-000", "53040-000", "53050-000"] },
          { name: "Caruaru", zipCodes: ["55000-000", "55010-000", "55020-000", "55030-000", "55040-000"] }
        ]
      },
      {
        name: "Ceará",
        code: "CE",
        cities: [
          { name: "Fortaleza", zipCodes: ["60010-000", "60020-000", "60030-000", "60040-000", "60050-000"] },
          { name: "Juazeiro do Norte", zipCodes: ["63010-000", "63020-000", "63030-000", "63040-000", "63050-000"] },
          { name: "Sobral", zipCodes: ["62010-000", "62020-000", "62030-000", "62040-000", "62050-000"] }
        ]
      },
      {
        name: "Pará",
        code: "PA",
        cities: [
          { name: "Belém", zipCodes: ["66010-000", "66020-000", "66030-000", "66040-000", "66050-000"] },
          { name: "Santarém", zipCodes: ["68000-000", "68010-000", "68020-000", "68030-000", "68040-000"] },
          { name: "Marabá", zipCodes: ["68500-000", "68505-000", "68510-000", "68515-000", "68520-000"] }
        ]
      },
      {
        name: "Santa Catarina",
        code: "SC",
        cities: [
          { name: "Florianópolis", zipCodes: ["88010-000", "88020-000", "88030-000", "88040-000", "88050-000"] },
          { name: "Joinville", zipCodes: ["89200-000", "89210-000", "89220-000", "89230-000", "89240-000"] },
          { name: "Blumenau", zipCodes: ["89010-000", "89020-000", "89030-000", "89040-000", "89050-000"] }
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
          { name: "Pune", zipCodes: ["411001", "411002", "411003", "411004", "411005"] },
          { name: "Nagpur", zipCodes: ["440001", "440002", "440003", "440004", "440005"] }
        ]
      },
      {
        name: "Delhi",
        code: "DL",
        cities: [
          { name: "New Delhi", zipCodes: ["110001", "110002", "110003", "110004", "110005"] },
          { name: "North Delhi", zipCodes: ["110006", "110007", "110008", "110009", "110010"] },
          { name: "South Delhi", zipCodes: ["110016", "110017", "110018", "110019", "110020"] }
        ]
      },
      {
        name: "Tamil Nadu",
        code: "TN",
        cities: [
          { name: "Chennai", zipCodes: ["600001", "600002", "600003", "600004", "600005"] },
          { name: "Coimbatore", zipCodes: ["641001", "641002", "641003", "641004", "641005"] },
          { name: "Madurai", zipCodes: ["625001", "625002", "625003", "625004", "625005"] }
        ]
      },
      {
        name: "Karnataka",
        code: "KA",
        cities: [
          { name: "Bangalore", zipCodes: ["560001", "560002", "560003", "560004", "560005"] },
          { name: "Mysore", zipCodes: ["570001", "570002", "570003", "570004", "570005"] },
          { name: "Hubli", zipCodes: ["580001", "580002", "580003", "580004", "580005"] }
        ]
      },
      {
        name: "Gujarat",
        code: "GJ",
        cities: [
          { name: "Ahmedabad", zipCodes: ["380001", "380002", "380003", "380004", "380005"] },
          { name: "Surat", zipCodes: ["395001", "395002", "395003", "395004", "395005"] },
          { name: "Vadodara", zipCodes: ["390001", "390002", "390003", "390004", "390005"] }
        ]
      },
      {
        name: "West Bengal",
        code: "WB",
        cities: [
          { name: "Kolkata", zipCodes: ["700001", "700002", "700003", "700004", "700005"] },
          { name: "Howrah", zipCodes: ["711101", "711102", "711103", "711104", "711105"] },
          { name: "Siliguri", zipCodes: ["734001", "734002", "734003", "734004", "734005"] }
        ]
      },
      {
        name: "Telangana",
        code: "TG",
        cities: [
          { name: "Hyderabad", zipCodes: ["500001", "500002", "500003", "500004", "500005"] },
          { name: "Warangal", zipCodes: ["506001", "506002", "506003", "506004", "506005"] },
          { name: "Karimnagar", zipCodes: ["505001", "505002", "505003", "505004", "505005"] }
        ]
      },
      {
        name: "Rajasthan",
        code: "RJ",
        cities: [
          { name: "Jaipur", zipCodes: ["302001", "302002", "302003", "302004", "302005"] },
          { name: "Jodhpur", zipCodes: ["342001", "342002", "342003", "342004", "342005"] },
          { name: "Udaipur", zipCodes: ["313001", "313002", "313003", "313004", "313005"] }
        ]
      },
      {
        name: "Kerala",
        code: "KL",
        cities: [
          { name: "Thiruvananthapuram", zipCodes: ["695001", "695002", "695003", "695004", "695005"] },
          { name: "Kochi", zipCodes: ["682001", "682002", "682003", "682004", "682005"] },
          { name: "Kozhikode", zipCodes: ["673001", "673002", "673003", "673004", "673005"] }
        ]
      },
      {
        name: "Uttar Pradesh",
        code: "UP",
        cities: [
          { name: "Lucknow", zipCodes: ["226001", "226002", "226003", "226004", "226005"] },
          { name: "Kanpur", zipCodes: ["208001", "208002", "208003", "208004", "208005"] },
          { name: "Varanasi", zipCodes: ["221001", "221002", "221003", "221004", "221005"] }
        ]
      }
    ]
  },
  {
    name: "Singapore",
    code: "SG",
    states: [
      {
        name: "Central Region",
        code: "CR",
        cities: [
          { name: "Downtown Core", zipCodes: ["048801", "048941", "048619", "049483", "049315"] },
          { name: "Marina Bay", zipCodes: ["018956", "018955", "018957", "018983", "018989"] },
          { name: "Orchard", zipCodes: ["238823", "238824", "238839", "238846", "238878"] }
        ]
      },
      {
        name: "East Region",
        code: "ER",
        cities: [
          { name: "Tampines", zipCodes: ["528676", "528693", "528726", "528746", "528775"] },
          { name: "Bedok", zipCodes: ["460001", "460027", "460055", "460077", "460098"] },
          { name: "Changi", zipCodes: ["508983", "508985", "499614", "499770", "499738"] }
        ]
      },
      {
        name: "West Region",
        code: "WR",
        cities: [
          { name: "Jurong", zipCodes: ["608501", "608505", "608549", "609601", "609731"] },
          { name: "Clementi", zipCodes: ["120401", "120445", "120467", "120470", "120489"] },
          { name: "Choa Chu Kang", zipCodes: ["680801", "680824", "680846", "680874", "680891"] }
        ]
      },
      {
        name: "North Region",
        code: "NR",
        cities: [
          { name: "Woodlands", zipCodes: ["730401", "730467", "730490", "730501", "730583"] },
          { name: "Yishun", zipCodes: ["760101", "760233", "760345", "760456", "760567"] },
          { name: "Sembawang", zipCodes: ["750301", "750344", "750387", "750411", "750466"] }
        ]
      },
      {
        name: "North-East Region",
        code: "NER",
        cities: [
          { name: "Serangoon", zipCodes: ["550101", "550134", "550167", "550201", "550234"] },
          { name: "Hougang", zipCodes: ["530971", "538884", "534212", "538765", "534421"] },
          { name: "Sengkang", zipCodes: ["540101", "540134", "540167", "540201", "540234"] }
        ]
      },
      {
        name: "Central Region 2",
        code: "CR2",
        cities: [
          { name: "Bukit Merah", zipCodes: ["150101", "150134", "150167", "150201", "150234"] },
          { name: "Queenstown", zipCodes: ["140101", "140134", "140167", "140201", "140234"] },
          { name: "Toa Payoh", zipCodes: ["310101", "310134", "310167", "310201", "310234"] }
        ]
      },
      {
        name: "East Region 2",
        code: "ER2",
        cities: [
          { name: "Pasir Ris", zipCodes: ["510101", "510134", "510167", "510201", "510234"] },
          { name: "East Coast", zipCodes: ["440101", "440134", "440167", "440201", "440234"] },
          { name: "Siglap", zipCodes: ["450101", "450134", "450167", "450201", "450234"] }
        ]
      },
      {
        name: "West Region 2",
        code: "WR2",
        cities: [
          { name: "Bukit Batok", zipCodes: ["650101", "650134", "650167", "650201", "650234"] },
          { name: "Bukit Panjang", zipCodes: ["670101", "670134", "670167", "670201", "670234"] },
          { name: "Pioneer", zipCodes: ["640101", "640134", "640167", "640201", "640234"] }
        ]
      },
      {
        name: "North Region 2",
        code: "NR2",
        cities: [
          { name: "Mandai", zipCodes: ["720101", "720134", "720167", "720201", "720234"] },
          { name: "Admiralty", zipCodes: ["730601", "730634", "730667", "730701", "730734"] },
          { name: "Woodgrove", zipCodes: ["730801", "730834", "730867", "730901", "730934"] }
        ]
      },
      {
        name: "North-East Region 2",
        code: "NER2",
        cities: [
          { name: "Punggol", zipCodes: ["820101", "820134", "820167", "820201", "820234"] },
          { name: "Kovan", zipCodes: ["530501", "530534", "530567", "530601", "530634"] },
          { name: "Paya Lebar", zipCodes: ["530734", "530767", "530801", "530834", "530867"] }
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
