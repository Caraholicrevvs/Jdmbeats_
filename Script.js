/* =========================================================
   REVSPEC — CAR DATABASE
   cars.js

   Structure:
   Brand
      ↓
   Brand information
      ↓
   Models[]
      ↓
   Model specifications

   IMPORTANT:
   Specs should be verified against manufacturer/specification
   sources before publication.
========================================================= */

const carDatabase = [

    /* =========================
       GERMANY 🇩🇪
    ========================= */

    {
        id: "audi",
        name: "Audi",
        country: "Germany",
        founded: 1909,
        speciality: "Premium German cars, quattro all-wheel drive and performance technology.",
        parentCompany: "Volkswagen Group",

        models: [

            {
                name: "R8",
                years: "2006–2024",
                body: "Coupe / Spyder",
                engine: "5.2L V10",
                power: "602 hp",
                torque: "560 Nm",
                zeroTo100: "3.1 s",
                topSpeed: "331 km/h",
                transmission: "7-speed S tronic",
                drivetrain: "AWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "Audi"
            },

            {
                name: "RS 6 Avant",
                years: "2019–present",
                body: "Wagon",
                engine: "4.0L Twin-Turbo V8",
                power: "600+ hp",
                torque: "800 Nm",
                zeroTo100: "3.6 s",
                topSpeed: "305 km/h",
                transmission: "8-speed automatic",
                drivetrain: "AWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "Audi"
            },

            {
                name: "A4",
                years: "1994–2024",
                body: "Sedan / Avant",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic / Manual depending on market",
                drivetrain: "FWD / AWD",
                fuel: "Petrol / Diesel / Mild Hybrid",
                price: "Varies by market",
                source: "Audi"
            }

        ]
    },


    {
        id: "bmw",
        name: "BMW",
        country: "Germany",
        founded: 1916,
        speciality: "Performance-oriented luxury cars, driving dynamics and engineering.",
        parentCompany: "BMW Group",

        models: [

            {
                name: "M3",
                years: "1986–present",
                body: "Sedan",
                engine: "3.0L Twin-Turbo Inline-6",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic / Manual depending on version",
                drivetrain: "RWD / AWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "BMW"
            },

            {
                name: "M5",
                years: "1984–present",
                body: "Sedan",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic",
                drivetrain: "Market dependent",
                fuel: "Petrol / Hybrid depending on generation",
                price: "Varies by market",
                source: "BMW"
            },

            {
                name: "M4",
                years: "2014–present",
                body: "Coupe / Convertible",
                engine: "3.0L Twin-Turbo Inline-6",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic / Manual depending on version",
                drivetrain: "RWD / AWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "BMW"
            }

        ]
    },


    {
        id: "mercedes",
        name: "Mercedes-Benz",
        country: "Germany",
        founded: 1886,
        speciality: "Luxury vehicles, engineering, comfort and automotive innovation.",
        parentCompany: "Mercedes-Benz Group",

        models: [

            {
                name: "C-Class",
                years: "1993–present",
                body: "Sedan / Estate",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic",
                drivetrain: "RWD / AWD",
                fuel: "Petrol / Diesel / Hybrid",
                price: "Varies by market",
                source: "Mercedes-Benz"
            },

            {
                name: "AMG GT",
                years: "2014–present",
                body: "Coupe",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic",
                drivetrain: "RWD / AWD depending on version",
                fuel: "Petrol",
                price: "Varies by market",
                source: "Mercedes-Benz"
            }

        ]
    },


    {
        id: "porsche",
        name: "Porsche",
        country: "Germany",
        founded: 1931,
        speciality: "Sports cars, motorsport engineering and performance.",
        parentCompany: "Volkswagen Group",

        models: [

            {
                name: "911",
                years: "1964–present",
                body: "Sports car",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / PDK",
                drivetrain: "RWD / AWD",
                fuel: "Petrol / Hybrid depending on generation",
                price: "Varies by market",
                source: "Porsche"
            }

        ]
    },


    /* =========================
       JAPAN 🇯🇵
    ========================= */

    {
        id: "toyota",
        name: "Toyota",
        country: "Japan",
        founded: 1937,
        speciality: "Mass-market vehicles, reliability, hybrids and global production.",
        parentCompany: "Toyota Motor Corporation",

        models: [

            {
                name: "Supra",
                years: "1978–present",
                body: "Sports car",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic",
                drivetrain: "RWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "Toyota"
            },

            {
                name: "GR Yaris",
                years: "2020–present",
                body: "Hot hatch",
                engine: "1.6L Turbo 3-cylinder",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic depending on version",
                drivetrain: "AWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "Toyota"
            },

            {
                name: "Land Cruiser",
                years: "1951–present",
                body: "SUV",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic / Manual depending on generation",
                drivetrain: "4WD / AWD depending on version",
                fuel: "Petrol / Diesel / Hybrid depending on market",
                price: "Varies by market",
                source: "Toyota"
            }

        ]
    },


    {
        id: "nissan",
        name: "Nissan",
        country: "Japan",
        founded: 1933,
        speciality: "Performance cars, mass-market vehicles and electric mobility.",
        parentCompany: "Nissan Motor Co.",

        models: [

            {
                name: "GT-R",
                years: "2007–present",
                body: "Sports car",
                engine: "3.8L Twin-Turbo V6",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Dual-clutch automatic",
                drivetrain: "AWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "Nissan"
            },

            {
                name: "370Z",
                years: "2008–2020",
                body: "Sports car",
                engine: "3.7L V6",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic",
                drivetrain: "RWD",
                fuel: "Petrol",
                price: "Discontinued",
                source: "Nissan"
            }

        ]
    },


    {
        id: "honda",
        name: "Honda",
        country: "Japan",
        founded: 1948,
        speciality: "Engineering, efficient engines, motorcycles and performance cars.",
        parentCompany: "Honda Motor Co.",

        models: [

            {
                name: "Civic Type R",
                years: "1997–present",
                body: "Hot hatch",
                engine: "2.0L Turbo Inline-4",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "6-speed manual",
                drivetrain: "FWD",
                fuel: "Petrol",
                price: "Varies by market",
                source: "Honda"
            }

        ]
    },


    {
        id: "mazda",
        name: "Mazda",
        country: "Japan",
        founded: 1920,
        speciality: "Driver-focused cars, lightweight engineering and rotary-engine heritage.",
        parentCompany: "Mazda Motor Corporation",

        models: [

            {
                name: "RX-7",
                years: "1978–2002",
                body: "Sports car",
                engine: "Rotary",
                power: "Generation dependent",
                torque: "Generation dependent",
                zeroTo100: "Generation dependent",
                topSpeed: "Generation dependent",
                transmission: "Manual / Automatic",
                drivetrain: "RWD",
                fuel: "Petrol",
                price: "Discontinued",
                source: "Mazda"
            }

        ]
    },


    {
        id: "subaru",
        name: "Subaru",
        country: "Japan",
        founded: 1953,
        speciality: "All-wheel drive, boxer engines and rally heritage.",
        parentCompany: "Subaru Corporation",

        models: [

            {
                name: "WRX STI",
                years: "1994–2021",
                body: "Sports sedan",
                engine: "2.5L Turbo Boxer-4",
                power: "Generation dependent",
                torque: "Generation dependent",
                zeroTo100: "Generation dependent",
                topSpeed: "Generation dependent",
                transmission: "Manual",
                drivetrain: "AWD",
                fuel: "Petrol",
                price: "Discontinued",
                source: "Subaru"
            }

        ]
    },


    /* =========================
       INDIA 🇮🇳
    ========================= */

    {
        id: "tata",
        name: "Tata Motors",
        country: "India",
        founded: 1945,
        speciality: "Indian passenger cars, SUVs, commercial vehicles and EVs.",
        parentCompany: "Tata Group",

        models: [

            {
                name: "Nexon",
                years: "2017–present",
                body: "Compact SUV",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic / AMT depending on version",
                drivetrain: "FWD",
                fuel: "Petrol / Diesel / EV",
                price: "Varies by market",
                source: "Tata Motors"
            },

            {
                name: "Harrier",
                years: "2019–present",
                body: "SUV",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic",
                drivetrain: "FWD",
                fuel: "Diesel / Petrol depending on generation",
                price: "Varies by market",
                source: "Tata Motors"
            }

        ]
    },


    {
        id: "mahindra",
        name: "Mahindra",
        country: "India",
        founded: 1945,
        speciality: "SUVs, utility vehicles, off-road vehicles and electric mobility.",
        parentCompany: "Mahindra Group",

        models: [

            {
                name: "Thar",
                years: "2010–present",
                body: "Off-road SUV",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic",
                drivetrain: "RWD / 4WD",
                fuel: "Petrol / Diesel",
                price: "Varies by market",
                source: "Mahindra"
            },

            {
                name: "Scorpio",
                years: "2002–present",
                body: "SUV",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic depending on generation",
                drivetrain: "RWD / 4WD depending on version",
                fuel: "Diesel / Petrol depending on generation",
                price: "Varies by market",
                source: "Mahindra"
            }

        ]
    },


    {
        id: "maruti-suzuki",
        name: "Maruti Suzuki",
        country: "India",
        founded: 1981,
        speciality: "Mass-market passenger vehicles and extensive Indian-market presence.",
        parentCompany: "Suzuki Motor Corporation",

        models: [

            {
                name: "Swift",
                years: "2005–present",
                body: "Hatchback",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Manual / Automatic / AMT depending on version",
                drivetrain: "FWD",
                fuel: "Petrol / CNG depending on version",
                price: "Varies by market",
                source: "Maruti Suzuki"
            }

        ]
    },


    /* =========================
       UK 🇬🇧
    ========================= */

    {
        id: "jaguar",
        name: "Jaguar",
        country: "United Kingdom",
        founded: 1922,
        speciality: "British luxury, performance and distinctive sports-car design.",
        parentCompany: "JLR / Tata Motors",

        models: [

            {
                name: "F-Type",
                years: "2013–2024",
                body: "Sports car",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic",
                drivetrain: "RWD / AWD",
                fuel: "Petrol",
                price: "Discontinued",
                source: "Jaguar"
            }

        ]
    },


    {
        id: "land-rover",
        name: "Land Rover",
        country: "United Kingdom",
        founded: 1948,
        speciality: "Luxury SUVs and off-road capability.",
        parentCompany: "JLR / Tata Motors",

        models: [

            {
                name: "Defender",
                years: "1983–present",
                body: "SUV",
                engine: "Market dependent",
                power: "Market dependent",
                torque: "Market dependent",
                zeroTo100: "Market dependent",
                topSpeed: "Market dependent",
                transmission: "Automatic",
                drivetrain: "AWD",
                fuel: "Petrol / Diesel / Hybrid",
                price: "Varies by market",
                source: "Land Rover"
            }

        ]
    },


    {
        id: "mclaren",
        name: "McLaren",
        country: "United Kingdom",
        founded: 1963,
        speciality: "High-performance supercars and motorsport engineering.",
        parentCompany: "McLaren",
        models: []
    },


    {
        id: "aston-martin",
        name: "Aston Martin",
        country: "United Kingdom",
        founded: 1913,
        speciality: "Luxury sports cars and grand tourers.",
        parentCompany: "Aston Martin Lagonda",
        models: []
    },


    /* =========================
       ITALY 🇮🇹
    ========================= */

    {
        id: "ferrari",
        name: "Ferrari",
        country: "Italy",
        founded: 1939,
        speciality: "High-performance sports cars and motorsport.",
        parentCompany: "Ferrari N.V.",
        models: []
    },


    {
        id: "lamborghini",
        name: "Lamborghini",
        country: "Italy",
        founded: 1963,
        speciality: "High-performance luxury supercars.",
        parentCompany: "Volkswagen Group",
        models: []
    },


    {
        id: "maserati",
        name: "Maserati",
        country: "Italy",
        founded: 1914,
        speciality: "Italian luxury performance cars.",
        parentCompany: "Stellantis",
        models: []
    },


    {
        id: "alfa-romeo",
        name: "Alfa Romeo",
        country: "Italy",
        founded: 1910,
        speciality: "Italian performance-oriented cars and motorsport heritage.",
        parentCompany: "Stellantis",
        models: []
    },


    /* =========================
       USA 🇺🇸
    ========================= */

    {
        id: "ford",
        name: "Ford",
        country: "United States",
        founded: 1903,
        speciality: "Mass-market vehicles, trucks, SUVs and performance cars.",
        parentCompany: "Ford Motor Company",
        models: []
    },


    {
        id: "chevrolet",
        name: "Chevrolet",
        country: "United States",
        founded: 1911,
        speciality: "Mass-market cars, trucks and performance vehicles.",
        parentCompany: "General Motors",
        models: []
    },


    {
        id: "dodge",
        name: "Dodge",
        country: "United States",
        founded: 1900,
        speciality: "Performance cars, muscle cars and trucks.",
        parentCompany: "Stellantis",
        models: []
    },


    {
        id: "tesla",
        name: "Tesla",
        country: "United States",
        founded: 2003,
        speciality: "Electric vehicles, battery technology and software.",
        parentCompany: "Tesla",
        models: []
    }

];


