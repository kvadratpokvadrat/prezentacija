'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { units } from '@/data';
import { UnitStatus } from '@/data/types';
import { StatusBadge } from './StatusBadge';
import { UnitModal } from './UnitModal';

export function UnitsExplorer() {
  const [view, setView] = useState<'table' | 'cards'>('table');
  const [status, setStatus] = useState<'all' | UnitStatus>('all');
  const [floor, setFloor] = useState<string>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => units.filter((u) => (status === 'all' || u.status === status) && (floor === 'all' || u.floor === Number(floor))), [status, floor]);
  const selected = units.find((u) => u.id === selectedId);

  return (
    <section className="section space-y-6">
      <div className="card flex flex-wrap items-center gap-3">
        <button className={`rounded-full px-4 py-2 ${view === 'table' ? 'bg-brand-900 text-white' : 'border'}`} onClick={() => setView('table')}>Tabela</button>
        <button className={`rounded-full px-4 py-2 ${view === 'cards' ? 'bg-brand-900 text-white' : 'border'}`} onClick={() => setView('cards')}>Kartice</button>
        <select className="rounded-xl border p-2" onChange={(e) => setFloor(e.target.value)}><option value="all">Svi spratovi</option>{[...new Set(units.map((u) => u.floor))].map((f) => <option key={f} value={f}>{f}. sprat</option>)}</select>
        <select className="rounded-xl border p-2" onChange={(e) => setStatus(e.target.value as 'all' | UnitStatus)}><option value="all">Svi statusi</option><option value="available">Dostupan</option><option value="reserved">Rezervisan</option><option value="sold">Prodat</option></select>
      </div>

      {view === 'table' ? (
        <div className="card overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead><tr className="border-b"><th>Stan</th><th>m²</th><th>Sobe</th><th>Sprat</th><th>Status</th><th /></tr></thead>
            <tbody>{filtered.map((u) => <tr key={u.id} className="border-b"><td>{u.label}</td><td>{u.area}</td><td>{u.rooms}</td><td>{u.floor}</td><td><StatusBadge status={u.status} /></td><td className="space-x-3"><button onClick={() => setSelectedId(u.id)} className="text-brand-700">Detalji</button><Link href={`/interaktivno?unit=${u.label}`} className="text-brand-700">Prikaži na zgradi</Link></td></tr>)}</tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((u) => (
            <article key={u.id} className="card">
              <p className="text-lg font-medium">{u.label}</p>
              <p className="text-sm text-brand-500">{u.area} m² • {u.rooms} sobe • {u.floor}. sprat</p>
              <div className="mt-3"><StatusBadge status={u.status} /></div>
              <button onClick={() => setSelectedId(u.id)} className="mt-4 rounded-full bg-brand-900 px-4 py-2 text-sm text-white">Detalji</button>
            </article>
          ))}
        </div>
      )}
      {selected && <UnitModal unit={selected} onClose={() => setSelectedId(null)} />}
    </section>
  );
}
