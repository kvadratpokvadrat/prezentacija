'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { units } from '@/data';
import { Unit, UnitStatus } from '@/data/types';
import { StatusBadge } from './StatusBadge';
import { UnitModal } from './UnitModal';

export function InteractiveBuilding() {
  const params = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'all' | UnitStatus>('all');
  const [floor, setFloor] = useState<string>('all');
  const [rooms, setRooms] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const unitParam = params.get('unit');
    if (!unitParam) return;
    const match = units.find((u) => u.label === unitParam);
    if (match) setSelectedUnit(match);
  }, [params]);

  const filtered = useMemo(() => units.filter((u) => {
    if (status !== 'all' && u.status !== status) return false;
    if (floor !== 'all' && u.floor !== Number(floor)) return false;
    if (rooms !== 'all' && u.rooms !== Number(rooms)) return false;
    if (query && !u.label.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  }), [status, floor, rooms, query]);

  const bySvg = Object.fromEntries(filtered.map((unit) => [unit.svgId, unit]));

  const selectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    router.replace(`/interaktivno?unit=${unit.label}`);
  };

  return (
    <section className="section grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="card overflow-hidden">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-brand-500">Zoom / pan podržan (točkić + drag, pinch na mobilnom browseru).</p>
          <div className="flex gap-2">
            <button className="rounded-full border px-3 py-1" onClick={() => setScale((s) => Math.max(0.8, s - 0.1))}>-</button>
            <button className="rounded-full border px-3 py-1" onClick={() => setScale((s) => Math.min(1.8, s + 0.1))}>+</button>
          </div>
        </div>
        <div className="relative overflow-auto rounded-xl border border-brand-100 bg-brand-900/95 p-2">
          <div className="min-w-[720px] origin-center transition" style={{ transform: `scale(${scale})` }}>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80" alt="Fasada" className="h-[540px] w-full rounded-xl object-cover opacity-60" />
            <svg viewBox="0 0 800 540" className="absolute inset-2 h-[540px] w-[calc(100%-1rem)]">
              {units.map((unit, index) => (
                <polygon
                  key={unit.id}
                  id={unit.svgId}
                  points={`${80 + index * 105},80 ${150 + index * 105},85 ${135 + index * 105},200 ${70 + index * 105},195`}
                  className={`${bySvg[unit.svgId] ? 'fill-accent/45 hover:fill-accent/80 cursor-pointer' : 'fill-brand-500/20'} transition-all duration-200`}
                  onClick={() => bySvg[unit.svgId] && selectUnit(bySvg[unit.svgId])}
                >
                  <title>{`${unit.label} • ${unit.area} m² • ${unit.rooms} • ${unit.status}`}</title>
                </polygon>
              ))}
            </svg>
          </div>
        </div>
      </div>
      <aside className="card space-y-4">
        <h2 className="font-display text-2xl">Filteri stanova</h2>
        <input className="w-full rounded-xl border border-brand-100 p-3" placeholder="Pretraga po šifri" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="w-full rounded-xl border border-brand-100 p-3" onChange={(e) => setFloor(e.target.value)}>
          <option value="all">Svi spratovi</option>
          {[...new Set(units.map((u) => u.floor))].map((value) => <option key={value} value={value}>{value}. sprat</option>)}
        </select>
        <select className="w-full rounded-xl border border-brand-100 p-3" onChange={(e) => setStatus(e.target.value as 'all' | UnitStatus)}>
          <option value="all">Svi statusi</option>
          <option value="available">Dostupan</option>
          <option value="reserved">Rezervisan</option>
          <option value="sold">Prodat</option>
        </select>
        <select className="w-full rounded-xl border border-brand-100 p-3" onChange={(e) => setRooms(e.target.value)}>
          <option value="all">Sve sobe</option>
          {[...new Set(units.map((u) => u.rooms))].map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Legenda statusa</p>
          <div className="flex gap-2"><StatusBadge status="available" /><StatusBadge status="reserved" /><StatusBadge status="sold" /></div>
        </div>
        <a href="/stanovi" className="inline-block rounded-full bg-brand-900 px-4 py-2 text-white">Pogledaj sve stanove</a>
      </aside>
      {selectedUnit && <UnitModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} />}
    </section>
  );
}
