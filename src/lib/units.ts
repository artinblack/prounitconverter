export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number;
  toBaseOffset?: number; // temperature only
  info?: string; // short definition for popover
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  units: Unit[];
  defaultFrom: string;
  defaultTo: string;
  commonPairs: Array<[string, string]>;
  faqs: Array<{ q: string; a: string }>;
}

// ─── LENGTH (base: meter) ────────────────────────────────────
const lengthUnits: Unit[] = [
  { id: 'mm',  name: 'Millimeter',    symbol: 'mm',  factor: 0.001,       info: 'One thousandth of a meter. Used in engineering drawings and small measurements.' },
  { id: 'cm',  name: 'Centimeter',    symbol: 'cm',  factor: 0.01,        info: 'One hundredth of a meter. Common in everyday measurements like height and clothing.' },
  { id: 'm',   name: 'Meter',         symbol: 'm',   factor: 1,           info: 'The SI base unit of length, defined by the speed of light.' },
  { id: 'km',  name: 'Kilometer',     symbol: 'km',  factor: 1000,        info: 'One thousand meters. Used for road distances and geographic measurements.' },
  { id: 'in',  name: 'Inch',          symbol: 'in',  factor: 0.0254,      info: 'Exactly 25.4 mm. Used in the US, UK, and Canada for everyday measurements.' },
  { id: 'ft',  name: 'Foot',          symbol: 'ft',  factor: 0.3048,      info: 'Exactly 12 inches or 0.3048 m. Standard in the US for height and altitude.' },
  { id: 'yd',  name: 'Yard',          symbol: 'yd',  factor: 0.9144,      info: 'Exactly 3 feet. Used in American football fields and fabric measurements.' },
  { id: 'mi',  name: 'Mile',          symbol: 'mi',  factor: 1609.344,    info: 'Exactly 1,609.344 m. Used for road distances in the US and UK.' },
  { id: 'nmi', name: 'Nautical Mile', symbol: 'nmi', factor: 1852,        info: '1 arc-minute of latitude = 1,852 m. Used in aviation and maritime navigation.' },
];

// ─── WEIGHT (base: gram) ─────────────────────────────────────
const weightUnits: Unit[] = [
  { id: 'mg',  name: 'Milligram',   symbol: 'mg',  factor: 0.001,         info: 'One thousandth of a gram. Used in pharmacy and nutrition labeling.' },
  { id: 'g',   name: 'Gram',        symbol: 'g',   factor: 1,             info: 'The SI unit of mass. Mass of 1 cm³ of water at 4°C.' },
  { id: 'kg',  name: 'Kilogram',    symbol: 'kg',  factor: 1000,          info: 'The SI base unit of mass. Defined by the Planck constant.' },
  { id: 'mt',  name: 'Metric Ton',  symbol: 't',   factor: 1_000_000,     info: 'Exactly 1,000 kg. Used in shipping, industry, and agriculture.' },
  { id: 'oz',  name: 'Ounce',       symbol: 'oz',  factor: 28.349523125,  info: '1/16 of a pound = 28.3495 g. Used in the US for food and postal weights.' },
  { id: 'lb',  name: 'Pound',       symbol: 'lb',  factor: 453.59237,     info: 'Exactly 453.592 g. Primary weight unit in the US and UK.' },
  { id: 'st',  name: 'Stone',       symbol: 'st',  factor: 6350.29318,    info: 'Exactly 14 pounds. Used in the UK for body weight.' },
  { id: 'ton', name: 'US Ton',      symbol: 'ton', factor: 907184.74,     info: 'Short ton = 2,000 pounds = 907.185 kg. Used in the US (not metric ton).' },
];

// ─── TEMPERATURE (base: Celsius, special-case conversion) ───
const tempUnits: Unit[] = [
  { id: 'c', name: 'Celsius',    symbol: '°C', factor: 1,    info: 'Water freezes at 0°C and boils at 100°C. Used worldwide.' },
  { id: 'f', name: 'Fahrenheit', symbol: '°F', factor: 5/9,  info: 'Water freezes at 32°F and boils at 212°F. Used in the US.' },
  { id: 'k', name: 'Kelvin',     symbol: 'K',  factor: 1,    info: 'Absolute temperature scale. 0 K = absolute zero = −273.15°C.' },
];

// ─── AREA (base: square meter) ───────────────────────────────
const areaUnits: Unit[] = [
  { id: 'mm2', name: 'Square Millimeter', symbol: 'mm²', factor: 1e-6,          info: 'Used for very small areas in engineering.' },
  { id: 'cm2', name: 'Square Centimeter', symbol: 'cm²', factor: 1e-4,          info: 'Common for surface areas of small objects.' },
  { id: 'm2',  name: 'Square Meter',      symbol: 'm²',  factor: 1,             info: 'SI unit of area. Roughly the size of a large desk.' },
  { id: 'km2', name: 'Square Kilometer',  symbol: 'km²', factor: 1e6,           info: 'Used for geographic areas of countries and cities.' },
  { id: 'in2', name: 'Square Inch',       symbol: 'in²', factor: 6.4516e-4,     info: 'Used in the US for small surface areas.' },
  { id: 'ft2', name: 'Square Foot',       symbol: 'ft²', factor: 0.09290304,    info: 'Common in US real estate and construction.' },
  { id: 'yd2', name: 'Square Yard',       symbol: 'yd²', factor: 0.83612736,    info: 'Used for carpet and flooring in the US.' },
  { id: 'ac',  name: 'Acre',              symbol: 'ac',  factor: 4046.8564224,  info: '43,560 sq ft. Standard unit for land area in the US.' },
  { id: 'ha',  name: 'Hectare',           symbol: 'ha',  factor: 10000,         info: '10,000 m². Standard for agricultural land measurement.' },
];

