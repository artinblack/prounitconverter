// ─────────────────────────────────────────────────────────────
// CHARTS — printable conversion-chart landing pages at /charts/*.
// Each entry reuses the units.ts conversion engine; the page renders
// a quick-reference table for a curated value ladder. Targets high-
// volume "X to Y chart" / "X to Y conversion table" search queries.
// ─────────────────────────────────────────────────────────────

export interface ChartDef {
  from: string;
  to: string;
  category: string;
  /** Value ladder for the left column; falls back to the default. */
  values?: number[];
}

// Value ladders
const D: number[]      = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 75, 100, 250, 500, 1000];
const TEMP_C: number[] = [0, 5, 10, 15, 20, 25, 30, 37, 40, 50, 60, 70, 80, 90, 100, 120, 150, 180, 200, 220, 250];
const TEMP_F: number[] = [0, 10, 20, 32, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 375, 400, 450, 500];
const DIGI: number[]   = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1000];
const COOK: number[]   = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 20, 24];
const FUELV: number[]  = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70];

export const DEFAULT_VALUES = D;

export const charts: ChartDef[] = [
  // Length
  { from: 'cm', to: 'in', category: 'length' },
  { from: 'in', to: 'cm', category: 'length' },
  { from: 'mm', to: 'in', category: 'length' },
  { from: 'm',  to: 'ft', category: 'length' },
  { from: 'ft', to: 'm',  category: 'length' },
  { from: 'km', to: 'mi', category: 'length' },
  { from: 'mi', to: 'km', category: 'length' },
  // Weight
  { from: 'kg', to: 'lb', category: 'weight' },
  { from: 'lb', to: 'kg', category: 'weight' },
  { from: 'g',  to: 'oz', category: 'weight' },
  { from: 'oz', to: 'g',  category: 'weight' },
  { from: 'st', to: 'lb', category: 'weight' },
  // Temperature
  { from: 'c', to: 'f', category: 'temperature', values: TEMP_C },
  { from: 'f', to: 'c', category: 'temperature', values: TEMP_F },
  // Volume
  { from: 'l',    to: 'gal',  category: 'volume' },
  { from: 'gal',  to: 'l',    category: 'volume' },
  { from: 'ml',   to: 'floz', category: 'volume', values: COOK },
  { from: 'cup',  to: 'ml',   category: 'volume', values: COOK },
  // Speed
  { from: 'kmh', to: 'mph', category: 'speed' },
  { from: 'mph', to: 'kmh', category: 'speed' },
  // Cooking
  { from: 'c_cup',  to: 'c_ml',  category: 'cooking', values: COOK },
  { from: 'c_tbsp', to: 'c_tsp', category: 'cooking', values: COOK },
  // Digital storage
  { from: 'GB', to: 'MB', category: 'digital', values: DIGI },
  { from: 'MB', to: 'KB', category: 'digital', values: DIGI },
  // Area
  { from: 'm2', to: 'ft2', category: 'area' },
  { from: 'ac', to: 'ha',  category: 'area' },
  // Pressure
  { from: 'psi', to: 'bar', category: 'pressure' },
  { from: 'psi', to: 'kpa', category: 'pressure' },
  // Fuel economy
  { from: 'mpg', to: 'l100km', category: 'fuel', values: FUELV },
];

export const chartSlug = (c: ChartDef) => `${c.from}-to-${c.to}`;
