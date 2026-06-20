/**
 * Long-form SEO content for high-traffic unit-pair pages.
 * Key format: "fromId-toId" matching the URL slug (e.g. "ft-m" for /convert/ft-to-m).
 * Pages with an entry here get the rich content section; all others get a generic fallback.
 */

export interface PairContent {
  /** 2–3 sentences (~80–100 words). Include the long-tail keyword naturally in the first sentence. */
  intro: string;
  /** 3–5 items, each 1–2 sentences. Rendered as a <ul> list. */
  useCases: string[];
  /** 1–3 sentences on why these two units coexist — history, standards, industry context. */
  historyNote: string;
  /** Optional single-sentence mental shortcut or rule of thumb. */
  quickTip?: string;
}

export const pairContent: Record<string, PairContent> = {

  // ── LENGTH ────────────────────────────────────────────────────────────────

  'ft-m': {
    intro: `Converting feet to meters is one of the most searched unit conversions online, driven by the US construction, real estate, and fitness industries. One foot equals exactly 0.3048 meters — a fixed international standard since 1959. Whether you're checking building plans, tracking running distances, or reading scientific literature, this converter gives you instant, accurate results.`,
    useCases: [
      `Real estate and property listings: US listings use feet while international buyers expect meters.`,
      `Athletics and sports: track events are standardized in meters, but US field dimensions (basketball court, football field) use feet.`,
      `Aviation: aircraft altitude is expressed in feet by most airlines globally, while meteorological data uses meters.`,
      `Science and engineering: academic papers and SI-compliant specs require meters; US suppliers often quote in feet.`,
    ],
    historyNote: `The foot was standardized in 1959 under the International Yard and Pound Agreement, fixing 1 ft = 0.3048 m exactly. The US is one of only three countries that still officially uses feet as its primary everyday length unit.`,
    quickTip: `Quick mental shortcut: divide feet by 3 to get a rough meter value (actual factor is ÷3.281), so 30 ft ≈ 9 m.`,
  },

  'm-ft': {
    intro: `Converting meters to feet is essential for international travelers, engineers working with US partners, and anyone reading metric blueprints for US construction projects. One meter equals 3.28084 feet. The conversion bridges the global SI standard and the US customary system, which remains dominant in American construction, real estate, and everyday measurement.`,
    useCases: [
      `Building and construction: converting metric architectural drawings to feet for US contractors and permit applications.`,
      `Swimming: Olympic pool lengths (50 m, 25 m) converted to feet for US swimmer reference.`,
      `Weather and altitude: elevation data in meters converted to feet for US hiking apps and aviation altimeters.`,
      `Furniture and interior design: metric furniture dimensions converted to feet for US room planning.`,
    ],
    historyNote: `The meter was defined in 1793 as one ten-millionth of the distance from the equator to the North Pole. The US officially adopted SI in 1975 (Metric Conversion Act) but conversion for everyday measurement remains voluntary, keeping the foot in daily use.`,
    quickTip: `Multiply meters by 3.28 for a quick foot estimate. 10 m ≈ 32.8 ft; 100 m ≈ 328 ft.`,
  },

  'in-cm': {
    intro: `Converting inches to centimeters is essential for anyone shopping internationally, reading garment size charts, or working with screen dimensions. One inch equals exactly 2.54 centimeters — a legally defined constant since 1959. Clothing, display technology, and carpentry all rely on this conversion daily across global markets.`,
    useCases: [
      `Clothing and apparel: US sizes use inches (waist, inseam) while European sizing uses centimeters.`,
      `Screen and display sizes: TV and monitor diagonals are advertised in inches in the US, but centimeters in most of Europe and Asia.`,
      `Woodworking and DIY: international plans and tool specifications frequently mix inches and centimeters.`,
      `Medical measurements: infant length in the US uses inches; WHO growth charts use centimeters.`,
    ],
    historyNote: `The exact 2.54 cm/inch definition was set by the US National Bureau of Standards and the UK Board of Trade in 1959, resolving a slight historical discrepancy between the US survey inch and the international inch. Before 1959, 1 inch was approximately 2.540005 cm in the US.`,
    quickTip: `Multiply inches by 2.5 for a quick centimeter estimate. 10 in ≈ 25 cm (exact: 25.4 cm).`,
  },

  'cm-in': {
    intro: `Converting centimeters to inches comes up constantly when comparing clothing sizes, reading TV specifications, or interpreting height measurements between metric and US systems. One centimeter equals 0.393701 inches. Knowing this conversion is especially useful for anyone buying shoes, clothes, or electronics across different regional markets.`,
    useCases: [
      `Height and body measurements: Europeans and Australians use centimeters for height; Americans use feet and inches.`,
      `Television and monitor screens: screen size in centimeters converted to the inch diagonal US consumers expect in product listings.`,
      `Children's clothing: European sizing is in centimeters (height-based); US sizing is in inches or age ranges.`,
      `Medical imaging: radiology measurements in cm converted to inches for US clinical communication.`,
    ],
    historyNote: `The centimeter is 1/100 of a meter, introduced with the metric system during the French Revolution (1795). The inch has Anglo-Saxon origins and was standardized to exactly 2.54 cm in 1959. The US remains the primary developed nation still using inches for everyday body and product measurements.`,
    quickTip: `Divide centimeters by 2.54 for inches, or multiply by 0.394. Rule of thumb: 10 cm ≈ 4 inches.`,
  },

  'km-mi': {
    intro: `Converting kilometers to miles is the standard challenge at every international road trip, race distance comparison, and speed limit sign crossing. One kilometer equals 0.621371 miles. The UK still uses miles for road distances while most of the world uses kilometers — making this one of the most searched conversions globally.`,
    useCases: [
      `Road trips and navigation: GPS devices switching between US/UK (miles) and European (km) maps.`,
      `Running and cycling: 5K, 10K, and marathon distances stated in kilometers versus miles in US event descriptions.`,
      `Speed limits: European speed limits are in km/h while US and UK limits are in mph.`,
      `Aviation fuel planning: flight distances are stated in nautical miles, statute miles, and kilometers depending on the operator.`,
    ],
    historyNote: `Britain adopted the kilometre for new road speed cameras and EU requirements, but road distances on existing signs remain in miles under a legal exemption dating to the UK Weights and Measures Act 1985. The kilometer was defined in 1793 as 1/10,000th of the distance from the equator to the North Pole.`,
    quickTip: `Multiply km by 0.6 (or divide by 1.6) to get miles. For 100 km, that's 60 miles — close to the true 62.1.`,
  },

  'mi-km': {
    intro: `Converting miles to kilometers comes up constantly for international travelers, runners comparing pace to global standards, and engineers working with European partners. One mile equals 1.60934 kilometers. The conversion is fundamental when switching between US navigation apps and European or international mapping systems.`,
    useCases: [
      `Running pace: US runners state pace in minutes-per-mile; international races and apps use minutes-per-km.`,
      `Car odometers: US vehicles show miles, requiring conversion when estimating fuel consumption in L/100 km.`,
      `Import/export logistics: shipping distances in EU supply chains use kilometers; US-origin distances use miles.`,
      `Scientific literature: US-based research sometimes cites distances in miles, requiring conversion for international publication.`,
    ],
    historyNote: `The US statute mile (5,280 feet) originates from the Roman mille passuum ("thousand paces"), later standardized in England under Queen Elizabeth I in 1593 to 5,280 feet — 8 furlongs of 660 feet each. The kilometer, by contrast, was designed in 1793 as one ten-thousandth of the Earth's quadrant.`,
    quickTip: `Multiply miles by 1.6 for a fast estimate. For running pace: a 9-minute mile is roughly a 5:35/km pace.`,
  },

  // ── WEIGHT ────────────────────────────────────────────────────────────────

  'kg-lb': {
    intro: `Converting kilograms to pounds is among the top weight conversions globally, driven by fitness tracking, international shipping, and food nutrition. One kilogram equals 2.20462 pounds. The US is the only industrialized country where consumer products and body weight are commonly expressed in pounds rather than kilograms.`,
    useCases: [
      `Fitness and gym: body weight scales in the US show pounds; smart scales and apps use kilograms for global audiences.`,
      `International shipping: parcel weight limits differ — US carriers state limits in pounds, international carriers in kg.`,
      `Nutrition labels: US food labels use pounds and ounces; international labels use grams and kilograms.`,
      `Medical dosing: medication dosages are weight-based; converting between kg (clinical standard) and lb (US patient communication) is routine.`,
    ],
    historyNote: `The pound (libra pondo in Latin) has been used since Roman times. The kilogram was defined in 1795 as the mass of one liter of water at 4°C, and in 2019 was redefined by the Planck constant — making it one of the most precisely defined units in history.`,
    quickTip: `Multiply kilograms by 2.2 for a fast pound estimate. 70 kg ≈ 154 lb (exact: 154.32 lb).`,
  },

  'lb-kg': {
    intro: `Converting pounds to kilograms is a daily task for anyone using a US gym, reading American food packaging, or shipping goods internationally. One pound equals 0.453592 kilograms. For medical, scientific, and global e-commerce purposes, kilograms are the standard unit used worldwide.`,
    useCases: [
      `Gym and fitness: converting body weight from pounds to kilograms for BMI calculations and international gym machines.`,
      `Baby weight at birth: US hospitals report birth weight in pounds and ounces; WHO charts and international pediatrics use kilograms.`,
      `Luggage allowance: US airlines often state weight limits in pounds (e.g. 50 lb), while international carriers use kilograms (e.g. 23 kg).`,
      `Food recipes: US recipes in pounds converted to kilograms for metric kitchen scales.`,
    ],
    historyNote: `The avoirdupois pound was standardized at exactly 453.59237 grams in 1959 under the International Yard and Pound Agreement. A separate troy pound (373.24 g) is still used in precious metal trading. The UK switched from pounds to kilograms for official trade in 2000, though pounds remain in informal use for body weight.`,
    quickTip: `Divide pounds by 2.2 for a quick kilogram estimate. 100 lb ÷ 2.2 ≈ 45.5 kg (exact: 45.36 kg).`,
  },

  // ── TEMPERATURE ───────────────────────────────────────────────────────────

  'c-f': {
    intro: `Converting Celsius to Fahrenheit is one of the most searched conversions worldwide, used daily by travelers checking weather, cooks following international recipes, and scientists communicating across measurement systems. The formula is °F = (°C × 9/5) + 32. A few key benchmarks make it intuitive: 0°C = 32°F (freezing), 37°C = 98.6°F (body temp), 100°C = 212°F (boiling).`,
    useCases: [
      `International weather: US weather apps use Fahrenheit; the rest of the world uses Celsius.`,
      `Cooking temperatures: European and Australian recipes state oven temperatures in Celsius; US recipes use Fahrenheit.`,
      `Medical: normal body temperature 37°C = 98.6°F; fever thresholds differ slightly by convention between countries.`,
      `Travel: checking local weather at a destination when your home system uses the opposite scale.`,
    ],
    historyNote: `Gabriel Fahrenheit introduced his scale in 1724, setting 0°F at the coldest brine mixture he could produce. Anders Celsius proposed his centigrade scale in 1742 (originally inverted, with 0 as boiling). The Celsius scale was officially renamed in 1948. The US remains the only major country still using Fahrenheit for everyday temperature.`,
    quickTip: `Rough mental shortcut: double the Celsius value and add 30 to get Fahrenheit. 20°C → (20×2)+30 = 70°F (exact: 68°F). Works well in the 10–30°C range.`,
  },

  'f-c': {
    intro: `Converting Fahrenheit to Celsius is essential for any US resident following international recipes, checking a European weather report, or reading medical literature. The formula is °C = (°F − 32) × 5/9. Key benchmarks: 32°F = 0°C (water freezes), 98.6°F = 37°C (normal body temperature), 212°F = 100°C (water boils at sea level).`,
    useCases: [
      `International recipe conversion: US recipes in Fahrenheit converted for metric ovens and thermometers.`,
      `Understanding global weather reports: watching international news or planning travel where temperatures are reported in Celsius.`,
      `Laboratory and scientific work: all scientific temperature measurements use Celsius (or Kelvin); some US lab equipment shows Fahrenheit.`,
      `HVAC and thermostat settings: smart thermostats allow toggling — knowing both scales helps set targets accurately.`,
    ],
    historyNote: `The US adopted the Fahrenheit scale in colonial times and has retained it despite several metric conversion initiatives, including the Metric Conversion Act of 1975. Today the US, along with Belize, the Cayman Islands, and Palau, remains among the few countries using Fahrenheit for everyday temperature.`,
    quickTip: `Subtract 30 from Fahrenheit and halve the result for a quick Celsius estimate: 70°F → (70−30)/2 = 20°C (exact: 21.1°C). Best for typical room and outdoor temperatures.`,
  },

  // ── SPEED ─────────────────────────────────────────────────────────────────

  'kmh-mph': {
    intro: `Converting kilometers per hour to miles per hour is the most common speed conversion globally, encountered at border crossings, on vehicle speedometers, and in international sports. One km/h equals 0.621371 mph. The UK and US use mph on road signs; nearly every other country uses km/h.`,
    useCases: [
      `Driving abroad: a UK or US driver renting a car in Europe needs to understand km/h speed limits immediately.`,
      `Formula 1 and motorsport: race speeds reported in km/h for European audiences, converted to mph for US broadcast.`,
      `Weather and storm speeds: hurricane wind speeds are reported in both mph (US) and km/h (international agencies).`,
      `Cycling and running apps: most fitness apps allow toggling between mph and km/h; comparing training data across platforms requires conversion.`,
    ],
    historyNote: `The mile was standardized in Elizabethan England (1593) and carried to North America through British colonization. Continental Europe adopted the kilometer in the late 18th century under Napoleonic metrication. The UK retained mph for road signs while adopting km/h for speed cameras — a dual-system unique in Europe.`,
    quickTip: `Multiply km/h by 0.6 for a quick mph estimate. 100 km/h × 0.6 = 60 mph (exact: 62.1 mph). Also: 80 km/h ≈ 50 mph.`,
  },

  'mph-kmh': {
    intro: `Converting miles per hour to kilometers per hour is necessary for any US or UK driver traveling abroad, any engineer publishing results internationally, or any sports broadcaster covering global events. One mph equals 1.60934 km/h. European speed limits, GPS navigation, and international sporting records all use km/h as the standard.`,
    useCases: [
      `International road trips: US or UK drivers using GPS navigation systems set to km/h in Europe.`,
      `Baseball pitch speed: MLB fastball speeds in mph converted to km/h for international broadcasts.`,
      `Vehicle specifications: US car dealer sheets in mph converted to km/h for export models or European buyers.`,
      `Scientific data: wind speed, flow rates, and particle velocities in research papers often require mph → km/h conversion.`,
    ],
    historyNote: `Ireland switched from mph to km/h on road signs in January 2005, becoming the last EU country to do so. The UK retains mph under a longstanding opt-out. As a result, the mph-to-km/h conversion remains one of the most frequently searched unit conversions globally.`,
    quickTip: `Multiply mph by 1.6 for km/h: 60 mph × 1.6 = 96 km/h (exact: 96.56 km/h). The 60/100 reference is widely used — 60 mph ≈ 100 km/h.`,
  },

  // ── WEIGHT (continued) ────────────────────────────────────────────────────

  'oz-g': {
    intro: `Converting ounces to grams is one of the most common cooking and postal conversions for US users. One avoirdupois ounce equals 28.3495 grams. Food packaging, postal services, and jewelry all involve this conversion regularly when bridging US customary and metric systems.`,
    useCases: [
      `Cooking and baking: US recipes in ounces converted to grams for precision digital scales (baking especially requires gram-level accuracy).`,
      `Postal and shipping: USPS weight limits in ounces converted to grams for international parcel comparison.`,
      `Nutrition: US food labels state serving sizes in ounces; tracking apps and European labels use grams.`,
      `Precious metals: gold and silver are traded in troy ounces (31.1 g, not 28.35 g) — a critical distinction in conversion.`,
    ],
    historyNote: `The avoirdupois ounce (for everyday goods) is 1/16 of a pound = 28.3495 g. The troy ounce (1/12 of a troy pound) = 31.1035 g and is exclusively used for precious metals. A fluid ounce is a volume measure (29.57 mL) — always confirm which ounce is intended.`,
    quickTip: `Multiply ounces by 28 for a quick gram estimate. 4 oz ≈ 112 g (exact: 113.4 g). For precious metals, use 31.1 g per troy ounce.`,
  },

  'g-oz': {
    intro: `Converting grams to ounces is essential when following US recipes, comparing international food packaging, or shipping small parcels. One gram equals 0.035274 ounces (avoirdupois). US recipe apps and packaged food labels express weight in ounces while metric kitchen scales and international nutrition data use grams.`,
    useCases: [
      `Cooking and baking: converting gram-based recipes from European and Asian cookbooks into ounces for US measuring cups and spoons.`,
      `Postal rates: USPS First Class Mail is priced by the ounce; weighing items in grams and converting helps estimate postage.`,
      `Fitness and nutrition: protein and carbohydrate grams in a meal converted to ounces for US nutrition app entry.`,
      `Jewelry and gemstones: converting gram weight to ounce weight for US retail pricing comparisons.`,
    ],
    historyNote: `The gram was introduced by the French Academy of Sciences in 1795 as 1/1000 of a kilogram, defined as the mass of 1 cm³ of water at 4°C. The avoirdupois ounce used in everyday US measurement was defined in the same 1959 international agreement that fixed the foot, setting 1 oz = 28.349523125 g exactly.`,
    quickTip: `Divide grams by 28.35 for ounces, or multiply by 0.0353. 100 g ≈ 3.5 oz — a quick reference for medium-sized food portions.`,
  },

  // ── VOLUME ────────────────────────────────────────────────────────────────

  'l-gal': {
    intro: `Converting liters to gallons is essential for fuel purchasing, liquid-food packaging, and international tank capacity comparisons. One liter equals 0.264172 US gallons. The US is the primary market still using gallons for fuel pricing while most countries price fuel per liter.`,
    useCases: [
      `Fuel efficiency and cost: converting fuel prices per liter to per gallon for US audiences, or vice versa.`,
      `Aquarium and pool sizing: US pond and aquarium equipment is rated in gallons; European equipment in liters.`,
      `Industrial liquid storage: chemical drums and storage tanks are rated in liters internationally but gallons in the US.`,
      `Beverage containers: wine and spirits are sold internationally in liters but often packaged in gallon or quart sizes in the US.`,
    ],
    historyNote: `The US gallon (3.785 L) and the UK Imperial gallon (4.546 L) are distinct — a critical difference when comparing fuel economy or recipes. The US gallon was defined in 1707 based on wine measure. The UK formally metricated fuel sales in 1994, while the US and several Caribbean nations retain gallons.`,
    quickTip: `Multiply liters by 0.264 for US gallons. Quick check: 4 L ≈ 1 gallon (exact: 3.785 L), so "about 4 liters per gallon" is close enough for everyday use.`,
  },

  'gal-l': {
    intro: `Converting gallons to liters is a daily task for US drivers checking fuel economy against European standards, aquarium hobbyists using international equipment, and anyone translating US recipes for metric kitchens. One US gallon equals 3.78541 liters. This conversion is central to understanding international fuel pricing, tank capacities, and beverage volumes.`,
    useCases: [
      `Fuel economy: US mpg figures converted to L/100 km for comparison with European car efficiency ratings.`,
      `Water heaters and tanks: US water heater capacity in gallons converted to liters for international equipment specs.`,
      `Recipe scaling: US recipes using gallons or quarts scaled for metric cooking equipment.`,
      `Car washing and gardening: water usage stated in gallons converted to liters for water-use calculators in metric countries.`,
    ],
    historyNote: `The US customary gallon descends from the Queen Anne wine gallon of 1707 (231 cubic inches). The Imperial gallon, used in the UK until metrication, was defined as 10 pounds of water and equals 4.546 L — about 20% larger. Always confirm US vs. Imperial when the source country is ambiguous.`,
    quickTip: `Multiply gallons by 3.8 for a quick liter estimate. 5 gal ≈ 19 L (exact: 18.93 L).`,
  },

  'ml-floz': {
    intro: `Converting milliliters to fluid ounces is a daily task for bartenders, pharmacists, and anyone following US recipes with a metric measuring cup. One US fluid ounce equals 29.5735 mL. Standard US cocktail measurements (1 oz, 1.5 oz, 2 oz) need mL equivalents for global recipe sharing and pharmaceutical dosing.`,
    useCases: [
      `Cocktail recipes: US bartending uses fluid ounces (jiggers); international recipes use milliliters.`,
      `Medicine dosing: liquid medications are dosed in mL by pharmacists but sometimes described in fluid ounces on US consumer packaging.`,
      `Cosmetics and skincare: US beauty products state volume in fl oz; international versions use mL.`,
      `Baby formula: feeding quantities stated in fl oz (US) or mL (international) on packaging.`,
    ],
    historyNote: `The US fluid ounce (29.57 mL) differs from the UK Imperial fluid ounce (28.41 mL) — a frequent source of confusion in recipe conversion. The US fl oz is 1/128 of a US gallon; the Imperial fl oz is 1/160 of an Imperial gallon. Both are unrelated to the avoirdupois ounce used for weight.`,
    quickTip: `Multiply fluid ounces by 30 for a close mL estimate (exact: 29.57). A standard shot glass holds 1.5 fl oz ≈ 44 mL.`,
  },

  'floz-ml': {
    intro: `Converting fluid ounces to milliliters is essential when using metric measuring equipment with US recipes, filling prescriptions with mL dosing from fl oz instructions, or comparing international beverage sizes. One US fluid ounce equals 29.5735 milliliters. Nearly all international liquid measurements — from medical dosing to spirits — are expressed in milliliters.`,
    useCases: [
      `Baking and cooking: US recipes in fl oz adapted for metric measuring jugs and scales used in European or Australian kitchens.`,
      `Pharmacy: oral liquid medications dosed in tablespoons or teaspoons (US) converted to mL for precise syringe measurement.`,
      `Cosmetics: product size comparison between US fl oz labeling and European mL labeling.`,
      `Spirits and cocktails: US cocktail recipes converted to mL for international bars using metric jiggers.`,
    ],
    historyNote: `The fluid ounce evolved from the apothecary system of the 17th century, where it represented 1/8 of a gill. Modern standardization in 1959 fixed the US fl oz at exactly 29.5735295625 mL. Despite global metrication, the fl oz persists in US retail, nutrition labeling law, and everyday cooking.`,
    quickTip: `Multiply fl oz by 29.6 (or just 30 for a quick estimate) to get mL. 8 fl oz = 237 mL (≈ 240 mL or one US cup).`,
  },

  // ── AREA ──────────────────────────────────────────────────────────────────

  'ft2-m2': {
    intro: `Converting square feet to square meters is the defining conversion of international real estate, construction, and interior design. One square foot equals 0.092903 square meters. US property listings in sq ft must be converted to square meters for European, Australian, and Asian buyers — a conversion with direct financial implications.`,
    useCases: [
      `Property listings: US MLS listings in square feet need metric equivalents for international buyers and investment analysis.`,
      `Commercial leasing: office and retail space is quoted per square foot in the US; per square meter in the rest of the world.`,
      `Flooring and renovation: US flooring materials are sold by the square foot; European and Asian tile and carpet use square meters.`,
      `Building codes: US IRC uses square feet for minimum room sizes; international building codes use square meters.`,
    ],
    historyNote: `The square foot, derived from the linear foot, has been a standard building measure in the US since colonial times. It remains entrenched in US real estate law and building codes. The square meter, defined as 1 m × 1 m, was introduced with the metric system in France in 1799 and now underpins building standards in over 95% of countries.`,
    quickTip: `Divide square feet by 10.764 for square meters, or multiply by ~0.093. A 1,000 sq ft apartment is approximately 93 m².`,
  },

  'm2-ft2': {
    intro: `Converting square meters to square feet is necessary for European, Asian, or Australian buyers or investors looking at US real estate, or for US homeowners comparing international property listings. One square meter equals 10.7639 square feet. Floor plans, apartment listings, and commercial leases routinely require this conversion across global real estate markets.`,
    useCases: [
      `International property investment: European or Asian buyers evaluating US real estate listings in sq ft need m² equivalents.`,
      `Renovation comparisons: comparing flooring or tile coverage between metric product specs and US room dimensions.`,
      `Rental market analysis: comparing rental prices per m² (Europe) versus per sq ft (US) for investment decisions.`,
      `Architectural drawings: converting metric blueprints to square footage for US zoning and permit applications.`,
    ],
    historyNote: `The square meter became the international standard for floor area under the SI system adopted by the General Conference on Weights and Measures in 1960. The US is the main holdout using square feet for property measurement, though US scientific and technical work generally uses square meters in compliance with SI standards.`,
    quickTip: `Multiply square meters by 10.76 for square feet. 100 m² ≈ 1,076 sq ft — a useful benchmark for apartment size comparison.`,
  },

  'ac-ha': {
    intro: `Converting acres to hectares is fundamental for agriculture, land valuation, and environmental planning. One acre equals 0.404686 hectares. The US uses acres for farmland and property; the rest of the world uses hectares (ha), the international standard for agricultural and land area.`,
    useCases: [
      `Farm size comparisons: USDA crop reports use acres; FAO and international agricultural data use hectares.`,
      `Real estate: large rural lots and ranch properties listed in acres need hectare equivalents for international buyers.`,
      `Conservation and protected areas: national park sizes in the US are stated in acres; global databases use hectares.`,
      `Yield calculations: crop yield per acre versus yield per hectare must be converted for commodity market comparisons.`,
    ],
    historyNote: `The acre was historically defined as the amount of land an ox could plough in a day — roughly a furlong (660 ft) by one chain (66 ft), equaling 43,560 sq ft. The hectare (100 m × 100 m = 10,000 m²) was adopted internationally in the 19th century and is now the standard in the EU, Commonwealth nations, and UN agricultural reporting.`,
    quickTip: `Multiply acres by 0.4 for a rough hectare estimate. 10 acres ≈ 4 ha (exact: 4.047 ha).`,
  },

  'ha-ac': {
    intro: `Converting hectares to acres is necessary when translating international land area data into US customary terms — common in agriculture, forestry, and real estate. One hectare equals 2.47105 acres. UN reports, EU subsidy programs, and international conservation agreements all express land area in hectares.`,
    useCases: [
      `Agricultural subsidies: EU Common Agricultural Policy payments are per hectare; US farmers comparing to USDA acre-based programs need conversion.`,
      `Forestry management: international forest cover statistics in hectares converted to acres for US forestry reports.`,
      `Wildlife reserves: global wildlife database areas in hectares converted to acres for US conservation communication.`,
      `International real estate: overseas property listings in hectares converted to acres for US buyers.`,
    ],
    historyNote: `The hectare (symbol: ha) is a non-SI unit of area accepted for use with SI, equal to 10,000 m² or 0.01 km². It was introduced with the metric system and is defined in the International Bureau of Weights and Measures. The acre has been used in English-speaking countries since medieval times.`,
    quickTip: `Multiply hectares by 2.47 for acres. 1 ha ≈ 2.5 acres — a useful rule of thumb for quick land area estimates.`,
  },

  // ── PRESSURE ──────────────────────────────────────────────────────────────

  'psi-kpa': {
    intro: `Converting PSI to kilopascals is critical for tire pressure, hydraulic systems, and HVAC work — anywhere US customary units meet international SI standards. One PSI equals 6.89476 kPa. Tire pressure specifications on US vehicles use PSI; European and international vehicles specify kPa or bar.`,
    useCases: [
      `Tire inflation: US car owners check tire pressure in PSI; European cars specify kPa or bar in the owner's manual.`,
      `HVAC and refrigeration: US equipment rated in PSI; international specs in kPa or bar.`,
      `Pneumatic tools: US air compressors rated in PSI; international tools specify kPa or bar.`,
      `Medical equipment: blood pressure context often involves PSI or kPa alongside clinical mmHg measurements.`,
    ],
    historyNote: `PSI (pound-force per square inch) is a US customary unit defined as one pound-force applied over one square inch. The Pascal, SI unit of pressure, was named after Blaise Pascal (1623–1662). The kilopascal (1,000 Pa) is the practical everyday unit because 1 Pa is extremely small — standard atmospheric pressure is about 101.3 kPa.`,
    quickTip: `Multiply PSI by 6.895 to get kPa. Common reference: a typical car tire at 32 PSI = 220.6 kPa ≈ 2.21 bar.`,
  },

  'kpa-psi': {
    intro: `Converting kilopascals to PSI is common when working with European or international equipment specifications alongside US tools, or when interpreting metric tire pressure recommendations for US vehicles. One kilopascal equals 0.145038 PSI. Vehicle manuals, compressor ratings, and pressure vessel specs all require this conversion across US and international contexts.`,
    useCases: [
      `Tire pressure: European tires recommend pressure in kPa or bar; US gauges read PSI.`,
      `Air compressors: portable compressors sold internationally rated in kPa; US users set pressure in PSI.`,
      `Industrial systems: hydraulic and pneumatic system specs in kPa converted to PSI for US maintenance teams.`,
      `Weather and barometric pressure: hPa (= mbar) forecasts converted to PSI for specialized US applications.`,
    ],
    historyNote: `The Pascal (Pa) was adopted as the SI unit of pressure in 1971, replacing earlier units like the atmosphere, bar, and mmHg in scientific contexts. Despite this, PSI remains dominant in US industry, automotive, and construction applications. Converting between SI kPa and US PSI is a daily task in global engineering and manufacturing.`,
    quickTip: `Multiply kPa by 0.145 for PSI. 200 kPa × 0.145 = 29 PSI — a common bicycle tire pressure reference.`,
  },

  'bar-psi': {
    intro: `Converting bar to PSI comes up in tire service, industrial equipment, and scuba diving. One bar equals 14.5038 PSI. Bar is the dominant pressure unit in European automotive and industrial contexts while PSI remains standard in the US and UK.`,
    useCases: [
      `Tire pressure: European tire pressure gauges read in bar; US gauges read in PSI.`,
      `Scuba diving: tank pressure (200–300 bar) converted to PSI for US diver communication.`,
      `Industrial pneumatics: European machinery specs in bar; US-sourced tools in PSI.`,
      `Espresso machines: espresso extraction pressure of 9 bar = ~130 PSI — a fact cited by specialty coffee professionals worldwide.`,
    ],
    historyNote: `The bar (from Greek "baros" = weight) was introduced in 1909 and equals 100,000 Pa or approximately 1 standard atmosphere (1 atm = 1.01325 bar). It is not an SI unit but is widely accepted for use with SI. It remains standard in meteorology, European automotive, and professional diving.`,
    quickTip: `Multiply bar by 14.5 for PSI. 2 bar = 29 PSI — a common bicycle tire pressure reference.`,
  },

  'atm-kpa': {
    intro: `Converting atmospheres to kilopascals is common in chemistry, meteorology, and scuba diving. One standard atmosphere equals 101.325 kPa. The atmosphere (atm) serves as a practical reference because it approximates sea-level air pressure — a natural baseline for pressure calculations.`,
    useCases: [
      `Chemistry laboratory: gas laws (Boyle's Law, Ideal Gas Law) are often calculated in atm; SI requires kPa or Pa.`,
      `Weather forecasting: atmospheric pressure shown in hPa (= mbar) on weather maps; 1 atm = 1013.25 hPa.`,
      `Altitude and aviation: cabin pressure in aircraft is maintained near 0.75 atm (≈75 kPa) for passenger comfort.`,
      `Autoclave sterilization: autoclaves operate at ~2 atm (≈200 kPa) for medical equipment sterilization.`,
    ],
    historyNote: `The standard atmosphere was defined in 1954 by the 10th General Conference on Weights and Measures as exactly 101,325 Pa. Evangelista Torricelli invented the mercury barometer in 1644, establishing the concept of atmospheric pressure. The pascal was adopted as the SI pressure unit in 1971.`,
    quickTip: `1 atm ≈ 100 kPa (exact: 101.325). Treating 1 atm as 100 kPa introduces less than 1.4% error in most calculations.`,
  },

  'mmhg-kpa': {
    intro: `Converting millimeters of mercury (mmHg) to kilopascals is essential in medical settings, weather stations, and laboratory vacuum systems. One mmHg equals 0.133322 kPa. Blood pressure, ocular pressure, and barometric pressure are commonly expressed in mmHg, while engineering and physics use kPa.`,
    useCases: [
      `Blood pressure monitoring: clinical blood pressure (e.g. 120/80 mmHg) converted to kPa for international medical records.`,
      `Ophthalmic pressure: intraocular pressure (normal range 10–20 mmHg) converted to kPa for research publication.`,
      `Barometric pressure: weather stations recording in mmHg (Torr) converted to kPa or hPa for international reporting.`,
      `Vacuum systems: laboratory vacuum pressures measured in mmHg converted to kPa for equipment compatibility.`,
    ],
    historyNote: `The millimeter of mercury (also called Torr, after Evangelista Torricelli) emerged from the mercury barometer invented in 1644. It became the medical standard for blood pressure measurement in the 19th century and remains entrenched in clinical practice globally despite the SI preference for kPa or Pa in scientific publishing.`,
    quickTip: `Multiply mmHg by 0.133 for kPa. Normal blood pressure 120 mmHg systolic = 16 kPa. 760 mmHg = 101.3 kPa (1 atm).`,
  },

  // ── ENERGY ────────────────────────────────────────────────────────────────

  'kwh-mj': {
    intro: `Converting kilowatt-hours to megajoules is essential for energy auditing, solar panel output calculations, and comparing electricity consumption to thermal energy. One kWh equals 3.6 MJ exactly. Electricity bills use kWh; physics and engineering often use MJ or joules for energy density comparisons.`,
    useCases: [
      `Solar panel and battery storage: comparing kWh storage capacity of home batteries to MJ for engineering specs.`,
      `Energy auditing: building energy use intensity (EUI) expressed in kWh/m² converted to MJ/m² for international comparison.`,
      `Electric vehicle range: EV energy consumption in kWh/100 km compared to fuel energy density in MJ for efficiency analysis.`,
      `Thermal power plants: steam energy in MJ converted to electrical output in kWh for efficiency calculations.`,
    ],
    historyNote: `The kilowatt-hour became the commercial electricity unit in the 1880s because it conveniently represents the energy consumed by a 1-kilowatt device running for one hour — a practical billing metric. The joule was defined in 1889 after James Prescott Joule's work on the mechanical equivalent of heat.`,
    quickTip: `1 kWh = 3.6 MJ exactly. To convert MJ back to kWh, divide by 3.6. A typical US home uses about 30 kWh/day = 108 MJ/day.`,
  },

  'mj-kwh': {
    intro: `Converting megajoules to kilowatt-hours is standard in energy engineering, fuel analysis, and comparing thermal and electrical energy. One megajoule equals 0.277778 kWh. Engineers, physicists, and energy analysts regularly bridge the SI world (joules) and the billing world (kilowatt-hours).`,
    useCases: [
      `Fuel energy content: natural gas energy in MJ per cubic meter converted to kWh for billing comparison.`,
      `Solar and battery systems: engineering specs in MJ converted to kWh for consumer-facing battery capacity labels.`,
      `Food energy: kilojoule (kJ) energy content of foods converted to watt-hours or kWh for novel energy comparisons in research.`,
      `Industrial process heat: process heat in MJ converted to kWh for electrical equivalent cost estimation.`,
    ],
    historyNote: `The megajoule (10⁶ J) is the SI-preferred unit for large energy quantities in scientific and engineering contexts, while the kWh (3.6 MJ) remains the commercial standard for electricity billing worldwide. Both units are in active use — the conversion between them is a regular task in energy consulting, policy, and research.`,
    quickTip: `Divide MJ by 3.6 for kWh. 36 MJ ÷ 3.6 = 10 kWh. Or multiply MJ by 0.278 — same result.`,
  },

  'kcal-kj': {
    intro: `Converting kilocalories to kilojoules is fundamental for nutrition science, food labeling, and dietary planning. One kilocalorie (kcal, the "food calorie") equals 4.184 kJ. EU and Australian food labels display kilojoules alongside kilocalories; US labels show only kilocalories (listed as "Calories" with a capital C).`,
    useCases: [
      `Reading international food labels: EU nutrition panels show kJ as the primary energy unit, with kcal in parentheses.`,
      `Dietary tracking apps: apps like MyFitnessPal let users switch between kcal and kJ; comparing international food data requires conversion.`,
      `Sports nutrition: energy gels and sports foods state energy in both kJ and kcal for international markets.`,
      `Clinical dietetics: registered dietitians may receive patient data in kJ from Australian or UK health records requiring conversion to kcal.`,
    ],
    historyNote: `The calorie was defined in 1824 by French physicist Nicolas Clément as the heat needed to raise 1 gram of water by 1°C. The "large calorie" or kilocalorie (kcal) equals 1,000 small calories. The joule was established as the SI energy unit in 1960, but kcal persists in nutrition due to historical convention and consumer familiarity.`,
    quickTip: `Multiply kcal by 4.18 for kJ. A 2,000 kcal daily diet = 8,368 kJ. EU labels often round: 100 kcal ≈ 418 kJ.`,
  },

  'kj-kcal': {
    intro: `Converting kilojoules to kilocalories is a daily task for anyone reading Australian, British, or European nutrition labels, which list energy primarily in kJ. One kilojoule equals 0.239006 kilocalories (food Calories). Dietary apps, fitness trackers, and food databases frequently present data in the opposite energy unit from what a user is accustomed to.`,
    useCases: [
      `Australian food labels: Australian nutrition panels list kJ first; US users convert to kcal for calorie counting.`,
      `International recipe nutrition data: recipes from metric countries list kJ; US calorie-counting apps need kcal.`,
      `Energy drink comparisons: US and Australian energy drink cans use different units for the same product.`,
      `Scientific nutrition research: journal articles may report energy intake in kJ while US clinical guidelines use kcal.`,
    ],
    historyNote: `Australia and the UK legislated kilojoules as the primary food energy unit in the 1970s as part of SI metrication. The US FDA retained kilocalories (listed as "Calories") on nutrition facts panels, maintaining the split that makes kJ↔kcal conversion necessary for international food comparison.`,
    quickTip: `Divide kJ by 4.18 for kcal. 418 kJ ÷ 4.18 = 100 kcal. A common food energy benchmark: 2,000 kcal/day = 8,368 kJ/day.`,
  },

  'btu-kj': {
    intro: `Converting BTU to kilojoules is standard practice in HVAC engineering, comparing US and international appliance ratings, and translating energy content of fuels. One BTU equals 1.05506 kJ. US HVAC equipment (air conditioners, furnaces) is rated in BTU or BTU/h; international specs use watts or kJ.`,
    useCases: [
      `Air conditioner sizing: US window AC units rated in BTU/h converted to watts or kW for international comparison (12,000 BTU/h ≈ 3.5 kW).`,
      `Natural gas energy content: US gas is measured in BTU per cubic foot; international gas in MJ per cubic meter.`,
      `Furnace and boiler ratings: US furnace output in BTU/h converted to kW for comparing with European boiler specs.`,
      `Fuel energy comparisons: comparing energy content of gasoline (BTU/gallon) to diesel or EV equivalent (kWh).`,
    ],
    historyNote: `The British Thermal Unit was defined in the mid-19th century as the energy needed to raise one pound of water by 1°F. Despite its name, the BTU is rarely used in the UK today, where SI units prevail. It persists in US building energy codes (ASHRAE standards), natural gas billing, and HVAC equipment ratings.`,
    quickTip: `1 BTU ≈ 1.055 kJ. Reverse: 1 kJ ≈ 0.948 BTU. For HVAC: 1 ton of air conditioning = 12,000 BTU/h = 3,517 watts = 3.517 kW.`,
  },

  'j-cal': {
    intro: `Converting joules to calories is a common task in chemistry, physics education, and nutrition science. One calorie (thermochemical) equals 4.184 joules, so 1 joule = 0.239 calories. Heat calculations in chemistry labs, calorimetry experiments, and food energy analysis all involve this conversion.`,
    useCases: [
      `Chemistry calorimetry: measuring heat released or absorbed in reactions in joules, then reporting in calories for traditional chemistry notation.`,
      `Physics education: work-energy calculations in joules converted to calories for thermodynamic comparisons.`,
      `Nutrition (small scale): caloric density of micronutrients expressed in joules per gram in SI-based research.`,
      `Food science: heat treatment calculations in joules converted to calories for pasteurization and sterilization specifications.`,
    ],
    historyNote: `The calorie (cal) was the dominant unit of heat energy before the joule was established as the SI unit in 1960. Multiple "calories" exist: the thermochemical calorie (4.184 J), the International Table calorie (4.1868 J), and the 15°C calorie (4.18580 J). The food Calorie (kcal) = 1,000 small calories. Scientific work now uses joules, but calories persist in chemistry and nutrition.`,
    quickTip: `Multiply joules by 0.239 for calories (or divide by 4.184). 1,000 J = 239 cal = 0.239 kcal — much less than a food Calorie, which is 4,184 J.`,
  },

  // ── DIGITAL ───────────────────────────────────────────────────────────────

  'GB-MB': {
    intro: `Converting gigabytes to megabytes is an everyday task for anyone managing phone storage, downloading files, or reading device specifications. One gigabyte equals 1,024 megabytes in binary (as operating systems report) or 1,000 megabytes in SI decimal prefixes. This distinction between binary and SI affects real-world storage sizes.`,
    useCases: [
      `Phone and tablet storage: understanding how many MB-sized photos or songs fit on a GB-capacity device.`,
      `Data plan management: mobile data plans in GB with streaming video consuming hundreds of MB per hour.`,
      `File transfer and backup: estimating upload/download time when file sizes are in GB and connection speed in MB/s.`,
      `RAM specifications: system memory and CPU cache sizes mixing MB and GB units in technical specs.`,
    ],
    historyNote: `The binary-vs-SI ambiguity was formalized in 1998 when the IEC introduced the "gibibyte" (GiB = 1,024³ bytes) to distinguish from the SI "gigabyte" (GB = 1,000³ bytes). Most OS tools report storage using binary values while hard drive manufacturers use SI values — explaining why a "1 TB" drive shows as ~931 GiB in Windows or macOS.`,
    quickTip: `1 GB = 1,024 MB in binary (OS reporting). Quick estimate: a 1 GB file ≈ 1,000 MB of usable data. A 4K movie is typically 50–100 GB.`,
  },

  'MB-GB': {
    intro: `Converting megabytes to gigabytes is essential when calculating storage needs, interpreting file sizes from older software, or comparing device specifications. One gigabyte equals 1,024 megabytes (binary) used by operating systems, or 1,000 megabytes (decimal) used by storage manufacturers. Knowing which system is in use prevents storage planning errors.`,
    useCases: [
      `Database sizing: database backup files measured in MB converted to GB for storage planning and cloud cost estimation.`,
      `Email attachments: multiple attachments totaling hundreds of MB converted to GB for cloud storage quota management.`,
      `Legacy software: older applications report file sizes in MB; modern storage is purchased in GB or TB.`,
      `Video game patches: game updates in MB converted to GB for tracking data plan usage.`,
    ],
    historyNote: `The megabyte (MB) was the dominant storage unit from the 1980s through the early 2000s. As storage technology advanced, the gigabyte (GB) became the consumer standard. The IEC formally defined the mebibyte (MiB = 2²⁰ bytes) in 1998 to eliminate the binary/decimal ambiguity, but "MB" and "GB" remain informally used for both binary and decimal values in most consumer contexts.`,
    quickTip: `Divide MB by 1,024 for GB (binary). Quick reference: 2,048 MB = 2 GB; 512 MB = 0.5 GB. For SI decimal: divide by 1,000.`,
  },

  'TB-GB': {
    intro: `Converting terabytes to gigabytes is essential for data center planning, NAS device selection, and cloud storage pricing. One terabyte equals 1,024 gigabytes (binary) or 1,000 gigabytes (decimal). Knowing the conversion helps evaluate hard drives, SSDs, and cloud storage plans accurately.`,
    useCases: [
      `Home NAS and backup: planning which NAS drives to buy when thinking in TB but software shows GB free.`,
      `Cloud storage tiers: services like Google Drive, Dropbox, and iCloud price storage in GB/TB tiers.`,
      `Database sizing: enterprise databases planned in TB need GB-level capacity for individual table or index sizing.`,
      `Game library management: modern games range from 20–150 GB; planning a 2 TB SSD requires knowing how many games fit.`,
    ],
    historyNote: `Consumer hard drives first crossed the 1 TB threshold around 2007 (Hitachi Deskstar). SSDs reached consumer 1 TB capacity around 2013. A drive marketed as "1 TB" shows as approximately 931 GB in Windows Explorer due to the binary vs. SI discrepancy — a 7% gap that grows at higher capacities.`,
    quickTip: `1 TB = 1,000 GB (storage marketing) or 1,024 GB (binary). For planning: a 2 TB drive holds roughly 500 HD movies at 4 GB each.`,
  },

  'GB-TB': {
    intro: `Converting gigabytes to terabytes is necessary when totaling storage needs across multiple drives, calculating cloud costs, or understanding how large your data set has grown. One terabyte equals 1,000 GB (decimal/marketing) or 1,024 GB (binary/OS). Data scientists, IT administrators, and consumers all need this conversion when storage scales beyond individual GB.`,
    useCases: [
      `Cloud storage billing: summing GB-level assets to estimate TB-level cloud storage costs.`,
      `Photography and video archives: estimating when a collection of GB-sized files will fill a TB drive.`,
      `IT procurement: converting departmental storage requirements from GB to TB for purchasing decisions.`,
      `Backup planning: calculating total backup size in TB from a list of folder sizes in GB.`,
    ],
    historyNote: `The terabyte (TB) became a common consumer unit around 2007 with the arrival of 1 TB hard drives. The tebibyte (TiB = 2⁴⁰ bytes = 1,099.5 GB) is the precise binary unit, while TB (10¹² bytes = 1,000 GB) is the SI/manufacturer value. Most backup and cloud software uses the decimal TB for pricing but binary GiB for display — a persistent source of confusion.`,
    quickTip: `Divide GB by 1,000 for TB (decimal/marketing). 500 GB = 0.5 TB; 2,000 GB = 2 TB. Divide by 1,024 if your OS uses binary reporting.`,
  },

  // ── TIME ──────────────────────────────────────────────────────────────────

  'hr-min': {
    intro: `Converting hours to minutes is one of the most basic but frequently needed time conversions, used in scheduling, sports timing, cooking, and project management. One hour equals exactly 60 minutes. While the math is simple, automated conversion handles fractional hours like 1.5 hours = 90 minutes or 2.75 hours = 165 minutes instantly and without error.`,
    useCases: [
      `Meeting scheduling: converting "2h 15 min" project estimates to total minutes for calendar slot calculation.`,
      `Sports timing: race results in hours and minutes converted to total minutes for pace calculations.`,
      `Cooking: "roast for 1.5 hours" converted to 90 minutes for oven timer setting.`,
      `Payroll: calculating hourly pay when time worked is in hours and fractions versus total minutes.`,
    ],
    historyNote: `The 60-minute hour traces back to ancient Babylonian mathematics, which used a base-60 (sexagesimal) numeral system. The Babylonians divided the day into 12 double-hours, which Greek astronomers later divided into 60 parts each. This 60-based time division has persisted for over 4,000 years despite the global adoption of the decimal metric system for nearly everything else.`,
    quickTip: `Multiply hours by 60 for minutes. For fractional hours: 0.5 hr = 30 min, 0.25 hr = 15 min, 0.75 hr = 45 min.`,
  },

  'min-s': {
    intro: `Converting minutes to seconds is a fundamental time conversion used in physics, athletics, music tempo, and computing. One minute equals exactly 60 seconds. While the relationship is simple, converting decimal or fractional minutes — such as 2.5 minutes = 150 seconds — benefits from a reliable converter to avoid calculation errors.`,
    useCases: [
      `Athletics: race splits in minutes converted to seconds for pace analysis and records comparison.`,
      `Music: tempo (beats per minute) related to beat duration in seconds for mixing and production.`,
      `Computing and networking: latency and timeout values stated in minutes converted to seconds for configuration files.`,
      `Science experiments: reaction times and event durations measured in minutes converted to seconds for SI-compliant reporting.`,
    ],
    historyNote: `The second became the SI base unit of time in 1967, defined by atomic transitions of caesium-133 rather than fractions of the solar day. The minute (60 seconds) has no SI status but remains universally used for everyday timekeeping. Time is the only physical quantity where the SI base unit is not the practical everyday unit for short durations.`,
    quickTip: `Multiply minutes by 60 for seconds. 1.5 min = 90 s; 5 min = 300 s; 10 min = 600 s.`,
  },

  'day-hr': {
    intro: `Converting days to hours is essential for project scheduling, labor cost calculation, and travel planning. One day equals exactly 24 hours. Whether you're estimating how many hours of work fit in a deadline or calculating total flight time across time zones, this conversion underpins everyday planning.`,
    useCases: [
      `Project management: converting a 5-day deadline to 120 available work hours for sprint planning.`,
      `Labor and payroll: translating day-rate contractor fees to hourly equivalents for comparison.`,
      `Travel planning: long-haul trips measured in days converted to hours for flight connection planning.`,
      `Biology and medicine: drug half-lives and clinical study durations expressed in days converted to hours for dosing intervals.`,
    ],
    historyNote: `The 24-hour day was established by ancient Egyptian astronomers who divided daytime into 10 hours of sunlight plus 2 twilight hours, and nighttime into 12 hours by star transit observations. The equal 24-hour day using mechanical clocks was standardized in medieval Europe. The second was later derived from this framework as 1/86,400 of a mean solar day.`,
    quickTip: `Multiply days by 24 for hours. 7 days = 168 hours (a week). 365 days = 8,760 hours (a non-leap year).`,
  },

  'wk-day': {
    intro: `Converting weeks to days is useful in project scheduling, subscription billing, medical follow-ups, and pregnancy tracking. One week equals exactly 7 days. The conversion becomes especially important when working with delivery timelines, gestational ages, or contract periods that mix week and day notation.`,
    useCases: [
      `Pregnancy tracking: gestational age in weeks and days converted to total days for clinical database entry.`,
      `Subscription billing: weekly subscription costs converted to per-day rates for cost comparison.`,
      `Construction timelines: project duration in weeks converted to calendar days for scheduling and milestone tracking.`,
      `Drug treatment courses: antibiotic courses stated in weeks converted to days for patient instruction.`,
    ],
    historyNote: `The 7-day week is one of the oldest continuous time cycles, with origins in Mesopotamian astronomy associating each day with a celestial body (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn). It was adopted by the Roman Empire in the 1st century AD and spread globally through Roman and later Christian influence. No major calendar reform has displaced the 7-day week.`,
    quickTip: `Multiply weeks by 7 for days. 4 weeks = 28 days; 8 weeks = 56 days; 52 weeks = 364 days (one day short of a common year).`,
  },

  'yr-day': {
    intro: `Converting years to days comes up in astronomy, biology, actuarial science, and everyday date calculations. One Julian year equals 365.25 days (accounting for leap years). The exact value matters: a 30-year mortgage is not simply 30 × 365 = 10,950 days but 10,957 or 10,958 days depending on the leap years in the period.`,
    useCases: [
      `Astronomy and planetary science: orbital periods in years compared to Earth days for space mission planning.`,
      `Biology and aging research: lifespan studies compare species longevity in days and years across research papers.`,
      `Finance: interest accrual calculations for multi-year periods use actual day counts for accuracy.`,
      `Software date arithmetic: calculating date differences in days and converting to approximate years for age calculations.`,
    ],
    historyNote: `The Gregorian calendar reform of 1582 corrected the Julian calendar's slight overcount by omitting century-year leap days except every 400 years, yielding a mean year of 365.2425 days. Astronomers use the Julian year of exactly 365.25 days for calculation simplicity. A "light-year" uses the Julian year definition.`,
    quickTip: `Use 365.25 days per year for calculations that span multiple years (accounting for leap years). Quick mental math: 10 years ≈ 3,652 days.`,
  },

  'mo-day': {
    intro: `Converting months to days requires careful handling because months are not equal in length — they range from 28 to 31 days. An average month is approximately 30.44 days (365.25 ÷ 12). For precise scheduling, always convert using the actual calendar months involved rather than a fixed average.`,
    useCases: [
      `Loan and mortgage calculations: monthly interest periods converted to days for per-diem interest calculations.`,
      `Subscription and SaaS billing: monthly billing cycles converted to days for prorated cancellations.`,
      `Medical treatment durations: "6-month treatment course" converted to approximate days for clinical study timelines.`,
      `Age calculations: converting age in months (infant growth tracking) to days for precise developmental milestone tracking.`,
    ],
    historyNote: `The word "month" derives from "moon" — the original month was defined by the lunar cycle of approximately 29.5 days. The Roman calendar introduced months of varying lengths to align with the solar year. Julius Caesar's calendar reform (45 BC) established the 365-day year with months of 28–31 days, a framework still in use today.`,
    quickTip: `Use 30.44 days per month for quick averages. 3 months ≈ 91 days; 6 months ≈ 183 days; 12 months = 365.25 days (average including leap years).`,
  },

  // ── COOKING ───────────────────────────────────────────────────────────────

  'c_cup-c_ml': {
    intro: `Converting cups to milliliters is one of the most essential cooking conversions for anyone baking with an international recipe or using a digital kitchen scale. One US cup equals 236.588 mL. The cup is a uniquely American cooking unit; metric recipes from Europe, Australia, and Asia use mL or grams, making this conversion indispensable.`,
    useCases: [
      `International baking: European recipes specify mL where US recipes use cups — converting allows using the same recipe across systems.`,
      `Precision baking: professional pastry chefs prefer mL over cups for accuracy; 1 cup of flour can vary ±20% by packing method.`,
      `Clinical nutrition: meal prep prescriptions stating volumes in mL converted from cup-based recipe instructions.`,
      `Liquid medications: pediatric liquid medications dosed in mL compared to cup-based recipe volumes.`,
    ],
    historyNote: `The US customary cup (236.59 mL) was standardized in 1896 by Fannie Farmer's Boston Cooking-School Cook Book, which introduced standardized measuring cups to American home cooking. Before this, recipes used imprecise terms like "a teacup." The metric cup (250 mL) used in Australia, Canada, and South Africa differs from the US cup by about 5%.`,
    quickTip: `1 US cup ≈ 240 mL for cooking purposes (exact: 236.6 mL). Half a cup = 120 mL; quarter cup = 60 mL.`,
  },

  'c_ml-c_cup': {
    intro: `Converting milliliters to cups is necessary when adapting European, Australian, or Asian recipes for US measuring tools, or when following US recipes with a metric measuring jug. One US cup equals 236.588 mL, so 1 mL equals about 0.00423 cups. The conversion is particularly common in baking, where precision matters and recipes switch between volume systems.`,
    useCases: [
      `Recipe adaptation: UK or Australian recipes in mL converted to US cups for home bakers who own cup measures.`,
      `Cooking shows: international cooking programs state liquid volumes in mL; US viewers convert to familiar cup measures.`,
      `Smoothie and drink recipes: metric smoothie recipes in mL converted to cups and ounces for US kitchen prep.`,
      `Formula preparation: infant formula mixing instructions in mL converted to cup fractions for households with only cup measures.`,
    ],
    historyNote: `Australia defines its metric cup as 250 mL and mandates metric measurements in food packaging and commercial recipes. The US has no metric cup standard; the US customary cup of 236.6 mL remains in common use. Canada uses both 250 mL (metric) and 240 mL (US customary) cups depending on the recipe source, creating occasional ambiguity.`,
    quickTip: `Divide mL by 237 for US cups. 500 mL ÷ 237 ≈ 2.1 cups. A 750 mL wine bottle ≈ 3.17 US cups.`,
  },

  'c_tbsp-c_tsp': {
    intro: `Converting tablespoons to teaspoons is one of the most frequent small-volume conversions in cooking, especially when scaling recipes up or down. One US tablespoon equals exactly 3 teaspoons. This exact relationship makes scaling easy — cutting a recipe in thirds requires converting tablespoon measures to teaspoons to avoid fractional tablespoon amounts.`,
    useCases: [
      `Recipe scaling: halving or thirding a recipe requires converting tablespoon measures to teaspoons for accuracy.`,
      `Spice and seasoning adjustments: starting with small teaspoon amounts and scaling up to tablespoons for batch cooking.`,
      `Medication measurement: liquid medications sometimes specify teaspoons (tsp) while syringe packaging marks in tablespoons (tbsp).`,
      `Baking powder and soda: leavening agents measured in precise teaspoon amounts when commercial baking specs use tablespoons.`,
    ],
    historyNote: `The tablespoon and teaspoon emerged as standardized US cooking units in the late 19th century alongside the measuring cup. Australian tablespoons are 4 teaspoons (20 mL) rather than the US/UK 3-teaspoon (15 mL) standard — a source of error when following cross-regional recipes.`,
    quickTip: `1 tablespoon = 3 teaspoons exactly. So 2 tablespoons = 6 teaspoons, and 1/3 tablespoon = 1 teaspoon — useful when a recipe calls for an odd tablespoon fraction.`,
  },

  'c_tsp-c_ml': {
    intro: `Converting teaspoons to milliliters is crucial for accurate medication dosing, precise baking, and adapting US recipes for metric kitchens. One US teaspoon equals 4.92892 mL (commonly rounded to 5 mL for medical dosing). This conversion is especially important in healthcare, where the 5 mL teaspoon is a standard clinical reference.`,
    useCases: [
      `Medication dosing: liquid medicines prescribed in "teaspoons" dosed in mL with a measuring syringe for accuracy.`,
      `International baking: US recipes in teaspoons adapted for metric measuring spoon sets (5 mL increment).`,
      `Skincare and DIY: cosmetic formulas in mL using teaspoon equivalents for small-batch mixing.`,
      `Coffee and tea: precise caffeine or supplement dosing in mL converted from teaspoon-based instructions.`,
    ],
    historyNote: `The FDA and medical organizations define the clinical teaspoon as exactly 5 mL for liquid medication dosing — slightly more than the culinary teaspoon of 4.93 mL. This deliberate rounding simplifies dosing with standard 5 mL oral syringes. The culinary teaspoon (1/3 tablespoon = 4.929 mL) is the measurement used in cooking and recipe contexts.`,
    quickTip: `1 teaspoon ≈ 5 mL (exact: 4.93 mL). For medical dosing, always use 5 mL = 1 tsp. 3 teaspoons = 1 tablespoon = 15 mL.`,
  },

  'c_gal-c_l': {
    intro: `Converting gallons to liters in a cooking context is common when scaling large-batch recipes, preparing beverages, or comparing liquid capacity of kitchen equipment. One US gallon equals 3.78541 liters. Large-batch cooking, brewing, and canning recipes regularly use gallons, while international equivalents and metric kitchen equipment use liters.`,
    useCases: [
      `Home brewing: beer and wine recipes in gallons converted to liters for metric fermenters and equipment.`,
      `Large-batch cooking: catering recipes in gallons scaled to liters for metric stock pots and containers.`,
      `Canning and preserving: US canning recipes in gallons adapted for metric country kitchens.`,
      `Beverage dispensers: commercial drink dispensers rated in gallons compared to liter-based international units.`,
    ],
    historyNote: `The US gallon (3.785 L) descends from the English wine gallon of 1707. The Imperial gallon used in the UK (4.546 L) is larger — a 20% difference that matters in large-batch recipes. Most international cooking and food service now uses liters, but US recipe books and commercial catering equipment still commonly reference gallons.`,
    quickTip: `1 US gallon ≈ 3.8 liters. 5 gallons = 18.9 liters — a common home brewing batch size. Always confirm US vs. Imperial gallon when following recipes from different sources.`,
  },

  // ── POWER ─────────────────────────────────────────────────────────────────

  'kw-hp': {
    intro: `Converting kilowatts to horsepower is the standard comparison for electric motor specs, vehicle engine ratings, and generator capacity. One mechanical horsepower equals 745.7 watts, so 1 kW ≈ 1.341 hp. Electric vehicle motors are rated in kW in Europe and simultaneously in kW + hp in the US, making this conversion ubiquitous in automotive discussions.`,
    useCases: [
      `Electric vehicles: European EV specs state power in kW; US buyers compare to familiar hp ratings.`,
      `Industrial motors: US motor specs in hp converted to kW for international procurement or ISO compliance.`,
      `Generator sizing: comparing generator capacity stated in kW vs. hp for different sizing purposes.`,
      `Marine engines: outboard motors rated in hp (US) versus kW (international) for boat purchasing.`,
    ],
    historyNote: `James Watt coined "horsepower" in the 1780s to market his steam engines to mine operators familiar with horse-powered pumps. He calculated 1 hp as 33,000 foot-pounds per minute. The kilowatt became the SI unit of power in 1889. Despite the metric system's dominance, horsepower persists in automotive and marine marketing, especially in the US.`,
    quickTip: `Multiply kW by 1.34 for hp. A 100 kW electric motor produces about 134 hp. A 200 hp gasoline engine ≈ 149 kW.`,
  },

  'hp-kw': {
    intro: `Converting horsepower to kilowatts is necessary when comparing US vehicle specs against European electric vehicle ratings, selecting motors for international equipment, or reading ISO certification requirements. One mechanical horsepower equals 0.7457 kW. EU vehicle power specs use kW while US window stickers show hp.`,
    useCases: [
      `Car buying: comparing a 300 hp US sports car to a European 221 kW equivalent in cross-market reviews.`,
      `Motor selection: matching US hp-rated pumps and compressors to international kW power supply specifications.`,
      `Aviation: aircraft piston engine power in hp converted to kW for turboprop and electric aircraft comparison.`,
      `HVAC: US HVAC equipment in hp converted to kW for energy audits and international project specifications.`,
    ],
    historyNote: `There are several "horsepower" definitions: mechanical hp (745.7 W, used in the US for motors and vehicles), metric hp (735.5 W, used in Europe for vehicle ratings), boiler hp (9,809.5 W, used for steam boilers), and electrical hp (746 W). European cars use PS (Pferdestärke = metric hp = 735.5 W), slightly less than US hp — always confirm which definition is in use.`,
    quickTip: `Multiply hp by 0.746 for kW (mechanical hp). 400 hp = 298.4 kW. For European PS (metric hp), use 0.7355 instead.`,
  },

  'w-kw': {
    intro: `Converting watts to kilowatts is a fundamental task in electrical engineering, home energy monitoring, and solar system design. One kilowatt equals 1,000 watts. Household appliances are rated in watts; electricity bills are denominated in kilowatt-hours (kWh) — making this conversion essential for calculating energy costs.`,
    useCases: [
      `Home energy monitoring: smart meters and energy monitors show watt-level usage; converting to kW for cost calculation (price per kWh).`,
      `Solar panel output: individual panel ratings in watts (e.g. 400 W) totaled and converted to kW for system-level capacity.`,
      `Appliance comparison: comparing power consumption of appliances rated in watts against electricity bill kilowatt-hour pricing.`,
      `Generator sizing: portable generators rated in watts (e.g. 3,500 W) compared to home load requirements in kW.`,
    ],
    historyNote: `The watt was named after James Watt and defined in 1889 as the SI unit of power — 1 joule per second. The kilowatt (1,000 W) became the practical unit for electrical consumption when Thomas Edison's DC power systems began billing customers in 1882 by the kilowatt-hour, a unit that has remained standard for residential electricity billing globally ever since.`,
    quickTip: `Divide watts by 1,000 for kilowatts. A 1,500 W space heater = 1.5 kW. Running it for 2 hours uses 3 kWh of electricity.`,
  },

  'kw-w': {
    intro: `Converting kilowatts to watts is necessary when working with appliance-level power data, configuring circuits, or matching load ratings to breaker capacity. One kilowatt equals exactly 1,000 watts. Electrical panels, circuit breakers, and power tools are typically rated in watts or amps, while system-level power calculations use kilowatts.`,
    useCases: [
      `Circuit loading: converting total appliance load in kW to watts for circuit breaker sizing (watts ÷ volts = amps).`,
      `Power tool ratings: power tools rated in kW (common in EU specs) converted to watts for US comparison and fuse selection.`,
      `LED lighting: converting wattage of replaced incandescent bulbs from watts, up to the kW scale for whole-building lighting loads.`,
      `Electric vehicle charging: charging station output in kW converted to watts for time-to-charge calculations.`,
    ],
    historyNote: `The watt replaced the earlier metric unit of power (the "erg per second") when the SI system was formalized in 1960. For practical electrical work, watts remain the preferred unit for individual loads while kilowatts are used for aggregated consumption — a split that makes converting between them a routine task in electrical engineering and energy management.`,
    quickTip: `Multiply kilowatts by 1,000 for watts. 3 kW = 3,000 W; 0.5 kW = 500 W. A 15-amp, 120-volt circuit can handle up to 1,800 W = 1.8 kW.`,
  },

  // ── FORCE ─────────────────────────────────────────────────────────────────

  'n-lbf': {
    intro: `Converting Newtons to pound-force is standard in structural engineering, aerospace, and mechanical design when bridging SI specifications with US customary standards. One pound-force equals 4.44822 N. Structural loads in international codes use kN/m²; US codes use PSF (pound-force per square foot).`,
    useCases: [
      `Structural engineering: converting building code load requirements between SI (kN) and US customary (lbf, kip).`,
      `Aerospace: NASA documentation historically mixes lbf and N depending on publication era and target audience.`,
      `Material testing: tensile strength results in N/mm² (MPa) converted to lbf/in² (PSI) for US engineering specs.`,
      `Spring force ratings: springs rated in lbf or N depending on country of manufacture.`,
    ],
    historyNote: `The Newton (named after Isaac Newton) was adopted as the SI unit of force in 1960. One Newton is the force required to accelerate 1 kg at 1 m/s². The pound-force (lbf) is the gravitational force on a standard pound mass at Earth's standard gravity (9.80665 m/s²). It is not the same as a pound-mass (lbm) — a distinction critical in pressure and stress calculations.`,
    quickTip: `Multiply Newtons by 0.2248 to get lbf. 1 kN ≈ 225 lbf. A 100 kg person exerts about 981 N = 220 lbf on the ground.`,
  },

  'lbf-n': {
    intro: `Converting pound-force to Newtons is necessary when US-spec'd equipment or structural elements must be certified to international SI standards, or when US engineering data is published in international scientific journals. One pound-force equals 4.44822 Newtons. The conversion is routine in aerospace, automotive, and structural engineering.`,
    useCases: [
      `International standards certification: US equipment rated in lbf recertified to kN for CE marking or ISO compliance.`,
      `Scientific publication: force measurements in lbf converted to N for SI-compliant journal submission.`,
      `Automotive crash testing: impact forces in lbf converted to kN for NCAP or Euro NCAP reporting.`,
      `Robotics: actuator force ratings in lbf converted to N for ROS or international robotics specifications.`,
    ],
    historyNote: `The pound-force is defined as the weight of one avoirdupois pound under Earth's standard gravitational acceleration of 9.80665 m/s². It was standardized alongside the kilogram-force in the 19th century. The SI system specifically separated force (Newton) from mass (kilogram) to eliminate the ambiguity inherent in the pound's dual role as both mass and force in US customary practice.`,
    quickTip: `Multiply lbf by 4.448 for Newtons. 100 lbf = 444.8 N ≈ 0.445 kN. 1,000 lbf (1 kip) = 4,448 N = 4.448 kN.`,
  },

  'n-kgf': {
    intro: `Converting Newtons to kilogram-force (kgf) is useful when working with weighing equipment, lift capacity ratings, or structural loads where the intuitive "kg" force unit is preferred over abstract Newtons. One kilogram-force equals 9.80665 Newtons (the force exerted by 1 kg under standard gravity). The kgf remains in use in machine design and heavy equipment in many countries.`,
    useCases: [
      `Crane and rigging capacity: lifting equipment rated in tonnes-force or kgf converted to kN for engineering calculations.`,
      `Weighing scales: force-based weight readouts in kgf compared to SI mass in kg for calibration work.`,
      `Spring and tensile testing: mechanical spring constants in kgf/mm converted to N/mm for material science.`,
      `Muscle force in biomechanics: grip strength and muscle force measured in kgf converted to N for research publication.`,
    ],
    historyNote: `The kilogram-force (kgf) was widely used before SI adoption and remains common in technical literature from the mid-20th century. The SI system replaced kgf with the Newton to cleanly separate mass (kg) and force (N = kg·m/s²). Many engineering textbooks still use kgf, especially in countries where SI adoption was gradual, requiring engineers to convert between old kgf specs and SI Newton values.`,
    quickTip: `Divide Newtons by 9.81 for kgf. 100 N ÷ 9.81 ≈ 10.2 kgf. Intuitively: 1 kgf is the weight of a 1 kg object — so 10 kg weighs about 98.1 N.`,
  },

  // ── ANGLE ─────────────────────────────────────────────────────────────────

  'deg-rad': {
    intro: `Converting degrees to radians is a fundamental operation in mathematics, physics, and software programming. One full circle is 360 degrees or 2π radians — so 1 degree = π/180 radians ≈ 0.017453 rad. All trigonometric functions in major programming languages (JavaScript, Python, C++) use radians by default, making this conversion essential for developers working with angle inputs.`,
    useCases: [
      `Programming and game development: JavaScript's Math.sin(), Math.cos(), and Math.atan2() all take radians as input.`,
      `Physics problems: angular velocity (rad/s), angular acceleration (rad/s²), and torque calculations use radians.`,
      `Signal processing: phase angles in Fourier transforms and filter design are expressed in radians.`,
      `Navigation: great-circle distance calculations use latitude and longitude in radians for trigonometric formulas.`,
    ],
    historyNote: `The radian was not formally defined until 1873 by James Thomson, though the concept had been used implicitly since Euler's work on circular measure. The radian is "natural" because it makes the arc length formula s = rθ dimensionally simple. The IEC recognized the radian as a derived SI unit in 1995. The 360° convention dates to Babylonian mathematics (~2000 BC).`,
    quickTip: `Key conversions to memorize: 180° = π rad, 90° = π/2 rad, 45° = π/4 rad. In code, always verify whether your trig function expects degrees or radians before passing angle values.`,
  },

  'rad-deg': {
    intro: `Converting radians to degrees is essential when displaying angle results for human readability, configuring machine tools, or translating physics equations into engineering practice. One radian equals 180/π degrees ≈ 57.2958°. Radians are the native unit of calculus and most computer math libraries; degrees are the intuitive unit for everyday measurement and navigation.`,
    useCases: [
      `Computer graphics: GPU shaders and 3D engines use radians internally; displaying angles to users requires degree conversion.`,
      `CNC machining: tool paths computed in radians converted to degrees for machine control panel display.`,
      `Robotics joint angles: robot kinematics calculated in radians converted to degrees for human operator display.`,
      `Astronomy: celestial coordinates and angular separations calculated in radians displayed in degrees, arcminutes, arcseconds.`,
    ],
    historyNote: `The radian was adopted into SI as a "supplementary unit" in 1960 and reclassified as a "derived unit" in 1995. Despite this official status, degrees remain the dominant unit for everyday angle measurement in navigation, construction, and consumer applications worldwide — making the radian-to-degree conversion one of the most common angle conversions in engineering software.`,
    quickTip: `Multiply radians by 57.3 for degrees (or by 180/π exactly). π rad = 180°; 2π rad = 360°; π/2 rad = 90°.`,
  },

  // ── CURRENCY ──────────────────────────────────────────────────────────────

  'USD-EUR': {
    intro: `Converting US Dollars to Euros is the world's most traded currency pair, covering transatlantic commerce, travel, and investment. The EUR/USD rate fluctuates continuously based on economic data, central bank policy, and geopolitical events. This converter uses live mid-market rates refreshed each session for up-to-date results.`,
    useCases: [
      `International travel: budgeting trips to Europe from the US, checking whether your dollar stretches further or less than historical rates.`,
      `E-commerce: US online stores showing EUR prices to European customers, or EU stores converting to USD for American shoppers.`,
      `Investment and forex: the EUR/USD pair is fundamental to understanding global portfolio exposure and currency risk.`,
      `Business payroll: US companies with European employees or contractors paying in EUR but reporting finances in USD.`,
    ],
    historyNote: `The Euro launched as an electronic currency in 1999 and entered physical circulation in January 2002, replacing 12 national currencies simultaneously. The EUR/USD pair has ranged from $0.83 (October 2000) to $1.60 (July 2008). The ECB and Federal Reserve do not target an exchange rate, so the pair is purely market-determined.`,
    quickTip: `Monitor the ECB reference rate and Fed interest rate decisions — these are the biggest day-to-day movers of the EUR/USD exchange rate.`,
  },

  'EUR-USD': {
    intro: `Converting Euros to US Dollars is essential for European businesses exporting to the US, travelers visiting America, and investors monitoring global currency markets. The EUR/USD exchange rate is the world's most liquid currency pair, with trillions of dollars traded daily. This converter uses live mid-market rates.`,
    useCases: [
      `European businesses: pricing products and services in USD for the US market based on current EUR/USD rates.`,
      `Travel to the US: European travelers converting spending money from euros to dollars before or during travel.`,
      `Investment returns: European investors calculating the USD value of US stock or bond holdings.`,
      `Import pricing: US importers quoting European goods in USD using current exchange rates.`,
    ],
    historyNote: `The Euro was introduced to make trade within the EU simpler and to create a rival reserve currency to the US dollar. The Eurozone now comprises 20 EU member states. The EUR/USD rate is influenced by comparative GDP growth, inflation differentials, and interest rate decisions by the ECB vs. the Federal Reserve.`,
    quickTip: `The EUR/USD rate above 1.00 means the Euro is stronger than the dollar (1 EUR buys more than $1). Below 1.00, the dollar is stronger — a situation called "dollar parity" last seen in 2022.`,
  },

  'USD-GBP': {
    intro: `Converting US Dollars to British Pounds Sterling is a key transaction for US businesses working with UK partners, travelers visiting Britain, and investors holding UK assets. The GBP/USD pair is one of the oldest and most traded currency pairs, historically nicknamed "Cable" due to the transatlantic telegraph cables used to quote rates in the 19th century.`,
    useCases: [
      `UK travel: US travelers converting dollars to pounds for accommodation, transport, and dining in the UK.`,
      `US-UK trade: American importers paying UK suppliers in GBP; exporters receiving GBP and converting to USD.`,
      `London Stock Exchange investments: US investors buying UK-listed shares priced in GBP.`,
      `Digital media and SaaS: US software companies pricing subscriptions in GBP for UK customers.`,
    ],
    historyNote: `The British pound sterling is the world's oldest currency still in use, with origins in Anglo-Saxon England. The GBP/USD rate was fixed under the Bretton Woods system (1944–1971) and has floated freely since then. Brexit (2016–2020) caused significant GBP volatility as markets priced in UK-EU trade uncertainty.`,
    quickTip: `The GBP is typically stronger than both USD and EUR — one pound usually buys more than one dollar. Watch the Bank of England base rate decisions for GBP direction.`,
  },

  'USD-JPY': {
    intro: `Converting US Dollars to Japanese Yen is essential for travelers to Japan, US businesses with Japanese partners, and investors monitoring Asia-Pacific markets. The USD/JPY rate reflects the interest rate differential between the Federal Reserve and the Bank of Japan, making it a key indicator of global risk appetite. This converter uses live mid-market rates.`,
    useCases: [
      `Japan travel: US travelers budgeting for Japan where cash yen is still widely used in shops and restaurants.`,
      `Electronics and automotive trade: Japan is a major exporter of electronics and vehicles; the USD/JPY rate directly affects import prices for US buyers.`,
      `Carry trade: the JPY is a classic funding currency in carry trades due to Japan's historically low interest rates.`,
      `Gaming and anime merchandise: purchasing Japanese games, figures, or media often requires knowing the current USD/JPY rate.`,
    ],
    historyNote: `After World War II, Japan's yen was fixed at 360 JPY per USD under the Bretton Woods system. When Bretton Woods collapsed in 1971, the yen began appreciating, eventually reaching below 80 JPY/USD in 2011. The Bank of Japan's ultra-loose monetary policy in the 2010s–2020s kept the yen weak relative to the dollar.`,
    quickTip: `When USD/JPY is high (e.g. above 140), your dollars buy more yen — favorable for US travelers to Japan. When it's lower (e.g. 100–110), Japanese goods and travel are more expensive for Americans.`,
  },

  'USD-INR': {
    intro: `Converting US Dollars to Indian Rupees is essential for India's large diaspora, global software outsourcing, and growing US-India trade. The USD/INR rate reflects RBI monetary policy, India's crude oil import costs (India imports ~85% of its oil), and capital flows into Indian equities. This converter uses live mid-market rates.`,
    useCases: [
      `Remittances: Indian diaspora in the US sending money home — one of the world's largest remittance corridors by volume.`,
      `Software and IT services: US companies paying Indian development firms or freelancers in INR, or vice versa.`,
      `Travel to India: budgeting accommodation, food, and transport when converting from USD to INR.`,
      `Import/export: US goods priced in USD with Indian importers calculating INR costs at current exchange rates.`,
    ],
    historyNote: `India's rupee was pegged to the British pound sterling until 1966, then to a basket of currencies. It became fully convertible on the current account in 1994. The USD/INR rate has moved from approximately 7 INR per USD in the 1960s to over 80 INR per USD by 2022, reflecting India's inflation differential and structural dollar strengthening.`,
    quickTip: `Watch India's foreign exchange reserves and RBI intervention signals. When reserves are high, the RBI can support the rupee; when low, the rupee tends to weaken against the dollar.`,
  },

  // ── VOLTAGE ───────────────────────────────────────────────────────────────

  'v-mv_e': {
    intro: `Converting volts to millivolts is essential in electronics, battery testing, and sensor calibration. One volt equals 1,000 millivolts (mV). Small electronic signals — thermocouple outputs, ECG signals, audio preamplifiers — operate in the millivolt range while power supply voltages are in volts, making this conversion constant in electronics design.`,
    useCases: [
      `Sensor calibration: pressure, temperature, and strain gauge sensors output signals in mV that are amplified to V for ADC input.`,
      `Audio engineering: microphone output is typically 1–100 mV; line level is 1 V RMS.`,
      `Battery testing: cell voltages in lithium packs are measured in mV precision to detect charge imbalance.`,
      `Medical electronics: ECG (heart) signals are approximately 1 mV; EEG (brain) signals are 10–100 µV.`,
    ],
    historyNote: `The volt was named in 1881 after Alessandro Volta, who invented the first electrochemical battery (voltaic pile) in 1799. The millivolt as a practical sub-unit became important with the development of electronic amplifiers in the early 20th century, which could amplify millivolt-scale signals to volt-scale outputs. Modern semiconductor sensors often operate at mV output scales due to low supply voltages.`,
    quickTip: `Multiply volts by 1,000 to get millivolts. A 3.3 V microcontroller GPIO = 3,300 mV. A standard AA battery is 1,500 mV (1.5 V) when fresh.`,
  },

  'mv_e-v': {
    intro: `Converting millivolts to volts is necessary when scaling sensor output readings to circuit supply voltages, analyzing battery cell data, or reporting signal levels in standard SI units. One millivolt equals 0.001 volts. Measurement instruments, data acquisition systems, and oscilloscopes often display readings in millivolts that need converting to volts for calculations and documentation.`,
    useCases: [
      `Data acquisition: sensors outputting mV signals converted to V for compatibility with microcontroller ADC reference voltages.`,
      `Battery management: individual cell voltages measured in mV (e.g. 3,700 mV for a lithium cell) expressed in volts for standard specs.`,
      `Signal amplifier design: input signal levels in mV converted to V for amplifier gain calculations (gain = Vout/Vin).`,
      `PCB testing: probe measurements in mV converted to V for circuit verification against schematic specifications.`,
    ],
    historyNote: `The volt became an SI base-derived unit in 1960, defined as the potential difference that drives 1 ampere through 1 ohm of resistance. The millivolt sub-unit became practically important in the mid-20th century with the rise of thermocouple temperature measurement, where output voltages are in the low millivolt range (e.g. Type K thermocouple: ~41 µV/°C).`,
    quickTip: `Divide millivolts by 1,000 for volts. 3,300 mV = 3.3 V; 5,000 mV = 5 V; 12,000 mV = 12 V.`,
  },

  'kv-v': {
    intro: `Converting kilovolts to volts is required in high-voltage engineering, power transmission design, and electrical safety compliance. One kilovolt equals 1,000 volts. Power lines, industrial equipment, medical imaging (X-ray tubes), and high-voltage laboratory experiments all work in kilovolt ranges where individual volt measurements are less practical.`,
    useCases: [
      `Power transmission: high-voltage power lines operate at 110–765 kV; converting to volts for component-level calculations.`,
      `Medical X-ray: X-ray tube peak voltage (kVp) ranges from 40–150 kV; converting to volts for tube and generator specs.`,
      `High-voltage testing: insulation test voltages (e.g. 10 kV) converted to volts for equipment ratings.`,
      `Electric arc furnaces: furnace supply voltages in kV converted to volts for electrode gap and power calculations.`,
    ],
    historyNote: `High-voltage engineering emerged with the War of Currents in the 1880s–1890s, when Nikola Tesla and George Westinghouse demonstrated that AC power could be transmitted at high voltage over long distances and stepped down for local use with transformers — a technique not practical with Edison's DC system. Modern power grids use hundreds of kV for intercontinental transmission.`,
    quickTip: `Multiply kV by 1,000 for volts. 11 kV = 11,000 V (common UK distribution voltage); 230 kV and 500 kV are typical US transmission line voltages.`,
  },

  // ── WEIGHT (continued) ────────────────────────────────────────────────────

  'g-kg': {
    intro: `Converting grams to kilograms is one of the most common metric-system conversions, used daily in cooking, chemistry, and commerce. One kilogram equals 1,000 grams. Recipes, laboratory measurements, and product weights frequently cross the gram/kilogram boundary — knowing the conversion instantly reduces measurement errors.`,
    useCases: [
      `Cooking and baking: precise ingredient weights in grams from a kitchen scale converted to kilograms for large-batch recipe scaling.`,
      `Laboratory chemistry: reagent quantities in grams converted to kilograms for bulk order comparison and storage.`,
      `Retail product weight: packaged food and goods labeled in grams (e.g. 500 g) compared to kilogram pricing.`,
      `Postal and courier: parcel weights under 1 kg often measured in grams; many courier rate tables switch to kg above 1,000 g.`,
    ],
    historyNote: `The gram was the original base unit of mass in the CGS (centimeter-gram-second) system, defined in 1795 as the mass of 1 cm³ of water at 4°C. The SI system (1960) adopted the kilogram as the base mass unit — making the kilogram one of the only SI base units with a prefix ("kilo-") in its name. The gram is technically 0.001 kg, a derived unit.`,
    quickTip: `Divide grams by 1,000 for kilograms. 500 g = 0.5 kg; 1,500 g = 1.5 kg; 2,300 g = 2.3 kg.`,
  },

  'kg-g': {
    intro: `Converting kilograms to grams is a routine task in cooking, pharmacy, and laboratory work where sub-kilogram precision is needed. One kilogram equals exactly 1,000 grams. Scales, chemical balances, and recipe applications frequently present weight in grams for precision while bulk storage and pricing is quoted by the kilogram.`,
    useCases: [
      `Pharmaceutical compounding: drug doses in mg or g calculated against kilogram stock quantities.`,
      `Cooking and baking: bulk ingredient purchases in kg converted to g for individual recipe portions.`,
      `Metal and material specs: material density in g/cm³ compared against bulk weight in kg for volume calculation.`,
      `Scientific measurement: mass data collected in kg from large-scale experiments reported in grams for fine-grained analysis.`,
    ],
    historyNote: `The kilogram was originally defined in 1795 as the mass of 1 liter of water at 4°C, then represented by the International Prototype Kilogram (IPK), a platinum-iridium cylinder kept in Sèvres, France. In 2019 the definition was revised to fix the kilogram to the Planck constant — eliminating dependence on a physical artifact for the first time in the history of measurement.`,
    quickTip: `Multiply kilograms by 1,000 for grams. 1.5 kg = 1,500 g; 0.25 kg = 250 g (a standard stick of butter in the US).`,
  },

  'st-kg': {
    intro: `Converting stones to kilograms is an everyday task in the UK and Ireland, where body weight is still commonly expressed in stones and pounds while medical and scientific weight is measured in kilograms. One stone equals 6.35029 kilograms. NHS patient records, gym equipment, and UK health apps routinely require this conversion.`,
    useCases: [
      `UK body weight: UK residents give their weight in stones and pounds; GP records, BMI calculators, and NHS apps use kilograms.`,
      `Weight loss tracking: UK slimming clubs track weight loss in stones and pounds; metric equivalents needed for international diet app compatibility.`,
      `Sports: UK boxing weight categories historically use stones; international categories use kilograms.`,
      `Veterinary: UK pet weight often described by owners in stones; vet records use kilograms.`,
    ],
    historyNote: `The stone (14 pounds = 6.35 kg) was historically used across Britain for measuring commodities; different stone values applied to different goods (e.g. a stone of wool = 14 lb but a stone of glass = 5 lb). The 14-pound stone for body weight was standardized by the Weights and Measures Act 1835. Despite metrication, the stone persists uniquely in UK everyday body weight usage.`,
    quickTip: `Multiply stones by 6.35 for kilograms. 10 stone = 63.5 kg; 12 stone = 76.2 kg; 14 stone = 88.9 kg.`,
  },

  'ms-kmh': {
    intro: `Converting meters per second to kilometers per hour is a fundamental physics-to-everyday-language conversion. One meter per second equals 3.6 km/h. Physics and engineering express velocity in m/s; road speeds, weather, and sports use km/h — bridging these two requires this simple but constant conversion.`,
    useCases: [
      `Wind speed: meteorological measurements in m/s (anemometers) converted to km/h for weather forecasts and warnings.`,
      `Athletics: sprint speed in m/s (from timing sensors) converted to km/h for public reporting and comparison.`,
      `Fluid dynamics: flow velocity in m/s from simulation or measurement converted to km/h for engineering communication.`,
      `Projectile and vehicle speed: ballistic and vehicle dynamics calculated in m/s reported in km/h for regulatory compliance.`,
    ],
    historyNote: `The meter per second is the coherent SI unit of speed, derived from the meter (base length unit) and second (base time unit). The kilometer per hour emerged as a practical unit for road transport in the early 20th century as automobiles spread globally. The simple factor of 3.6 (= 1000 m/km ÷ 3600 s/hr) bridges the two systems.`,
    quickTip: `Multiply m/s by 3.6 for km/h. 10 m/s = 36 km/h; 30 m/s = 108 km/h (highway speed). Divide km/h by 3.6 to go back.`,
  },

  'kmh-ms': {
    intro: `Converting kilometers per hour to meters per second is essential in physics, engineering, and sports science where SI units are required. One km/h equals 0.27778 m/s (= 1/3.6). Whenever a speed from a vehicle, weather report, or sports measurement in km/h needs to be used in a physics formula, m/s is the correct SI unit.`,
    useCases: [
      `Physics calculations: kinetic energy (½mv²), drag force, and momentum formulas require speed in m/s.`,
      `Sports biomechanics: athlete speed from GPS in km/h converted to m/s for power output and energy calculations.`,
      `Fluid mechanics: wind or water flow speed from weather data in km/h converted to m/s for Reynolds number and drag calculations.`,
      `Robotics and autonomous vehicles: speed planning in km/h converted to m/s for control system programming.`,
    ],
    historyNote: `The conversion factor of 1/3.6 (≈ 0.2778) comes from the unit analysis: 1 km/h = 1000 m / 3600 s = 5/18 m/s. The relationship is exact. Most physics problems and engineering simulations expect SI units (m/s), while most real-world speed data (road, aviation, weather) is communicated in km/h — making this a high-frequency, low-complexity conversion in technical work.`,
    quickTip: `Divide km/h by 3.6 for m/s. 72 km/h ÷ 3.6 = 20 m/s; 100 km/h ÷ 3.6 = 27.8 m/s.`,
  },

  // ── TEMPERATURE (additional) ───────────────────────────────────────────────

  'c-k': {
    intro: `Converting Celsius to Kelvin is fundamental in chemistry, physics, and thermodynamics. Kelvin is the SI base unit of temperature and the scale used in all scientific calculations involving temperature. The conversion is simple: K = °C + 273.15. Absolute zero (0 K) is the theoretical lower limit of temperature, equivalent to −273.15°C.`,
    useCases: [
      `Gas law calculations: Boyle's Law, Charles's Law, and the Ideal Gas Law require temperature in Kelvin, not Celsius.`,
      `Blackbody radiation and astronomy: stellar temperatures, color temperature, and Planck's law calculations use Kelvin.`,
      `Cryogenics: liquid nitrogen (77 K = −196°C) and liquid helium (4 K = −269°C) temperatures expressed in both scales.`,
      `Thermodynamic efficiency: Carnot engine efficiency calculations require temperatures in Kelvin.`,
    ],
    historyNote: `The Kelvin scale was proposed by Lord Kelvin (William Thomson) in 1848 and adopted as an SI base unit in 1954. Unlike Celsius and Fahrenheit, Kelvin has no degree symbol — it is simply "K." The Kelvin was redefined in 2019 by fixing the Boltzmann constant, making absolute zero not merely a theoretical limit but a precisely defined point in the scale.`,
    quickTip: `Add 273.15 to Celsius for Kelvin. Room temperature (20°C) = 293.15 K. Water boils at 100°C = 373.15 K.`,
  },

  'k-c': {
    intro: `Converting Kelvin to Celsius is necessary when interpreting scientific data for practical application, translating astrophysical or thermodynamic temperatures into everyday terms, or converting laboratory measurements to a familiar scale. The conversion is straightforward: °C = K − 273.15. All Kelvin values correspond to real temperatures; there are no negative Kelvin values (below absolute zero is physically impossible).`,
    useCases: [
      `Laboratory data: experimental temperatures recorded in K for thermodynamic consistency converted to °C for reporting.`,
      `Stellar temperatures: star surface temperatures (Sun: 5,778 K) converted to Celsius for educational communication.`,
      `Semiconductor fabrication: process temperatures in high-K ranges converted to Celsius for equipment calibration.`,
      `Climate science: absolute temperature data in K converted to Celsius for public-facing climate reports.`,
    ],
    historyNote: `The relationship between Kelvin and Celsius is defined by the fact that the Celsius scale is simply the Kelvin scale shifted by 273.15 — they share the same size degree. The two scales were historically developed independently: Celsius was defined by water's phase transitions; Kelvin was derived from absolute zero, the temperature at which all molecular motion ceases.`,
    quickTip: `Subtract 273.15 from Kelvin for Celsius. 300 K − 273.15 = 26.85°C (approximately room temperature). 0 K = −273.15°C (absolute zero).`,
  },

};