// ─── VOLUME (base: liter) ────────────────────────────────────
const volumeUnits: Unit[] = [
  { id: 'ml',   name: 'Milliliter',       symbol: 'mL',    factor: 0.001,           info: '1 cm³ of volume. Used for medicine and small liquid measures.' },
  { id: 'l',    name: 'Liter',            symbol: 'L',     factor: 1,               info: 'Basic metric unit for liquids. Equal to 1 dm³.' },
  { id: 'm3',   name: 'Cubic Meter',      symbol: 'm³',    factor: 1000,            info: '1,000 liters. Used for gas volume and large containers.' },
  { id: 'floz', name: 'Fluid Ounce (US)', symbol: 'fl oz', factor: 0.0295735296,    info: '1/128 of a US gallon = 29.57 mL.' },
  { id: 'cup',  name: 'Cup (US)',          symbol: 'cup',   factor: 0.2365882365,    info: '8 US fl oz = 236.6 mL. Used in cooking and baking.' },
  { id: 'pt',   name: 'Pint (US)',         symbol: 'pt',    factor: 0.473176473,     info: '2 US cups = 473 mL. Used for beverages.' },
  { id: 'qt',   name: 'Quart (US)',        symbol: 'qt',    factor: 0.946352946,     info: '2 US pints = 946 mL.' },
  { id: 'gal',  name: 'Gallon (US)',       symbol: 'gal',   factor: 3.785411784,     info: '4 US quarts = 3.785 L. Primary liquid measure in the US.' },
  { id: 'in3',  name: 'Cubic Inch',       symbol: 'in³',   factor: 0.016387064,     info: '16.387 mL. Used for engine displacement in the US.' },
  { id: 'ft3',  name: 'Cubic Foot',       symbol: 'ft³',   factor: 28.316846592,    info: '28.317 L. Used for gas and large volume measurements in the US.' },
];

// ─── SPEED (base: m/s) ───────────────────────────────────────
const speedUnits: Unit[] = [
  { id: 'ms',  name: 'Meter per Second',   symbol: 'm/s',  factor: 1,          info: 'SI unit of speed. Speed of sound ≈ 343 m/s.' },
  { id: 'kmh', name: 'Kilometer per Hour', symbol: 'km/h', factor: 1/3.6,      info: 'Used for vehicle speeds in most countries.' },
  { id: 'mph', name: 'Mile per Hour',      symbol: 'mph',  factor: 0.44704,    info: 'Used for vehicle speeds in the US and UK.' },
  { id: 'kn',  name: 'Knot',               symbol: 'kn',   factor: 0.514444,   info: '1 nautical mile/hour. Used in aviation and maritime contexts.' },
  { id: 'fts', name: 'Foot per Second',    symbol: 'ft/s', factor: 0.3048,     info: 'Used in ballistics and physics in the US.' },
];

// ─── DIGITAL STORAGE (base: bit) ─────────────────────────────
const digitalUnits: Unit[] = [
  { id: 'bit', name: 'Bit',      symbol: 'bit', factor: 1,                info: 'Smallest unit of digital information (0 or 1).' },
  { id: 'B',   name: 'Byte',     symbol: 'B',   factor: 8,                info: '8 bits. Basic addressable unit in most computer architectures.' },
  { id: 'KB',  name: 'Kilobyte', symbol: 'KB',  factor: 8 * 1024,         info: '1,024 bytes. Used for small files like text documents.' },
  { id: 'MB',  name: 'Megabyte', symbol: 'MB',  factor: 8 * 1024 ** 2,    info: '1,024 KB. Used for photos, music tracks, and documents.' },
  { id: 'GB',  name: 'Gigabyte', symbol: 'GB',  factor: 8 * 1024 ** 3,    info: '1,024 MB. Used for device storage and large files.' },
  { id: 'TB',  name: 'Terabyte', symbol: 'TB',  factor: 8 * 1024 ** 4,    info: '1,024 GB. Used for hard drives and cloud storage.' },
  { id: 'PB',  name: 'Petabyte', symbol: 'PB',  factor: 8 * 1024 ** 5,    info: '1,024 TB. Used for data center and big data contexts.' },
];

// ─── TIME (base: second) ─────────────────────────────────────
const timeUnits: Unit[] = [
  { id: 'ms_t', name: 'Millisecond', symbol: 'ms',  factor: 0.001,       info: 'One thousandth of a second. Used in computing and sports timing.' },
  { id: 's',    name: 'Second',      symbol: 's',   factor: 1,           info: 'SI base unit of time. Defined by cesium atom oscillations.' },
  { id: 'min',  name: 'Minute',      symbol: 'min', factor: 60,          info: '60 seconds.' },
  { id: 'hr',   name: 'Hour',        symbol: 'hr',  factor: 3600,        info: '60 minutes = 3,600 seconds.' },
  { id: 'day',  name: 'Day',         symbol: 'day', factor: 86400,       info: '24 hours = 86,400 seconds.' },
  { id: 'wk',   name: 'Week',        symbol: 'wk',  factor: 604800,      info: '7 days = 604,800 seconds.' },
  { id: 'mo',   name: 'Month',       symbol: 'mo',  factor: 2629800,     info: 'Average month ≈ 30.44 days = 2,629,800 seconds.' },
  { id: 'yr',   name: 'Year',        symbol: 'yr',  factor: 31557600,    info: 'Julian year = 365.25 days = 31,557,600 seconds.' },
];

