// Port of module 6795 (work chunk 3uz44me8nntup): the Rise "Customer Dashboard"
// live demo. Sidebar sections (Supply / Demand / Admin / Style Guide) drive the
// breadcrumb; Overview / Settings / Lists tabs swap the body; the child-org
// table filters live from the "Search organizations…" field.
import { useMemo, useState } from 'react';

const SECTIONS = ['Supply', 'Demand', 'Admin', 'Style Guide'];
const TABS = ['Overview', 'Settings', 'Lists / Blocklists'];
const KPIS = [
  { label: 'TOTAL CHILD ORGS', value: '23', delta: '+3', foot: [{ label: 'Active', value: '20' }, { label: 'Inactive', value: '3' }] },
  { label: 'TOTAL REVENUE (7D)', value: '$127.5K', delta: '+18.2%', foot: [{ label: 'PREV 7D', value: '$107.8K' }, { label: 'DAILY AVG', value: '$18.2K' }, { label: 'PEAK', value: '$22.1K' }] },
  { label: 'TOTAL IMPRESSIONS (7D)', value: '45.2M', delta: '+12.5%', foot: [{ label: 'DAILY VOLUME', value: 'Mon–Sun' }] },
  { label: 'AVG FILL RATE', value: '82.4%', delta: '+2.1%', foot: [{ label: 'REQUESTS', value: '54.9M' }, { label: 'FILLED', value: '45.2M' }] },
];
const ORGS = [
  { name: 'XXXXXXX News Network', id: 'ORG-2001', status: 'Active', impressions: '8,542,120', requests: '10,234,560', fillRate: '83.5%', revenue: '$24,580', cpm: '$2.88' },
  { name: 'XXXXXXX', id: 'ORG-2002', status: 'Active', impressions: '6,123,450', requests: '7,456,890', fillRate: '82.1%', revenue: '$18,340', cpm: '$2.99' },
  { name: 'XXXXXXX', id: 'ORG-2003', status: 'Active', impressions: '—', requests: '—', fillRate: '—', revenue: '$17,120', cpm: '$2.91' },
  { name: 'XXXXXXX', id: 'ORG-2004', status: 'Pending', impressions: '—', requests: '—', fillRate: '—', revenue: '—', cpm: '—' },
  { name: 'XXXXXXX', id: 'ORG-2005', status: 'Active', impressions: '—', requests: '—', fillRate: '—', revenue: '—', cpm: '$2.95' },
];
const SETTINGS = [
  { label: 'Parent Account Name', value: 'XXXXXXX' },
  { label: 'Parent Account ID', value: 'PA-10001' },
  { label: 'Default Timezone', value: 'UTC' },
];
const STATUS_TONE = { Active: 'bg-[#ECFDF5] text-[#065F46]', Pending: 'bg-[#FFFBEB] text-[#92400E]' };
const COLUMNS = ['Name', 'ID', 'Status', 'Impressions (7D)', 'Requests (7D)', 'Fill Rate', 'Revenue (7D)', 'CPM'];

