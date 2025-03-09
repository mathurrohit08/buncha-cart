
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
          { name: "New York City", zipCodes: ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10008", "10009", "10010"] },
          { name: "Brooklyn", zipCodes: ["11201", "11202", "11203", "11204", "11205", "11206", "11207", "11208", "11209", "11210"] },
          { name: "Buffalo", zipCodes: ["14201", "14202", "14203", "14204", "14205", "14206", "14207", "14208", "14209", "14210"] }
        ]
      },
      {
        name: "California",
        code: "CA",
        cities: [
          { name: "Los Angeles", zipCodes: ["90001", "90002", "90003", "90004", "90005", "90006", "90007", "90008", "90009", "90010"] },
          { name: "San Francisco", zipCodes: ["94101", "94102", "94103", "94104", "94105", "94106", "94107", "94108", "94109", "94110"] },
          { name: "San Diego", zipCodes: ["92101", "92102", "92103", "92104", "92105", "92106", "92107", "92108", "92109", "92110"] }
        ]
      },
      {
        name: "Texas",
        code: "TX",
        cities: [
          { name: "Houston", zipCodes: ["77001", "77002", "77003", "77004", "77005", "77006", "77007", "77008", "77009", "77010"] },
          { name: "Dallas", zipCodes: ["75201", "75202", "75203", "75204", "75205", "75206", "75207", "75208", "75209", "75210"] },
          { name: "Austin", zipCodes: ["73301", "73344", "78701", "78702", "78703", "78704", "78705", "78706", "78707", "78708"] }
        ]
      },
      {
        name: "Florida",
        code: "FL",
        cities: [
          { name: "Miami", zipCodes: ["33101", "33102", "33103", "33104", "33105", "33106", "33107", "33108", "33109", "33110"] },
          { name: "Orlando", zipCodes: ["32801", "32802", "32803", "32804", "32805", "32806", "32807", "32808", "32809", "32810"] },
          { name: "Tampa", zipCodes: ["33601", "33602", "33603", "33604", "33605", "33606", "33607", "33608", "33609", "33610"] }
        ]
      },
      {
        name: "Illinois",
        code: "IL",
        cities: [
          { name: "Chicago", zipCodes: ["60601", "60602", "60603", "60604", "60605", "60606", "60607", "60608", "60609", "60610"] },
          { name: "Springfield", zipCodes: ["62701", "62702", "62703", "62704", "62705", "62706", "62707", "62708", "62709", "62710"] },
          { name: "Peoria", zipCodes: ["61601", "61602", "61603", "61604", "61605", "61606", "61607", "61608", "61609", "61610"] }
        ]
      },
      {
        name: "Michigan",
        code: "MI",
        cities: [
          { name: "Detroit", zipCodes: ["48201", "48202", "48203", "48204", "48205", "48206", "48207", "48208", "48209", "48210"] },
          { name: "Ann Arbor", zipCodes: ["48104", "48105", "48106", "48107", "48108", "48109", "48110", "48111", "48112", "48113"] },
          { name: "Grand Rapids", zipCodes: ["49501", "49502", "49503", "49504", "49505", "49506", "49507", "49508", "49509", "49510"] }
        ]
      },
      {
        name: "Ohio",
        code: "OH",
        cities: [
          { name: "Columbus", zipCodes: ["43201", "43202", "43203", "43204", "43205", "43206", "43207", "43208", "43209", "43210"] },
          { name: "Cleveland", zipCodes: ["44101", "44102", "44103", "44104", "44105", "44106", "44107", "44108", "44109", "44110"] },
          { name: "Cincinnati", zipCodes: ["45201", "45202", "45203", "45204", "45205", "45206", "45207", "45208", "45209", "45210"] }
        ]
      },
      {
        name: "Georgia",
        code: "GA",
        cities: [
          { name: "Atlanta", zipCodes: ["30301", "30302", "30303", "30304", "30305", "30306", "30307", "30308", "30309", "30310"] },
          { name: "Savannah", zipCodes: ["31401", "31402", "31403", "31404", "31405", "31406", "31407", "31408", "31409", "31410"] },
          { name: "Athens", zipCodes: ["30601", "30602", "30603", "30604", "30605", "30606", "30607", "30608", "30609", "30610"] }
        ]
      },
      {
        name: "North Carolina",
        code: "NC",
        cities: [
          { name: "Charlotte", zipCodes: ["28201", "28202", "28203", "28204", "28205", "28206", "28207", "28208", "28209", "28210"] },
          { name: "Raleigh", zipCodes: ["27601", "27602", "27603", "27604", "27605", "27606", "27607", "27608", "27609", "27610"] },
          { name: "Durham", zipCodes: ["27701", "27702", "27703", "27704", "27705", "27706", "27707", "27708", "27709", "27710"] }
        ]
      },
      {
        name: "Virginia",
        code: "VA",
        cities: [
          { name: "Richmond", zipCodes: ["23201", "23202", "23203", "23204", "23205", "23206", "23207", "23208", "23209", "23210"] },
          { name: "Virginia Beach", zipCodes: ["23451", "23452", "23453", "23454", "23455", "23456", "23457", "23458", "23459", "23460"] },
          { name: "Norfolk", zipCodes: ["23501", "23502", "23503", "23504", "23505", "23506", "23507", "23508", "23509", "23510"] }
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
          { name: "London", zipCodes: ["E1 6AN", "EC1A 1BB", "SW1A 0AA", "W1A 0AX", "NW1 5TH", "SE1 7PB", "E14 5AB", "WC1E 6BT", "EC2R 8AH", "SW7 2AZ"] },
          { name: "Manchester", zipCodes: ["M1 1AE", "M2 5BQ", "M3 3EB", "M4 1HN", "M5 3EQ", "M6 5BG", "M7 4JH", "M8 5XJ", "M9 8RG", "M10 7RU"] },
          { name: "Birmingham", zipCodes: ["B1 1BB", "B2 4QA", "B3 3HN", "B4 7ET", "B5 5JH", "B6 6JD", "B7 5DD", "B8 1EL", "B9 5NA", "B10 9NP"] }
        ]
      },
      {
        name: "Scotland",
        code: "SCT",
        cities: [
          { name: "Edinburgh", zipCodes: ["EH1 1BB", "EH2 2BY", "EH3 9SR", "EH4 1AJ", "EH5 2HD", "EH6 4AD", "EH7 4PH", "EH8 9JD", "EH9 1SH", "EH10 4AX"] },
          { name: "Glasgow", zipCodes: ["G1 1XW", "G2 2JJ", "G3 8ND", "G4 0BA", "G5 0QD", "G11 6AB", "G12 8QQ", "G13 1EU", "G14 9YN", "G20 0SP"] },
          { name: "Aberdeen", zipCodes: ["AB10 1XG", "AB11 5PS", "AB12 3FG", "AB15 4YU", "AB16 7PL", "AB21 9NA", "AB22 8GU", "AB23 8BZ", "AB24 3CD", "AB25 1XA"] }
        ]
      },
      {
        name: "Wales",
        code: "WLS",
        cities: [
          { name: "Cardiff", zipCodes: ["CF10 1EP", "CF11 9LJ", "CF14 3UZ", "CF15 7JT", "CF23 9AF", "CF24 0DE", "CF3 0EF", "CF5 1QA", "CF64 1YL", "CF72 8YT"] },
          { name: "Swansea", zipCodes: ["SA1 1NW", "SA2 0AT", "SA3 5AS", "SA4 3JQ", "SA5 4EA", "SA6 8JH", "SA7 9EQ", "SA8 3BB", "SA9 1BJ", "SA10 6RP"] },
          { name: "Newport", zipCodes: ["NP10 8QQ", "NP11 7BH", "NP12 1DP", "NP18 2AW", "NP19 4RB", "NP20 2DW", "NP4 5HJ", "NP44 1AJ", "NP7 5PB", "NP8 1EP"] }
        ]
      },
      {
        name: "Northern Ireland",
        code: "NIR",
        cities: [
          { name: "Belfast", zipCodes: ["BT1 1LT", "BT2 7BA", "BT3 9EJ", "BT4 3FT", "BT5 5ED", "BT6 8DD", "BT7 1JB", "BT8 6RB", "BT9 7JL", "BT10 0NR"] },
          { name: "Derry", zipCodes: ["BT47 6AA", "BT48 6DQ", "BT49 0SR", "BT51 3RP", "BT52 1SA", "BT55 7HT", "BT56 8DN", "BT57 8QZ", "BT60 3QS", "BT62 1BD"] },
          { name: "Newry", zipCodes: ["BT34 1DG", "BT35 6AL", "BT30 6LR", "BT31 9NN", "BT32 3RF", "BT33 0AS", "BT34 2DP", "BT35 7PY", "BT36 5DN", "BT37 9RS"] }
        ]
      },
      {
        name: "Yorkshire",
        code: "YRK",
        cities: [
          { name: "Leeds", zipCodes: ["LS1 1BA", "LS2 7EY", "LS3 1AB", "LS6 2NP", "LS7 3PB", "LS8 2JU", "LS9 8AG", "LS10 1QG", "LS11 9QF", "LS12 6JS"] },
          { name: "York", zipCodes: ["YO1 7HU", "YO10 5DD", "YO23 1BB", "YO24 4HF", "YO26 5RW", "YO30 7BZ", "YO31 7EL", "YO32 9LR", "YO41 1HY", "YO51 9AR"] },
          { name: "Sheffield", zipCodes: ["S1 2BJ", "S2 4SU", "S3 8GB", "S6 3RQ", "S7 2BX", "S8 0YH", "S9 1WY", "S10 2DN", "S11 8YB", "S12 2SS"] }
        ]
      },
      {
        name: "East Anglia",
        code: "EAN",
        cities: [
          { name: "Norwich", zipCodes: ["NR1 3QP", "NR2 1TH", "NR3 2QL", "NR4 6QH", "NR5 0DR", "NR6 5DR", "NR7 8SR", "NR8 6HW", "NR9 3DL", "NR10 4FS"] },
          { name: "Cambridge", zipCodes: ["CB1 1PT", "CB2 3BJ", "CB3 0FA", "CB4 1ZB", "CB5 8JL", "CB21 5XA", "CB22 3AT", "CB23 7EL", "CB24 9NR", "CB25 0HF"] },
          { name: "Ipswich", zipCodes: ["IP1 1QJ", "IP2 8RE", "IP3 9QR", "IP4 1AD", "IP5 2QL", "IP6 0NB", "IP7 6BX", "IP8 3AR", "IP9 2BY", "IP10 0FF"] }
        ]
      },
      {
        name: "South West",
        code: "SWE",
        cities: [
          { name: "Bristol", zipCodes: ["BS1 5TY", "BS2 0FT", "BS3 4ND", "BS4 3BH", "BS5 7TR", "BS6 5UB", "BS7 8TX", "BS8 4NB", "BS9 3TY", "BS10 7QT"] },
          { name: "Plymouth", zipCodes: ["PL1 1BA", "PL2 1RT", "PL3 4QX", "PL4 7ED", "PL5 3RL", "PL6 5WR", "PL7 4JH", "PL8 2JQ", "PL9 7BH", "PL10 1JB"] },
          { name: "Exeter", zipCodes: ["EX1 1BA", "EX2 4SG", "EX3 0JF", "EX4 3PW", "EX5 1DA", "EX6 8RG", "EX7 9JA", "EX8 2RS", "EX9 7BH", "EX10 8JP"] }
        ]
      },
      {
        name: "East Midlands",
        code: "EMD",
        cities: [
          { name: "Nottingham", zipCodes: ["NG1 2DL", "NG2 7QP", "NG3 5GH", "NG4 1AL", "NG5 2FE", "NG6 8BG", "NG7 2UH", "NG8 4DQ", "NG9 3GS", "NG10 1NW"] },
          { name: "Leicester", zipCodes: ["LE1 6RH", "LE2 2PP", "LE3 0BG", "LE4 5DR", "LE5 0HA", "LE7 7FX", "LE8 4GJ", "LE9 2WN", "LE10 1DS", "LE11 3TU"] },
          { name: "Derby", zipCodes: ["DE1 2QR", "DE3 0BG", "DE4 3SA", "DE5 8DR", "DE6 1GH", "DE7 5JY", "DE11 0AH", "DE12 6PQ", "DE13 0AL", "DE14 2JF"] }
        ]
      },
      {
        name: "North West",
        code: "NWE",
        cities: [
          { name: "Liverpool", zipCodes: ["L1 8JQ", "L2 2DP", "L3 5QF", "L4 3SQ", "L5 6PQ", "L6 1HY", "L7 8XZ", "L8 2YP", "L9 1BQ", "L10 2JA"] },
          { name: "Blackpool", zipCodes: ["FY1 4PU", "FY2 0JW", "FY3 8NR", "FY4 5DJ", "FY5 3TG", "FY6 8JQ", "FY7 6GX", "FY8 1ZR", "PR4 3AL", "PR5 4AQ"] },
          { name: "Preston", zipCodes: ["PR1 2AP", "PR2 1AL", "PR3 0GP", "PR4 1DJ", "PR5 4JA", "PR6 7EN", "PR7 1DR", "PR25 2LE", "PR26 7BN", "L40 4LA"] }
        ]
      },
      {
        name: "South East",
        code: "SEE",
        cities: [
          { name: "Brighton", zipCodes: ["BN1 1AF", "BN2 0EW", "BN3 1GH", "BN41 1WF", "BN42 4AT", "BN43 5FA", "BN44 3QZ", "BN45 7ED", "BN50 8HA", "BN51 9JA"] },
          { name: "Southampton", zipCodes: ["SO14 0AH", "SO15 5QF", "SO16 7HP", "SO17 3SH", "SO18 2JX", "SO19 8EZ", "SO30 2QU", "SO31 4NG", "SO40 3ZA", "SO45 1AG"] },
          { name: "Reading", zipCodes: ["RG1 1DB", "RG2 0SX", "RG4 5BY", "RG5 3JH", "RG6 1WG", "RG7 4NT", "RG8 0JB", "RG10 9FR", "RG12 1RL", "RG14 2EG"] }
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
          { name: "Toronto", zipCodes: ["M5V 2T6", "M5H 2N2", "M4W 1A8", "M5J 2S1", "M5S 1K5", "M6G 3A9", "M5T 1R4", "M6J 2X2", "M4T 1Y7", "M5R 1A1"] },
          { name: "Ottawa", zipCodes: ["K1P 5J6", "K1A 0A6", "K2P 0A4", "K1Z 7T3", "K1Y 4W1", "K1H 5T1", "K1G 3N2", "K1N 6N5", "K1S 5B6", "K1V 8Y9"] },
          { name: "Hamilton", zipCodes: ["L8P 1A1", "L8R 3H1", "L8S 1A2", "L8L 6K1", "L8N 1B9", "L8W 3K2", "L9A 1C2", "L9B 0A9", "L9C 3A9", "L8E 1J5"] }
        ]
      },
      {
        name: "Quebec",
        code: "QC",
        cities: [
          { name: "Montreal", zipCodes: ["H2Y 1C6", "H3A 1X9", "H2Z 1A4", "H3B 2Y3", "H3C 5H7", "H4A 3T2", "H2X 2L3", "H3G 1M8", "H3H 1E3", "H2K 4L8"] },
          { name: "Quebec City", zipCodes: ["G1R 3Y7", "G1V 2M2", "G1K 7P4", "G2B 1C2", "G1L 1A6", "G2E 3W1", "G2G 1C6", "G2J 0A1", "G2K 2E5", "G2L 2G4"] },
          { name: "Gatineau", zipCodes: ["J8X 2K1", "J8Y 6W2", "J8Z 1S5", "J8T 6J3", "J9A 1L2", "J9H 5T7", "J9J 0B3", "J8V 3X2", "J8P 7J2", "J8R 2M7"] }
        ]
      },
      {
        name: "British Columbia",
        code: "BC",
        cities: [
          { name: "Vancouver", zipCodes: ["V5K 0A1", "V5Y 1V4", "V6B 5Z6", "V6E 1M3", "V6G 1A2", "V6H 3R8", "V6J 4Y3", "V6K 2G8", "V6R 1Z3", "V6T 1Z4"] },
          { name: "Victoria", zipCodes: ["V8V 3K4", "V8W 1W9", "V8X 1W2", "V8Z 3H5", "V8N 1M5", "V8P 3R8", "V8R 4N2", "V8S 2M4", "V8T 4E8", "V8V 2B5"] },
          { name: "Kelowna", zipCodes: ["V1Y 1Z3", "V1W 3C6", "V1X 7W5", "V1P 1P4", "V1V 1Y8", "V1Z 3X4", "V4T 2C9", "V4V 1S6", "V1T 5K7", "V1Y 9G1"] }
        ]
      },
      {
        name: "Alberta",
        code: "AB",
        cities: [
          { name: "Calgary", zipCodes: ["T2P 1J9", "T2R 0S8", "T2N 4V5", "T2T 0C9", "T3A 5K9", "T3B 5K4", "T3C 0J8", "T3E 6W3", "T3H 3C3", "T2G 5A7"] },
          { name: "Edmonton", zipCodes: ["T5J 0N3", "T5K 2J5", "T5G 1X5", "T5H 3Y9", "T5J 4A2", "T5L 4X4", "T5M 0Y6", "T5R 1M7", "T5T 1R7", "T6H 5R7"] },
          { name: "Red Deer", zipCodes: ["T4N 0N6", "T4P 3R2", "T4R 1R2", "T4S 2L4", "T4N 1L5", "T4N 3B6", "T4N 4A8", "T4N 6V4", "T4P 1K1", "T4R 2J6"] }
        ]
      },
      {
        name: "Manitoba",
        code: "MB",
        cities: [
          { name: "Winnipeg", zipCodes: ["R3C 0B9", "R3B 1G4", "R3M 2K7", "R2C 3T2", "R2M 0T1", "R2V 3M3", "R2W 1H2", "R2Y 2C3", "R3J 0K6", "R3N 0Y6"] },
          { name: "Brandon", zipCodes: ["R7A 0N2", "R7B 0H9", "R7C 1A3", "R7A 2X1", "R7B 2C1", "R7A 6A2", "R7B 0K1", "R7A 7B2", "R7B 3B6", "R7C 0A5"] },
          { name: "Steinbach", zipCodes: ["R5G 0H6", "R5G 1B8", "R5G 1T6", "R5G 0C8", "R5G 1R3", "R5G 1W7", "R5G 0A2", "R5G 1Z3", "R5G 2G6", "R5G 1Y2"] }
        ]
      },
      {
        name: "Saskatchewan",
        code: "SK",
        cities: [
          { name: "Regina", zipCodes: ["S4P 3Y2", "S4R 1C8", "S4S 3R7", "S4T 1A5", "S4V 2Z9", "S4N 0T8", "S4P 1E6", "S4R 4C5", "S4S 6E8", "S4X 1A2"] },
          { name: "Saskatoon", zipCodes: ["S7K 0J5", "S7H 0A6", "S7J 0A9", "S7M 1P3", "S7N 3R3", "S7R 0H8", "S7S 1K5", "S7V 0A4", "S7W 0S3", "S7L 6A5"] },
          { name: "Moose Jaw", zipCodes: ["S6H 0B4", "S6J 1L5", "S6K 3H5", "S6H 7Y2", "S6J 0A9", "S6K 1B3", "S6H 4R9", "S6J 1K8", "S6K 0J2", "S6H 1A7"] }
        ]
      },
      {
        name: "Nova Scotia",
        code: "NS",
        cities: [
          { name: "Halifax", zipCodes: ["B3J 1Z2", "B3H 4R2", "B3K 5X5", "B3L 2C2", "B3M 3A2", "B3N 2E5", "B3P 1G9", "B3R 1V5", "B3S 1C6", "B3T 1Z4"] },
          { name: "Sydney", zipCodes: ["B1P 6K6", "B1S 1A1", "B1L 1A3", "B1N 3K7", "B1P 5T1", "B1R 1V6", "B1S 3G5", "B1P 1P1", "B1N 3A6", "B1L 1B5"] },
          { name: "Dartmouth", zipCodes: ["B2V 1A9", "B2W 4E6", "B2X 1R5", "B2Y 3Z2", "B3A 1T6", "B2V 2N7", "B2W 1Z8", "B2X 2H4", "B2Y 4K1", "B3B 1C3"] }
        ]
      },
      {
        name: "New Brunswick",
        code: "NB",
        cities: [
          { name: "Saint John", zipCodes: ["E2L 0B1", "E2M 5B3", "E2P 1H7", "E2J 2K9", "E2K 3Y2", "E2L 4Z1", "E2M 1A8", "E2N 1B2", "E2P 1E4", "E2J 1S7"] },
          { name: "Moncton", zipCodes: ["E1C 0H4", "E1A 8X4", "E1G 1A7", "E1E 4C5", "E1C 8J9", "E1A 9Y7", "E1G 2L5", "E1C 1N5", "E1A 7K2", "E1G 3M6"] },
          { name: "Fredericton", zipCodes: ["E3A 0G3", "E3B 1A7", "E3C 0B4", "E3A 9X2", "E3B 5C8", "E3C 2K6", "E3A 4P5", "E3B 6Y3", "E3C 1L7", "E3A 8T1"] }
        ]
      },
      {
        name: "Newfoundland and Labrador",
        code: "NL",
        cities: [
          { name: "St. John's", zipCodes: ["A1A 1A1", "A1B 2C3", "A1C 4E5", "A1E 6G7", "A1H 1J2", "A1N 3P4", "A1S 5T6", "A1A 5R7", "A1B 1T5", "A1C 3G4"] },
          { name: "Corner Brook", zipCodes: ["A2H 6J1", "A2H 1E5", "A2H 2N3", "A2H 3P5", "A2H 4R7", "A2H 5T9", "A2H 6V2", "A2H 1J8", "A2H 2L0", "A2H 3N1"] },
          { name: "Mount Pearl", zipCodes: ["A1N 1W3", "A1N 2X4", "A1N 3Y5", "A1N 4Z6", "A1N 5A7", "A1N 1A8", "A1N 2B9", "A1N 3C1", "A1N 4D2", "A1N 5E3"] }
        ]
      },
      {
        name: "Prince Edward Island",
        code: "PE",
        cities: [
          { name: "Charlottetown", zipCodes: ["C1A 1A1", "C1A 2B3", "C1A 3C4", "C1A 4D5", "C1A 5E6", "C1A 6F7", "C1A 7G8", "C1A 8H9", "C1A 9J1", "C1A 2K2"] },
          { name: "Summerside", zipCodes: ["C1N 1B1", "C1N 2C2", "C1N 3D3", "C1N 4E4", "C1N 5F5", "C1N 6G6", "C1N 7H7", "C1N 8J8", "C1N 9K9", "C1N 1L1"] },
          { name: "Stratford", zipCodes: ["C1B 1A1", "C1B 1A2", "C1B 1A3", "C1B 1A4", "C1B 1A5", "C1B 1A6", "C1B 1A7", "C1B 1A8", "C1B 1A9", "C1B 1B1"] }
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
          { name: "Sydney", zipCodes: ["2000", "2010", "2020", "2030", "2040", "2050", "2060", "2070", "2080", "2090"] },
          { name: "Newcastle", zipCodes: ["2300", "2302", "2304", "2305", "2306", "2308", "2309", "2310", "2311", "2315"] },
          { name: "Wollongong", zipCodes: ["2500", "2502", "2505", "2506", "2508", "2515", "2516", "2517", "2518", "2519"] }
        ]
      },
      {
        name: "Victoria",
        code: "VIC",
        cities: [
          { name: "Melbourne", zipCodes: ["3000", "3001", "3002", "3003", "3004", "3005", "3006", "3007", "3008", "3010"] },
          { name: "Geelong", zipCodes: ["3214", "3215", "3216", "3217", "3218", "3219", "3220", "3221", "3222", "3223"] },
          { name: "Ballarat", zipCodes: ["3350", "3351", "3352", "3353", "3354", "3355", "3356", "3357", "3358", "3360"] }
        ]
      },
      {
        name: "Queensland",
        code: "QLD",
        cities: [
          { name: "Brisbane", zipCodes: ["4000", "4001", "4005", "4006", "4007", "4008", "4009", "4010", "4011", "4012"] },
          { name: "Gold Coast", zipCodes: ["4207", "4208", "4209", "4210", "4211", "4212", "4213", "4214", "4215", "4216"] },
          { name: "Cairns", zipCodes: ["4868", "4869", "4870", "4871", "4872", "4873", "4874", "4875", "4876", "4877"] }
        ]
      },
      {
        name: "Western Australia",
        code: "WA",
        cities: [
          { name: "Perth", zipCodes: ["6000", "6003", "6004", "6005", "6006", "6007", "6008", "6009", "6010", "6011"] },
          { name: "Fremantle", zipCodes: ["6160", "6161", "6162", "6163", "6164", "6165", "6166", "6167", "6168", "6169"] },
          { name: "Bunbury", zipCodes: ["6230", "6231", "6232", "6233", "6236", "6237", "6239", "6240", "6241", "6242"] }
        ]
      },
      {
        name: "South Australia",
        code: "SA",
        cities: [
          { name: "Adelaide", zipCodes: ["5000", "5001", "5005", "5006", "5007", "5008", "5009", "5010", "5011", "5012"] },
          { name: "Mount Gambier", zipCodes: ["5290", "5291", "5292", "5293", "5294", "5295", "5296", "5297", "5298", "5299"] },
          { name: "Whyalla", zipCodes: ["5600", "5601", "5602", "5603", "5604", "5605", "5606", "5607", "5608", "5609"] }
        ]
      },
      {
        name: "Tasmania",
        code: "TAS",
        cities: [
          { name: "Hobart", zipCodes: ["7000", "7001", "7004", "7005", "7007", "7008", "7009", "7010", "7011", "7015"] },
          { name: "Launceston", zipCodes: ["7248", "7249", "7250", "7251", "7252", "7253", "7254", "7255", "7256", "7257"] },
          { name: "Devonport", zipCodes: ["7310", "7315", "7316", "7317", "7318", "7319", "7320", "7321", "7322", "7325"] }
        ]
      },
      {
        name: "Northern Territory",
        code: "NT",
        cities: [
          { name: "Darwin", zipCodes: ["0800", "0801", "0810", "0811", "0812", "0813", "0814", "0815", "0816", "0820"] },
          { name: "Alice Springs", zipCodes: ["0870", "0871", "0872", "0873", "0874", "0875", "0880", "0881", "0885", "0886"] },
          { name: "Katherine", zipCodes: ["0850", "0851", "0852", "0853", "0854", "0860", "0861", "0862", "0865", "0866"] }
        ]
      },
      {
        name: "Australian Capital Territory",
        code: "ACT",
        cities: [
          { name: "Canberra", zipCodes: ["2600", "2601", "2602", "2603", "2604", "2605", "2606", "2607", "2608", "2609"] },
          { name: "Queanbeyan", zipCodes: ["2620", "2621", "2622", "2623", "2624", "2625", "2626", "2627", "2628", "2629"] },
          { name: "Jervis Bay", zipCodes: ["2540", "2541", "2542", "2543", "2544", "2545", "2546", "2547", "2548", "2549"] }
        ]
      },
      {
        name: "Queensland Central",
        code: "QLC",
        cities: [
          { name: "Rockhampton", zipCodes: ["4700", "4701", "4702", "4703", "4704", "4705", "4710", "4711", "4712", "4713"] },
          { name: "Mackay", zipCodes: ["4740", "4741", "4742", "4743", "4744", "4745", "4746", "4747", "4748", "4749"] },
          { name: "Gladstone", zipCodes: ["4680", "4681", "4682", "4683", "4684", "4685", "4686", "4687", "4688", "4689"] }
        ]
      },
      {
        name: "Queensland North",
        code: "QLN",
        cities: [
          { name: "Townsville", zipCodes: ["4810", "4811", "4812", "4813", "4814", "4815", "4816", "4817", "4818", "4819"] },
          { name: "Mount Isa", zipCodes: ["4825", "4826", "4827", "4828", "4829", "4830", "4831", "4832", "4833", "4834"] },
          { name: "Charters Towers", zipCodes: ["4820", "4821", "4822", "4823", "4824", "4835", "4836", "4837", "4838", "4839"] }
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