// ─── CURRENCY (base: USD) ────────────────────────────────────
const currencyUnits: Unit[] = [
  { id: 'USD', name: 'US Dollar',         symbol: 'USD', factor: 1,      info: 'World reserve currency. Issued by the US Federal Reserve.' },
  { id: 'EUR', name: 'Euro',              symbol: 'EUR', factor: 0.92,   info: 'Currency of the Eurozone (20 EU countries).' },
  { id: 'GBP', name: 'British Pound',     symbol: 'GBP', factor: 0.79,   info: 'Oldest currency still in use. Used in the UK.' },
  { id: 'JPY', name: 'Japanese Yen',      symbol: 'JPY', factor: 149.5,  info: 'Third most traded currency. Used in Japan.' },
  { id: 'INR', name: 'Indian Rupee',      symbol: 'INR', factor: 83.12,  info: 'Currency of India, one of the world\'s fastest-growing economies.' },
  { id: 'CAD', name: 'Canadian Dollar',   symbol: 'CAD', factor: 1.36,   info: 'Also called the "loonie." Used in Canada.' },
  { id: 'AUD', name: 'Australian Dollar', symbol: 'AUD', factor: 1.53,   info: 'Also called the "Aussie dollar." Used in Australia.' },
  { id: 'CHF', name: 'Swiss Franc',       symbol: 'CHF', factor: 0.90,   info: 'Known for stability. Switzerland\'s currency.' },
  { id: 'CNY', name: 'Chinese Yuan',      symbol: 'CNY', factor: 7.24,   info: 'Also called Renminbi (RMB). China\'s official currency.' },
  { id: 'AED', name: 'UAE Dirham',        symbol: 'AED', factor: 3.67,   info: 'Currency of the United Arab Emirates, pegged to USD.' },
];

// ─── ANGLE (base: degree) ────────────────────────────────────
const angleUnits: Unit[] = [
  { id: 'deg',  name: 'Degree',      symbol: '°',    factor: 1,                      info: '1/360 of a full rotation. Most common angle unit in everyday use.' },
  { id: 'rad',  name: 'Radian',      symbol: 'rad',  factor: 180 / Math.PI,          info: 'SI unit of angle. 1 rad = angle subtended by arc equal to radius. 2π rad = 360°.' },
  { id: 'grad', name: 'Gradian',     symbol: 'grad', factor: 0.9,                    info: '1/400 of a full rotation. Used in surveying.' },
  { id: 'mrad', name: 'Milliradian', symbol: 'mrad', factor: 180 / (Math.PI * 1000), info: '1/1000 of a radian. Used in targeting and ballistics.' },
  { id: 'arcm', name: 'Arcminute',   symbol: "′",    factor: 1/60,                   info: '1/60 of a degree. Used in astronomy and navigation.' },
  { id: 'arcs', name: 'Arcsecond',   symbol: "″",    factor: 1/3600,                 info: '1/3600 of a degree. Used in astronomy for very small angles.' },
  { id: 'rev',  name: 'Revolution',  symbol: 'rev',  factor: 360,                    info: 'One full rotation = 360°.' },
];

// ─── PRESSURE (base: Pascal) ─────────────────────────────────
const pressureUnits: Unit[] = [
  { id: 'pa',   name: 'Pascal',           symbol: 'Pa',   factor: 1,              info: 'SI unit of pressure = 1 N/m². Named after Blaise Pascal.' },
  { id: 'kpa',  name: 'Kilopascal',       symbol: 'kPa',  factor: 1000,           info: '1,000 Pa. Used for tire pressure and weather forecasting.' },
  { id: 'mpa',  name: 'Megapascal',       symbol: 'MPa',  factor: 1_000_000,      info: '1,000,000 Pa. Used for tensile strength and hydraulic systems.' },
  { id: 'bar',  name: 'Bar',              symbol: 'bar',  factor: 100000,         info: '≈ 1 atm. Used in meteorology and industrial applications.' },
  { id: 'atm',  name: 'Atmosphere',       symbol: 'atm',  factor: 101325,         info: 'Standard atmospheric pressure at sea level.' },
  { id: 'psi',  name: 'PSI',              symbol: 'psi',  factor: 6894.757,       info: 'Pounds per square inch. Used in the US for tire pressure and pipes.' },
  { id: 'torr', name: 'Torr',             symbol: 'Torr', factor: 133.322,        info: '≈ 1 mmHg. Used in vacuum technology and medicine.' },
  { id: 'mmhg', name: 'mmHg',             symbol: 'mmHg', factor: 133.322,        info: 'Millimeters of mercury. Used for blood pressure measurement.' },
  { id: 'inhg', name: 'Inch of Mercury',  symbol: 'inHg', factor: 3386.389,       info: 'Used in aviation altimetry and US weather reports.' },
];

// ─── ENERGY (base: Joule) ────────────────────────────────────
const energyUnits: Unit[] = [
  { id: 'j',    name: 'Joule',             symbol: 'J',    factor: 1,              info: 'SI unit of energy = 1 kg·m²/s². Named after James Prescott Joule.' },
  { id: 'kj',   name: 'Kilojoule',         symbol: 'kJ',   factor: 1000,           info: '1,000 J. Used for food energy and thermodynamics.' },
  { id: 'mj',   name: 'Megajoule',         symbol: 'MJ',   factor: 1_000_000,      info: '1,000 kJ. Used in large-scale energy measurements.' },
  { id: 'cal',  name: 'Calorie',           symbol: 'cal',  factor: 4.184,          info: 'Energy to raise 1 g of water by 1°C. Used in chemistry.' },
  { id: 'kcal', name: 'Kilocalorie',       symbol: 'kcal', factor: 4184,           info: '1,000 cal. The "food calorie" used in nutrition.' },
  { id: 'wh',   name: 'Watt-hour',         symbol: 'Wh',   factor: 3600,           info: '3,600 J. Used for electricity consumption.' },
  { id: 'kwh',  name: 'Kilowatt-hour',     symbol: 'kWh',  factor: 3_600_000,      info: '3.6 MJ. Standard unit on electricity bills.' },
  { id: 'btu',  name: 'BTU',               symbol: 'BTU',  factor: 1055.06,        info: 'British Thermal Unit. Energy to heat 1 lb of water by 1°F. Used in HVAC.' },
  { id: 'ev',   name: 'Electronvolt',      symbol: 'eV',   factor: 1.602176634e-19, info: 'Energy gained by an electron across 1 V potential. Used in particle physics.' },
];

