// RevSpec brand database
// Structure per brand:
// { id, name, country, founded, bio, history, current: [{name, since, desc}], old: [{name, years, desc}] }
// To add a brand: copy an object below, fill in the fields, add a comma after the previous entry.

const BRANDS = [
  {
    id: "toyota", name: "Toyota", country: "Japan", founded: 1937,
    bio: "The world's largest automaker by volume, known for reliability and the Toyota Production System.",
    history: "Founded by Kiichiro Toyoda as a spin-off from Toyota Industries' loom business, Toyota grew from post-war rebuilding into a global leader through lean manufacturing (kaizen, just-in-time) and a reputation for durability that became its core brand promise.",
    current: [
      { name: "Corolla", since: 1966, desc: "Best-selling nameplate in automotive history; compact sedan/hatchback." },
      { name: "Land Cruiser", since: 1951, desc: "Body-on-frame off-roader sold worldwide in various generations." },
      { name: "GR Supra", since: 2019, desc: "Turbocharged sports coupe, revived with BMW co-development." }
    ],
    old: [
      { name: "Toyota 2000GT", years: "1967–1970", desc: "Hand-built halo sports car that put Japan on the performance map." },
      { name: "Toyota Celica", years: "1970–2006", desc: "Compact sporty coupe, discontinued as tastes shifted to crossovers." }
    ]
  },
  {
    id: "honda", name: "Honda", country: "Japan", founded: 1948,
    bio: "Engineering-led manufacturer that began in motorcycles and engines before building cars.",
    history: "Soichiro Honda started with motorized bicycles after WWII, moved into motorcycles by the early 1950s, and entered car production in 1963. Honda built its reputation on high-revving engine technology and later on the VTEC valve system.",
    current: [
      { name: "Civic", since: 1972, desc: "Compact car sold as sedan, hatchback, and performance Type R." },
      { name: "CR-V", since: 1995, desc: "Best-selling compact SUV globally." },
      { name: "Civic Type R", since: 1997, desc: "Front-wheel-drive performance flagship, track-focused." }
    ],
    old: [
      { name: "Honda S2000", years: "1999–2009", desc: "High-revving rear-wheel-drive roadster, cult favorite." },
      { name: "Honda NSX (first-gen)", years: "1990–2005", desc: "Aluminum-bodied supercar co-developed with input from Ayrton Senna." }
    ]
  },
  {
    id: "nissan", name: "Nissan", country: "Japan", founded: 1933,
    bio: "Mainstream Japanese automaker also known for its performance GT-R and Z sports cars.",
    history: "Nissan traces to Nihon Sangyo and absorbed early Japanese carmaker DAT. It expanded globally through the 20th century, formed the Renault-Nissan Alliance in 1999, and built a strong performance heritage through motorsport-derived models.",
    current: [
      { name: "Nissan Z", since: 1969, desc: "Latest generation of the long-running sports coupe lineage." },
      { name: "Nissan GT-R", since: 2007, desc: "All-wheel-drive performance flagship, successor to Skyline GT-R." },
      { name: "Nissan Ariya", since: 2022, desc: "Electric crossover on Nissan's EV platform." }
    ],
    old: [
      { name: "Nissan Skyline GT-R (R34)", years: "1999–2002", desc: "Legendary JDM performance icon, later banned from direct US import for years." },
      { name: "Nissan Silvia", years: "1965–2002", desc: "Rear-wheel-drive coupe popular in drifting culture." }
    ]
  },
  {
    id: "mazda", name: "Mazda", country: "Japan", founded: 1920,
    bio: "Independent Japanese maker known for the rotary engine and the MX-5 Miata.",
    history: "Started as a cork manufacturer before moving into vehicles, Mazda became the only company to mass-produce Wankel rotary engines, culminating in the RX-7 and RX-8, while the MX-5 became the best-selling two-seat sports car ever.",
    current: [
      { name: "MX-5 Miata", since: 1989, desc: "Lightweight rear-wheel-drive roadster, best-selling sports car nameplate." },
      { name: "CX-5", since: 2012, desc: "Mazda's volume-selling compact crossover." },
      { name: "Mazda3", since: 1996, desc: "Compact car sold as sedan and hatchback." }
    ],
    old: [
      { name: "Mazda RX-7", years: "1978–2002", desc: "Rotary-powered sports coupe, motorsport and tuning icon." },
      { name: "Mazda RX-8", years: "2003–2012", desc: "Four-door rotary sports car with rear-hinged doors." }
    ]
  },
  {
    id: "subaru", name: "Subaru", country: "Japan", founded: 1953,
    bio: "Known for standard all-wheel drive and horizontally opposed 'boxer' engines.",
    history: "A subsidiary of Fuji Heavy Industries (itself descended from an aircraft manufacturer), Subaru built its identity on symmetrical AWD, rally success with the WRX, and a loyal following in snow-belt regions.",
    current: [
      { name: "WRX", since: 1992, desc: "Turbocharged AWD performance sedan with rally heritage." },
      { name: "Outback", since: 1994, desc: "Raised-height AWD wagon, core of Subaru's US lineup." },
      { name: "Crosstrek", since: 2012, desc: "Compact AWD crossover based on the Impreza." }
    ],
    old: [
      { name: "Subaru SVX", years: "1991–1996", desc: "Grand touring coupe with distinctive window-in-window glass." },
      { name: "Subaru Impreza 22B STI", years: "1998", desc: "Limited rally homologation special, now a collector icon." }
    ]
  },
  {
    id: "mitsubishi", name: "Mitsubishi", country: "Japan", founded: 1970,
    bio: "Automaker arm of the wider Mitsubishi conglomerate, known for rally-bred performance cars.",
    history: "Spun off as a standalone car company from the Mitsubishi group, it built a performance reputation through the Lancer Evolution's World Rally Championship success before shifting focus toward crossovers and the Renault-Nissan-Mitsubishi Alliance.",
    current: [
      { name: "Outlander", since: 2001, desc: "Mitsubishi's core three-row crossover." },
      { name: "Outlander PHEV", since: 2013, desc: "Plug-in hybrid version, a strong seller in Europe and Japan." },
      { name: "ASX/Eclipse Cross", since: 2017, desc: "Compact crossover for global markets." }
    ],
    old: [
      { name: "Lancer Evolution", years: "1992–2016", desc: "Rally-homologated performance sedan, rival to the Subaru WRX STI." },
      { name: "3000GT/GTO", years: "1990–1999", desc: "Twin-turbo AWD grand tourer with advanced tech for its era." }
    ]
  },
  {
    id: "suzuki", name: "Suzuki", country: "Japan", founded: 1909,
    bio: "Specialist in small, efficient cars and motorcycles, dominant in emerging markets like India.",
    history: "Founded as a loom maker, Suzuki moved into motorcycles and compact vehicles after WWII. Its joint venture with Maruti made it the largest carmaker in India, and it remains a leader in kei cars in Japan.",
    current: [
      { name: "Swift", since: 1983, desc: "Global compact hatchback, Suzuki's best-known nameplate." },
      { name: "Jimny", since: 1970, desc: "Compact body-on-frame off-roader with a cult following." },
      { name: "Vitara", since: 1988, desc: "Compact crossover sold globally." }
    ],
    old: [
      { name: "Suzuki Cappuccino", years: "1991–1997", desc: "Tiny kei-class rear-wheel-drive roadster." },
      { name: "Suzuki SX4", years: "2006–2014", desc: "Compact crossover/hatchback, sold in many markets." }
    ]
  },
  {
    id: "lexus", name: "Lexus", country: "Japan", founded: 1989,
    bio: "Toyota's luxury division, launched to compete directly with German premium brands.",
    history: "Lexus debuted with the LS 400, engineered from a blank sheet to match Mercedes-Benz refinement at a lower price with exceptional build quality, and it has since built a reputation for reliability in the luxury segment.",
    current: [
      { name: "LS", since: 1989, desc: "Flagship luxury sedan, the model that launched the brand." },
      { name: "RX", since: 1998, desc: "Best-selling Lexus SUV globally." },
      { name: "LC 500", since: 2017, desc: "Flagship grand touring coupe with a naturally aspirated V8." }
    ],
    old: [
      { name: "Lexus LFA", years: "2010–2012", desc: "Limited-run carbon-fiber supercar with a 9,000rpm V10." },
      { name: "Lexus SC430", years: "2001–2010", desc: "Retractable hardtop luxury convertible." }
    ]
  },
  {
    id: "hyundai", name: "Hyundai", country: "South Korea", founded: 1967,
    bio: "South Korea's largest automaker, transformed from a budget brand into a serious global competitor.",
    history: "Hyundai began building Ford-licensed cars before launching its own Pony in 1975. Decades of investment in design and quality (including hiring former Audi design chief Peter Schreyer) turned it into a genuine rival to Japanese and European brands.",
    current: [
      { name: "Elantra", since: 1990, desc: "Compact sedan, one of Hyundai's longest-running nameplates." },
      { name: "Ioniq 5", since: 2021, desc: "Retro-futuristic electric crossover built on the E-GMP platform." },
      { name: "Tucson", since: 2004, desc: "Compact crossover, Hyundai's volume seller." }
    ],
    old: [
      { name: "Hyundai Pony", years: "1975–1990", desc: "Hyundai's first mass-produced car, sold in many developing markets." },
      { name: "Hyundai Excel", years: "1985–1999", desc: "Budget-focused subcompact that established Hyundai in the US market." }
    ]
  },
  {
    id: "kia", name: "Kia", country: "South Korea", founded: 1944,
    bio: "Korea's oldest carmaker, now a design-forward global brand under the Hyundai Motor Group.",
    history: "Kia started making bicycle parts before moving into vehicles, went through a 1990s financial crisis, and was absorbed into Hyundai Motor Group in 1998, after which sharp design (led by Peter Schreyer) reshaped its image.",
    current: [
      { name: "EV6", since: 2021, desc: "Electric crossover sharing Hyundai's E-GMP platform." },
      { name: "Telluride", since: 2019, desc: "Three-row SUV built for the North American market." },
      { name: "Sportage", since: 1993, desc: "Compact crossover, one of Kia's best sellers." }
    ],
    old: [
      { name: "Kia Sephia", years: "1992–2003", desc: "Early budget compact sedan sold internationally." },
      { name: "Kia Soul (2nd-gen)", years: "2013–2019", desc: "Boxy compact crossover known for its distinctive shape." }
    ]
  },
  {
    id: "ford", name: "Ford", country: "United States", founded: 1903,
    bio: "American pioneer of mass production, still one of the world's largest automakers.",
    history: "Henry Ford's moving assembly line for the Model T revolutionized manufacturing and made car ownership affordable for ordinary people. Ford has since built a lineup spanning trucks, muscle cars, and, more recently, electric vehicles.",
    current: [
      { name: "F-150", since: 1975, desc: "Best-selling vehicle in the US for decades, available as F-150 Lightning EV." },
      { name: "Mustang", since: 1964, desc: "Original pony car, still sold as a V8 coupe/convertible." },
      { name: "Bronco", since: 1966, desc: "Off-road SUV revived in 2021 to rival the Jeep Wrangler." }
    ],
    old: [
      { name: "Ford Model T", years: "1908–1927", desc: "The car that put America on wheels via mass production." },
      { name: "Ford GT40", years: "1964–1969", desc: "Le Mans-winning race car built to beat Ferrari." }
    ]
  },
  {
    id: "chevrolet", name: "Chevrolet", country: "United States", founded: 1911,
    bio: "General Motors' mainstream American brand, home of the Corvette and Camaro.",
    history: "Founded by Louis Chevrolet and William Durant, Chevrolet became GM's volume brand, competing with Ford across trucks and passenger cars while building a distinct performance identity through the Corvette and muscle-car Camaro.",
    current: [
      { name: "Corvette", since: 1953, desc: "America's sports car, now mid-engined as of the C8 generation." },
      { name: "Silverado", since: 1998, desc: "Full-size pickup, Chevrolet's top seller." },
      { name: "Camaro", since: 1966, desc: "Muscle car rival to the Mustang (ending production in 2024)." }
    ],
    old: [
      { name: "Chevrolet Camaro (final gen)", years: "2016–2024", desc: "Sixth-generation Camaro, discontinued as GM pivots toward EVs." },
      { name: "Chevrolet El Camino", years: "1959–1987", desc: "Car-truck hybrid (coupe utility), a cult classic." }
    ]
  },
  {
    id: "dodge", name: "Dodge", country: "United States", founded: 1900,
    bio: "American performance brand under Stellantis, known for big V8 muscle cars.",
    history: "Founded by the Dodge brothers as a machine shop before becoming a full automaker, Dodge later became Chrysler's performance division, famous for the Charger, Challenger, and the supercharged Hellcat era.",
    current: [
      { name: "Charger Daytona (EV)", since: 2024, desc: "Electric muscle car successor with simulated engine sound." },
      { name: "Durango", since: 1997, desc: "Three-row SUV, one of the few V8 SUVs still on sale." },
      { name: "Hornet", since: 2023, desc: "Compact crossover, Dodge's newest and smallest model." }
    ],
    old: [
      { name: "Dodge Challenger (Hellcat era)", years: "2008–2023", desc: "Retro muscle coupe famous for supercharged Hellcat/Demon variants." },
      { name: "Dodge Viper", years: "1991–2017", desc: "Ten-cylinder, no-frills American supercar." }
    ]
  },
  {
    id: "jeep", name: "Jeep", country: "United States", founded: 1943,
    bio: "Off-road SUV specialist descended from the WWII military vehicle.",
    history: "Jeep grew out of the WWII-era Willys MB military vehicle, and its go-anywhere reputation carried into civilian SUVs, later becoming a cornerstone brand of Chrysler and then Stellantis.",
    current: [
      { name: "Wrangler", since: 1986, desc: "Body-on-frame off-roader, direct descendant of the original Jeep." },
      { name: "Grand Cherokee", since: 1992, desc: "Jeep's mainstream midsize SUV." },
      { name: "Gladiator", since: 2019, desc: "Wrangler-based pickup truck." }
    ],
    old: [
      { name: "Willys MB", years: "1941–1945", desc: "The original military Jeep that started the brand." },
      { name: "Jeep Cherokee (XJ)", years: "1984–2001", desc: "Compact unibody SUV, influential in shaping the SUV segment." }
    ]
  },
  {
    id: "tesla", name: "Tesla", country: "United States", founded: 2003,
    bio: "Electric vehicle pioneer that pushed EVs into the mainstream.",
    history: "Founded by Martin Eberhard and Marc Tarpenning (with Elon Musk joining early and later leading the company), Tesla proved long-range EVs were viable with the Roadster and Model S, then scaled up with the mass-market Model 3.",
    current: [
      { name: "Model 3", since: 2017, desc: "Mass-market electric sedan, Tesla's best-selling model." },
      { name: "Model Y", since: 2020, desc: "Electric crossover, among the world's best-selling vehicles overall." },
      { name: "Cybertruck", since: 2023, desc: "Stainless-steel electric pickup with an angular design." }
    ],
    old: [
      { name: "Tesla Roadster (original)", years: "2008–2012", desc: "Tesla's first car, based on a Lotus Elise chassis." },
      { name: "Model S (pre-refresh)", years: "2012–2021", desc: "Original Model S body style before its 2021 redesign." }
    ]
  },
  {
    id: "bmw", name: "BMW", country: "Germany", founded: 1916,
    bio: "German maker of 'the ultimate driving machine,' rooted in aircraft engines.",
    history: "Bayerische Motoren Werke began building aircraft engines, moved into motorcycles and cars, and after a near-collapse in the late 1950s (saved partly by the Neue Klasse sedans) built its identity around driver-focused performance.",
    current: [
      { name: "3 Series", since: 1975, desc: "Compact executive sedan, the benchmark for its class." },
      { name: "M3", since: 1985, desc: "High-performance version of the 3 Series." },
      { name: "iX", since: 2021, desc: "Flagship electric SUV." }
    ],
    old: [
      { name: "BMW E30 M3", years: "1986–1991", desc: "Original M3, built for Group A touring car racing." },
      { name: "BMW Z8", years: "2000–2003", desc: "Retro-styled roadster with a hand-built V8." }
    ]
  },
  {
    id: "mercedes-benz", name: "Mercedes-Benz", country: "Germany", founded: 1926,
    bio: "Luxury pioneer credited with building the first true automobile.",
    history: "Formed from the merger of Karl Benz's and Gottlieb Daimler's companies, Mercedes-Benz traces to Benz's 1886 Patent-Motorwagen, widely regarded as the first automobile, and has led luxury and safety innovation ever since.",
    current: [
      { name: "S-Class", since: 1972, desc: "Flagship luxury sedan and technology showcase." },
      { name: "C-Class", since: 1993, desc: "Compact executive sedan, Mercedes' volume seller." },
      { name: "EQS", since: 2021, desc: "Flagship electric sedan." }
    ],
    old: [
      { name: "Mercedes-Benz 300SL 'Gullwing'", years: "1954–1957", desc: "Iconic upward-opening door sports car." },
      { name: "Mercedes-Benz SLR McLaren", years: "2003–2010", desc: "Supercar co-developed with McLaren." }
    ]
  },
  {
    id: "audi", name: "Audi", country: "Germany", founded: 1909,
    bio: "German premium brand known for quattro all-wheel drive and understated design.",
    history: "Founded by August Horch after leaving his own company, Audi later became one of the four brands (with DKW, Horch, Wanderer) represented by its four-ring logo, and rose to prominence via quattro AWD rally dominance in the 1980s.",
    current: [
      { name: "A4", since: 1994, desc: "Compact executive sedan, Audi's core model." },
      { name: "RS6 Avant", since: 2002, desc: "High-performance estate/wagon with quattro AWD." },
      { name: "e-tron GT", since: 2021, desc: "Electric grand tourer sharing a platform with the Porsche Taycan." }
    ],
    old: [
      { name: "Audi Quattro (original)", years: "1980–1991", desc: "The rally car that proved AWD's performance advantage." },
      { name: "Audi TT (first-gen)", years: "1998–2006", desc: "Bauhaus-inspired coupe that redefined Audi's design language." }
    ]
  },
  {
    id: "volkswagen", name: "Volkswagen", country: "Germany", founded: 1937,
    bio: "The 'people's car' company, now one of the world's largest automakers.",
    history: "Established under a state-backed program to build an affordable car for Germany, VW's Beetle became one of the best-selling cars ever, and the company later built a broad global lineup including the iconic Golf hatchback.",
    current: [
      { name: "Golf", since: 1974, desc: "Benchmark compact hatchback sold worldwide." },
      { name: "Tiguan", since: 2007, desc: "Compact crossover, VW's best-selling SUV." },
      { name: "ID.4", since: 2020, desc: "Electric crossover built on VW's MEB platform." }
    ],
    old: [
      { name: "Volkswagen Beetle (original)", years: "1938–2003", desc: "One of the best-selling cars in history, produced for over 60 years." },
      { name: "Volkswagen Karmann Ghia", years: "1955–1974", desc: "Stylish coupe built on Beetle mechanicals." }
    ]
  },
  {
    id: "porsche", name: "Porsche", country: "Germany", founded: 1931,
    bio: "German sports car specialist built around the rear-engined 911.",
    history: "Ferdinand Porsche's design firm (also behind the original Beetle) launched its own sports cars after WWII, and the 911, introduced in 1963, has remained in continuous production and become the brand's defining icon.",
    current: [
      { name: "911", since: 1963, desc: "Rear-engined sports car, Porsche's flagship nameplate." },
      { name: "Cayenne", since: 2002, desc: "Luxury SUV that broadened Porsche's customer base." },
      { name: "Taycan", since: 2019, desc: "Porsche's first mass-production electric car." }
    ],
    old: [
      { name: "Porsche 959", years: "1986–1993", desc: "Technological tour de force that previewed features later standard on 911s." },
      { name: "Porsche 356", years: "1948–1965", desc: "Porsche's first production car, precursor to the 911." }
    ]
  },
  {
    id: "ferrari", name: "Ferrari", country: "Italy", founded: 1939,
    bio: "Legendary Italian maker of racing-derived sports cars, born from a racing team.",
    history: "Enzo Ferrari founded the company after leaving Alfa Romeo's racing division, building road cars largely to fund Scuderia Ferrari's motorsport program, and the brand remains deeply tied to Formula 1.",
    current: [
      { name: "296 GTB", since: 2021, desc: "V6 plug-in hybrid mid-engine sports car." },
      { name: "SF90 Stradale", since: 2019, desc: "Ferrari's first series-production plug-in hybrid supercar." },
      { name: "Purosangue", since: 2022, desc: "Ferrari's first four-door, four-seat model (a high-performance SUV-like GT)." }
    ],
    old: [
      { name: "Ferrari F40", years: "1987–1992", desc: "The last car personally approved by Enzo Ferrari, an analog supercar icon." },
      { name: "Ferrari Testarossa", years: "1984–1996", desc: "Wide, flat-sided flagship of the 1980s." }
    ]
  },
  {
    id: "lamborghini", name: "Lamborghini", country: "Italy", founded: 1963,
    bio: "Italian supercar maker founded, per legend, out of a rivalry with Ferrari.",
    history: "Tractor manufacturer Ferruccio Lamborghini started building cars after a reported dispute with Enzo Ferrari, and the brand became known for dramatic, angular supercar design, especially under Audi's ownership since 1998.",
    current: [
      { name: "Huracán", since: 2014, desc: "V10 mid-engine supercar, Lamborghini's entry-level model." },
      { name: "Revuelto", since: 2023, desc: "V12 plug-in hybrid flagship, successor to the Aventador." },
      { name: "Urus", since: 2018, desc: "High-performance luxury SUV, Lamborghini's best seller." }
    ],
    old: [
      { name: "Lamborghini Countach", years: "1974–1990", desc: "Wedge-shaped icon that defined the supercar poster car." },
      { name: "Lamborghini Diablo", years: "1990–2001", desc: "Successor to the Countach, Lamborghini's fastest car of its era." }
    ]
  },
  {
    id: "maserati", name: "Maserati", country: "Italy", founded: 1914,
    bio: "Italian luxury GT and sports car maker with a trident emblem drawn from Bologna's Neptune statue.",
    history: "Founded by the Maserati brothers, the company built racing cars before turning to road-going grand tourers, passing through Citroën, De Tomaso, and Fiat/Stellantis ownership over the decades.",
    current: [
      { name: "MC20", since: 2020, desc: "Mid-engine supercar with a bespoke Maserati V6." },
      { name: "Grecale", since: 2022, desc: "Compact luxury SUV, Maserati's volume model." },
      { name: "GranTurismo", since: 2007, desc: "Flagship grand tourer, now offered with an electric Folgore variant." }
    ],
    old: [
      { name: "Maserati Bora", years: "1971–1978", desc: "Maserati's first mid-engine road car." },
      { name: "Maserati 3200 GT", years: "1998–2002", desc: "Grand tourer known for its distinctive boomerang taillights." }
    ]
  },
  {
    id: "alfa-romeo", name: "Alfa Romeo", country: "Italy", founded: 1910,
    bio: "Italian brand prized for its driving feel and motorsport pedigree, including early Ferrari ties.",
    history: "Alfa Romeo built a strong racing history in the early 20th century (including Enzo Ferrari's early career as a driver), and its road cars have long been known for sharp handling over outright luxury.",
    current: [
      { name: "Giulia", since: 2015, desc: "Rear-wheel-drive sports sedan, praised for its chassis dynamics." },
      { name: "Stelvio", since: 2016, desc: "Performance-oriented compact SUV, Alfa's best seller." },
      { name: "Tonale", since: 2022, desc: "Compact crossover, Alfa's newest and smallest model." }
    ],
    old: [
      { name: "Alfa Romeo Spider", years: "1966–1993", desc: "Long-running open-top roadster, famous from 'The Graduate.'" },
      { name: "Alfa Romeo 8C Competizione", years: "2007–2010", desc: "Limited-production V8 grand tourer." }
    ]
  },
  {
    id: "fiat", name: "Fiat", country: "Italy", founded: 1899,
    bio: "Italy's mass-market automaker, famous for small, city-friendly cars.",
    history: "Fabbrica Italiana Automobili Torino became Italy's dominant carmaker through the 20th century, building compact, affordable cars for the domestic market and later expanding into a global group that now includes Chrysler and Jeep under Stellantis.",
    current: [
      { name: "500", since: 2007, desc: "Retro-styled city car, now offered as an electric-only model in most markets." },
      { name: "Panda", since: 1980, desc: "Simple, affordable city car, one of Fiat's longest nameplates." },
      { name: "Tipo", since: 1988, desc: "Compact sedan/hatchback for value-focused markets." }
    ],
    old: [
      { name: "Fiat 500 (original)", years: "1957–1975", desc: "Iconic rear-engined city car that motorized postwar Italy." },
      { name: "Fiat Multipla (2nd-gen)", years: "1998–2010", desc: "Distinctively styled compact MPV with a double-decker face." }
    ]
  },
  {
    id: "peugeot", name: "Peugeot", country: "France", founded: 1810,
    bio: "One of the oldest car manufacturers in the world, part of the Stellantis group.",
    history: "Originally a steel and tool manufacturer, Peugeot built its first car in 1889 and became a pillar of the French auto industry, known for practical, well-engineered small and midsize cars.",
    current: [
      { name: "208", since: 2012, desc: "Peugeot's subcompact hatchback, sold with electric e-208 variant." },
      { name: "3008", since: 2008, desc: "Compact crossover, Peugeot's top seller in Europe." },
      { name: "e-2008", since: 2019, desc: "Electric version of the 2008 crossover." }
    ],
    old: [
      { name: "Peugeot 205", years: "1983–1998", desc: "Beloved supermini, including the rally-bred 205 T16." },
      { name: "Peugeot 406 Coupé", years: "1996–2004", desc: "Pininfarina-designed coupe, praised for its styling." }
    ]
  },
  {
    id: "renault", name: "Renault", country: "France", founded: 1899,
    bio: "Major French automaker with deep motorsport ties, including Formula 1 engine supply.",
    history: "Founded by the Renault brothers, the company grew into a state-owned giant post-WWII before privatizing, later forming the Renault-Nissan-Mitsubishi Alliance and remaining a fixture in European hatchback and EV segments.",
    current: [
      { name: "Clio", since: 1990, desc: "Best-selling Renault nameplate, a European supermini staple." },
      { name: "Renault 5 E-Tech", since: 2024, desc: "Electric hatchback reviving the classic R5 name and styling." },
      { name: "Megane E-Tech", since: 2022, desc: "Electric compact crossover-hatchback." }
    ],
    old: [
      { name: "Renault 5 (original)", years: "1972–1996", desc: "Boxy, popular supermini and an early hot-hatch (5 Turbo)." },
      { name: "Renault Clio V6", years: "2001–2005", desc: "Mid-engine, rear-wheel-drive homologation hot hatch." }
    ]
  },
  {
    id: "volvo", name: "Volvo", country: "Sweden", founded: 1927,
    bio: "Swedish automaker built around a reputation for safety innovation.",
    history: "Volvo pioneered numerous automotive safety features, most notably the three-point seatbelt (patented in 1959 and shared freely for public safety), and later became known for boxy, durable wagons before a design renaissance under Chinese owner Geely.",
    current: [
      { name: "XC90", since: 2002, desc: "Flagship three-row luxury SUV." },
      { name: "EX30", since: 2023, desc: "Compact electric SUV, Volvo's smallest and most affordable EV." },
      { name: "S60", since: 2000, desc: "Compact executive sedan." }
    ],
    old: [
      { name: "Volvo 240", years: "1974–1993", desc: "Boxy, famously durable wagon/sedan, a Volvo cultural touchstone." },
      { name: "Volvo P1800", years: "1961–1973", desc: "Elegant sports coupe made famous by 'The Saint' TV series." }
    ]
  },
  {
    id: "land-rover", name: "Land Rover", country: "United Kingdom", founded: 1948,
    bio: "British off-road specialist, now the SUV-focused half of JLR alongside Jaguar.",
    history: "Land Rover began as a rugged, Jeep-inspired utility vehicle for postwar Britain and farming use, and expanded into the luxury Range Rover line, which effectively created the luxury SUV segment in 1970.",
    current: [
      { name: "Defender", since: 1948, desc: "Off-road icon, reborn in modern unibody form in 2020." },
      { name: "Range Rover", since: 1970, desc: "Flagship luxury SUV that pioneered the segment." },
      { name: "Range Rover Sport", since: 2005, desc: "Sportier, more road-focused version of the Range Rover." }
    ],
    old: [
      { name: "Land Rover Series I–III", years: "1948–1985", desc: "Original utilitarian Land Rovers, predecessors to the Defender." },
      { name: "Range Rover Classic", years: "1970–1996", desc: "First-generation Range Rover, now a design icon." }
    ]
  },
  {
    id: "jaguar", name: "Jaguar", country: "United Kingdom", founded: 1935,
    bio: "British luxury and sports car maker known for elegant design and racing wins at Le Mans.",
    history: "Jaguar grew from the SS Cars company (renamed after WWII to avoid Nazi associations) and built its reputation through beautiful sports cars like the E-Type and multiple Le Mans victories, before being repositioned as an all-electric luxury brand from 2025.",
    current: [
      { name: "Jaguar Type 00", since: 2025, desc: "Concept-to-production preview of Jaguar's reborn all-electric lineup." }
    ],
    old: [
      { name: "Jaguar E-Type", years: "1961–1975", desc: "Widely regarded as one of the most beautiful cars ever made." },
      { name: "Jaguar XJ", years: "1968–2019", desc: "Long-running flagship luxury sedan, discontinued as Jaguar repositioned as EV-only." }
    ]
  },
  {
    id: "aston-martin", name: "Aston Martin", country: "United Kingdom", founded: 1913,
    bio: "British luxury sports car maker famous as James Bond's car of choice.",
    history: "Founded by Lionel Martin and Robert Bamford, Aston Martin built its reputation on hand-crafted grand tourers, cemented in pop culture by the DB5's appearance in 'Goldfinger' and subsequent Bond films.",
    current: [
      { name: "DB12", since: 2023, desc: "Grand tourer, positioned as a 'Super Tourer' flagship." },
      { name: "Vantage", since: 2005, desc: "Aston Martin's sports car, sized to rival the Porsche 911." },
      { name: "DBX", since: 2020, desc: "Aston Martin's first SUV." }
    ],
    old: [
      { name: "Aston Martin DB5", years: "1963–1965", desc: "The definitive Bond car, still an icon of British design." },
      { name: "Aston Martin Vanquish (first-gen)", years: "2001–2007", desc: "Carbon-fiber-tubbed V12 grand tourer." }
    ]
  },
  {
    id: "bentley", name: "Bentley", country: "United Kingdom", founded: 1919,
    bio: "British ultra-luxury maker under Volkswagen Group, known for handcrafted interiors.",
    history: "Founded by W.O. Bentley and celebrated for Le Mans wins in the 1920s, Bentley later focused on opulent, powerful grand tourers, with Volkswagen Group ownership since 1998 funding a major product renaissance.",
    current: [
      { name: "Continental GT", since: 2003, desc: "Bentley's grand touring coupe, its most recognizable model." },
      { name: "Flying Spur", since: 2005, desc: "Four-door luxury sedan version of the Continental." },
      { name: "Bentayga", since: 2015, desc: "Bentley's flagship luxury SUV." }
    ],
    old: [
      { name: "Bentley Turbo R", years: "1985–1997", desc: "Turbocharged luxury sedan that revived Bentley's performance edge." },
      { name: "Bentley Arnage", years: "1998–2009", desc: "Traditional handcrafted luxury sedan of the pre-VW-platform era." }
    ]
  },
  {
    id: "rolls-royce", name: "Rolls-Royce", country: "United Kingdom", founded: 1904,
    bio: "The pinnacle of British luxury motoring, now owned by BMW Group.",
    history: "Formed by the partnership of Charles Rolls and Henry Royce, the company built a reputation for engineering perfection and effortless luxury, a philosophy preserved after BMW took over the car brand in 2003.",
    current: [
      { name: "Phantom", since: 1925, desc: "Rolls-Royce's flagship sedan, the pinnacle of the lineup." },
      { name: "Ghost", since: 2009, desc: "More understated, 'post-opulent' luxury sedan." },
      { name: "Spectre", since: 2023, desc: "Rolls-Royce's first all-electric model." }
    ],
    old: [
      { name: "Rolls-Royce Silver Shadow", years: "1965–1980", desc: "Best-selling Rolls-Royce of its era, a monocoque design milestone." },
      { name: "Rolls-Royce Corniche", years: "1971–1995", desc: "Elegant convertible/coupe grand tourer." }
    ]
  },
  {
    id: "bugatti", name: "Bugatti", country: "France", founded: 1909,
    bio: "Ultra-exclusive hypercar maker chasing outright speed and craftsmanship.",
    history: "Founded by Ettore Bugatti in Molsheim, the original company built celebrated race and luxury cars until WWII, and was revived by Volkswagen Group in 1998 to build the record-breaking Veyron and Chiron hypercars.",
    current: [
      { name: "Chiron", since: 2016, desc: "Quad-turbo W16 hypercar, one of the fastest production cars ever built." },
      { name: "Mistral", since: 2023, desc: "Open-top roadster version marking the end of the W16 engine era." },
      { name: "Tourbillon", since: 2024, desc: "Bugatti's next-generation hybrid hypercar successor to the Chiron." }
    ],
    old: [
      { name: "Bugatti Veyron", years: "2005–2015", desc: "First production car to exceed 400 km/h, a defining hypercar." },
      { name: "Bugatti Type 35", years: "1924–1930", desc: "Dominant pre-war Grand Prix racing car." }
    ]
  },
  {
    id: "mclaren", name: "McLaren", country: "United Kingdom", founded: 1963,
    bio: "British supercar maker born from a Formula 1 racing team.",
    history: "Bruce McLaren's F1 racing team spun off a road-car division, producing the record-setting McLaren F1 in the 1990s, and later launched a dedicated production line of carbon-fiber-chassis supercars from 2011 onward.",
    current: [
      { name: "750S", since: 2023, desc: "Track-focused evolution of the 720S supercar." },
      { name: "Artura", since: 2021, desc: "McLaren's V6 plug-in hybrid supercar." },
      { name: "GT", since: 2019, desc: "McLaren's grand tourer, built for longer-distance comfort." }
    ],
    old: [
      { name: "McLaren F1", years: "1992–1998", desc: "Legendary three-seat supercar, once the world's fastest production car." },
      { name: "McLaren P1", years: "2013–2015", desc: "Hybrid hypercar, part of the 'Holy Trinity' with the LaFerrari and Porsche 918." }
    ]
  },
  {
    id: "mini", name: "MINI", country: "United Kingdom", founded: 1959,
    bio: "Iconic British small car brand, now owned and revived by BMW Group.",
    history: "The original Mini was designed by Alec Issigonis as a compact, efficient response to the 1956 fuel crisis and became a cultural icon in 1960s Britain; BMW relaunched it as the modern MINI in 2001.",
    current: [
      { name: "MINI Cooper", since: 2001, desc: "Modern reinterpretation of the classic Mini, now available electric." },
      { name: "MINI Countryman", since: 2010, desc: "MINI's largest model, a compact crossover." },
      { name: "MINI Convertible", since: 2004, desc: "Open-top version of the Cooper hatchback." }
    ],
    old: [
      { name: "Classic Mini", years: "1959–2000", desc: "Original Mini, one of the most influential small car designs ever." },
      { name: "MINI Clubman (1st modern gen)", years: "2007–2014", desc: "Estate-bodied MINI with a distinctive rear split doors." }
    ]
  },
  {
    id: "skoda", name: "Škoda", country: "Czech Republic", founded: 1895,
    bio: "One of the world's oldest carmakers, now a value-focused Volkswagen Group brand.",
    history: "Škoda began as a bicycle manufacturer before moving into cars, survived decades under Communist-era state control, and was acquired by Volkswagen Group in 1991, since building a reputation for practical, well-value cars.",
    current: [
      { name: "Octavia", since: 1996, desc: "Škoda's best-selling model, a spacious compact sedan/wagon." },
      { name: "Kodiaq", since: 2016, desc: "Three-row midsize SUV." },
      { name: "Enyaq", since: 2021, desc: "Škoda's electric crossover, built on VW's MEB platform." }
    ],
    old: [
      { name: "Škoda Favorit", years: "1987–1995", desc: "Front-wheel-drive hatchback that modernized the brand pre-VW ownership." },
      { name: "Škoda 110 R", years: "1970–1980", desc: "Rear-engined coupe, a rare sporty offering from the era." }
    ]
  },
  {
    id: "seat", name: "SEAT", country: "Spain", founded: 1950,
    bio: "Spain's largest carmaker, part of Volkswagen Group alongside its sporty Cupra spin-off.",
    history: "Founded as a state-backed manufacturer building Fiat-licensed cars, SEAT later joined Volkswagen Group in 1986, and in 2018 spun off its performance models into the standalone Cupra brand.",
    current: [
      { name: "Ibiza", since: 1984, desc: "SEAT's long-running supermini." },
      { name: "Leon", since: 1999, desc: "Compact hatchback/sedan, SEAT's core model." },
      { name: "Ateca", since: 2016, desc: "SEAT's first SUV, a compact crossover." }
    ],
    old: [
      { name: "SEAT 600", years: "1957–1973", desc: "Fiat 600-based car that motorized post-war Spain." },
      { name: "SEAT Marbella", years: "1986–1998", desc: "Small city car, sold well into the 1990s despite its dated design." }
    ]
  },
  {
    id: "byd", name: "BYD", country: "China", founded: 1995,
    bio: "Chinese battery and EV giant, now one of the world's largest electric vehicle makers.",
    history: "Originally a battery manufacturer, BYD ('Build Your Dreams') moved into vehicles in 2003 and leveraged its battery expertise (including Blade Battery tech) to become a dominant force in global EV and plug-in hybrid sales.",
    current: [
      { name: "Seal", since: 2022, desc: "Electric sedan positioned as a Tesla Model 3 rival." },
      { name: "Atto 3", since: 2022, desc: "Compact electric crossover sold widely outside China." },
      { name: "Dolphin", since: 2021, desc: "Compact electric hatchback." }
    ],
    old: [
      { name: "BYD F3", years: "2005–2015", desc: "Early gasoline sedan that helped establish BYD in China's market." },
      { name: "BYD e6", years: "2010–2021", desc: "Early long-range electric MPV/taxi, used widely in Chinese fleets." }
    ]
  },
  {
    id: "geely", name: "Geely", country: "China", founded: 1986,
    bio: "Major Chinese automotive group and owner of Volvo, Polestar, and Lotus.",
    history: "Starting in refrigerator parts and motorcycles, Geely entered car manufacturing in the late 1990s and grew rapidly through acquisitions, including Volvo Cars in 2010, becoming one of China's most influential auto groups.",
    current: [
      { name: "Geely Panda Mini", since: 2023, desc: "Affordable electric city car for the Chinese market." },
      { name: "Geely Monjaro", since: 2022, desc: "Midsize SUV sold across Asian and Latin American markets." },
      { name: "Geely Preface", since: 2021, desc: "Flagship sedan for the domestic Chinese market." }
    ],
    old: [
      { name: "Geely CK", years: "2005–2013", desc: "Early budget sedan from Geely's pre-Volvo-acquisition era." }
    ]
  },
  {
    id: "mg", name: "MG", country: "United Kingdom / China", founded: 1924,
    bio: "Historic British sports car brand, now owned and produced by China's SAIC Motor.",
    history: "MG built beloved British roadsters through the 20th century before changing hands multiple times; SAIC Motor acquired the brand in 2007 and relaunched MG as a value-focused global brand, especially strong in EVs.",
    current: [
      { name: "MG4 Electric", since: 2022, desc: "Affordable electric hatchback, a strong seller in Europe." },
      { name: "MG ZS", since: 2017, desc: "Compact crossover sold globally in gas and EV forms." },
      { name: "MG Cyberster", since: 2024, desc: "Electric roadster reviving MG's sports car heritage." }
    ],
    old: [
      { name: "MG B", years: "1962–1980", desc: "Best-selling British sports car of its era." },
      { name: "MG F/TF", years: "1995–2005", desc: "Mid-engine roadster from MG Rover's final era as a British company." }
    ]
  },
  {
    id: "nio", name: "NIO", country: "China", founded: 2014,
    bio: "Chinese premium EV startup known for battery-swap technology.",
    history: "Founded by William Li, NIO positioned itself as a premium EV brand competing with Tesla, distinguishing itself with battery-swap stations that let drivers exchange a depleted battery for a charged one in minutes.",
    current: [
      { name: "ET5", since: 2022, desc: "Mid-size electric sedan, NIO's Tesla Model 3 rival." },
      { name: "ES6", since: 2018, desc: "Electric SUV, one of NIO's core models." },
      { name: "EC7", since: 2023, desc: "Electric coupe-SUV flagship." }
    ],
    old: [
      { name: "NIO EP9", years: "2016–2017", desc: "Limited-run electric hypercar used to showcase NIO's performance tech." }
    ]
  },
  {
    id: "xpeng", name: "XPeng", country: "China", founded: 2014,
    bio: "Chinese EV maker known for advanced driver-assistance technology.",
    history: "Founded by He Xiaopeng, XPeng built its identity around smart, tech-forward electric vehicles with in-house autonomous driving software, growing into one of China's leading 'new force' EV makers.",
    current: [
      { name: "P7", since: 2020, desc: "Electric sports sedan with a long range and sleek design." },
      { name: "G6", since: 2023, desc: "Electric coupe-SUV, a strong seller for the brand." },
      { name: "X9", since: 2023, desc: "Electric MPV positioned as a tech-flagship family vehicle." }
    ],
    old: [
      { name: "XPeng G3", years: "2018–2023", desc: "XPeng's first production SUV, an early entry in its lineup." }
    ]
  },
  {
    id: "tata", name: "Tata Motors", country: "India", founded: 1945,
    bio: "India's largest automaker by revenue, and owner of Jaguar Land Rover.",
    history: "Part of the wider Tata Group conglomerate, Tata Motors built its early reputation on trucks and buses before expanding into passenger cars, and acquired Jaguar Land Rover from Ford in 2008.",
    current: [
      { name: "Nexon", since: 2017, desc: "Compact SUV, India's best-selling SUV nameplate for years." },
      { name: "Punch", since: 2021, desc: "Micro-SUV aimed at budget-conscious Indian buyers." },
      { name: "Tiago", since: 2016, desc: "Compact hatchback, sold in petrol and electric forms." }
    ],
    old: [
      { name: "Tata Indica", years: "1998–2018", desc: "India's first indigenously developed hatchback." },
      { name: "Tata Nano", years: "2008–2018", desc: "Marketed as the world's cheapest car, discontinued due to low demand." }
    ]
  },
  {
    id: "mahindra", name: "Mahindra", country: "India", founded: 1945,
    bio: "Indian manufacturer known for rugged SUVs and a strong farm-equipment heritage.",
    history: "Originally a steel trading company, Mahindra & Mahindra began assembling Willys Jeeps under license in India, building a lasting association with tough, go-anywhere SUVs that continues in its modern lineup.",
    current: [
      { name: "Thar", since: 2010, desc: "Compact off-roader, spiritual successor to Mahindra's original Jeep-based vehicles." },
      {
        name: "XUV 7XO", since: 2026,
        desc: "Facelifted evolution of the XUV700, Mahindra's flagship feature-rich SUV.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Mahindra_XUV700_2.2_AX7_(India)_front_view.png",
        specs: {
          "Body Style": "5-door SUV, 5/7-seater",
          "Engine": "2.0L mStallion turbo-petrol I4 / 2.2L mHawk turbo-diesel I4",
          "Power": "200 hp (petrol) / 182 hp (diesel)",
          "Transmission": "6-speed manual / 6-speed automatic",
          "Drivetrain": "FWD (petrol) · FWD or AWD (diesel)",
          "Price (ex-showroom, India)": "₹13.66 lakh – ₹24.92 lakh"
        }
      },
      { name: "Scorpio-N", since: 2022, desc: "Body-on-frame SUV, one of Mahindra's flagship models." }
    ],
    old: [
      { name: "Mahindra CJ340/540", years: "1947–1970s", desc: "Licensed Willys Jeep variants that began Mahindra's SUV lineage." },
      { name: "Mahindra Armada", years: "1994–2003", desc: "Early Mahindra-designed SUV for the domestic market." },
      {
        name: "XUV700 (pre-facelift)", years: "2021–2026",
        desc: "Original XUV700 before the January 2026 facelift renamed it XUV 7XO.",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Mahindra_XUV700_2.2_AX7_(India)_front_view.png",
        specs: {
          "Body Style": "5-door SUV, 5/7-seater",
          "Engine": "2.0L mStallion turbo-petrol I4 / 2.2L mHawk turbo-diesel I4",
          "Power": "200 hp (petrol) / 155–185 hp (diesel)",
          "Transmission": "6-speed manual / 6-speed automatic",
          "Price (ex-showroom, India)": "₹13.66 lakh – ₹26.18 lakh"
        }
      }
    ]
  },
  {
    id: "opel", name: "Opel", country: "Germany", founded: 1862,
    bio: "German mass-market brand under Stellantis, sold as Vauxhall in the UK.",
    history: "Opel began as a sewing-machine and bicycle maker before entering the car business, was long owned by General Motors, and was sold to PSA Group (now Stellantis) in 2017, ending nearly nine decades of GM ownership.",
    current: [
      { name: "Corsa", since: 1982, desc: "Opel's subcompact hatchback, sold with an electric Corsa-e." },
      { name: "Astra", since: 1991, desc: "Compact hatchback/sedan, Opel's core European model." },
      { name: "Mokka", since: 2012, desc: "Compact crossover with distinctive 'Vizor' front-end design." }
    ],
    old: [
      { name: "Opel Manta", years: "1970–1988", desc: "Sporty rear-wheel-drive coupe, a European performance favorite." },
      { name: "Opel GT", years: "1968–1973", desc: "Small sports car styled like a scaled-down Corvette." }
    ]
  },
  {
    id: "citroen", name: "Citroën", country: "France", founded: 1919,
    bio: "French brand famous for unconventional engineering, including hydropneumatic suspension.",
    history: "André Citroën founded the company applying mass-production techniques learned from gear manufacturing, and Citroën became known for daring engineering choices like front-wheel drive and self-leveling hydropneumatic suspension.",
    current: [
      { name: "C3", since: 2002, desc: "Citroën's subcompact hatchback, sold with an electric ë-C3." },
      { name: "C5 Aircross", since: 2017, desc: "Comfort-focused compact SUV." },
      { name: "C4", since: 2004, desc: "Compact hatchback, now offered as an EV as well." }
    ],
    old: [
      { name: "Citroën DS", years: "1955–1975", desc: "Futuristic sedan with hydropneumatic suspension, an automotive design landmark." },
      { name: "Citroën 2CV", years: "1948–1990", desc: "Simple, low-cost car built for rural post-war France." }
    ]
  },
  {
    id: "infiniti", name: "Infiniti", country: "Japan", founded: 1989,
    bio: "Nissan's luxury division, launched the same year as Lexus to enter the US premium market.",
    history: "Infiniti launched alongside Lexus and Acura in the late-1980s wave of Japanese luxury brands, building performance-leaning sedans and SUVs, though its lineup has narrowed in recent years amid tough competition.",
    current: [
      { name: "Q50", since: 2013, desc: "Infiniti's sport sedan, its core performance model." },
      { name: "QX60", since: 2013, desc: "Three-row midsize luxury SUV." },
      { name: "QX80", since: 2004, desc: "Full-size body-on-frame luxury SUV." }
    ],
    old: [
      { name: "Infiniti Q45", years: "1989–2006", desc: "Infiniti's original flagship sedan, launched with the brand itself." },
      { name: "Infiniti FX", years: "2003–2013", desc: "Sport-styled crossover, an early departure from boxy SUV design." }
    ]
  },
  {
    id: "acura", name: "Acura", country: "Japan", founded: 1986,
    bio: "Honda's luxury division and the first Japanese premium brand sold in the US.",
    history: "Launched in 1986, Acura became the pioneer of Japanese luxury brands in America, and built a performance identity through cars like the NSX and Integra Type R alongside its luxury sedans.",
    current: [
      { name: "Integra", since: 1985, desc: "Compact sporty model, revived in 2022 after a hiatus." },
      { name: "MDX", since: 2000, desc: "Acura's three-row luxury SUV, its best seller." },
      { name: "TLX", since: 2014, desc: "Acura's midsize sport sedan." }
    ],
    old: [
      { name: "Acura NSX (first-gen)", years: "1990–2005", desc: "Sold as Honda NSX outside North America; aluminum-bodied supercar." },
      { name: "Acura Integra Type R", years: "1997–2001", desc: "High-revving front-wheel-drive performance icon." }
    ]
  },
  {
    id: "cadillac", name: "Cadillac", country: "United States", founded: 1902,
    bio: "GM's luxury flagship brand, historically the benchmark for American prestige cars.",
    history: "Named after the founder of Detroit, Cadillac became GM's top-tier luxury marque, known for its 'Standard of the World' engineering claims in the early 20th century and, more recently, for its EV-focused Lyriq and Celestiq.",
    current: [
      { name: "Escalade", since: 1998, desc: "Full-size luxury SUV, a cultural status symbol in the US." },
      { name: "Lyriq", since: 2022, desc: "Cadillac's first dedicated electric SUV." },
      { name: "CT5", since: 2019, desc: "Cadillac's midsize luxury sport sedan." }
    ],
    old: [
      { name: "Cadillac Eldorado", years: "1952–2002", desc: "Long-running personal luxury car, a symbol of American postwar excess." },
      { name: "Cadillac CTS-V (2nd-gen)", years: "2009–2014", desc: "Supercharged performance sedan that rivaled German M/AMG cars." }
    ]
  },
  {
    id: "buick", name: "Buick", country: "United States", founded: 1899,
    bio: "GM's near-luxury brand, historically a strong seller in the Chinese market.",
    history: "One of GM's founding brands, Buick built a reputation for stepping-stone luxury between mainstream Chevrolet and premium Cadillac, and has found particular success in China, where it remains a strong-selling foreign brand.",
    current: [
      { name: "Envision", since: 2015, desc: "Compact luxury crossover, Buick's core US seller." },
      { name: "Enclave", since: 2007, desc: "Three-row midsize luxury SUV." }
    ],
    old: [
      { name: "Buick Roadmaster", years: "1936–1996", desc: "Full-size flagship sedan/wagon across multiple Buick eras." },
      { name: "Buick Grand National", years: "1982–1987", desc: "Turbocharged performance coupe, a 1980s cult classic." }
    ]
  },
  {
    id: "gmc", name: "GMC", country: "United States", founded: 1911,
    bio: "GM's truck and SUV-focused brand, positioned as more premium than Chevrolet.",
    history: "GMC emerged from the consolidation of early truck manufacturers into General Motors, and has remained focused exclusively on trucks and SUVs, often sharing platforms with Chevrolet but with higher trim positioning.",
    current: [
      { name: "Sierra", since: 1998, desc: "Full-size pickup, GMC's top seller, related to the Chevrolet Silverado." },
      { name: "Yukon", since: 1991, desc: "Full-size SUV, GMC's counterpart to the Chevrolet Tahoe." },
      { name: "Hummer EV", since: 2021, desc: "Electric revival of the Hummer name as a GMC sub-brand." }
    ],
    old: [
      { name: "GMC Typhoon", years: "1992–1993", desc: "Turbocharged, AWD performance SUV, a short-lived cult classic." }
    ]
  },
  {
    id: "lincoln", name: "Lincoln", country: "United States", founded: 1917,
    bio: "Ford's luxury division, historically favored for American presidential limousines.",
    history: "Founded by Henry Leland and later acquired by Ford, Lincoln built a reputation for stately luxury, famously supplying presidential state cars for decades, and has more recently repositioned around SUVs.",
    current: [
      { name: "Navigator", since: 1997, desc: "Full-size luxury SUV, Lincoln's flagship." },
      { name: "Aviator", since: 2019, desc: "Midsize luxury SUV, offered with a plug-in hybrid Grand Touring variant." },
      { name: "Corsair", since: 2019, desc: "Lincoln's compact luxury crossover." }
    ],
    old: [
      { name: "Lincoln Continental", years: "1939–2020", desc: "Storied flagship sedan across multiple eras, discontinued in 2020." },
      { name: "Lincoln Town Car", years: "1980–2011", desc: "Long-running full-size sedan, a staple of American livery service." }
    ]
  },
  {
    id: "chrysler", name: "Chrysler", country: "United States", founded: 1925,
    bio: "Historic American brand, now reduced to a single model under Stellantis.",
    history: "Founded by Walter Chrysler, the company once ranked among Detroit's 'Big Three,' pioneering innovations like the minivan in the 1980s, though its lineup has shrunk dramatically in the 21st century.",
    current: [
      { name: "Pacifica", since: 2016, desc: "Minivan, Chrysler's sole remaining model in most markets." }
    ],
    old: [
      { name: "Chrysler 300C", years: "2004–2023", desc: "Bold, rear-wheel-drive full-size sedan, a design and sales success in its debut generation." },
      { name: "Chrysler PT Cruiser", years: "2000–2010", desc: "Retro-styled compact hatchback, a distinctive 2000s design." }
    ]
  },
  {
    id: "rivian", name: "Rivian", country: "United States", founded: 2009,
    bio: "American EV startup focused on adventure-oriented electric trucks and SUVs.",
    history: "Founded by RJ Scaringe, Rivian spent over a decade in relative quiet development before launching the R1T pickup and R1S SUV in 2021, backed by investment from Amazon and Ford, and has since built its own delivery vans for Amazon.",
    current: [
      { name: "R1T", since: 2021, desc: "Electric adventure pickup truck, Rivian's debut vehicle." },
      { name: "R1S", since: 2022, desc: "Three-row electric SUV sharing the R1T's platform." },
      { name: "R2", since: 2026, desc: "Smaller, more affordable electric crossover aimed at wider adoption." }
    ],
    old: []
  },
  {
    id: "lucid", name: "Lucid Motors", country: "United States", founded: 2007,
    bio: "American EV maker focused on long-range, high-efficiency luxury electric cars.",
    history: "Originally founded as battery company Atieva, Lucid pivoted to building its own vehicles and launched the Air sedan in 2021, setting range records and drawing on deep ties to former Tesla engineering talent.",
    current: [
      { name: "Air", since: 2021, desc: "Flagship electric luxury sedan, known for class-leading range and efficiency." },
      { name: "Gravity", since: 2024, desc: "Lucid's first SUV, built on the same platform philosophy as the Air." }
    ],
    old: []
  },
  {
    id: "daihatsu", name: "Daihatsu", country: "Japan", founded: 1907,
    bio: "Japan's oldest carmaker, a Toyota subsidiary specializing in kei cars and small vehicles.",
    history: "Originally an engine manufacturer, Daihatsu became one of Japan's oldest automakers and, since becoming a full Toyota subsidiary in 2016, has focused on small cars for Japan and emerging Southeast Asian markets.",
    current: [
      { name: "Daihatsu Tanto", since: 2003, desc: "Tall-roof kei car popular for its cabin space in Japan." },
      { name: "Daihatsu Rocky", since: 2019, desc: "Compact SUV, also sold as the Toyota Raize." }
    ],
    old: [
      { name: "Daihatsu Charade", years: "1977–2000", desc: "Compact hatchback sold in many export markets." },
      { name: "Daihatsu Copen", years: "2002–2012 (1st-gen)", desc: "Small retractable-hardtop kei roadster." }
    ]
  },
  {
    id: "isuzu", name: "Isuzu", country: "Japan", founded: 1916,
    bio: "Japanese manufacturer specializing in trucks, diesel engines, and the D-Max pickup.",
    history: "One of Japan's oldest vehicle makers, Isuzu exited the passenger-car business in the early 2000s to focus entirely on commercial trucks, diesel engines, and the internationally popular D-Max pickup.",
    current: [
      { name: "D-Max", since: 2002, desc: "Isuzu's global mid-size pickup truck." },
      { name: "MU-X", since: 2004, desc: "SUV built on the D-Max platform, popular in Asia-Pacific and Australia." }
    ],
    old: [
      { name: "Isuzu Trooper", years: "1981–2002", desc: "Body-on-frame SUV once sold in the US and many global markets." },
      { name: "Isuzu Gemini", years: "1974–2000", desc: "Compact sedan sold in several export markets, including as Chevrolet variants." }
    ]
  },
  {
    id: "genesis", name: "Genesis", country: "South Korea", founded: 2015,
    bio: "Hyundai Motor Group's standalone luxury brand, launched to compete with German premium marques.",
    history: "Spun off from Hyundai's Genesis sedan model into its own luxury brand in 2015, Genesis has rapidly built a premium reputation through strong reviews, distinctive design, and aggressive electric vehicle expansion.",
    current: [
      { name: "G90", since: 2015, desc: "Genesis flagship luxury sedan." },
      { name: "GV70", since: 2020, desc: "Compact luxury SUV, offered in a fully electric variant." },
      { name: "GV60", since: 2021, desc: "Genesis's dedicated electric crossover." }
    ],
    old: []
  },
  {
    id: "polestar", name: "Polestar", country: "Sweden", founded: 1996,
    bio: "Performance electric car brand spun off from Volvo, backed by Geely.",
    history: "Originally Volvo's motorsport and tuning partner, Polestar was relaunched in 2017 as a standalone electric performance brand, sharing technology with Volvo while pursuing its own minimalist Scandinavian design language.",
    current: [
      { name: "Polestar 2", since: 2020, desc: "Electric fastback sedan, the brand's volume model." },
      { name: "Polestar 3", since: 2023, desc: "Electric performance SUV." },
      { name: "Polestar 4", since: 2023, desc: "Electric coupe-SUV notable for its rear-camera-in-place-of-a-window design." }
    ],
    old: [
      { name: "Polestar 1", years: "2019–2021", desc: "Limited-run hybrid grand touring coupe, the brand's halo launch model." }
    ]
  },
  {
    id: "koenigsegg", name: "Koenigsegg", country: "Sweden", founded: 1994,
    bio: "Swedish hypercar maker chasing extreme top speed and engineering innovation.",
    history: "Founded by Christian von Koenigsegg with the goal of building the ultimate sports car, the company has repeatedly set production-car speed records and pioneered technologies like the Freevalve camless engine.",
    current: [
      { name: "Jesko", since: 2019, desc: "Hypercar built for extreme top-speed performance." },
      { name: "Gemera", since: 2020, desc: "Koenigsegg's first four-seat model, a hybrid grand tourer." }
    ],
    old: [
      { name: "Koenigsegg Agera", years: "2010–2018", desc: "Hypercar that held the production car top-speed record in 2017." },
      { name: "Koenigsegg CCX", years: "2006–2010", desc: "Early Koenigsegg model built to meet US emissions and safety rules." }
    ]
  },
  {
    id: "pagani", name: "Pagani", country: "Italy", founded: 1992,
    bio: "Boutique Italian hypercar maker known for artisanal carbon-fiber construction.",
    history: "Founded by Argentine-Italian engineer Horacio Pagani, a former Lamborghini composites specialist, the company builds hand-finished hypercars in extremely limited numbers, blending art and engineering in equal measure.",
    current: [
      { name: "Utopia", since: 2022, desc: "Pagani's latest hypercar, designed to emphasize analog driving feel." }
    ],
    old: [
      { name: "Pagani Zonda", years: "1999–2017", desc: "Pagani's debut hypercar, produced in numerous limited special editions." },
      { name: "Pagani Huayra", years: "2011–2020", desc: "Successor to the Zonda, known for its active aerodynamics." }
    ]
  },
  {
    id: "lotus", name: "Lotus", country: "United Kingdom", founded: 1952,
    bio: "British sports car maker famous for lightweight engineering, now under Geely ownership.",
    history: "Founded by engineer Colin Chapman on the principle of 'adding lightness,' Lotus built influential sports and racing cars (including dominant Formula 1 chassis) and, under Geely since 2017, has expanded into electric performance cars.",
    current: [
      { name: "Emira", since: 2021, desc: "Lotus's final combustion-engine sports car before an EV-only future." },
      { name: "Eletre", since: 2022, desc: "Lotus's first SUV and first fully electric production model." },
      { name: "Emeya", since: 2023, desc: "Electric grand tourer sedan." }
    ],
    old: [
      { name: "Lotus Elise", years: "1996–2021", desc: "Lightweight, bare-bones roadster that defined the brand's philosophy." },
      { name: "Lotus Esprit", years: "1976–2004", desc: "Wedge-shaped sports car, famous as a submarine car in a Bond film." }
    ]
  },
  {
    id: "proton", name: "Proton", country: "Malaysia", founded: 1983,
    bio: "Malaysia's national car brand, now majority-owned by China's Geely.",
    history: "Established as Malaysia's national automotive project, Proton built cars based on Mitsubishi platforms for decades before Geely took a controlling stake in 2017, bringing modern platforms and design to the brand.",
    current: [
      { name: "Proton X50", since: 2020, desc: "Compact crossover based on the Geely Binyue platform." },
      { name: "Proton X70", since: 2018, desc: "Proton's first SUV, based on the Geely Boyue." },
      { name: "Proton Saga", since: 1985, desc: "Malaysia's original national car, still sold as an affordable sedan." }
    ],
    old: [
      { name: "Proton Wira", years: "1993–2009", desc: "Mitsubishi Lancer-based sedan, a long-time Malaysian staple." }
    ]
  },
  {
    id: "holden", name: "Holden", country: "Australia", founded: 1856,
    bio: "Iconic Australian brand and a major GM subsidiary, discontinued in 2020.",
    history: "Holden began as a saddlery business before moving into car body building and eventually full manufacturing under General Motors; it became a beloved Australian icon before GM shut the brand down in 2020 amid a shrinking market.",
    current: [],
    old: [
      { name: "Holden Commodore", years: "1978–2020", desc: "Holden's flagship rear-wheel-drive sedan, a mainstay of Australian roads and racing." },
      { name: "Holden Monaro", years: "1968–2006", desc: "Muscle coupe, revived in the 2000s and exported as the Pontiac GTO." }
    ]
  },
  {
    id: "smart", name: "smart", country: "Germany", founded: 1994,
    bio: "Ultra-compact city car brand, originally a Mercedes-Benz and Swatch joint venture.",
    history: "Born from a partnership between Mercedes-Benz and watchmaker Swatch (hence the name, from 'Swatch Mercedes Art'), smart built its identity on the tiny two-seat Fortwo before repositioning as an electric brand under a Mercedes-Geely joint venture.",
    current: [
      { name: "smart #1", since: 2022, desc: "Electric compact crossover, the brand's first model under Geely co-ownership." },
      { name: "smart #3", since: 2023, desc: "Coupe-styled electric crossover sibling to the #1." }
    ],
    old: [
      { name: "smart fortwo", years: "1998–2019", desc: "Iconic tiny two-seat city car that defined the brand for two decades." }
    ]
  },
  {
    id: "alpine", name: "Alpine", country: "France", founded: 1955,
    bio: "Renault's performance and motorsport brand, revived for lightweight sports cars.",
    history: "Founded by Jean Rédélé, Alpine built lightweight rally and racing cars closely tied to Renault, went dormant for decades, and was revived by Renault in 2017 with the A110 sports car and now Formula 1 involvement.",
    current: [
      { name: "A110", since: 2017, desc: "Lightweight, mid-engine sports car reviving Alpine's 1960s icon." },
      { name: "Alpine A290", since: 2024, desc: "Electric hot hatch based on the Renault 5." }
    ],
    old: [
      { name: "Alpine A110 (original)", years: "1961–1977", desc: "Original lightweight rally car, hugely successful in the 1973 World Rally Championship." }
    ]
  },
  {
    id: "ds-automobiles", name: "DS Automobiles", country: "France", founded: 2014,
    bio: "Stellantis's French luxury brand, spun off from Citroën's DS model line.",
    history: "Named after the iconic Citroën DS, this brand was spun off in 2014 to give Citroën's upmarket ambitions their own identity, focusing on refined design and comfort in the premium segment.",
    current: [
      { name: "DS 7", since: 2017, desc: "DS's flagship compact luxury SUV." },
      { name: "DS 4", since: 2021, desc: "Compact hatchback/crossover positioned against premium German rivals." }
    ],
    old: [
      { name: "Citroën DS3 (as DS brand model)", years: "2010–2015", desc: "Predecessor model line before DS became fully independent from Citroën." }
    ]
  },
  {
    id: "cupra", name: "Cupra", country: "Spain", founded: 2018,
    bio: "SEAT's sporty spin-off brand, aimed at a younger, performance-focused audience.",
    history: "Spun out of SEAT's performance sub-brand into a standalone marque in 2018, Cupra has built a distinct identity through bold copper-accented design and quick expansion into electric performance models.",
    current: [
      { name: "Formentor", since: 2020, desc: "Cupra's first standalone model, a performance-styled crossover." },
      { name: "Born", since: 2021, desc: "Electric hatchback sharing VW's MEB platform." },
      { name: "Leon", since: 2020, desc: "Performance version of the SEAT Leon, sold under the Cupra badge." }
    ],
    old: []
  },
  {
    id: "great-wall", name: "Great Wall Motors (Haval)", country: "China", founded: 1984,
    bio: "Major Chinese SUV and pickup specialist, best known internationally through its Haval brand.",
    history: "Great Wall Motors grew from a small repair workshop into one of China's largest independent automakers, focusing heavily on SUVs and pickups through its Haval brand and expanding aggressively into export markets.",
    current: [
      { name: "Haval H6", since: 2011, desc: "Compact SUV, one of China's best-selling SUVs and a major export model." },
      { name: "Great Wall Poer", since: 2020, desc: "Mid-size pickup truck sold in international markets." },
      { name: "Haval Jolion", since: 2020, desc: "Compact crossover aimed at younger buyers." }
    ],
    old: [
      { name: "Great Wall Wingle", years: "2006–2020", desc: "Early Great Wall pickup line exported to numerous developing markets." }
    ]
  },
  {
    id: "chery", name: "Chery", country: "China", founded: 1997,
    bio: "One of China's largest automakers and its top passenger-vehicle exporter.",
    history: "Founded with state and local government backing in Anhui province, Chery grew into one of China's leading automakers and has become the country's largest car exporter, selling widely across Latin America, the Middle East, and Africa.",
    current: [
      { name: "Tiggo 7 Pro", since: 2020, desc: "Compact SUV, a strong seller in Chery's export markets." },
      { name: "Chery Arrizo 6", since: 2018, desc: "Compact sedan sold across emerging markets." },
      { name: "Omoda 5", since: 2022, desc: "Crossover from Chery's youth-oriented Omoda sub-brand." }
    ],
    old: [
      { name: "Chery QQ", years: "2003–2013", desc: "Tiny city car that became one of China's best-selling early domestic models." }
    ]
  }
];