/* =========================================================
   SEARCH FUNCTIONS
========================================================= */


/* Search BRANDS */

function searchBrands(query) {

    query = query.toLowerCase().trim();

    if (!query) {
        return carDatabase;
    }

    return carDatabase.filter(brand =>
        brand.name.toLowerCase().includes(query) ||
        brand.country.toLowerCase().includes(query)
    );
}


/* Search MODELS */

function searchModels(query) {

    query = query.toLowerCase().trim();

    if (!query) {
        return [];
    }

    const results = [];

    carDatabase.forEach(brand => {

        brand.models.forEach(model => {

            if (
                model.name.toLowerCase().includes(query) ||
                brand.name.toLowerCase().includes(query)
            ) {

                results.push({
                    brand: brand.name,
                    country: brand.country,
                    model: model
                });

            }

        });

    });

    return results;
}


/* Find a specific brand */

function getBrand(brandID) {

    return carDatabase.find(
        brand => brand.id === brandID
    );

}


/* Find a specific model */

function getModel(brandID, modelName) {

    const brand = getBrand(brandID);

    if (!brand) return null;

    return brand.models.find(
        model =>
            model.name.toLowerCase() ===
            modelName.toLowerCase()
    );

}


/* =========================================================
   EXAMPLE
========================================================= */

// console.log(searchBrands("BMW"));
// console.log(searchBrands("Germany"));
// console.log(searchModels("Supra"));
// console.log(getBrand("toyota"));
// console.log(getModel("toyota", "Supra"));