export default function CustomerDashboard() {
  const [tab, setTab] = useState('Overview');
  const [section, setSection] = useState('Supply');
  const [query, setQuery] = useState('');
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ORGS.filter((o) => !q || o.name.toLowerCase().includes(q) || o.id.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
      <div className="mt-10 overflow-hidden rounded-[12px] border border-[#E5E7EB] bg-white lg:mt-[64px]">
        <div className="flex">
          <aside className="hidden w-[176px] shrink-0 bg-gradient-to-b from-[#011458] to-[#001A76] p-[16px] md:block">
            <img src="/logos/c1-02.svg" alt="Rise" width="68" height="24" className="h-[22px] w-auto [filter:brightness(0)_invert(1)]" />
            <p className="mt-[20px] text-[10px] font-semibold tracking-[0.12em] text-[#CCD6F7]/70">MAIN MENU</p>
            <nav className="mt-[10px] flex flex-col gap-[2px]">
              {SECTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSection(s)}
                  aria-pressed={section === s}
                  className={`flex items-center justify-between rounded-[8px] px-[11px] py-[7px] text-left text-[13px] transition-colors [@media(pointer:coarse)]:min-h-[44px] ${section === s ? 'bg-[#022BBE] text-white' : 'text-[#CCD6F7] hover:bg-white/5'}`}
                >
                  {s}
                  {section === s && <span className="text-[11px] opacity-70">›</span>}
                </button>
              ))}
            </nav>
          </aside>
          <div className="min-w-0 flex-1 bg-[#F9FAFB]">
            <div className="flex flex-wrap items-center gap-[12px] border-b border-[#E5E7EB] bg-white px-[18px] py-[9px]">
              <span className="text-[13px] text-[#6B7280]">
                {section}
                {' '}
                <span className="px-[4px]">/</span>
                <span className="font-medium text-[#111827]">Parent Account Overview</span>
              </span>
              <span className="flex-1" />
              <span className="hidden rounded-[8px] bg-[#F3F4F6] px-[12px] py-[7px] text-[13px] text-[#9CA3AF] sm:block">Search…</span>
              <span className="flex items-center gap-[8px]">
                <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#022BBE] text-[11px] font-semibold text-white">AO</span>
                <span className="hidden text-[13px] leading-[1.2] text-[#111827] sm:block">
                  Admin XXXXXXX
                  <br />
                  <span className="text-[11px] text-[#9CA3AF]">Admin</span>
                </span>
              </span>
            </div>
            <div className="px-[18px] pt-[16px]">
              <div className="text-[20px] font-semibold tracking-[-0.01em] text-[#111827]">XXXXXXX</div>
              <p className="mt-[2px] text-[13px] text-[#6B7280]">
                {'Parent Account ID: '}
                {'PA-10001'}
              </p>
              <div className="mt-[12px] flex flex-wrap gap-[4px] border-b border-[#E5E7EB]">
                {TABS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    aria-pressed={tab === t}
                    className={`-mb-px border-b-2 px-[12px] py-[8px] text-[14px] font-medium transition-colors [@media(pointer:coarse)]:min-h-[44px] ${tab === t ? 'border-[#022BBE] text-[#022BBE]' : 'border-transparent text-[#6B7280] hover:text-[#111827]'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-[14px]">
              {tab === 'Overview' && (
                <>
                  <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
                    {KPIS.map((k) => (
                      <div key={k.label} className="rounded-[12px] border border-[#E5E7EB] bg-white p-[14px]">
                        <div className="flex items-start justify-between">
                          <span className="grid h-[30px] w-[30px] place-items-center rounded-[8px] bg-[#EEF1FC] text-[13px] text-[#022BBE]">◆</span>
                          <span className="text-[12px] font-medium text-[#059669]">
                            {'↗ '}
                            {k.delta}
                          </span>
                        </div>
                        <p className="mt-[10px] text-[10px] font-semibold tracking-[0.08em] text-[#9CA3AF]">{k.label}</p>
                        <p className="mt-[2px] text-[22px] font-semibold tracking-[-0.02em] text-[#111827]">{k.value}</p>
                        <div className="mt-[9px] flex flex-wrap gap-x-[12px] gap-y-[3px] border-t border-[#F3F4F6] pt-[8px]">
                          {k.foot.map((f) => (
                            <span key={f.label} className="text-[11px] text-[#6B7280]">
                              {f.label}
                              {' '}
                              <span className="font-semibold text-[#111827]">{f.value}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-[12px] rounded-[12px] border border-[#E5E7EB] bg-white">
                    <div className="flex flex-wrap items-center gap-[10px] p-[14px]">
                      <span className="text-[15px] font-semibold text-[#111827]">Child Organizations</span>
                      <span className="rounded-[6px] bg-[#F3F4F6] px-[7px] py-[1px] text-[12px] text-[#6B7280]">{ORGS.length}</span>
                      <span className="flex-1" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search organizations…"
                        aria-label="Search organizations"
                        className="min-w-[170px] rounded-[8px] bg-[#F3F4F6] px-[12px] py-[8px] text-[13px] text-[#111827] outline-none placeholder:text-[#9CA3AF] [@media(pointer:coarse)]:min-h-[44px]"
                      />
                      <span className="rounded-[8px] border border-[#E5E7EB] px-[12px] py-[8px] text-[13px] text-[#374151]">Bulk Edit</span>
                    </div>
                    <div data-lenis-prevent="true" className="max-h-[168px] overflow-auto">
                      <table className="w-full min-w-[780px] text-left text-[13px]">
                        <thead className="bg-[#F9FAFB] text-[11px] uppercase tracking-[0.04em] text-[#6B7280]">
                          <tr>
                            {COLUMNS.map((c) => (
                              <th key={c} className="whitespace-nowrap px-[14px] py-[8px] font-medium">
                                {c}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((o) => (
                            <tr key={o.id} className="border-t border-[#F3F4F6]">
                              <td className="whitespace-nowrap px-[14px] py-[9px] font-medium text-[#022BBE]">{o.name}</td>
                              <td className="whitespace-nowrap px-[14px] py-[9px] tabular-nums text-[#6B7280]">{o.id}</td>
                              <td className="px-[14px] py-[9px]">
                                <span className={`rounded-[6px] px-[8px] py-[2px] text-[12px] font-medium ${STATUS_TONE[o.status]}`}>
                                  {'● '}
                                  {o.status}
                                </span>
                              </td>
                              {[o.impressions, o.requests, o.fillRate].map((v, i) => (
                                <td key={i} className="whitespace-nowrap px-[14px] py-[9px] tabular-nums text-[#374151]">
                                  {v}
                                </td>
                              ))}
                              <td className="whitespace-nowrap px-[14px] py-[9px] font-semibold tabular-nums text-[#111827]">{o.revenue}</td>
                              <td className="whitespace-nowrap px-[14px] py-[9px] tabular-nums text-[#374151]">{o.cpm}</td>
                            </tr>
                          ))}
                          {rows.length === 0 && (
                            <tr>
                              <td colSpan={COLUMNS.length} className="px-[16px] py-[24px] text-center text-[#6B7280]">
                                {'Nothing matches “'}
                                {query}
                                {'”.'}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
              {tab === 'Settings' && (
                <div className="max-w-[460px] rounded-[12px] border border-[#E5E7EB] bg-white p-[20px]">
                  {SETTINGS.map((s) => (
                    <label key={s.label} className="mb-[16px] block last:mb-0">
                      <span className="block text-[12px] font-medium text-[#6B7280]">{s.label}</span>
                      <span className="mt-[6px] block rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] px-[12px] py-[9px] text-[14px] text-[#111827]">
                        {s.value}
                      </span>
                    </label>
                  ))}
                </div>
              )}
              {tab === 'Lists / Blocklists' && (
                <div className="rounded-[12px] border border-[#E5E7EB] bg-white p-[20px]">
                  <p className="rounded-[8px] bg-[#FFFBEB] px-[12px] py-[10px] text-[13px] text-[#92400E]">
                    Inherited by all child organizations. Each environment is configured separately.
                  </p>
                  <p className="mt-[14px] text-[13px] text-[#6B7280]">Domain and bundle lists are managed at child-org level only.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="border-t border-[#E5E7EB] bg-[#FFFBEB] px-[20px] py-[10px] text-[12px] leading-[1.5] text-[#92400E]">
          Account and organization names are redacted. Figures are the real design where the board is legible; an em dash means that cell is not readable in the source, not that it is empty.
        </p>
      </div>
    </div>
  );
}
