'use client';

import { useSearchParams } from 'next/navigation';
import { units } from '@/data';

export function ContactForm() {
  const searchParams = useSearchParams();
  const selected = searchParams.get('unit') ?? '';

  return (
    <form className="card grid gap-4 md:grid-cols-2">
      <input className="rounded-xl border border-brand-100 p-3" placeholder="Ime i prezime" />
      <input className="rounded-xl border border-brand-100 p-3" placeholder="Telefon" />
      <input className="rounded-xl border border-brand-100 p-3 md:col-span-2" placeholder="Email" type="email" />
      <select defaultValue={selected} className="rounded-xl border border-brand-100 p-3 md:col-span-2">
        <option value="">Zanima me stan</option>
        {units.map((unit) => <option key={unit.id} value={unit.label}>{unit.label}</option>)}
      </select>
      <textarea className="min-h-28 rounded-xl border border-brand-100 p-3 md:col-span-2" placeholder="Poruka" />
      <label className="text-sm text-brand-500 md:col-span-2"><input type="checkbox" className="mr-2" />Saglasan sam sa obradom podataka (GDPR)</label>
      <button className="rounded-full bg-brand-900 px-6 py-3 text-white md:col-span-2">Pošalji upit</button>
    </form>
  );
}
