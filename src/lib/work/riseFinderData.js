// Data for the Rise "Looker Dashboard Finder" demo (module 80798), verbatim.
export const MEASURES = [
  { name: 'Revenue & Profit', total: 11, fields: [
    { name: 'Demand’s Revenue', kind: 'M', count: 1 },
    { name: 'Gross Profit', kind: 'M', count: 15 },
    { name: 'Gross Profit Margin', kind: 'M', count: 3 },
    { name: 'Gross Revenue', kind: 'M', count: 33 },
    { name: 'Margin', kind: 'M', count: 20 },
    { name: 'Revenue', kind: 'M', count: 28 },
  ] },
  { name: 'Rates & Ratios', total: 20, fields: [] },
  { name: 'Volume & Activity', total: 14, fields: [] },
  { name: 'Cost & Infrastructure', total: 12, fields: [] },
  { name: 'Blocks & Discrepancy', total: 8, fields: [] },
  { name: 'Budget & Targets', total: 4, fields: [] },
  { name: 'Other Metrics', total: 3, fields: [] },
];

export const DIMENSIONS = [
  { name: 'Supply', total: 6, fields: [
    { name: 'Account Manager', kind: 'D', count: 3 },
    { name: 'Domain/Bundle ID', kind: 'D', count: 27 },
    { name: 'Exchange Publisher Name', kind: 'D', count: 1 },
    { name: 'Publisher', kind: 'D', count: 40 },
    { name: 'Seat ID', kind: 'D', count: 4 },
    { name: 'Seat Name', kind: 'D', count: 4 },
  ] },
  { name: 'Demand', total: 7, fields: [] },
  { name: 'Geo & Environment', total: 5, fields: [] },
  { name: 'Time & Date', total: 9, fields: [] },
  { name: 'Breakdowns', total: 6, fields: [] },
  { name: 'Blocks & Targeting', total: 4, fields: [] },
  { name: 'Other', total: 6, fields: [] },
];

export const TIME_FRAMES = ['Last 8 Days', 'Last 14 Days', 'Last 31 Days', 'Last 2 Months', 'Last 3 Months', 'Last 5 Months', 'Last 6 Months', 'Since 01/2026', 'Last 365 Days', 'Since 07/2024', 'Since 01/2024'];

export const MEASURE_TOTAL = MEASURES.reduce((n, c) => n + c.total, 0);
export const DIMENSION_TOTAL = DIMENSIONS.reduce((n, c) => n + c.total, 0);

const NAMED = [
  { name: 'Last 8 Days Coffee Dashboard', platform: 'Both', timeFrame: 'Last 8 Days', measureCount: 22, dimensionCount: 24 },
  { name: 'Last 2 Months Dashboard', platform: 'Rise', timeFrame: 'Last 2 Months', measureCount: 22, dimensionCount: 23 },
  { name: 'Supply Overview Dashboard', platform: 'SaaS', timeFrame: 'Last 31 Days', measureCount: 18, dimensionCount: 12 },
];

export const DASHBOARD_COUNT = 45;

/** The 45 generated dashboards, built exactly like the original (deterministic). */
export const DASHBOARDS = (() => {
  const out = [];
  for (let t = 0; t < DASHBOARD_COUNT; t++) {
    const s = NAMED[t];
    out.push({
      name: s?.name ?? `${TIME_FRAMES[t % TIME_FRAMES.length]} Dashboard ${String(t + 1).padStart(2, '0')}`,
      platform: s?.platform ?? ['Rise', 'SaaS', 'Both'][t % 3],
      timeFrame: s?.timeFrame ?? TIME_FRAMES[t % TIME_FRAMES.length],
      measures: [],
      dimensions: [],
      measureCount: s?.measureCount ?? 8 + (7 * t) % 20,
      dimensionCount: s?.dimensionCount ?? 6 + (5 * t) % 19,
    });
  }
  [...MEASURES.flatMap((c) => c.fields), ...DIMENSIONS.flatMap((c) => c.fields)].forEach((f, i) => {
    const start = (11 * i) % DASHBOARD_COUNT;
    for (let k = 0; k < f.count; k++) {
      const d = out[(start + k) % DASHBOARD_COUNT];
      if (f.kind === 'M') d.measures.push(f.name);
      else d.dimensions.push(f.name);
    }
  });
  const first = out[0];
  for (const m of ['Gross Profit', 'Demand’s Revenue']) if (!first.measures.includes(m)) first.measures.push(m);
  for (const d of ['Account Manager', 'Domain/Bundle ID']) if (!first.dimensions.includes(d)) first.dimensions.push(d);
  return out;
})();

export const INITIAL_SELECTION = {
  measures: ['Gross Profit', 'Demand’s Revenue'],
  dimensions: ['Account Manager', 'Domain/Bundle ID'],
  timeFrame: 'Last 8 Days',
};

export const PLATFORM_TONE = {
  Rise: 'bg-[#EEF2FF] text-[#3730A3]',
  SaaS: 'bg-[#F1F5F9] text-[#334155]',
  Both: 'bg-[#ECFDF5] text-[#065F46]',
};