// ─── DENSITY (base: kg/m³) ───────────────────────────────────
const densityUnits: Unit[] = [
  { id: 'kgm3',  name: 'Kilogram per m³',   symbol: 'kg/m³',  factor: 1,          info: 'SI unit of density. Water = 1,000 kg/m³.' },
  { id: 'gcm3',  name: 'Gram per cm³',       symbol: 'g/cm³',  factor: 1000,       info: 'Same as g/mL. Convenient for solids and liquids. Water = 1 g/cm³.' },
  { id: 'gl',    name: 'Gram per Liter',      symbol: 'g/L',    factor: 1,          info: 'Used for solution concentrations. Water = 1,000 g/L.' },
  { id: 'kgl',   name: 'Kilogram per Liter',  symbol: 'kg/L',   factor: 1000,       info: 'Used for very dense liquids. Water = 1 kg/L.' },
  { id: 'lbft3', name: 'Pound per ft³',       symbol: 'lb/ft³', factor: 16.01846,   info: 'Used in US engineering. Water ≈ 62.43 lb/ft³.' },
  { id: 'lbin3', name: 'Pound per in³',       symbol: 'lb/in³', factor: 27679.90,   info: 'Used in US engineering for very dense materials.' },
  { id: 'ozgal', name: 'Ounce per Gallon',    symbol: 'oz/gal', factor: 7.489152,   info: 'Used in US food and beverage industry.' },
];

// ─── FUEL CONSUMPTION (base: L/100km) ────────────────────────
// Note: L/100km is inverse-scale — handled in convert() as special case
const fuelUnits: Unit[] = [
  { id: 'l100km', name: 'Liters per 100 km',   symbol: 'L/100km', factor: 1,          info: 'European standard. Lower = more efficient. 5 L/100km is economical.' },
  { id: 'mpg',    name: 'Miles per Gallon (US)', symbol: 'mpg',     factor: 0,          info: 'US standard. Higher = more efficient. Average US car ≈ 25 mpg.' },
  { id: 'mpguk',  name: 'Miles per Gallon (UK)', symbol: 'mpg(UK)', factor: 0,          info: 'UK imperial gallon = 4.546 L. UK gallon is larger than US gallon.' },
  { id: 'kml',    name: 'Kilometers per Liter',  symbol: 'km/L',    factor: 0,          info: 'Used in Asia. Higher = more efficient. 20 km/L = 4.7 mpg approx.' },
];

// ─── POWER (base: Watt) ──────────────────────────────────────
const powerUnits: Unit[] = [
  { id: 'w',    name: 'Watt',             symbol: 'W',    factor: 1,            info: 'SI unit of power = 1 J/s. Named after James Watt.' },
  { id: 'kw',   name: 'Kilowatt',         symbol: 'kW',   factor: 1000,         info: '1,000 W. Used for electric motors and power consumption.' },
  { id: 'mw',   name: 'Megawatt',         symbol: 'MW',   factor: 1_000_000,    info: '1,000 kW. Used for power plant output.' },
  { id: 'gw',   name: 'Gigawatt',         symbol: 'GW',   factor: 1_000_000_000,info: '1,000 MW. Used for national grid capacity.' },
  { id: 'hp',   name: 'Horsepower (mech)',symbol: 'hp',   factor: 745.69987,    info: 'Mechanical horsepower. Used for engine ratings in the US.' },
  { id: 'hpuk', name: 'Horsepower (UK)',   symbol: 'hp(M)',factor: 745.69987,    info: 'Metric horsepower ≈ 735.5 W. Used in EU vehicle specs.' },
  { id: 'btuh', name: 'BTU per Hour',      symbol: 'BTU/h',factor: 0.29307107,  info: 'Used for air conditioner and heater ratings (e.g., 12,000 BTU/h = 1 ton of AC).' },
  { id: 'calh', name: 'Calorie per Second',symbol: 'cal/s',factor: 4.184,        info: 'Used in calorimetry and heat transfer calculations.' },
];

// ─── FORCE (base: Newton) ────────────────────────────────────
const forceUnits: Unit[] = [
  { id: 'n',    name: 'Newton',         symbol: 'N',   factor: 1,           info: 'SI unit of force = 1 kg·m/s². Named after Isaac Newton.' },
  { id: 'kn_f', name: 'Kilonewton',     symbol: 'kN',  factor: 1000,        info: '1,000 N. Used in structural engineering and load calculations.' },
  { id: 'mn_f', name: 'Meganewton',     symbol: 'MN',  factor: 1_000_000,   info: '1,000,000 N. Used in large-scale civil engineering.' },
  { id: 'lbf',  name: 'Pound-force',    symbol: 'lbf', factor: 4.44822,     info: 'Force exerted by gravity on 1 lb mass at sea level. 1 lbf = 4.44822 N.' },
  { id: 'kgf',  name: 'Kilogram-force', symbol: 'kgf', factor: 9.80665,     info: 'Force exerted by gravity on 1 kg mass at sea level. 1 kgf = 9.80665 N.' },
  { id: 'dyn',  name: 'Dyne',           symbol: 'dyn', factor: 0.00001,     info: 'CGS unit of force. 1 dyne = 10⁻⁵ N. Used in physics and chemistry.' },
  { id: 'ozf',  name: 'Ounce-force',    symbol: 'ozf', factor: 0.278014,    info: '1/16 of a pound-force = 0.278014 N. Used in small mechanical applications.' },
];

