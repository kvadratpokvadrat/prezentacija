'use client';

import { Unit } from '@/data/types';
import { StatusBadge } from './StatusBadge';
import Link from 'next/link';

export function UnitModal({ unit, onClose }: { unit: Unit; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-900/50 p-4" onClick={onClose}>
      <div className="card max-h-[90vh] w-full max-w-3xl overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl">Stan {unit.label}</h3>
          <button onClick={onClose} className="text-sm text-brand-500">Zatvori</button>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <img src={unit.planImg} alt={`Tlocrt ${unit.label}`} className="h-64 w-full rounded-xl object-cover" loading="lazy" />
            <Link href={unit.pdfUrl} className="mt-3 inline-block text-sm text-brand-700 underline">Preuzmi PDF tlocrta</Link>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Sprat:</strong> {unit.floor}</p>
            <p><strong>Površina:</strong> {unit.area} m²</p>
            <p><strong>Sobe:</strong> {unit.rooms}</p>
            <p><strong>Orijentacija:</strong> {unit.orientation}</p>
            <p><strong>Cena:</strong> {unit.price}</p>
            <StatusBadge status={unit.status} />
            <Link href={`/kontakt?unit=${unit.label}`} className="mt-4 inline-block rounded-full bg-brand-900 px-4 py-2 text-white transition hover:bg-brand-700">Pošalji upit za ovaj stan</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
