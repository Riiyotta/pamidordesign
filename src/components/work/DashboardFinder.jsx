// Port of module 80798 (work chunk 3uz44me8nntup): the Rise "Looker Dashboard
// Finder" live demo. Source toggle (Rise / SaaS), active-filter chips with
// remove + "Clear all", two searchable/collapsible field trees with checkboxes
// (Measures / Dimensions), optional time-frame pills, and a ranked result list
// (perfect vs partial, 6 shown per zone) that updates on every change.
import { useMemo, useState } from 'react';
import {
  MEASURES,
  DIMENSIONS,
  TIME_FRAMES,
  MEASURE_TOTAL,
  DIMENSION_TOTAL,
  DASHBOARDS,
  DASHBOARD_COUNT,
  INITIAL_SELECTION,
  PLATFORM_TONE,
} from '../../lib/work/riseFinderData';

function Chip({ kind, name, onRemove }) {
  return (
    <span className="inline-flex items-center gap-[6px] rounded-full bg-[#EEF2FF] px-[10px] py-[4px] text-[12px] font-medium text-[#3730A3]">
      <span className="text-[10px] opacity-60">{kind}</span>
      {name}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${name}`}
          className="opacity-50 transition-opacity hover:opacity-100 [@media(pointer:coarse)]:m-[-13px] [@media(pointer:coarse)]:min-w-[44px] [@media(pointer:coarse)]:p-[13px]"
        >
          ×
        </button>
      )}
    </span>
  );
}

function FieldTree({ title, total, categories, selected, toggle, placeholder, accent }) {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState([categories[0].name]);
  const q = query.trim().toLowerCase();
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-[8px] px-[11px] pt-[11px]">
        <span className={`h-[16px] w-[16px] rounded-[4px] ${accent}`} />
        <span className="text-[14px] font-semibold text-ink">{title}</span>
        <span className="text-[14px] text-muted">
          {'· '}
          {total}
        </span>
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="mt-[10px] w-full rounded-[8px] border border-[#E2E8F0] bg-white px-[12px] py-[9px] text-[14px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-[#94A3B8] [@media(pointer:coarse)]:min-h-[44px]"
      />
      <div data-lenis-prevent="true" className="mt-[10px] max-h-[190px] overflow-y-auto pr-[4px]">
        {categories.map((cat) => {
          const visible = cat.fields.filter((f) => !q || f.name.toLowerCase().includes(q));
          const picked = cat.fields.filter((f) => selected.includes(f.name)).length;
          const isOpen = expanded.includes(cat.name) || (q !== '' && visible.length > 0);
          const enabled = cat.fields.length > 0;
          return (
            <div key={cat.name}>
              <button
                type="button"
                disabled={!enabled}
                onClick={() =>
                  setExpanded((s) => (s.includes(cat.name) ? s.filter((n) => n !== cat.name) : [...s, cat.name]))
                }
                className={`flex w-full items-center gap-[8px] rounded-[6px] px-[8px] py-[7px] text-left text-[14px] transition-colors [@media(pointer:coarse)]:min-h-[44px] ${enabled ? 'text-ink hover:bg-[#F8FAFC]' : 'cursor-default text-muted'}`}
                title={enabled ? undefined : 'Not part of this demo'}
              >
                <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-90' : ''}`}>▶</span>
                <span className="flex-1 font-medium">{cat.name}</span>
                {picked > 0 && (
                  <span className="rounded-[5px] bg-[#2563EB] px-[6px] py-[1px] text-[11px] font-semibold text-white">
                    {picked}
                  </span>
                )}
                <span className="text-[13px] text-muted">{cat.total}</span>
              </button>
              {isOpen &&
                visible.map((f) => (
                  <label
                    key={f.name}
                    className="ml-[20px] flex cursor-pointer items-center gap-[10px] rounded-[6px] px-[8px] py-[6px] text-[14px] transition-colors hover:bg-[#F8FAFC] [@media(pointer:coarse)]:min-h-[44px]"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(f.name)}
                      onChange={() => toggle(f.name)}
                      className="h-[14px] w-[14px] accent-[#2563EB]"
                    />
                    <span className="flex-1 text-ink">{f.name}</span>
                    <span className="text-[13px] text-muted">{f.count}</span>
                  </label>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ZONES = [
  { key: 'perfect', label: 'Perfect matches', note: '· has everything you selected', dot: 'bg-[#16A34A]', wrap: 'bg-[#F0FDF4]' },
  { key: 'partial', label: 'Partial matches', note: '· missing one or more of your selections', dot: 'bg-[#F97316]', wrap: 'bg-[#FFF7ED]' },
];

export default function DashboardFinder() {
  const [source, setSource] = useState('Rise');
  const [sel, setSel] = useState({ ...INITIAL_SELECTION });

  const toggleIn = (key) => (name) =>
    setSel((s) => ({ ...s, [key]: s[key].includes(name) ? s[key].filter((n) => n !== name) : [...s[key], name] }));

  const active = useMemo(
    () => [
      ...sel.measures.map((name) => ({ kind: 'M', name, key: 'measures' })),
      ...sel.dimensions.map((name) => ({ kind: 'D', name, key: 'dimensions' })),
      ...(sel.timeFrame ? [{ kind: 'TF', name: sel.timeFrame, key: 'timeFrame' }] : []),
    ],
    [sel],
  );

  const results = useMemo(() => {
    const pool = DASHBOARDS.filter((d) => d.platform === source || d.platform === 'Both');
    const n = active.length;
    return pool
      .map((d) => {
        const matched = [
          ...sel.measures.filter((m) => d.measures.includes(m)).map((name) => ({ kind: 'M', name })),
          ...sel.dimensions.filter((m) => d.dimensions.includes(m)).map((name) => ({ kind: 'D', name })),
          ...(sel.timeFrame && d.timeFrame === sel.timeFrame ? [{ kind: 'TF', name: sel.timeFrame }] : []),
        ];
        const missing = active.filter((a) => !matched.some((m) => m.name === a.name));
        return { d, matched, missing, score: matched.length, perfect: n > 0 && missing.length === 0 };
      })
      .filter((r) => n === 0 || r.score > 0)
      .sort((a, b) => b.score - a.score || a.d.name.localeCompare(b.d.name));
  }, [source, sel, active]);

  const perfect = results.filter((r) => r.perfect);
  const partial = results.filter((r) => !r.perfect);
  const N = active.length;
  const zones = { perfect, partial };

  return (
    <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
      <div className="mt-10 rounded-[14px] border border-[#E2E8F0] bg-[#FBFCFD] p-[18px] lg:mt-[64px] lg:p-[18px]">
        <div className="flex flex-wrap items-start justify-between gap-[16px]">
          <div>
            <div className="text-[22px] font-semibold text-ink">Looker Dashboard Finder</div>
            <p className="mt-[4px] text-[13px] text-muted">
              Pick fields on the left, matching dashboards update live on the right.
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <span className="text-[13px] text-muted">Source</span>
            <div className="flex rounded-[8px] border border-[#E2E8F0] bg-white p-[2px]">
              {['Rise', 'SaaS'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSource(s)}
                  aria-pressed={source === s}
                  className={`rounded-[6px] px-[14px] py-[6px] text-[14px] font-medium transition-colors [@media(pointer:coarse)]:min-h-[44px] ${source === s ? 'bg-[#2563EB] text-white' : 'text-ink hover:bg-[#F1F5F9]'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <span className="text-[13px] text-muted">
              {'Searching '}
              {DASHBOARD_COUNT}
              {' dashboards'}
            </span>
          </div>
        </div>
        <div className="mt-[14px] grid grid-cols-1 gap-[14px] lg:grid-cols-[583fr_667fr]">
          <div className="min-w-0">
            <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-[14px]">
              <div className="flex items-center gap-[10px]">
                <span className="text-[14px] font-medium text-ink">Active filters</span>
                <span className="rounded-[6px] bg-[#EEF2FF] px-[7px] py-[1px] text-[12px] font-semibold text-[#3730A3]">{N}</span>
                <span className="flex-1" />
                <button
                  type="button"
                  onClick={() => setSel({ measures: [], dimensions: [], timeFrame: null })}
                  className="text-[14px] text-[#2563EB] underline underline-offset-2 [@media(pointer:coarse)]:min-h-[44px]"
                >
                  Clear all
                </button>
              </div>
              <div className="mt-[12px] flex flex-wrap gap-[8px]">
                {N === 0 && <span className="text-[13px] text-muted">Nothing selected — every dashboard qualifies.</span>}
                {active.map((a) => (
                  <Chip
                    key={a.name}
                    kind={a.kind}
                    name={a.name}
                    onRemove={() =>
                      setSel((s) =>
                        a.key === 'timeFrame' ? { ...s, timeFrame: null } : { ...s, [a.key]: s[a.key].filter((n) => n !== a.name) },
                      )
                    }
                  />
                ))}
              </div>
            </div>
            <div className="mt-[12px] flex flex-col gap-[12px] rounded-[12px] border border-[#E2E8F0] bg-white p-[14px] sm:flex-row">
              <FieldTree
                title="Measures"
                total={MEASURE_TOTAL}
                categories={MEASURES}
                selected={sel.measures}
                toggle={toggleIn('measures')}
                placeholder="Filter measures…"
                accent="bg-[#DBEAFE]"
              />
              <div className="hidden w-px shrink-0 bg-[#E2E8F0] sm:block" />
              <FieldTree
                title="Dimensions"
                total={DIMENSION_TOTAL}
                categories={DIMENSIONS}
                selected={sel.dimensions}
                toggle={toggleIn('dimensions')}
                placeholder="Filter dimensions…"
                accent="bg-[#DCFCE7]"
              />
            </div>
            <div className="mt-[12px] rounded-[12px] border border-[#E2E8F0] bg-white p-[14px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[15px] font-semibold text-ink">Time frame</span>
                <span className="text-[13px] text-muted">optional</span>
              </div>
              <div className="mt-[12px] flex flex-wrap gap-[8px]">
                {TIME_FRAMES.map((tf) => (
                  <button
                    key={tf}
                    type="button"
                    onClick={() => setSel((s) => ({ ...s, timeFrame: s.timeFrame === tf ? null : tf }))}
                    aria-pressed={sel.timeFrame === tf}
                    className={`rounded-[7px] border px-[11px] py-[7px] text-[13px] transition-colors [@media(pointer:coarse)]:min-h-[44px] ${sel.timeFrame === tf ? 'border-[#2563EB] bg-[#2563EB] text-white' : 'border-[#E2E8F0] text-ink hover:border-[#94A3B8]'}`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[6px]">
              <span className="text-[18px] font-semibold text-ink">
                {results.length}
                {' matching dashboards'}
              </span>
              <span className="flex-1" />
              <span className="flex items-center gap-[6px] text-[13px] text-muted">
                <span className="h-[7px] w-[7px] rounded-full bg-[#16A34A]" />
                {perfect.length}
                {' perfect'}
              </span>
              <span className="flex items-center gap-[6px] text-[13px] text-muted">
                <span className="h-[7px] w-[7px] rounded-full bg-[#94A3B8]" />
                {partial.length}
                {' partial'}
              </span>
            </div>
            <div data-lenis-prevent="true" className="mt-[14px] max-h-[300px] overflow-y-auto pr-[4px]">
              {ZONES.map(({ key, label, note, dot, wrap }) => {
                const zone = zones[key];
                if (zone.length === 0) return null;
                return (
                  <div key={label} className={`mb-[14px] rounded-[12px] ${wrap} p-[14px]`}>
                    <div className="flex items-center gap-[10px]">
                      <span className={`h-[7px] w-[7px] rounded-full ${dot}`} />
                      <span className="text-[15px] font-semibold text-ink">{label}</span>
                      <span className="text-[13px] text-muted">{note}</span>
                    </div>
                    {zone.slice(0, 6).map(({ d, matched, missing, score, perfect: ok }) => (
                      <div
                        key={d.name}
                        className="relative mt-[12px] overflow-hidden rounded-[10px] border border-[#E2E8F0] bg-white p-[16px] pl-[20px]"
                      >
                        <span className={`absolute inset-y-0 left-0 w-[4px] ${ok ? 'bg-[#16A34A]' : 'bg-[#F97316]'}`} />
                        <div className="flex flex-wrap items-center gap-[10px]">
                          <span className={`text-[16px] font-semibold ${ok ? 'text-[#065F46]' : 'text-ink'}`}>{d.name}</span>
                          <span className={`rounded-[6px] px-[8px] py-[2px] text-[12px] font-medium ${PLATFORM_TONE[d.platform]}`}>
                            {d.platform}
                          </span>
                          <span className="flex-1" />
                          <span className="flex items-center gap-[6px] text-[13px] font-medium">
                            <span className={`h-[6px] w-[6px] rounded-full ${ok ? 'bg-[#16A34A]' : 'bg-[#F97316]'}`} />
                            {ok ? 'Perfect' : 'Partial'}
                          </span>
                          <span className="flex items-center gap-[8px]">
                            <span className="h-[5px] w-[58px] overflow-hidden rounded-full bg-[#E2E8F0]">
                              <span
                                className={`block h-full ${ok ? 'bg-[#16A34A]' : 'bg-[#F97316]'}`}
                                style={{ width: `${N ? (score / N) * 100 : 100}%` }}
                              />
                            </span>
                            <span className="text-[13px] tabular-nums text-muted">
                              {score}
                              {'/'}
                              {N}
                            </span>
                          </span>
                        </div>
                        <p className="mt-[10px] text-[13px] text-muted">
                          {'Time frame: '}
                          {d.timeFrame}
                          {' · '}
                          {d.measureCount}
                          {' measures · '}
                          {d.dimensionCount}
                          {' dimensions'}
                        </p>
                        {matched.length > 0 && (
                          <>
                            <p className="mt-[12px] text-[13px] text-muted">
                              {ok ? 'Your matched fields' : `Matched (${matched.length})`}
                            </p>
                            <div className="mt-[8px] flex flex-wrap gap-[8px]">
                              {matched.map((m) => (
                                <Chip key={m.name} kind={m.kind} name={m.name} />
                              ))}
                            </div>
                          </>
                        )}
                        {missing.length > 0 && (
                          <>
                            <p className="mt-[12px] text-[13px] font-medium text-[#C2410C]">
                              {'Missing from this dashboard ('}
                              {missing.length}
                              {')'}
                            </p>
                            <div className="mt-[8px] flex flex-wrap gap-[8px]">
                              {missing.map((m) => (
                                <span
                                  key={m.name}
                                  className="inline-flex items-center gap-[6px] rounded-full bg-[#FFEDD5] px-[10px] py-[4px] text-[12px] font-medium text-[#9A3412]"
                                >
                                  <span className="text-[10px] opacity-60">{m.kind}</span>
                                  {m.name}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                        <span
                          className={`mt-[14px] inline-flex rounded-[7px] px-[14px] py-[8px] text-[14px] font-medium text-white ${ok ? 'bg-[#15803D]' : 'bg-[#F97316]'}`}
                        >
                          Open dashboard →
                        </span>
                      </div>
                    ))}
                    {zone.length > 6 && (
                      <p className="mt-[12px] text-[13px] text-muted">
                        {'+ '}
                        {zone.length - 6}
                        {' more '}
                        {label.split(' ')[0].toLowerCase()}
                        {' matches'}
                      </p>
                    )}
                  </div>
                );
              })}
              {results.length === 0 && (
                <p className="rounded-[10px] border border-dashed border-[#E2E8F0] p-[24px] text-center text-[14px] text-muted">
                  {'No dashboard on '}
                  {source}
                  {' carries any of those fields. Remove one and the list comes back.'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