// ─── VOLTAGE (base: Volt) ─────────────────────────────────────
const voltageUnits: Unit[] = [
  { id: 'uv',     name: 'Microvolt',  symbol: 'µV', factor: 0.000001,    info: 'One millionth of a volt. Used in EEG and very sensitive measurements.' },
  { id: 'mv_e',   name: 'Millivolt',  symbol: 'mV', factor: 0.001,       info: 'One thousandth of a volt. Used in battery and sensor measurements.' },
  { id: 'v',      name: 'Volt',       symbol: 'V',  factor: 1,           info: 'SI unit of electric potential difference. Named after Alessandro Volta.' },
  { id: 'kv',     name: 'Kilovolt',   symbol: 'kV', factor: 1000,        info: '1,000 V. Used in high-voltage power transmission lines.' },
  { id: 'megv',   name: 'Megavolt',   symbol: 'MV', factor: 1_000_000,   info: '1,000,000 V. Found in lightning discharges and particle accelerators.' },
];

// ─── COOKING (base: milliliter) ───────────────────────────────
const cookingUnits: Unit[] = [
  { id: 'c_tsp',  name: 'Teaspoon (US)',   symbol: 'tsp',   factor: 4.92892,  info: '1/3 tablespoon = 4.929 mL. Standard US cooking measure for spices.' },
  { id: 'c_dsp',  name: 'Dessertspoon',    symbol: 'dsp',   factor: 9.85784,  info: '2 teaspoons = 9.858 mL. Common in UK and Australian recipes.' },
  { id: 'c_tbsp', name: 'Tablespoon (US)', symbol: 'tbsp',  factor: 14.7868,  info: '3 teaspoons = 14.787 mL. Used widely in US and international recipes.' },
  { id: 'c_floz', name: 'Fluid Ounce (US)',symbol: 'fl oz', factor: 29.5735,  info: '2 tablespoons = 29.574 mL. Common for liquid ingredients.' },
  { id: 'c_cup',  name: 'Cup (US)',         symbol: 'cup',   factor: 236.588,  info: '8 fl oz = 236.6 mL. Most widely used US baking measure.' },
  { id: 'c_pt',   name: 'Pint (US)',        symbol: 'pt',    factor: 473.176,  info: '2 cups = 473.2 mL. Used for larger liquid quantities.' },
  { id: 'c_qt',   name: 'Quart (US)',       symbol: 'qt',    factor: 946.353,  info: '2 pints = 946.4 mL. Used for soups and broths.' },
  { id: 'c_gal',  name: 'Gallon (US)',      symbol: 'gal',   factor: 3785.41,  info: '4 quarts = 3.785 L. Used for large-batch cooking.' },
  { id: 'c_ml',   name: 'Milliliter',       symbol: 'mL',    factor: 1,        info: '1 cm³ of liquid. Standard metric measure in international recipes.' },
  { id: 'c_l',    name: 'Liter',            symbol: 'L',     factor: 1000,     info: '1,000 mL. Used for large liquid quantities in cooking.' },
];

// ─── NUMBER BASE ──────────────────────────────────────────────
// factor stores the radix; conversion handled via convertNumBase()
const numbaseUnits: Unit[] = [
  { id: 'nb_dec', name: 'Decimal',     symbol: 'Base 10', factor: 10, info: 'The standard base-10 numeral system using digits 0–9.' },
  { id: 'nb_bin', name: 'Binary',      symbol: 'Base 2',  factor: 2,  info: 'Base-2 system using digits 0 and 1. Foundation of all digital computing.' },
  { id: 'nb_oct', name: 'Octal',       symbol: 'Base 8',  factor: 8,  info: 'Base-8 system using digits 0–7. Used in Unix file permissions (e.g., chmod 755).' },
  { id: 'nb_hex', name: 'Hexadecimal', symbol: 'Base 16', factor: 16, info: 'Base-16 system using 0–9 and A–F. Used in programming, HTML colors, and memory addresses.' },
];

export function convertNumBase(value: string, fromBase: number, toBase: number): string {
  const trimmed = value.trim().replace(/^0x/i, '');
  const decimal = parseInt(trimmed, fromBase);
  if (isNaN(decimal) || decimal < 0) return '—';
  return decimal.toString(toBase).toUpperCase();
}

// ─── ALL CATEGORIES ──────────────────────────────────────────
export const categories: Category[] = [
  {
    id: 'length', name: 'Length', icon: '📏',
    description: 'Convert between meters, feet, inches, kilometers, miles, and more.',
    units: lengthUnits, defaultFrom: 'm', defaultTo: 'ft',
    commonPairs: [['ft','m'],['in','cm'],['km','mi'],['m','yd'],['cm','in'],['mi','km'],['mm','in'],['in','mm'],['m','ft'],['ft','in'],['in','ft'],['yd','ft'],['m','cm']],
    faqs: [
      { q: 'How many feet are in a meter?', a: 'One meter equals approximately 3.28084 feet. To convert meters to feet, multiply by 3.28084.' },
      { q: 'How many centimeters are in an inch?', a: 'One inch equals exactly 2.54 centimeters. This is an exact, defined conversion.' },
      { q: 'How many meters are in a mile?', a: 'One mile equals 1,609.344 meters (or 1.609344 kilometers).' },
      { q: 'How do I convert kilometers to miles?', a: 'Multiply the number of kilometers by 0.621371 to get miles. For example, 10 km × 0.621371 = 6.21371 miles.' },
    ],
  },
  {
    id: 'weight', name: 'Weight', icon: '⚖️',
    description: 'Convert kilograms, pounds, ounces, grams, stones, and more.',
    units: weightUnits, defaultFrom: 'kg', defaultTo: 'lb',
    commonPairs: [['kg','lb'],['lb','kg'],['oz','g'],['g','oz'],['kg','g'],['st','kg'],['g','kg'],['lb','oz'],['mg','g'],['mt','kg']],
    faqs: [
      { q: 'How many pounds are in a kilogram?', a: 'One kilogram equals approximately 2.20462 pounds.' },
      { q: 'How many grams are in an ounce?', a: 'One ounce (avoirdupois) equals 28.3495 grams.' },
      { q: 'How many kilograms are in a stone?', a: 'One stone equals 6.35029 kilograms (14 pounds).' },
    ],
  },
  {
    id: 'temperature', name: 'Temperature', icon: '🌡️',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin scales.',
    units: tempUnits, defaultFrom: 'c', defaultTo: 'f',
    commonPairs: [['c','f'],['f','c'],['c','k'],['k','c'],['f','k'],['k','f']],
    faqs: [
      { q: 'How do I convert Celsius to Fahrenheit?', a: 'Use the formula: °F = (°C × 9/5) + 32. For example, 100°C = 212°F.' },
      { q: 'What is 0°C in Fahrenheit?', a: '0°C equals 32°F — the freezing point of water.' },
      { q: 'What is absolute zero in Celsius?', a: 'Absolute zero (0 Kelvin) equals −273.15°C.' },
    ],
  },
  {
    id: 'area', name: 'Area', icon: '⬛',
    description: 'Convert square meters, acres, hectares, square feet, and more.',
    units: areaUnits, defaultFrom: 'm2', defaultTo: 'ft2',
    commonPairs: [['m2','ft2'],['ft2','m2'],['ac','ha'],['ha','ac'],['km2','m2'],['m2','yd2'],['ft2','yd2'],['in2','cm2'],['m2','km2'],['ac','ft2']],
    faqs: [
      { q: 'How many square feet are in a square meter?', a: 'One square meter equals approximately 10.7639 square feet.' },
      { q: 'How many acres are in a hectare?', a: 'One hectare equals approximately 2.47105 acres.' },
      { q: 'How do I convert square kilometers to square miles?', a: 'Multiply square kilometers by 0.386102 to get square miles.' },
    ],
  },
  {
    id: 'volume', name: 'Volume', icon: '🧊',
    description: 'Convert liters, gallons, milliliters, fluid ounces, and more.',
    units: volumeUnits, defaultFrom: 'l', defaultTo: 'gal',
    commonPairs: [['l','gal'],['gal','l'],['ml','floz'],['floz','ml'],['l','floz'],['cup','ml'],['l','ml'],['ml','l'],['gal','qt'],['cup','floz'],['ft3','gal']],
    faqs: [
      { q: 'How many liters are in a gallon?', a: 'One US gallon equals approximately 3.78541 liters.' },
      { q: 'How many milliliters are in a fluid ounce?', a: 'One US fluid ounce equals approximately 29.5735 milliliters.' },
      { q: 'How many cups are in a liter?', a: 'One liter equals approximately 4.22675 US cups.' },
    ],
  },
  {
    id: 'speed', name: 'Speed', icon: '🚀',
    description: 'Convert mph, km/h, m/s, knots, and more speed units.',
    units: speedUnits, defaultFrom: 'kmh', defaultTo: 'mph',
    commonPairs: [['kmh','mph'],['mph','kmh'],['ms','kmh'],['kmh','ms'],['kn','kmh'],['mph','ms'],['ms','mph'],['kn','mph'],['mph','kn']],
    faqs: [
      { q: 'How do I convert km/h to mph?', a: 'Multiply km/h by 0.621371 to get mph. For example, 100 km/h = 62.1371 mph.' },
      { q: 'How many m/s is 100 km/h?', a: '100 km/h equals approximately 27.7778 meters per second.' },
      { q: 'What is a knot in km/h?', a: 'One knot equals approximately 1.852 km/h.' },
    ],
  },
  {
    id: 'digital', name: 'Digital', icon: '💾',
    description: 'Convert bytes, kilobytes, megabytes, gigabytes, and more.',
    units: digitalUnits, defaultFrom: 'GB', defaultTo: 'MB',
    commonPairs: [['GB','MB'],['MB','GB'],['TB','GB'],['GB','TB'],['MB','KB'],['KB','B'],['GB','KB'],['MB','B'],['PB','TB'],['bit','B']],
    faqs: [
      { q: 'How many megabytes are in a gigabyte?', a: 'One gigabyte equals 1,024 megabytes (using binary prefixes).' },
      { q: 'How many gigabytes are in a terabyte?', a: 'One terabyte equals 1,024 gigabytes.' },
      { q: 'How many bytes are in a kilobyte?', a: 'One kilobyte equals 1,024 bytes.' },
    ],
  },
  {
    id: 'time', name: 'Time', icon: '⏱️',
    description: 'Convert seconds, minutes, hours, days, weeks, and years.',
    units: timeUnits, defaultFrom: 'hr', defaultTo: 'min',
    commonPairs: [['hr','min'],['min','s'],['day','hr'],['wk','day'],['yr','day'],['mo','day'],['min','hr'],['s','min'],['day','wk'],['hr','day']],
    faqs: [
      { q: 'How many seconds are in an hour?', a: 'There are 3,600 seconds in one hour (60 minutes × 60 seconds).' },
      { q: 'How many days are in a year?', a: 'A Julian year has 365.25 days = 31,557,600 seconds.' },
      { q: 'How many minutes are in a day?', a: 'There are 1,440 minutes in a day (24 hours × 60 minutes).' },
    ],
  },
  {
    id: 'currency', name: 'Currency', icon: '💱',
    description: 'Convert between world currencies with live exchange rates.',
    units: currencyUnits, defaultFrom: 'USD', defaultTo: 'EUR',
    commonPairs: [['USD','EUR'],['EUR','USD'],['USD','GBP'],['GBP','USD'],['USD','INR'],['USD','JPY']],
    faqs: [
      { q: 'How often are exchange rates updated?', a: 'Rates are fetched live and cached in your browser session for up to 1 hour.' },
      { q: 'Are the currency rates accurate?', a: 'Rates are mid-market rates from open.er-api.com. They differ slightly from bank/broker rates.' },
      { q: 'Which currencies are supported?', a: 'We support 10 major currencies: USD, EUR, GBP, JPY, INR, CAD, AUD, CHF, CNY, and AED.' },
    ],
  },
  {
    id: 'angle', name: 'Angle', icon: '📐',
    description: 'Convert degrees, radians, gradians, arcminutes, arcseconds, and more.',
    units: angleUnits, defaultFrom: 'deg', defaultTo: 'rad',
    commonPairs: [['deg','rad'],['rad','deg'],['deg','grad'],['grad','deg'],['deg','arcm'],['arcm','arcs']],
    faqs: [
      { q: 'How do I convert degrees to radians?', a: 'Multiply degrees by π/180 (≈ 0.017453). For example, 180° = π radians ≈ 3.14159 rad.' },
      { q: 'What is a gradian?', a: 'A gradian (grad) is 1/400 of a full circle, so 90° = 100 grad. Used in surveying.' },
      { q: 'How many arcseconds are in a degree?', a: 'One degree = 60 arcminutes = 3,600 arcseconds.' },
    ],
  },
  {
    id: 'pressure', name: 'Pressure', icon: '🌬️',
    description: 'Convert Pascal, bar, PSI, atmospheres, mmHg, and more.',
    units: pressureUnits, defaultFrom: 'psi', defaultTo: 'kpa',
    commonPairs: [['psi','kpa'],['kpa','psi'],['atm','kpa'],['bar','psi'],['mmhg','kpa'],['atm','psi'],['psi','bar'],['kpa','bar'],['inhg','kpa']],
    faqs: [
      { q: 'How do I convert PSI to kPa?', a: 'Multiply PSI by 6.89476 to get kPa. For example, 30 psi × 6.895 = 206.8 kPa.' },
      { q: 'What is 1 atmosphere in PSI?', a: '1 standard atmosphere = 14.696 PSI = 101.325 kPa.' },
      { q: 'What is normal blood pressure in kPa?', a: 'Normal blood pressure (120/80 mmHg) = 16.0/10.7 kPa. Doctors still use mmHg in most countries.' },
    ],
  },
  {
    id: 'energy', name: 'Energy', icon: '⚡',
    description: 'Convert Joules, calories, kWh, BTU, electronvolts, and more.',
    units: energyUnits, defaultFrom: 'kwh', defaultTo: 'mj',
    commonPairs: [['kwh','mj'],['mj','kwh'],['kcal','kj'],['kj','kcal'],['btu','kj'],['j','cal'],['mj','btu'],['kj','cal'],['ev','j']],
    faqs: [
      { q: 'How many joules are in a calorie?', a: 'One thermochemical calorie = 4.184 joules. One food kilocalorie (kcal) = 4,184 joules.' },
      { q: 'How many kWh are in a megajoule?', a: '1 MJ = 0.27778 kWh. Conversely, 1 kWh = 3.6 MJ.' },
      { q: 'What is a BTU?', a: 'British Thermal Unit. Energy to heat 1 pound of water by 1°F = 1,055 joules. Used in HVAC.' },
    ],
  },
  {
    id: 'power', name: 'Power', icon: '🔋',
    description: 'Convert Watts, kilowatts, horsepower, BTU/h, and more.',
    units: powerUnits, defaultFrom: 'kw', defaultTo: 'hp',
    commonPairs: [['kw','hp'],['hp','kw'],['w','kw'],['kw','w'],['mw','kw'],['btuh','kw']],
    faqs: [
      { q: 'How many watts are in a horsepower?', a: '1 mechanical horsepower = 745.7 watts.' },
      { q: 'How do I convert BTU/h to kW?', a: 'Divide BTU/h by 3,412.14 to get kW. For example, 12,000 BTU/h = 3.517 kW.' },
      { q: 'What is a gigawatt?', a: '1 gigawatt = 1,000 megawatts = 1,000,000 kilowatts. A typical nuclear power plant produces about 1 GW.' },
    ],
  },
  {
    id: 'force', name: 'Force', icon: '💪',
    description: 'Convert Newtons, pound-force, kilogram-force, dynes, and more.',
    units: forceUnits, defaultFrom: 'n', defaultTo: 'lbf',
    commonPairs: [['n','lbf'],['lbf','n'],['n','kgf'],['kgf','n'],['kn_f','lbf'],['lbf','kgf']],
    faqs: [
      { q: 'How many Newtons are in a pound-force?', a: 'One pound-force equals exactly 4.44822 Newtons.' },
      { q: 'What is the difference between pound-force and kilogram-force?', a: 'A pound-force (lbf) is the force exerted by gravity on 1 lb of mass, equal to 4.44822 N. A kilogram-force (kgf) is the force on 1 kg of mass, equal to 9.80665 N.' },
      { q: 'What is a dyne?', a: 'A dyne is the CGS unit of force. 1 dyne = 10⁻⁵ Newtons. It takes about 980,665 dynes to equal 1 kgf.' },
    ],
  },
  {
    id: 'voltage', name: 'Voltage', icon: '⚡',
    description: 'Convert volts, millivolts, kilovolts, microvolts, and more.',
    units: voltageUnits, defaultFrom: 'v', defaultTo: 'mv_e',
    commonPairs: [['v','mv_e'],['mv_e','v'],['kv','v'],['v','kv'],['mv_e','uv'],['kv','mv_e']],
    faqs: [
      { q: 'How many millivolts are in a volt?', a: 'One volt equals 1,000 millivolts (mV).' },
      { q: 'What is a kilovolt used for?', a: 'Kilovolts (kV) are used in high-voltage power transmission. Most household electricity is 110–240 V, while transmission lines operate at 100–800 kV.' },
      { q: 'What is a microvolt?', a: 'A microvolt (µV) is one millionth of a volt (0.000001 V). Used in EEG brain signal measurements and very sensitive sensors.' },
    ],
  },
  {
    id: 'cooking', name: 'Cooking', icon: '🍳',
    description: 'Convert teaspoons, tablespoons, cups, fluid ounces, liters, and more cooking measurements.',
    units: cookingUnits, defaultFrom: 'c_cup', defaultTo: 'c_ml',
    commonPairs: [['c_cup','c_ml'],['c_ml','c_cup'],['c_tbsp','c_tsp'],['c_tsp','c_ml'],['c_cup','c_tbsp'],['c_gal','c_l'],['c_cup','c_floz'],['c_floz','c_ml'],['c_qt','c_cup']],
    faqs: [
      { q: 'How many teaspoons are in a tablespoon?', a: 'One tablespoon equals exactly 3 teaspoons.' },
      { q: 'How many milliliters are in a cup?', a: 'One US cup equals 236.588 milliliters (approximately 237 mL).' },
      { q: 'How many tablespoons are in a cup?', a: 'One US cup equals 16 tablespoons.' },
    ],
  },
  {
    id: 'numbase', name: 'Number Base', icon: '🔢',
    description: 'Convert between decimal, binary, octal, and hexadecimal number systems.',
    units: numbaseUnits, defaultFrom: 'nb_dec', defaultTo: 'nb_bin',
    commonPairs: [['nb_dec','nb_bin'],['nb_bin','nb_dec'],['nb_dec','nb_hex'],['nb_hex','nb_dec'],['nb_dec','nb_oct'],['nb_hex','nb_bin']],
    faqs: [
      { q: 'How do I convert decimal to binary?', a: 'Repeatedly divide the decimal number by 2 and record the remainders. Read remainders bottom to top. Example: 10 in decimal = 1010 in binary.' },
      { q: 'What is hexadecimal used for?', a: 'Hexadecimal (base 16) is used in programming, HTML color codes (e.g., #FF5733), memory addresses, and network MAC addresses.' },
      { q: 'How do I convert binary to hexadecimal?', a: 'Group binary digits into sets of 4 from right to left, then convert each group to its hex digit. Example: 11111111 → 1111 1111 → F F → FF.' },
    ],
  },
];

export const categoryMap = new Map(categories.map(c => [c.id, c]));

// ─── FUEL CONVERSION HELPERS ─────────────────────────────────
// L/100km ↔ mpg is inverse: mpg = 235.214 / (L/100km)
export function convertFuel(value: number, fromId: string, toId: string): number {
  const toL100km: Record<string, (v: number) => number> = {
    l100km: v => v,
    mpg:    v => 235.214 / v,
    mpguk:  v => 282.481 / v,
    kml:    v => 100 / v,
  };
  const fromL100km: Record<string, (v: number) => number> = {
    l100km: v => v,
    mpg:    v => 235.214 / v,
    mpguk:  v => 282.481 / v,
    kml:    v => 100 / v,
  };
  const inL100km = toL100km[fromId]?.(value);
  if (inL100km === undefined) return NaN;
  return fromL100km[toId]?.(inL100km) ?? NaN;
}

// ─── CONVERSION FUNCTIONS ────────────────────────────────────
export function convert(value: number, from: Unit, to: Unit, categoryId: string): number {
  if (from.id === to.id) return value;
  if (categoryId === 'temperature') return convertTemp(value, from.id, to.id);
  if (categoryId === 'fuel') return convertFuel(value, from.id, to.id);
  const baseValue = value * from.factor;
  return baseValue / to.factor;
}

function convertTemp(value: number, fromId: string, toId: string): number {
  let celsius: number;
  switch (fromId) {
    case 'c': celsius = value; break;
    case 'f': celsius = (value - 32) * (5 / 9); break;
    case 'k': celsius = value - 273.15; break;
    default:  celsius = value;
  }
  switch (toId) {
    case 'c': return celsius;
    case 'f': return (celsius * 9 / 5) + 32;
    case 'k': return celsius + 273.15;
    default:  return celsius;
  }
}

/** Build a human-readable formula string for the conversion. */
export function getFormula(value: number, from: Unit, to: Unit, categoryId: string, result: number): string {
  if (categoryId === 'temperature') {
    switch (`${from.id}-${to.id}`) {
      case 'c-f': return `(${value} × 9/5) + 32 = ${formatResult(result)} ${to.symbol}`;
      case 'f-c': return `(${value} − 32) × 5/9 = ${formatResult(result)} ${to.symbol}`;
      case 'c-k': return `${value} + 273.15 = ${formatResult(result)} ${to.symbol}`;
      case 'k-c': return `${value} − 273.15 = ${formatResult(result)} ${to.symbol}`;
      case 'f-k': return `(${value} − 32) × 5/9 + 273.15 = ${formatResult(result)} ${to.symbol}`;
      case 'k-f': return `(${value} − 273.15) × 9/5 + 32 = ${formatResult(result)} ${to.symbol}`;
      default:    return '';
    }
  }
  if (categoryId === 'fuel') {
    return `${value} ${from.symbol} → ${formatResult(result)} ${to.symbol}`;
  }
  if (from.factor >= to.factor) {
    const factor = formatResult(from.factor / to.factor);
    return `${value} × ${factor} = ${formatResult(result)} ${to.symbol}`;
  } else {
    const factor = formatResult(to.factor / from.factor);
    return `${value} ÷ ${factor} = ${formatResult(result)} ${to.symbol}`;
  }
}

/** Smart number formatter — up to 8 significant figures, strips trailing zeros. */
export function formatResult(value: number): string {
  if (!isFinite(value)) return '—';
  if (value === 0) return '0';
  const abs = Math.abs(value);
  if (abs >= 1e12 || (abs < 1e-8 && abs > 0)) return value.toExponential(4);
  let decimals: number;
  if (abs >= 1000)     decimals = 2;
  else if (abs >= 1)   decimals = 4;
  else if (abs >= 0.01) decimals = 6;
  else                  decimals = 8;
  const str = value.toFixed(decimals);
  return str.includes('.') ? str.replace(/\.?0+$/, '') : str;
}
